import { AccountScreen } from 'app/modules/account/account-screen'
import { NextPageWithLayout } from 'app/types/global'
import Head from 'app/modules/common/components/head'
import AccountLayout from 'app/modules/account/templates/account-layout'
import React from 'react'
import { View } from 'app/design'

const AccountPage = () => {
  return (
    <>
      <Head title="Account" description="account" />
      <AccountLayout>
        <AccountScreen />
      </AccountLayout>
    </>
  )
}

export default AccountPage
