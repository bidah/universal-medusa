import { CheckoutScreen } from 'app/modules/checkout/screen'
import { Stack } from 'expo-router'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
export default function CheckoutPage() {
  return (
    <>
      <BottomSheetModalProvider>
        <Stack.Screen
          options={{
            title: `Checkout`,
          }}
        />
        <CheckoutScreen />
      </BottomSheetModalProvider>
    </>
  )
}
