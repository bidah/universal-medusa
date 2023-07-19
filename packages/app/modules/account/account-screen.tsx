import { ScrollView, View, Text } from 'app/design'
import OverviewTemplate from './templates/overview-template'

export const AccountScreen = () => {
  return (
    <ScrollView
      className={'ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <OverviewTemplate />
    </ScrollView>
  )
}
