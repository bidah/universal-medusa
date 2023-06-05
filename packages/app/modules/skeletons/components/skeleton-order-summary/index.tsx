import SkeletonButton from 'app/modules/skeletons/components/skeleton-button'
import SkeletonCartTotals from 'app/modules/skeletons/components/skeleton-cart-totals'
import { View } from 'app/design'

const SkeletonOrderSummary = () => {
  return (
    <View className="grid-cols-1">
      <SkeletonCartTotals header={false} />
      <View className="mt-4">
        <SkeletonButton />
      </View>
    </View>
  )
}

export default SkeletonOrderSummary
