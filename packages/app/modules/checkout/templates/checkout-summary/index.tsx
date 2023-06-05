import DiscountCode from 'app/modules/checkout/components/discount-code'
import GiftCard from 'app/modules/checkout/components/gift-card'
import PaymentButton from 'app/modules/checkout/components/payment-button'
import CartTotals from 'app/modules/common/components/cart-totals'
import { useCart } from 'medusa-react'
import {View, Pressable, Text} from 'app/design'


const CheckoutSummary = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <View className="small:flex-col sticky top-0 flex flex-col-reverse gap-y-0 small:gap-y-8">
      <View className="flex w-full flex-col gap-y-6 bg-white p-0 small:p-6">
        <CartTotals cart={cart} />
        <PaymentButton paymentSession={cart?.payment_session} />
      </View>
      <View className="bg-white p-6">
        {/*<DiscountCode cart={cart} />*/}
      </View>
      {/*<GiftCard cart={cart} />*/}
    </View>
  )
}

export default CheckoutSummary
