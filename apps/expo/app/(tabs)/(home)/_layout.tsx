import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerTintColor: 'black' }}>
      <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
      <Stack.Screen name="products/[handle]" />
    </Stack>
  )
}

export default HomeLayout
