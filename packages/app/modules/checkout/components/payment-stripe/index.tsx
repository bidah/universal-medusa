import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js"
import {
  StripeCardCvcElementOptions,
  StripeCardExpiryElementOptions,
  StripeCardNumberElementOptions,
} from "@stripe/stripe-js"
import React, { useMemo } from "react"
import {View, Text} from 'app/design'


const PaymentStripe: React.FC = () => {
  const useOptions:
    | StripeCardNumberElementOptions
    | StripeCardExpiryElementOptions
    | StripeCardCvcElementOptions = useMemo(() => {
    return {
      style: {
        base: {
          fontFamily: "Inter, sans-serif",
          color: "#424270",
          padding: "10px 12px",
          "::placeholder": {
            color: "#CFD7E0",
          },
        },
      },
    }
  }, [])

  return (
    <View>
      <View className="flex flex-col relative w-full pb-6">
        <CardNumber options={useOptions as StripeCardNumberElementOptions} />
        <View className="flex items-center mt-12 relative gap-x-4">
          <CardExpiry options={useOptions as StripeCardExpiryElementOptions} />
          <CardCVC options={useOptions as StripeCardCvcElementOptions} />
        </View>
      </View>
    </View>
  )
}

const CardNumber = ({
  options,
}: {
  options: StripeCardNumberElementOptions
}) => {
  return (
    <View className="border-b border-gray-200 py-2 relative">
      <Text className="absolute -top-6 text-gray-700 text-base-regular">
        Card number
      </Text>
      <CardNumberElement options={options} />
    </View>
  )
}

const CardExpiry = ({
  options,
}: {
  options: StripeCardExpiryElementOptions
}) => {
  return (
    <View className="border-b border-gray-200 w-full py-2 relative">
      <Text className="absolute -top-6 text-gray-700 text-base-regular">
        Expiration date
      </Text>
      <CardExpiryElement options={options} />
    </View>
  )
}

const CardCVC = ({ options }: { options: StripeCardCvcElementOptions }) => {
  return (
    <View className="border-b border-gray-200 w-full py-2 relative">
      <Text className="absolute -top-6 text-gray-700 text-base-regular">
        CVC
      </Text>
      <CardCvcElement options={{ ...options, placeholder: "123" }} />
    </View>
  )
}

export default PaymentStripe
