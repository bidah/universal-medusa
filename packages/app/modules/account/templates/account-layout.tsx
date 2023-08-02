import { useAccount } from 'app/lib/context/account-context'
import UnderlineLink from 'app/modules/common/components/underline-link'
import Spinner from 'app/modules/common/icons/spinner'
import React, { useEffect } from 'react'
import { View, Text } from 'app/design'

import AccountNav from '../components/account-nav'
import {
  textSmallRegular,
  textXlSemi,
} from '../../../design/tailwind/custom-css-classes'

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const { customer, retrievingCustomer, checkSession } = useAccount()

  useEffect(() => {
    checkSession()
  }, [checkSession])

  if (retrievingCustomer || !customer) {
    return (
      <View className="flex h-full min-h-[640px] w-full items-center justify-center text-gray-900">
        <Spinner size={36} />
      </View>
    )
  }

  return (
    <View className="small:py-12 small:bg-gray-50 ios:bg-white flex-1">
      <View className="mx-auto flex h-full max-w-5xl flex-1 flex-col bg-white">
        <View className="small:grid-cols-[240px_1fr] small:px-8 small:py-12 grid grid-cols-1 py-6 ">
          <View>
            <AccountNav />
          </View>
          <View className="flex-1">{children}</View>
        </View>
        <View className="small:flex-row small:border-t flex flex-col items-end justify-between gap-x-8 border-gray-200 px-8 py-12">
          <View>
            <Text className={`${textXlSemi}  mb-4 `}>Got questions?</Text>
            <Text className={`${textSmallRegular}`}>
              You can find frequently asked questions and answers on our
              customer service page.
            </Text>
          </View>
          <View>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </View>
        </View>
      </View>
    </View>
  )
}

export default AccountLayout
