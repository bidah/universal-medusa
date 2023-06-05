import SkeletonOrderConfirmedHeader from 'app/modules/skeletons/components/skeleton-order-confirmed-header"
import SkeletonOrderInformation from "app/modules/skeletons/components/skeleton-order-information"
import SkeletonOrderItems from "app/modules/skeletons/components/skeleton-order-items"
import { View } from 'app/design'

const SkeletonOrderConfirmed = () => {
  return (
    <View className="bg-gray-50 py-6 min-h-[calc(100vh-64px)] animate-pulse">
      <View className="content-container flex justify-center">
        <View className="max-w-4xl h-full bg-white w-full p-10">
          <SkeletonOrderConfirmedHeader />

          <SkeletonOrderItems />

          <SkeletonOrderInformation />
        </View>
      </View>
    </View>
  )
}

export default SkeletonOrderConfirmed
