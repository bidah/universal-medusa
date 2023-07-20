import { Order } from '@medusajs/medusa'
import Help from 'app/modules/order/components/help'
import Items from 'app/modules/order/components/items'
import OrderDetails from 'app/modules/order/components/order-details'
import OrderSummary from 'app/modules/order/components/order-summary'
import PaymentDetails from 'app/modules/order/components/payment-details'
import ShippingDetails from 'app/modules/order/components/shipping-details'
import React from 'react'
import { View, Pressable, Text } from 'app/design'

type OrderDetailsTemplateProps = {
  order: Order
}

const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
  order,
}) => {
  return (
    <View className="web:bg-gray-50 min-h-[calc(100vh-64px)] py-6">
      <View className="content-container flex flex-row justify-center">
        <View className="h-full w-full max-w-4xl bg-white">
          <OrderDetails order={order} showStatus />
          <Items
            items={order.items}
            region={order.region}
            cartId={order.cart_id}
          />
          <View className="grid grid-cols-1 gap-4 border-b border-gray-200 p-10 lg:grid-cols-2">
            <PaymentDetails
              payments={order.payments}
              paymentStatus={order.payment_status}
            />
            <ShippingDetails
              shippingMethods={order.shipping_methods}
              address={order.shipping_address}
            />
          </View>
          <View className="grid grid-cols-1 gap-4 p-10 lg:grid-cols-2">
            <Help />
            <OrderSummary order={order} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default OrderDetailsTemplate
