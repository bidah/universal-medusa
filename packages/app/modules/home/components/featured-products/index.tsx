import { useFeaturedProductsQuery } from 'app/lib/hooks/use-layout-data'
import UnderlineLink from 'app/modules/common/components/underline-link'
// import SkeletonProductPreview from "app/modules/skeletons/components/skeleton-product-preview"
import { View } from 'app/design/view'
import { medusaClient } from 'app/lib/config'
import { useEffect } from 'react'
import ProductPreview from '../../../products/components/product-preview'
import clsx from 'clsx'
import {
  contentContainer,
  text2xlRegular,
} from 'app/design/tailwind/custom-css-classes'
import { Text, Tiles } from '../../../../design'
import { Link } from 'solito/link'

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()
  return (
    <View className="ios:pt-0 web:py-12">
      <View className={clsx(contentContainer, 'py-12')}>
        <View className="mb-16 flex flex-col items-center text-center">
          <Text className="text-base-regular mb-6 text-gray-600">
            Latest products
          </Text>
          <Text
            className={clsx(
              text2xlRegular,
              'mb-4 max-w-lg text-center text-gray-900'
            )}
          >
            Our newest yet styles are here to help you look your best.
          </Text>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </View>

        <Tiles space={[2, 5]} columns={[2, 4]} className={'px-2'}>
          {data?.slice(0, 4).map((product, index) => (
            <ProductPreview {...product} key={product.id} index={index} />
          ))}
        </Tiles>
        {/*TODO: add skeleton for FlatList items*/}
      </View>
    </View>
  )
}

export default FeaturedProducts
