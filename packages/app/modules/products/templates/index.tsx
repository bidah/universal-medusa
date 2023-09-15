import { ProductProvider } from 'app/lib/context/product-context'
import { Product } from '@medusajs/medusa'
import ProductTabs from 'app/modules/products/components/product-tabs'
import RelatedProducts from 'app/modules/products/components/related-products'
import ProductInfo from 'app/modules/products/templates/product-info'
import React, { useRef } from 'react'
import { View, Text, ScrollView, Stack } from '../../../design'
import ImageGallery from '../components/image-gallary'

type ProductTemplateProps = {
  product: Product
}
const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const info = useRef(null)

  return (
    <ProductProvider product={product}>
      <View className=" small:flex-row small:items-start web:small:container web:pt-16 small:web:pt-2 relative mt-4 flex flex-col justify-center px-3 py-6">
        <View className="small:mb-0 mb-7 flex flex-col gap-y-8">
          <ImageGallery images={product.images} />
        </View>
        <Stack
          space={10}
          className="small:sticky small:top-20 small:py-0 small:max-w-[344px] medium:max-w-[400px] flex w-full flex-col "
          ref={info}
        >
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </Stack>
      </View>
      <View className="content-container small:px-8 small:my-32 ios:my-2 web:my-16 px-3">
        <RelatedProducts product={product} />
      </View>
    </ProductProvider>
  )
}

export default ProductTemplate
