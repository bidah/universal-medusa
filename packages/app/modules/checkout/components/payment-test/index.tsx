import Alert from 'app/modules/common/icons/alert'
import {View,Text} from 'app/design'

const PaymentTest = () => {
  return (
    <View className="w-full">
      <View className="flex w-full items-center gap-x-2 bg-yellow-100 p-2">
        {/*<Alert size={16} className="text-yellow-700" />*/}
        <Text className="text-small-regular text-yellow-700">
          <Text className="font-semibold">Attention:</Text> For testing purposes
          only.
        </Text>
      </View>
    </View>
  )
}

export default PaymentTest
