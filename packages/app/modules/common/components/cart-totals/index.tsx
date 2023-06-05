import { Cart } from '@medusajs/medusa'
import { formatAmount } from 'medusa-react'
import React from 'react'
import { View, Text } from 'app/design'
import {
  textBaseRegular,
  textSmallRegular,
} from '../../../../design/tailwind/custom-css-classes'

type CartTotalsProps = {
  cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>
}

const CartTotals: React.FC<CartTotalsProps> = ({ cart }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = cart

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: cart.region,
      includeTaxes: false,
    })
  }

  return (
    <View>
      <View
        className={`mb-2 flex flex-row items-center justify-between text-gray-900`}
      >
        <Text className={`${textBaseRegular} text-gray-700`}>Subtotal</Text>
        <Text className={`${textSmallRegular} text-gray-700`}>
          {getAmount(subtotal)}
        </Text>
      </View>
      <View className="flex flex-col gap-y-1">
        {!!discount_total && (
          <View className="flex flex-row items-center justify-between">
            <Text className={`${textSmallRegular} text-gray-700`}>
              Discount
            </Text>
            <Text className={`${textSmallRegular} text-gray-700`}>
              - {getAmount(discount_total)}
            </Text>
          </View>
        )}
        {!!gift_card_total && (
          <View className="flex flex-row items-center justify-between">
            <Text className={`${textSmallRegular} text-gray-700`}>
              Gift card
            </Text>
            <Text className={`${textSmallRegular} text-gray-700`}>
              - {getAmount(gift_card_total)}
            </Text>
          </View>
        )}
        <View className="flex flex-row items-center justify-between">
          <Text className={`${textSmallRegular} text-gray-700`}>Shipping</Text>
          <Text className={`${textSmallRegular} text-gray-700`}>
            {getAmount(shipping_total)}
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className={`${textSmallRegular} text-gray-700`}>Taxes</Text>
          <Text className={`${textSmallRegular} text-gray-700`}>
            {getAmount(tax_total)}
          </Text>
        </View>
      </View>
      <View className="b-4 web:border-dashed my-4 w-full border-b border-gray-200" />
      <View
        className={`${textBaseRegular} mb-2 flex flex-row items-center justify-between text-gray-900`}
      >
        <Text>Total</Text>
        <Text>{getAmount(total)}</Text>
      </View>
    </View>
  )
}

export default CartTotals
