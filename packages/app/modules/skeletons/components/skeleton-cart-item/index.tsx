import { View } from 'app/design'

const SkeletonCartItem = () => {
  return (
    <View className="grid grid-cols-[122px_1fr] gap-x-4">
      <View className="aspect-[29/34] w-[122px] bg-gray-100"></View>
      <View className="text-base-regular flex flex-col gap-y-8">
        <View className="flex items-start justify-between">
          <View className="flex flex-col gap-y-2">
            <View className="h-6 w-32 bg-gray-100"></View>
            <View className="h-3 w-24 bg-gray-100"></View>
            <View className="h-3 w-24 bg-gray-100"></View>
          </View>
          <View className="h-8 w-20 bg-gray-100"></View>
        </View>
        <View className="text-small-regular flex flex-1 items-end justify-between">
          {/* <View>
              <button
                className="flex items-center gap-x-1 text-gray-500"
                onClick={() => deleteItem(item.id)}
              >
                <Trash size={14} />
                <span>Remove</span>
              </button>
            </View>
            <View>
              <LineItemPrice
                variant={item.variant as CalculatedVariant}
                quantity={item.quantity}
                region={region}
              />
            </View> */}
        </View>
      </View>
    </View>
  )
}

export default SkeletonCartItem
