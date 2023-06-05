import { View } from 'app/design'

export const SkeletonCodeForm = () => {
  return (
    <View className="flex w-full flex-col">
      <View className="mb-4 h-7 w-24 bg-gray-100"></View>
      <View className="grid grid-cols-[1fr_80px] gap-x-2">
        <View className="h-12 bg-gray-100"></View>
        <View className="h-12 bg-gray-100"></View>
      </View>
    </View>
  )
}

export default SkeletonCodeForm
