import { OrdersScreen } from 'app/modules/account/orders-screen'
import { Stack } from 'expo-router'

export default function OrdersPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Orders' }} />
      <OrdersScreen />
    </>
  )
}
