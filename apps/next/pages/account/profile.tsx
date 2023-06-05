import { ProfileScreen } from 'app/modules/account/profile-screen'
import AccountLayout from 'app/modules/account/templates/account-layout'
import Head from 'app/modules/common/components/head'
import { AddressesScreen } from 'app/modules/account/addresses-screen'
import React from 'react'

const ProfilePage = () => {
  return (
    <>
      <Head title="Address" description="address" />
      <AccountLayout>
        <ProfileScreen />
      </AccountLayout>
    </>
  )
}
export default ProfilePage
