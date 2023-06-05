import CartTemplate from 'app/modules/cart/templates'
import { ScrollView, View, Text } from 'app/design'

export const CartScreen = () => {
  return (
    <ScrollView
      className={'web:bg-gray-50 ios:bg-white android:bg-white web:px-4 '}
      keyboardShouldPersistTaps={'always'}
    >
      <CartTemplate />
    </ScrollView>
  )
}
