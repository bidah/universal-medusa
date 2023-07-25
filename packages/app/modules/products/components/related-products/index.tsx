import { fetchProductsList } from 'app/lib/data'
import usePreviews from 'app/lib/hooks/use-previews'
import getNumberOfSkeletons from 'app/lib/util/get-number-of-skeletons'
import repeat from 'app/lib/util/repeat'
import { Product, StoreGetProductsParams } from '@medusajs/medusa'
import Button from 'app/modules/common/components/button'
// import SkeletonProductPreview from 'app/modules/skeletons/components/skeleton-product-preview'
import { useCart } from 'medusa-react'
import { useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'
import ProductPreview from '../product-preview'
import { View, Text, Tiles } from 'app/design'
import {
  text2xlRegular,
  textBaseRegular,
} from '../../../../design/tailwind/custom-css-classes'

type RelatedProductsProps = {
  product: Product
}

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  const { cart } = useCart()

  const queryParams: StoreGetProductsParams = useMemo(() => {
    const params: StoreGetProductsParams = {}

    if (cart?.id) {
      params.cart_id = cart.id
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.type) {
      params.type = product.type.id
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }, [product, cart?.id])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-${product.id}`, queryParams, cart],
      ({ pageParam }) => fetchProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })

  return (
    <View className={'w-full'}>
      <View className=" mb-16 flex flex-col items-center">
        <Text className={`${textBaseRegular} mb-6 text-gray-600`}>
          Related products
        </Text>
        <Text
          className={`${text2xlRegular} max-w-lg text-center text-gray-900`}
        >
          You might also want to check out these products.
        </Text>
      </View>

      <Tiles space={4} columns={[2, 3, 4]} className={'gap-y-4'}>
        {previews.map((p) => (
          <View key={p.id}>
            <ProductPreview {...p} />
          </View>
        ))}
        {isLoading &&
          !previews.length &&
          repeat(8).map((index) => (
            <View key={index}>{/*<SkeletonProductPreview />*/}</View>
          ))}
        {isFetchingNextPage &&
          repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
            <View key={index}>{/*<SkeletonProductPreview />*/}</View>
          ))}
      </Tiles>
      {hasNextPage && (
        <View className="mt-8 flex items-center justify-center">
          <Button
            isLoading={isLoading}
            onPress={() => fetchNextPage()}
            style="w-72"
          >
            Load more
          </Button>
        </View>
      )}
    </View>
  )
}

export default RelatedProducts
