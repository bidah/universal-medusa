import { useCheckout } from 'app/lib/context/checkout-context'
import Spinner from 'app/modules/common/icons/spinner'
import { useEffect } from 'react'
import PaymentContainer from '../payment-container'
import StepContainer from '../step-container'
import {View, Pressable, Text} from 'app/design'

const Payment = () => {
  const {
    cart,
    setPaymentSession,
    initPayment,
    sameAsBilling: { state: isSame },
  } = useCheckout()

  /**
   * Fallback if the payment session are not loaded properly we
   * retry to load them after a 5 second delay.
   */
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null

    if (cart?.shipping_address && cart?.payment_sessions) {
      timeout = setTimeout(() => {
        initPayment()
      }, 5000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  return (
    <StepContainer
      title="Payment"
      index={isSame ? 3 : 4}
      closedState={
        <Text className="text-small-regular px-8 pb-8">
          Enter your address to see available payment options.
        </Text>
      }
    >
      <View>
        {cart?.payment_sessions?.length ? (
          cart.payment_sessions
            .sort((a, b) => {
              return a.provider_id > b.provider_id ? 1 : -1
            })
            .map((paymentSession) => {
              return (
                <PaymentContainer
                  paymentSession={paymentSession}
                  key={paymentSession.id}
                  selected={
                    cart?.payment_session?.provider_id ===
                    paymentSession.provider_id
                  }
                  setSelected={() =>
                    setPaymentSession(paymentSession.provider_id)
                  }
                />
              )
            })
        ) : (
          <View className="flex flex-col items-center justify-center px-4 py-16 text-gray-900">
            <Spinner />
          </View>
        )}
      </View>
    </StepContainer>
  )
}

export default Payment
