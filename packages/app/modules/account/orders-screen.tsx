import { ScrollView, View, Text } from 'app/design'
import OrderDetails from './templates/orders-template'

export const OrdersScreen = () => {
  return (
    <ScrollView
      className={' ios:bg-white android:bg-white web:px-4'}
      keyboardShouldPersistTaps={'always'}
    >
      <OrderDetails />
    </ScrollView>
  )
}
