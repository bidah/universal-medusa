import { Customer } from '@medusajs/medusa'
import React from 'react'
import { View, Text } from 'app/design'

import Detail from '../detail-container'
import EditEmailModal from './edit-email-modal'
import EditPasswordModal from './edit-password-modal'

type LoginDetailsProps = {
  customer: Omit<Customer, 'password_hash'>
}

const LoginDetails: React.FC<LoginDetailsProps> = ({ customer }) => {
  return (
    <Detail title="Login">
      <View className="flex flex-col gap-y-4">
        <Detail.SubDetail title="Email">
          <Text>{customer.email}</Text>
          <EditEmailModal customer={customer} />
        </Detail.SubDetail>
        <Detail.SubDetail title="Password">
          <Text>•••••••••••</Text>
          <EditPasswordModal customer={customer} />
        </Detail.SubDetail>
      </View>
    </Detail>
  )
}

export default LoginDetails
