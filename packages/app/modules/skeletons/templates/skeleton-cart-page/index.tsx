import repeat from 'app/lib/util/repeat'
import SkeletonCartItem from 'app/modules/skeletons/components/skeleton-cart-item'
import SkeletonCodeForm from 'app/modules/skeletons/components/skeleton-code-form'
import SkeletonOrderSummary from 'app/modules/skeletons/components/skeleton-order-summary'
import { View } from 'app/design'

const SkeletonCartPage = () => {
  return (
    <View className="content-container">
      <View className="small:grid-cols-[1fr_360px] grid grid-cols-1 gap-x-8 py-12">
        <View>
          <View className="flex items-center justify-between border-b border-gray-200 pb-8">
            <View className="h-10 w-64 bg-gray-100"></View>
            <View className="h-6 w-32 bg-gray-100"></View>
          </View>
          <View className="flex flex-col gap-y-8 py-8">
            {repeat(4).map((index) => (
              <SkeletonCartItem key={index} />
            ))}
          </View>
        </View>
        <View className="flex flex-col gap-y-8">
          <SkeletonOrderSummary />
          <SkeletonCodeForm />
        </View>
      </View>
    </View>
  )
}

export default SkeletonCartPage
