import { Stack } from 'expo-router'
import Layout from 'app/modules/layout/templates'
import { Text, View } from 'app/design'

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerTintColor: 'black' }}>
      <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
      <Stack.Screen name="products/[handle]" />
    </Stack>
  )
}

export default HomeLayout
