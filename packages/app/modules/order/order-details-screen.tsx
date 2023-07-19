import { View, ScrollView, Stack } from 'app/design'
import OrderCompletedTemplate from './templates/order-completed-template'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { medusaClient } from 'app/lib/config'
import { createParam } from 'solito'
import OrderDetailsTemplate from './templates/order-details-template'

const fetchOrder = async (id: string) => {
  return await medusaClient.orders.retrieve(id).then(({ order }) => order)
}

export function OrderDetailsScreen() {
  const { useParam } = createParam<{ id: string }>()

  const [id] = useParam('id', { initial: '' })

  const { isSuccess, data, isLoading, isError } = useQuery(
    ['get_order_details', id],
    () => fetchOrder(id),
    {
      enabled: id.length > 0,
      staleTime: Infinity,
    }
  )

  if (isLoading || !id.length) {
    // return <SkeletonOrderConfirmed />
    return null
  }
  if (isError) {
    // return <SkeletonOrderConfirmed />
    return null
  }
  return (
    <ScrollView className={'bg-white'}>
      <OrderDetailsTemplate order={data} />
    </ScrollView>
  )
}
