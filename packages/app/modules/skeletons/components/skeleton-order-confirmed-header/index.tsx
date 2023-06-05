import { View } from 'app/design'

const SkeletonOrderConfirmedHeader = () => {
  return (
    <View className="flex animate-pulse flex-col gap-y-2 pb-10">
      <View className="h-4 w-2/5 bg-gray-100"></View>
      <View className="h-6 w-3/6 bg-gray-100"></View>
      <View className="flex gap-x-4">
        <View className="h-4 w-16 bg-gray-100"></View>
        <View className="h-4 w-12 bg-gray-100"></View>
      </View>
    </View>
  )
}

export default SkeletonOrderConfirmedHeader
