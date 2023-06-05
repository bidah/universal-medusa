import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
      <Stack.Screen name="products/[handle]" />
    </Stack>
  )
}

export default HomeLayout
