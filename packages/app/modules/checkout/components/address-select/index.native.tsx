import { Listbox, Transition } from '@headlessui/react'
import { useCheckout } from 'app/lib/context/checkout-context'
import { Address } from '@medusajs/medusa'
import Radio from 'app/modules/common/components/radio'
import ChevronDown from 'app/modules/common/icons/chevron-down'
import clsx from 'clsx'
import { isEqual, omit } from 'lodash'
import { Fragment, useMemo, useState } from 'react'
import { useWatch } from 'react-hook-form'
import { Text, View } from '../../../../design'
import Button from '../../../common/components/button'

type AddressSelectProps = {
  addresses: Address[]
}

const AddressSelect = ({ addresses }: AddressSelectProps) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)

  const { control, setSavedAddress } = useCheckout()

  const handleSelect = (id: string) => {
    const savedAddress = addresses.find((a) => a.id === id)

    if (savedAddress) {
      setSavedAddress(savedAddress)
    }

    setSelected(id)
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
        ]),
        currentShippingAddress
      )

      if (checkEquality) {
        return address
      }
    }
  }, [currentShippingAddress, addresses])

  return (
    // <Listbox onChange={handleSelect} value={selected}>
    <View className="relative">
      <Button>
        {/*{({ open }) => (*/}
        <>
          <Text className="block truncate">
            {selectedAddress ? selectedAddress.address_1 : 'Choose an address'}
          </Text>
          <ChevronDown
            size={16}
            // className={clsx({ 'rotate-180 transform': open })}
            // className={clsx({ 'rotate-180 transform': open })}
          />
        </>
        {/*)}*/}
      </Button>
      {/*<Listbox.Options className="text-small-regular border-top-0 absolute z-20 max-h-60 w-full overflow-auto border border-gray-200 bg-white focus:outline-none sm:text-sm">*/}
      {/*  {addresses.map((address) => {*/}
      {/*    return (*/}
      {/*      <Listbox.Option*/}
      {/*        key={address.id}*/}
      {/*        value={address.id}*/}
      {/*        className="relative cursor-default select-none py-4 pl-6 pr-10 hover:bg-gray-50"*/}
      {/*      >*/}
      {/*        <View className="flex items-start gap-x-4">*/}
      {/*          <Radio checked={selected === address.id} />*/}
      {/*          <View className="flex flex-col">*/}
      {/*            <Text className="text-base-semi text-left">*/}
      {/*              {address.first_name} {address.last_name}*/}
      {/*            </Text>*/}
      {/*            {address.company && (*/}
      {/*              <Text className="text-small-regular text-gray-700">*/}
      {/*                {address.company}*/}
      {/*              </Text>*/}
      {/*            )}*/}
      {/*            <View className="text-base-regular mt-2 flex flex-col text-left">*/}
      {/*              <Text>*/}
      {/*                {address.address_1}*/}
      {/*                {address.address_2 && (*/}
      {/*                  <Text>, {address.address_2}</Text>*/}
      {/*                )}*/}
      {/*              </Text>*/}
      {/*              <Text>*/}
      {/*                {address.postal_code}, {address.city}*/}
      {/*              </Text>*/}
      {/*              <Text>*/}
      {/*                {address.province && `${address.province}, `}*/}
      {/*                {address.country_code?.toUpperCase()}*/}
      {/*              </Text>*/}
      {/*            </View>*/}
      {/*          </View>*/}
      {/*        </View>*/}
      {/*      </Listbox.Option>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</Listbox.Options>*/}
    </View>
    // </Listbox>
  )
}

export default AddressSelect
