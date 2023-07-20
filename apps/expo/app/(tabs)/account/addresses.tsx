import { AddressesScreen } from 'app/modules/account/addresses-screen'
import { Stack } from 'expo-router'

export default function AddressesPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: `Shipping Addresses`,
        }}
      />
      <AddressesScreen />
    </>
  )
}
