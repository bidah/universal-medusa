import { Order } from "@medusajs/medusa"
import { formatAmount } from "medusa-react"
import {View, Pressable, Text} from 'app/design'
import {textBaseRegular, textBaseSemi, textSmallRegular} from "../../../../design/tailwind/custom-css-classes";


type OrderSummaryProps = {
  order: Order
}

const OrderSummary = ({ order }: OrderSummaryProps) => {
  const getAmount = (amount?: number | null) => {
    if (!amount) {
      return
    }

    return formatAmount({ amount, region: order.region, includeTaxes: false })
  }

  return (
    <View>
      <Text className={textBaseSemi}>Order Summary</Text>
      <View className={`${textSmallRegular} text-gray-700 my-2 `}>
        <View className={ `flex flex-row items-center justify-between ${textBaseRegular} text-gray-900 mb-2 `}>
          <Text>Subtotal</Text>
          <Text>{getAmount(order.subtotal)}</Text>
        </View>
        <View className="flex flex-col gap-y-1">
          {order.discount_total > 0 && (
            <View className="flex flex-row items-center justify-between">
              <Text>Discount</Text>
              <Text>- {getAmount(order.discount_total)}</Text>
            </View>
          )}
          {order.gift_card_total > 0 && (
            <View className="flex flex-row items-center justify-between">
              <Text>Discount</Text>
              <Text>- {getAmount(order.gift_card_total)}</Text>
            </View>
          )}
          <View className="flex flex-row items-center justify-between">
            <Text>Shipping</Text>
            <Text>{getAmount(order.shipping_total)}</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text>Taxes</Text>
            <Text>{getAmount(order.tax_total)}</Text>
          </View>
        </View>
        <View className="h-px w-full border-b border-gray-200 small:border-dashed border-1 my-4" />
        <View className="flex flex-row items-center justify-between text-base-regular text-gray-900 mb-2">
          <Text>Total</Text>
          <Text>{getAmount(order.total)}</Text>
        </View>
      </View>
    </View>
  )
}

export default OrderSummary
