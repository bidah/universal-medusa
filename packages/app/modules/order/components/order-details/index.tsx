import { Order } from '@medusajs/medusa'
import { View, Pressable, Text } from 'app/design'
import {
  text2xlSemi,
  textSmallRegular,
} from '../../../../design/tailwind/custom-css-classes'

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const items = order.items.reduce((acc, i) => acc + i.quantity, 0)

  const formatStatus = (str: string) => {
    const formatted = str.split('_').join(' ')

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <View className="large:py-10 ios:mb-2 border-b border-gray-200 px-2">
      <Text className="text-small-regular uppercase text-gray-700">
        Thank you, your order was successfully placed
      </Text>
      <Text className={`mt-2 uppercase ${text2xlSemi}`}>
        #{order.display_id}
      </Text>
      <Text>{order.id.split('order_')[1]}</Text>
      <View
        className={`flex flex-row items-center text-gray-700 ${textSmallRegular} ios:mb-6 mt-4 gap-x-4 `}
      >
        <Text>{new Date(order.created_at).toDateString()}</Text>
        <Text>{`${items} ${items !== 1 ? 'items' : 'item'}`}</Text>
        {showStatus && (
          <>
            <Text>{formatStatus(order.fulfillment_status)}</Text>
            <Text>{formatStatus(order.payment_status)}</Text>
          </>
        )}
      </View>
    </View>
  )
}

export default OrderDetails
