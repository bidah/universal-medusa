import { RadioGroup } from '@headlessui/react'
import { ErrorMessage } from '@hookform/error-message'
import { useCheckout } from 'app/lib/context/checkout-context'
import { Cart } from '@medusajs/medusa'
import Radio from 'app/modules/common/components/radio'
import Spinner from 'app/modules/common/icons/spinner'
import clsx from 'clsx'
import { formatAmount, useCart, useCartShippingOptions } from 'medusa-react'
import React, { useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import StepContainer from '../step-container'
import {
  textBaseRegular,
  textSmallRegular,
} from '../../../../design/tailwind/custom-css-classes'
import { View, Text } from 'app/design'
import { Pressable } from 'react-native'

type ShippingOption = {
  value: string
  label: string
  price: string
}

type ShippingProps = {
  cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>
}

type ShippingFormProps = {
  soId: string
}

const Shipping: React.FC<ShippingProps> = ({ cart }) => {
  const { addShippingMethod, setCart } = useCart()
  const {
    control,
    setError,
    formState: { errors },
  } = useForm<ShippingFormProps>({
    defaultValues: {
      soId: cart.shipping_methods?.[0]?.shipping_option_id,
    },
  })

  // Fetch shipping options
  const { shipping_options, refetch } = useCartShippingOptions(cart.id, {
    enabled: !!cart.id,
  })

  // Any time the cart changes we need to ensure that we are displaying valid shipping options
  useEffect(() => {
    const refetchShipping = async () => {
      await refetch()
    }

    refetchShipping()
  }, [cart, refetch])

  const submitShippingOption = (soId: string) => {
    addShippingMethod.mutate(
      { option_id: soId },
      {
        onSuccess: ({ cart }) => setCart(cart),
        onError: () =>
          setError(
            'soId',
            {
              type: 'validate',
              message:
                'An error occurred while adding shipping. Please try again.',
            },
            { shouldFocus: true }
          ),
      }
    )
  }

  const handleChange = (value: string, fn: (value: string) => void) => {
    submitShippingOption(value)
    fn(value)
  }

  // Memoized shipping method options
  const shippingMethods: ShippingOption[] = useMemo(() => {
    if (shipping_options && cart?.region) {
      return shipping_options?.map((option) => ({
        value: option.id,
        label: option.name,
        price: formatAmount({
          amount: option.amount || 0,
          region: cart.region,
        }),
      }))
    }

    return []
  }, [shipping_options, cart])

  const {
    sameAsBilling: { state: sameBilling },
  } = useCheckout()

  return (
    <StepContainer
      index={sameBilling ? 2 : 3}
      title="Delivery"
      closedState={
        <Text className={`${textSmallRegular} px-8 pb-8`}>
          Enter your address to see available delivery options.
        </Text>
      }
    >
      <Controller
        name="soId"
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <View>
              <RadioGroup value={value} as={View}>
                {shippingMethods && shippingMethods.length ? (
                  shippingMethods.map((option) => {
                    return (
                      <Pressable
                        onPress={() => handleChange(option.value, onChange)}
                      >
                        <View
                          key={option.value}
                          value={option.value}
                          className={clsx(
                            'text-small-regular flex cursor-pointer flex-row items-center justify-between border-b border-gray-200 py-4 px-8 last:border-b-0',
                            {
                              'bg-gray-50': option.value === value,
                            }
                          )}
                        >
                          <View className="flex flex-row items-center gap-x-4">
                            <Radio checked={value === option.value} />
                            <Text className={`${textBaseRegular}`}>
                              {option.label}
                            </Text>
                          </View>
                          <Text className="justify-self-end text-gray-700">
                            {option.price}
                          </Text>
                        </View>
                      </Pressable>
                    )
                  })
                ) : (
                  <View className="flex flex-col items-center justify-center px-4 py-8 text-gray-900">
                    <Spinner />
                  </View>
                )}
              </RadioGroup>
              <ErrorMessage
                errors={errors}
                name="soId"
                render={({ message }) => {
                  return (
                    <View className="pt-2">
                      <Text className={`${textSmallRegular} text-rose-500`}>
                        {message}
                      </Text>
                    </View>
                  )
                }}
              />
            </View>
          )
        }}
      />
    </StepContainer>
  )
}

export default Shipping
