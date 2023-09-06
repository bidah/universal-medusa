import { Stack } from 'expo-router'
import { OrderDetailsScreen } from 'app/modules/order/order-details-screen'
export default function ConfirmedPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: `Order Details`,
          headerTintColor: 'black',
        }}
      />
      <OrderDetailsScreen />
    </>
  )
}
