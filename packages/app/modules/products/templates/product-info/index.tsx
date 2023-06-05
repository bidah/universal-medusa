import ProductActions from 'app/modules/products/components/product-actions'
import React from 'react'
import { Product } from 'app/types/medusa'
import { View } from 'app/design'

type ProductInfoProps = {
  product: Product
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <View id="product-info">
      <View className="mx-auto flex w-full flex-col lg:max-w-[500px]">
        <ProductActions product={product} />
      </View>
    </View>
  )
}

export default ProductInfo
