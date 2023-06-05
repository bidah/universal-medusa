import { AddressesScreen } from 'app/modules/account/addresses-screen'
import AccountLayout from 'app/modules/account/templates/account-layout'
import Head from 'app/modules/common/components/head'
import React from 'react'

const AddressesPage = () => {
  return (
    <>
      <Head title="Address" description="address" />
      <AccountLayout>
        <AddressesScreen />
      </AccountLayout>
    </>
  )
}
export default AddressesPage
