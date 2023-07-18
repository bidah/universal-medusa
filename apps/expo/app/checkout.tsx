import { CheckoutScreen } from 'app/modules/checkout/screen'
import { Stack } from 'expo-router'

export default function CheckoutPage() {
  return <>
    <Stack.Screen
        options={{
          title: `Checkout`,
        }}
    />
    <CheckoutScreen />
  </>
}
