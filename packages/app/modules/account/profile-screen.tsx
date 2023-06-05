import { ScrollView, Text } from 'app/design'
import ProfileTemplate from './templates/profile-template'

export const ProfileScreen = () => {
  return (
    <ScrollView
      className={'web:bg-gray-50 ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <ProfileTemplate />
    </ScrollView>
  )
}
