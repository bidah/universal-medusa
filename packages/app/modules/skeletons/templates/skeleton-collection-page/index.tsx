import repeat from 'app/lib/util/repeat'
import SkeletonProductPreview from 'app/modules/skeletons/components/skeleton-product-preview'
import { View } from 'app/design'

const SkeletonCollectionPage = () => {
  return (
    <View className="content-container py-6">
      <View className="mb-8 animate-pulse">
        <View className="h-20 w-96 bg-gray-100"></View>
      </View>
      <ul className="small:grid-cols-3 medium:grid-cols-4 grid flex-1 grid-cols-2 gap-x-4 gap-y-8">
        {repeat(8).map((index) => (
          <li key={index}>
            <SkeletonProductPreview />
          </li>
        ))}
      </ul>
    </View>
  )
}

export default SkeletonCollectionPage
