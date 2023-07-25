import { Stack } from 'expo-router'

const AccountLayout = () => {
  return (
    <Stack screenOptions={{ headerTintColor: 'black' }}>
      <Stack.Screen name="index" options={{ headerTitle: 'Account' }} />
    </Stack>
  )
}

export default AccountLayout
