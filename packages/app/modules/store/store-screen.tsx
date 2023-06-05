import { useState } from 'react'
import { StoreGetProductsParams } from '@medusajs/medusa'
import { View, Pressable, Text, ScrollView } from 'app/design'
import RefinementList from './components/refinement-list'
import InfiniteProducts from '../products/components/infinite-products'

export const StoreScreen = (props) => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <ScrollView className="small:flex-row small:items-start small:py-6 flex flex-col bg-white py-0">
      <RefinementList refinementList={params} setRefinementList={setParams} />
      <InfiniteProducts params={params} />
    </ScrollView>
  )
}
