import OrderOverview from '../components/order-overview'
import { View, Text } from 'app/design'
import {
  text2xlSemi,
  textBaseRegular,
} from '../../../design/tailwind/custom-css-classes'

const OrdersTemplate = () => {
  return (
    <View className="w-full">
      <View className="mx-2 mb-8 flex flex-col gap-y-4">
        <Text className={`${text2xlSemi} ios:hidden `}>Orders</Text>
        <Text className={`${textBaseRegular} ios:pt-2`}>
          View your previous orders and their status. You can also create
          returns or exchanges for your orders if needed.
        </Text>
      </View>
      <View>
        <OrderOverview />
      </View>
    </View>
  )
}

export default OrdersTemplate
