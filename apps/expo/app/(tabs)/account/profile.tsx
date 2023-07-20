import { ProfileScreen } from 'app/modules/account/profile-screen'
import { Stack } from 'expo-router'

export default function ProfilePage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Profile' }} />
      <ProfileScreen />
    </>
  )
}
