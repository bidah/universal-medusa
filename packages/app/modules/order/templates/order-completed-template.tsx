import { Order } from '@medusajs/medusa'
import Help from 'app/modules/order/components/help'
import Items from 'app/modules/order/components/items'
import OrderDetails from 'app/modules/order/components/order-details'
import OrderSummary from 'app/modules/order/components/order-summary'
import PaymentDetails from 'app/modules/order/components/payment-details'
import ShippingDetails from 'app/modules/order/components/shipping-details'
import React from 'react'
import { View, Pressable, Text } from 'app/design'

type OrderCompletedTemplateProps = {
  order: Order
}

const OrderCompletedTemplate: React.FC<OrderCompletedTemplateProps> = ({
  order,
}) => {
  return (
    <View className="web:bg-gray-50 min-h-[calc(100vh-64px)] py-6">
      <View className="content-container flex flex-row justify-center">
        <View className="h-full w-full max-w-4xl bg-white ">
          <OrderDetails order={order} />
          <Items
            items={order.items}
            region={order.region}
            cartId={order.cart_id}
          />
          <View className="small:gap-4 small:p-10 grid grid-cols-1 gap-2 border-b border-gray-200 p-5 lg:grid-cols-2">
            {/*<View className="border-b border-gray-200">*/}
            <PaymentDetails
              payments={order.payments}
              paymentStatus={order.payment_status}
            />
            <ShippingDetails
              shippingMethods={order.shipping_methods}
              address={order.shipping_address}
            />
          </View>
          <View className="small:gap-4 small:p-10 grid grid-cols-1 gap-2 p-5 lg:grid-cols-2">
            <Help />
            <OrderSummary order={order} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default OrderCompletedTemplate
