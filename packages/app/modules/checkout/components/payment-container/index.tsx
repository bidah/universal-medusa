import { PaymentSession } from '@medusajs/medusa'
import Radio from 'app/modules/common/components/radio'
import clsx from 'clsx'
import React from 'react'
// import PaymentStripe from '../payment-stripe'
import PaymentTest from '../payment-test'
import {View, Pressable, Text} from 'app/design'
import {textBaseSemi, textSmallRegular} from "../../../../design/tailwind/custom-css-classes";


type PaymentContainerProps = {
  paymentSession: PaymentSession
  selected: boolean
  setSelected: () => void
  disabled?: boolean
}

const PaymentInfoMap: Record<string, { title: string; description: string }> = {
  stripe: {
    title: 'Credit card',
    description: 'Secure payment with credit card',
  },
  'stripe-ideal': {
    title: 'iDEAL',
    description: 'Secure payment with iDEAL',
  },
  paypal: {
    title: 'PayPal',
    description: 'Secure payment with PayPal',
  },
  manual: {
    title: 'Test payment',
    description: 'Test payment using medusa-payment-manual',
  },
}

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentSession,
  selected,
  setSelected,
  disabled = false,
}) => {
  return (
    <View

      className={clsx(
        'flex flex-col gap-y-4 border-b border-gray-200 last:border-b-0',
        {
          'bg-gray-50': selected,
        }
      )}
    >
      <Pressable
        // className={'grid grid-cols-[12px_1fr] gap-x-4 py-4 px-8'}
        className={'flex flex-row gap-x-4 py-4 px-8'}
        onClick={setSelected}
        disabled={disabled}
      >
        <Radio checked={selected} />
        <View className="flex flex-col text-left">
          <Text className={`${textBaseSemi} leading-none text-gray-900 `}>
            {PaymentInfoMap[paymentSession.provider_id].title}
          </Text>
          <Text className={`${textSmallRegular} t-2 text-gray-700 ` }>
            {PaymentInfoMap[paymentSession.provider_id].description}
          </Text>
          {selected && (
            <View className="mt-4 w-full">
              <PaymentElement paymentSession={paymentSession} />
            </View>
          )}
        </View>
      </Pressable>
    </View>
  )
}

const PaymentElement = ({
  paymentSession,
}: {
  paymentSession: PaymentSession
}) => {
  switch (paymentSession.provider_id) {
    case 'stripe':
      return (
        <View className="pt-8 pr-7">
          {/*<PaymentStripe />*/}
        </View>
      )
    case 'manual':
      // We only display the test payment form if we are in a development environment
      return process.env.NODE_ENV === 'development' ? <PaymentTest /> : null
    default:
      return null
  }
}

export default PaymentContainer
