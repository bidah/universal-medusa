import repeat from 'app/lib/util/repeat'
import { View } from 'app/design'

const SkeletonProductTabs = () => {
  return (
    <View className="flex w-full animate-pulse flex-col ">
      <View className="flex flex-row items-center gap-x-6 border-b border-gray-100 pb-2">
        {repeat(2).map((index) => (
          <View
            key={index}
            className="h-6 w-12 flex-1 basis-0 bg-gray-100 pb-2"
          ></View>
        ))}
      </View>
      <View className="py-8">
        <View className="grid w-full grid-cols-2 flex-row justify-between gap-x-8">
          {repeat(2).map((index) => (
            <View className="flex flex-col gap-y-4" key={index}>
              {repeat(3).map((index) => (
                <View className="flex flex-col gap-y-2" key={index}>
                  <View className="h-4 w-32 bg-gray-100"></View>
                  <View className="h-2 w-16 bg-gray-100"></View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default SkeletonProductTabs
