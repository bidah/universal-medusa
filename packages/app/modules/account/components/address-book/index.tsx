import { Customer } from '@medusajs/medusa'
import React from 'react'
import { View, Text } from 'app/design'

import AddAddress from '../address-card/add-address'
import EditAddress from '../address-card/edit-address-modal'

type AddressBookProps = {
  customer: Omit<Customer, 'password_hash'>
}

const AddressBook: React.FC<AddressBookProps> = ({ customer }) => {
  return (
    <View className="w-full">
      <View className="mt-4 grid flex-1 grid-cols-1 gap-4 lg:grid-cols-2">
        <AddAddress />
        {customer.shipping_addresses.map((address) => {
          return <EditAddress address={address} key={address.id} />
        })}
      </View>
    </View>
  )
}

export default AddressBook
