import { Payment, PaymentStatus } from '@medusajs/medusa'
import { View, Text } from 'app/design'
import { textBaseSemi } from '../../../../design/tailwind/custom-css-classes'

type PaymentDetailsProps = {
  payments: Payment[]
  paymentStatus: PaymentStatus
}

const PaymentDetails = ({ payments, paymentStatus }: PaymentDetailsProps) => {
  return (
    <View className={'ios:mb-4'}>
      <Text className={textBaseSemi}>Payment</Text>
      <View className="my-2">
        {payments.map((p) => {
          switch (p.provider_id) {
            case 'stripe':
              return <StripeDetails key={p.id} payment={p} />
            case 'paypal':
              return <PayPalDetails key={p.id} />
            case 'manual':
              return <TestDetails key={p.id} />
            default:
              return null
          }
        })}
      </View>
    </View>
  )
}

const PayPalDetails = () => {
  return (
    <View className="text-base-regular flex flex-col">
      <Text className="text-small-regular text-gray-700">PayPal</Text>
      <Text>PayPal payment</Text>
    </View>
  )
}

const StripeDetails = ({ payment }: { payment: Payment }) => {
  const card: {
    brand: string
    last4: string
    exp_year: number
    exp_month: number
  } = (payment.data.charges as any).data[0].payment_method_details.card

  return (
    <View className="text-base-regular flex flex-col">
      <Text className="text-small-regular text-gray-700">
        {card.brand.substring(0, 1).toUpperCase()}
        {card.brand.substring(1)}
      </Text>
      <Text>************{card.last4}</Text>
      <Text>
        {card.exp_month > 9 ? card.exp_month : `0${card.exp_month}`} /{' '}
        {card.exp_year.toString().slice(2)}
      </Text>
    </View>
  )
}

const TestDetails = () => {
  return (
    <View className="text-base-regular flex flex-col">
      <Text className="text-small-regular text-gray-700">Test</Text>
      <Text>Test payment using medusa-payment-manual</Text>
    </View>
  )
}

export default PaymentDetails
