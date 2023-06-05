import { fetchProductsList } from 'app/lib/data'
import usePreviews from 'app/lib/hooks/use-previews'
import getNumberOfSkeletons from 'app/lib/util/get-number-of-skeletons'
import repeat from 'app/lib/util/repeat'
import { StoreGetProductsParams } from '@medusajs/medusa'
import ProductPreview from 'app/modules/products/components/product-preview'
import SkeletonProductPreview from 'app/modules/skeletons/components/skeleton-product-preview'
import { useCart } from 'medusa-react'
import { useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from 'react-query'
import {
  IOScrollView,
  InView as NativeInView,
} from 'react-native-intersection-observer'

import { View, Pressable, Text } from 'app/design'
import { Platform } from 'react-native'

type InfiniteProductsType = {
  params: StoreGetProductsParams
}

const InfiniteProducts = ({ params }: InfiniteProductsType) => {
  const { cart } = useCart()

  const { ref, inView } =
    Platform.OS === 'web'
      ? useInView()
      : (() => ({ ref: null, inView: false }))()

  const queryParams = useMemo(() => {
    const p: StoreGetProductsParams = {}

    if (cart?.id) {
      p.cart_id = cart.id
    }

    p.is_giftcard = false

    return {
      ...p,
      ...params,
    }
  }, [cart?.id, params])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-store`, queryParams, cart],
      ({ pageParam }) => fetchProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  return (
    <IOScrollView>
      <View className="content-container flex-1 px-2">
        <View className="small:grid-cols-3 medium:grid-cols-4 grid flex-1 grid-cols-2 gap-x-4 gap-y-8">
          {previews.map((p) => (
            <View key={p.id}>
              <ProductPreview {...p} />
            </View>
          ))}
          {isLoading &&
            !previews.length &&
            repeat(8).map((index) => (
              <View key={index}>
                <SkeletonProductPreview />
              </View>
            ))}
          {isFetchingNextPage &&
            repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
              <View key={index}>
                <SkeletonProductPreview />
              </View>
            ))}
        </View>
        <View
          className="text-small-regular flex items-center justify-center py-16 text-gray-700"
          ref={ref}
        >
          <Text ref={ref}></Text>
        </View>
      </View>
    </IOScrollView>
  )
}

export default InfiniteProducts
