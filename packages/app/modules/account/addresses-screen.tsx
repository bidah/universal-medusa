import { ScrollView, Text } from 'app/design'
import AddressesTemplate from './templates/addresses-template'

export const AddressesScreen = () => {
  return (
    <ScrollView
      className={'web:bg-gray-50 ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <AddressesTemplate />
    </ScrollView>
  )
}
