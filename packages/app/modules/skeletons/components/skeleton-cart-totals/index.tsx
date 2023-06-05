import { View } from 'app/design'

const SkeletonCartTotals = ({ header = true }) => {
  return (
    <View className="flex flex-col">
      {header && <View className="mb-4 h-4 w-32 bg-gray-100"></View>}
      <View className="flex items-center justify-between">
        <View className="h-3 w-32 bg-gray-100"></View>
        <View className="h-3 w-32 bg-gray-100"></View>
      </View>

      <View className="my-4 flex items-center justify-between">
        <View className="h-3 w-24 bg-gray-100"></View>
        <View className="h-3 w-24 bg-gray-100"></View>
      </View>

      <View className="flex items-center justify-between">
        <View className="h-3 w-28 bg-gray-100 "></View>
        <View className="h-3 w-20 bg-gray-100"></View>
      </View>

      <View className="my-4 w-full border-b border-dashed border-gray-200"></View>

      <View className="flex items-center justify-between">
        <View className="mb-4 h-6 w-32 bg-gray-100"></View>
        <View className="mb-4 h-6 w-24 bg-gray-100"></View>
      </View>
    </View>
  )
}

export default SkeletonCartTotals
