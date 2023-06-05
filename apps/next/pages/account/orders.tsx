import { ProfileScreen } from 'app/modules/account/profile-screen'
import AccountLayout from 'app/modules/account/templates/account-layout'
import Head from 'app/modules/common/components/head'
import { AddressesScreen } from 'app/modules/account/addresses-screen'
import React from 'react'
import { OrdersScreen } from 'app/modules/account/orders-screen'

const OrdersPage = () => {
  return (
    <>
      <Head title="Orders" description="Overview of your previous orders." />
      <AccountLayout>
        <OrdersScreen />
      </AccountLayout>
    </>
  )
}
export default OrdersPage
