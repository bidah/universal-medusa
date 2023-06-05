import clsx from 'clsx'
import { ProductPreviewType } from 'app/types/global'
import Thumbnail from '../thumbnail'
import { View, Text, Link, Pressable } from 'app/design'
import { useRouter } from 'solito/router'

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  const { push } = useRouter()
  return (
    <Pressable onPress={() => push(`/products/${handle}`)}>
      <Thumbnail thumbnail={thumbnail} size="full" />
      <View className="text-base-regular mt-2">
        <Text>{title}</Text>
        <View className="mt-1 flex">
          {price ? (
            <>
              {price.price_type === 'sale' && (
                <Text className="text-gray-500 line-through">
                  {price.original_price}
                </Text>
              )}
              <Text
                className={clsx('font-semibold', {
                  'text-rose-500': price.price_type === 'sale',
                })}
              >
                {price.calculated_price}
              </Text>
            </>
          ) : (
            <View className="h-6 w-20 animate-pulse bg-gray-100"></View>
          )}
        </View>
      </View>
    </Pressable>
  )
}

export default ProductPreview
