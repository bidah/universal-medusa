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
    <View className="web:gap-4 mx-2 mt-4 grid grid-cols-1 lg:grid-cols-2">
      <AddAddress />
      {customer.shipping_addresses.map((address) => {
        return <EditAddress address={address} key={address.id} />
      })}
    </View>
  )
}

export default AddressBook
