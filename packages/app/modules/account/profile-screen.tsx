import { ScrollView, Text } from 'app/design'
import ProfileTemplate from './templates/profile-template'

export const ProfileScreen = () => {
  return (
    <ScrollView
      className={' ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <ProfileTemplate />
    </ScrollView>
  )
}
