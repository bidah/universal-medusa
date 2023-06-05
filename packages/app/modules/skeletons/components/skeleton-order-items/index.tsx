import { View } from 'app/design'

const SkeletonOrderItems = () => {
  return (
    <View className="flex flex-col gap-y-4 border-y border-gray-200 py-10">
      <View className="grid grid-cols-[122px_1fr] gap-x-4">
        <View className="aspect-[29/34] w-full bg-gray-100"></View>
        <View className="flex items-start justify-between">
          <View className="flex flex-col gap-y-2">
            <View className="h-6 w-48 bg-gray-100"></View>
            <View className="h-4 w-24 bg-gray-100"></View>
            <View className="h-4 w-32 bg-gray-100"></View>
          </View>
          <View className="h-6 w-32 bg-gray-100"></View>
        </View>
      </View>

      <View className="grid grid-cols-[122px_1fr] gap-x-4">
        <View className="aspect-[29/34] w-full bg-gray-100"></View>
        <View className="flex items-start justify-between">
          <View className="flex flex-col gap-y-2">
            <View className="h-6 w-48 bg-gray-100"></View>
            <View className="h-4 w-24 bg-gray-100"></View>
            <View className="h-4 w-32 bg-gray-100"></View>
          </View>
          <View className="h-6 w-32 bg-gray-100"></View>
        </View>
      </View>

      <View className="grid grid-cols-[122px_1fr] gap-x-4">
        <View className="aspect-[29/34] w-full bg-gray-100"></View>
        <View className="flex items-start justify-between">
          <View className="flex flex-col gap-y-2">
            <View className="h-6 w-48 bg-gray-100"></View>
            <View className="h-4 w-24 bg-gray-100"></View>
            <View className="h-4 w-32 bg-gray-100"></View>
          </View>
          <View className="h-6 w-32 bg-gray-100"></View>
        </View>
      </View>
    </View>
  )
}

export default SkeletonOrderItems
