import { useAccount } from 'app/lib/context/account-context'
import AddressBook from '../components/address-book'
import { View, Pressable, Text } from 'app/design'
import {
  text2xlSemi,
  textBaseRegular,
} from 'app/design/tailwind/custom-css-classes'

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <View className="mb-28 w-full">
      <View className="mx-2 mb-8 flex flex-col gap-y-4">
        <Text className={`${text2xlSemi} ios:hidden`}>Shipping Addresses</Text>
        <Text className={`{$textBaseRegular} ios:pt-2`}>
          View and update your shipping addresses, you can add as many as you
          like. Saving your addresses will make them available during checkout.
        </Text>
      </View>
      <AddressBook customer={customer} />
    </View>
  )
}

export default AddressesTemplate
