import Addresses from 'app/modules/checkout/components/addresses'
import Payment from 'app/modules/checkout/components/payment'
import Shipping from 'app/modules/checkout/components/shipping'
import { useCart } from 'medusa-react'
import { Text, View } from '../../../../design'

const CheckoutForm = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <View className={'px-0'}>
      <View className="small: small:gap-y-8 grid w-full grid-cols-1 gap-y-6 ">
        <View>
          <Addresses />
        </View>

        <View>
          <Shipping cart={cart} />
        </View>

        <View>
          <Payment />
        </View>
      </View>
    </View>
  )
}

export default CheckoutForm
