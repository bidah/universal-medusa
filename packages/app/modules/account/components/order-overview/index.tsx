import Button from 'app/modules/common/components/button'
import Spinner from 'app/modules/common/icons/spinner'
import { useCustomerOrders } from 'medusa-react'
import OrderCard from '../order-card'
import { Text, View, Link } from 'app/design'
import {
  textBaseRegular,
  textLargeSemi,
} from '../../../../design/tailwind/custom-css-classes'
import { useRouter } from 'solito/router'

const OrderOverview = () => {
  const router = useRouter()
  const { orders, isLoading } = useCustomerOrders()

  if (isLoading) {
    return (
      <View className="flex w-full justify-center pt-12 text-gray-900">
        <Spinner size={36} />
      </View>
    )
  }

  if (orders?.length) {
    return (
      <View className="flex w-full flex-col gap-y-8 px-2">
        {orders.map((o) => (
          <View
            key={o.id}
            className="border-b border-gray-200 pb-6 last:border-none last:pb-0"
          >
            <OrderCard order={o} />
          </View>
        ))}
      </View>
    )
  }

  return (
    <View className="flex w-full flex-col items-center gap-y-4">
      <Text className={`${textLargeSemi}`}>Nothing to see here</Text>
      <Text className={`${textBaseRegular}`}>
        You don&apos;t have any orders yet, let us change that {':)'}
      </Text>
      <View className="mt-4">
        <Button onPress={() => router.push('/')}>Continue shopping</Button>
      </View>
    </View>
  )
}

export default OrderOverview
