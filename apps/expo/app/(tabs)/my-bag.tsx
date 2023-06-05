import { CartScreen } from 'app/modules/cart/screen'
import { Stack } from 'expo-router'
import { useCart } from 'medusa-react'

export default function CartPage() {
  const { totalItems } = useCart()

  return (
    <>
      <Stack.Screen
        options={{
          title: `My Bag (${totalItems})`,
        }}
      />

      <CartScreen />
    </>
  )
}
