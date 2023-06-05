import { useProductActions } from 'app/lib/context/product-context'
import useProductPrice from 'app/lib/hooks/use-product-price'
import OptionSelect from 'app/modules/products/components/option-select'
import clsx from 'clsx'
import React, { useMemo } from 'react'
import { Product } from 'app/types/medusa'
import { View, Link, Text } from 'app/design'
import Button from '../../../common/components/button'
import {
  textBaseRegular,
  textSmallRegular,
  textXlRegular,
  textXlSemi,
} from 'app/design/tailwind/custom-css-classes'

type ProductActionsProps = {
  product: Product
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

  const price = useProductPrice({ id: product.id, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  console.log('options', options)
  return (
    <View className="flex flex-col gap-y-2">
      {product.collection && (
        <Link
          href={`/collections/${product.collection.id}`}
          className={`${textSmallRegular} text-gray-700`}
        >
          {product.collection.title}
        </Link>
      )}
      <Text className={`${textXlRegular}`}>{product.title}</Text>

      <Text className={`${textBaseRegular}`}>{product.description}</Text>

      {product.variants.length > 1 && (
        <View className="my-8 flex flex-col gap-y-6">
          {product.options.map((option) => {
            return (
              <View key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                />
              </View>
            )
          })}
        </View>
      )}

      <View className="mb-4">
        {selectedPrice ? (
          <View className="flex flex-col text-gray-700">
            <Text
              className={clsx(textXlSemi, {
                'text-rose-600': selectedPrice.price_type === 'sale',
              })}
            >
              {selectedPrice.calculated_price}
            </Text>
            {selectedPrice.price_type === 'sale' && (
              <>
                <Text>
                  <Text className="text-gray-500">Original: </Text>
                  <Text className="line-through">
                    {selectedPrice.original_price}
                  </Text>
                </Text>
                <Text className="text-rose-600">
                  -{selectedPrice.percentage_diff}%
                </Text>
              </>
            )}
          </View>
        ) : (
          <View></View>
        )}
      </View>

      <Button onPress={addToCart}>
        {!inStock ? 'Out of stock' : 'Add to cart'}
      </Button>
    </View>
  )
}

export default ProductActions
