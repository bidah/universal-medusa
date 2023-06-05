import { View } from 'app/design'

const SkeletonProductPreview = () => {
  return (
    <View className="animate-pulse">
      <View className="aspect-[29/34] w-full bg-gray-100"></View>
      <View className="text-base-regular mt-2">
        <View className="h-6 w-3/5 bg-gray-100"></View>

        <View className="mt-2 h-6 w-2/5 bg-gray-100"></View>
      </View>
    </View>
  )
}

export default SkeletonProductPreview
