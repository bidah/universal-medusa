import { ScrollView, View, Text } from 'app/design'
import OverviewTemplate from './templates/overview-template'

export const AccountScreen = () => {
  return (
    <ScrollView
      className={'web:bg-gray-50 ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <OverviewTemplate />
    </ScrollView>
  )
}
