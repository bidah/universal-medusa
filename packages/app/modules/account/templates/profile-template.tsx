import { useAccount } from 'app/lib/context/account-context'
import ProfileEmail from 'app/modules/account/components/profile-email'
import ProfileName from 'app/modules/account/components/profile-name'
import ProfilePassword from 'app/modules/account/components/profile-password'
import ProfileBillingAddress from '../components/profile-billing-address'
import ProfilePhone from '../components/profile-phone'
import { View, Pressable, Text, Stack } from 'app/design'
import { text2xlSemi } from '../../../design/tailwind/custom-css-classes'

const ProfileTemplate = () => {
  const { customer, retrievingCustomer, refetchCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <View className="w-full p-2">
      <View className="mb-8 flex flex-col gap-y-4">
        <Text className={`${text2xlSemi} ios:hidden`}>Profile</Text>
        <Text className="text-base-regular">
          View and update your profile information, including your name, email,
          and phone number. You can also update your billing address, or change
          your password.
        </Text>
      </View>
      <Stack space={4} className="">
        <ProfileName customer={customer} />
        <Divider />
        <ProfileEmail customer={customer} />
        <Divider />
        <ProfilePhone customer={customer} />
        <Divider />
        <ProfilePassword customer={customer} />
        <Divider />
        <ProfileBillingAddress customer={customer} />
      </Stack>
    </View>
  )
}

const Divider = () => {
  return <View className="h-px w-full bg-gray-200" />
}

export default ProfileTemplate
