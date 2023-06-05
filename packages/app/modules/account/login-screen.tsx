import { ScrollView, View, Text } from 'app/design'
import LoginTemplate from './templates/login-template'

export const LoginScreen = () => {
  return (
    <ScrollView
      className={'web:bg-gray-50 ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <LoginTemplate />
    </ScrollView>
  )
}
