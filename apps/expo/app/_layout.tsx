import { Stack } from 'expo-router'
import { Provider } from 'app/provider'

export default function Layout() {
  return (
    <Provider>
      <Stack screenOptions={{}}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="order/confirmed/[id]"
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="checkout"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </Provider>
  )
}
