import { medusaClient } from 'app/lib/config'
import { handleError } from 'app/lib/util/handle-error'
import { Region } from '@medusajs/medusa'
import {
  useCart,
  useCreateLineItem,
  useDeleteLineItem,
  useUpdateLineItem,
} from 'medusa-react'
import React, { useEffect, useState } from 'react'
import { useCartDropdown } from './cart-dropdown-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'
import { toast } from '@backpackapp-io/react-native-toast'

interface VariantInfoProps {
  variantId: string
  quantity: number
}

interface LineInfoProps {
  lineId: string
  quantity: number
}

interface StoreContext {
  countryCode: string | undefined
  setRegion: (regionId: string, countryCode: string) => void
  addItem: (item: VariantInfoProps) => void
  updateItem: (item: LineInfoProps) => void
  deleteItem: (lineId: string) => void
  resetCart: () => void
}

const StoreContext = React.createContext<StoreContext | null>(null)

export const useStore = () => {
  const context = React.useContext(StoreContext)
  if (context === null) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}

interface StoreProps {
  children: React.ReactNode
}

// const IS_SERVER = typeof window === 'undefined'
const IS_SERVER = !['web', 'ios', 'android'].includes(Platform.OS)
const CART_KEY = 'medusa_cart_id'
const REGION_KEY = 'medusa_region'

export const StoreProvider = ({ children }: StoreProps) => {
  const { cart, setCart, createCart, updateCart } = useCart()
  const [countryCode, setCountryCode] = useState<string | undefined>(undefined)
  const { timedOpen } = useCartDropdown()
  const addLineItem = useCreateLineItem(cart?.id!)
  const removeLineItem = useDeleteLineItem(cart?.id!)
  const adjustLineItem = useUpdateLineItem(cart?.id!)

  const storeRegion = async (regionId: string, countryCode: string) => {
    if (!IS_SERVER) {
      await AsyncStorage.setItem(
        REGION_KEY,
        JSON.stringify({ regionId, countryCode })
      )

      setCountryCode(countryCode)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (!IS_SERVER) {
        const storedRegion = await AsyncStorage.getItem(REGION_KEY)
        if (storedRegion) {
          const { countryCode } = JSON.parse(storedRegion)
          setCountryCode(countryCode)
        }
      }
    })()
  }, [])

  const getRegion = async () => {
    if (!IS_SERVER) {
      const region = await AsyncStorage.getItem(REGION_KEY)
      if (region) {
        return JSON.parse(region) as { regionId: string; countryCode: string }
      }
    }
    return Promise.resolve(null)
  }

  const setRegion = async (regionId: string, countryCode: string) => {
    await updateCart.mutateAsync(
      {
        region_id: regionId,
      },
      {
        onSuccess: async ({ cart }) => {
          setCart(cart)
          await storeCart(cart.id)
          await storeRegion(regionId, countryCode)
        },
        onError: (error) => {
          if (process.env.NODE_ENV === 'development') {
            console.error(error)
          }
        },
      }
    )
  }

  const ensureRegion = async (region: Region, countryCode?: string | null) => {
    if (!IS_SERVER) {
      const { regionId, countryCode: defaultCountryCode } =
        (await getRegion()) || {
          regionId: region.id,
          countryCode: region.countries[0].iso_2,
        }

      const finalCountryCode = countryCode || defaultCountryCode

      if (regionId !== region.id) {
        await setRegion(region.id, finalCountryCode)
      }

      await storeRegion(region.id, finalCountryCode)
      setCountryCode(finalCountryCode)
    }
  }

  const storeCart = async (id: string) => {
    if (!IS_SERVER) {
      await AsyncStorage.setItem(CART_KEY, id)
    }
  }

  const getCart = async () => {
    if (!IS_SERVER) {
      return await AsyncStorage.getItem(CART_KEY)
    }
    return Promise.resolve(null)
  }

  const deleteCart = async () => {
    if (!IS_SERVER) {
      await AsyncStorage.removeItem(CART_KEY)
    }
  }

  const deleteRegion = async () => {
    if (!IS_SERVER) {
      await AsyncStorage.removeItem(REGION_KEY)
    }
  }

  const createNewCart = async (regionId?: string) => {
    console.log('on create new cart')
    console.log('regionId', regionId)
    await createCart.mutateAsync(
      { region_id: regionId },
      {
        onSuccess: async ({ cart }) => {
          setCart(cart)
          await storeCart(cart.id)
          await ensureRegion(cart.region, cart.shipping_address?.country_code)
        },
        onError: (error) => {
          if (process.env.NODE_ENV === 'development') {
            console.error(error)
          }
        },
      }
    )
  }

  const resetCart = async () => {
    await deleteCart()

    const savedRegion = await getRegion()

    createCart.mutate(
      {
        region_id: savedRegion?.regionId,
      },
      {
        onSuccess: async ({ cart }) => {
          setCart(cart)
          await storeCart(cart.id)
          await ensureRegion(cart.region, cart.shipping_address?.country_code)
        },
        onError: (error) => {
          if (process.env.NODE_ENV === 'development') {
            console.error(error)
          }
        },
      }
    )
  }

  useEffect(() => {
    const ensureCart = async () => {
      const cartId = await getCart()
      const region = await getRegion()
      console.log('after cartid and region', cartId, region)

      if (cartId) {
        const cartRes = await medusaClient.carts
          .retrieve(cartId)
          .then(({ cart }) => {
            return cart
          })
          .catch(async (_) => {
            return null
          })

        if (!cartRes || cartRes.completed_at) {
          await deleteCart()
          await deleteRegion()
          await createNewCart()
          return
        }

        setCart(cartRes)
        await ensureRegion(cartRes.region)
      } else {
        await createNewCart(region?.regionId)
      }
    }

    if (!IS_SERVER && !cart?.id) {
      ensureCart()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addItem = ({
    variantId,
    quantity,
  }: {
    variantId: string
    quantity: number
  }) => {
    addLineItem.mutate(
      {
        variant_id: variantId,
        quantity: quantity,
      },
      {
        onSuccess: async ({ cart }) => {
          setCart(cart)
          await storeCart(cart.id)
          timedOpen()
          toast.success('Item added to cart')
        },
        onError: (error) => {
          toast.error('Error while adding item to cart')
          handleError(error)
        },
      }
    )
  }

  const deleteItem = (lineId: string) => {
    removeLineItem.mutate(
      {
        lineId,
      },
      {
        onSuccess: async ({ cart }) => {
          setCart(cart)
          await storeCart(cart.id)
        },
        onError: (error) => {
          handleError(error)
        },
      }
    )
  }

  const updateItem = ({
    lineId,
    quantity,
  }: {
    lineId: string
    quantity: number
  }) => {
    adjustLineItem.mutate(
      {
        lineId,
        quantity,
      },
      {
        onSuccess: async ({ cart }) => {
          setCart(cart)
          await storeCart(cart.id)
        },
        onError: (error) => {
          handleError(error)
        },
      }
    )
  }

  return (
    <StoreContext.Provider
      value={{
        countryCode,
        setRegion,
        addItem,
        deleteItem,
        updateItem,
        resetCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
