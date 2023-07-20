import { ScrollView, Text } from 'app/design'
import AddressesTemplate from './templates/addresses-template'

export const AddressesScreen = () => {
  return (
    <ScrollView
      className={'ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <AddressesTemplate />
    </ScrollView>
  )
}
