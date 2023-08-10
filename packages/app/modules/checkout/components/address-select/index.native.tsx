import { useCheckout } from 'app/lib/context/checkout-context'
import { Address } from '@medusajs/medusa'
import Radio from 'app/modules/common/components/radio'
import ChevronDown from 'app/modules/common/icons/chevron-down'
import clsx from 'clsx'
import { isEqual, omit } from 'lodash'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { useWatch } from 'react-hook-form'
import { Pressable, Text, View } from '../../../../design'
import Button from '../../../common/components/button'
import { useRef } from 'react/index'
import BottomSheet, {
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import { StyleSheet } from 'react-native'
import { FullWindowOverlay } from 'react-native-screens'

type AddressSelectProps = {
  addresses: Address[]
}

const AddressSelect = ({ addresses }: AddressSelectProps) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)

  const { control, setSavedAddress } = useCheckout()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const handleSelect = (id: string) => {
    const savedAddress = addresses.find((a) => a.id === id)
    if (savedAddress) {
      setSavedAddress(savedAddress)
    }
    setSelected(id)
    setTimeout(() => {
      bottomSheetRef.current?.close()
    }, 1000)
  }

  const currentShippingAddress = useWatch({
    control,
    name: 'shipping_address',
  })

  const selectedAddress = useMemo(() => {
    for (const address of addresses) {
      const checkEquality = isEqual(
        omit(address, [
          'id',
          'created_at',
          'updated_at',
          'country',
          'deleted_at',
          'metadata',
          'customer_id',
          'country_code',
        ]),
        omit(currentShippingAddress, ['country_code'])
      )

      if (checkEquality) {
        return address
      }
    }
  }, [currentShippingAddress, addresses])

  const snapPoints = useMemo(() => ['65%', '65%'], [])
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])

  return (
    <View className="relative z-40">
      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: 'white' }}
        backgroundComponent={(props) => (
          <View {...props} className="border-t-[1px]" />
        )}
      >
        <BottomSheetScrollView>
          <View className="flex-column flex">
            {addresses.map((address) => {
              return (
                <Pressable
                  onPress={() => handleSelect(address.id)}
                  key={address.id}
                  className="relative cursor-default select-none py-4 pl-6 pr-10 hover:bg-gray-50"
                >
                  <View className="flex flex-row items-start gap-x-4">
                    <Radio checked={selected === address.id} />
                    <View className="flex flex-col">
                      <Text className="text-base-semi text-left">
                        {address.first_name} {address.last_name}
                      </Text>
                      {address.company && (
                        <Text className="text-small-regular text-gray-700">
                          {address.company}
                        </Text>
                      )}
                      <View className="text-base-regular mt-2 flex flex-col text-left">
                        <Text>
                          {address.address_1}
                          {address.address_2 && (
                            <Text>, {address.address_2}</Text>
                          )}
                        </Text>
                        <Text>
                          {address.postal_code}, {address.city}
                        </Text>
                        <Text>
                          {address.province && `${address.province}, `}
                          {address.country_code?.toUpperCase()}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              )
            })}
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>

      <Button
        style={
          'border-top-0 z-20 border border-gray-200 bg-white sm:text-sm ph-2 px-4 pb-1'
        }
        onPress={handlePresentModalPress}
      >
        <View className="flex min-w-full flex-row items-center justify-between ">
          <Text className="between block truncate text-black">
            {selectedAddress ? selectedAddress.address_1 : 'Choose an address'}
          </Text>
          <ChevronDown size={16} />
        </View>
      </Button>
    </View>
  )
}

export default AddressSelect
