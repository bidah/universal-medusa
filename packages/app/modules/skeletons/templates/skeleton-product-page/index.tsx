import repeat from 'app/lib/util/repeat'
import SkeletonButton from 'app/modules/skeletons/components/skeleton-button'
import SkeletonProductTabs from 'app/modules/skeletons/components/skeleton-product-tabs'
import { View } from 'app/design'

const SkeletonProductPage = () => {
  return (
    <View className={''}>
      <View className="content-container small:flex-row small:items-start relative flex flex-col  py-8">
        <View className="small:w-1/2  web:2xsmall:mt-12 flex flex-col gap-y-8 ">
          <View className="relative flex flex-row items-start ">
            <View className="small:flex sticky top-20 hidden flex-col gap-y-4">
              {repeat(2).map((index) => {
                return (
                  <View key={index} className="h-14 w-12 bg-gray-100"></View>
                )
              })}
            </View>
            <View className="small:mx-16 flex w-full flex-1 flex-col gap-y-4 ">
              {repeat(2).map((index) => {
                return (
                  <View
                    key={index}
                    className="h-200 relative aspect-square w-full bg-gray-100"
                  ></View>
                )
              })}
            </View>
          </View>
        </View>
        <View className="small:ml-20 small:sticky small:top-20 small:py-0 small:max-w-[344px] medium:max-w-[400px] flex w-full flex-col gap-y-12 py-8">
          <View className={'ios:mb-10 android:mb-10'}>
            <View className="mx-auto flex w-full flex-col gap-y-12 lg:max-w-[500px]">
              <View>
                <View className="flex flex-col gap-y-2 ">
                  <View className="h-4 w-32 "></View>
                  <View className="h-12 w-52 bg-gray-100"></View>

                  <View className="mt-4 flex flex-col gap-y-2 ">
                    {repeat(4).map((index) => (
                      <View key={index} className="w-62 h-4 bg-gray-100"></View>
                    ))}
                  </View>

                  <View className="my-8 flex flex-col gap-y-6 ">
                    <View className="h-6 w-16 bg-gray-100"></View>
                    <View className="grid grid-cols-3 flex-row gap-2 lg:grid-cols-6">
                      {repeat(4).map((v) => {
                        return (
                          <View
                            key={v}
                            className="h-[50px] w-[50px] bg-gray-100"
                          ></View>
                        )
                      })}
                    </View>
                  </View>

                  <View className="mb-4">
                    <View className="h-9 w-20 bg-gray-100"></View>
                  </View>

                  <SkeletonButton />
                </View>
              </View>
            </View>
          </View>
          <SkeletonProductTabs />
        </View>
      </View>
    </View>
  )
}

export default SkeletonProductPage
