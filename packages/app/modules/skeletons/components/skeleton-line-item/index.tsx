import { View } from 'app/design'

const SkeletonLineItem = () => {
  return (
    <View className="grid animate-pulse grid-cols-[122px_1fr] gap-x-4">
      <View className="h-[143px] w-[122px] bg-gray-200" />
      <View className="text-base-regular flex items-start justify-between">
        <View>
          <View className="flex flex-col gap-y-2">
            <View className="h-3 w-[120px] bg-gray-200" />
            <View className="h-3 w-[65px] bg-gray-200" />
          </View>
        </View>
        <View className="h-3 w-[65px] bg-gray-200" />
      </View>
    </View>
  )
}

export default SkeletonLineItem
