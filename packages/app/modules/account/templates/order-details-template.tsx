import OrderCompletedTemplate from 'app/modules/order/templates/order-completed-template'
import { useOrder } from 'medusa-react'
import { useRouter } from 'next/router'
import { Text } from '../../../design'

const OrderDetailsTemplate = () => {
  const router = useRouter()

  const { order } = router.query

  const { order: details, isLoading } = useOrder(order as string, {
    enabled: !!order,
  })

  if (isLoading || !details) {
    return <Text>Loading...</Text>
  }

  return <OrderCompletedTemplate order={details} />
}

export default OrderDetailsTemplate
