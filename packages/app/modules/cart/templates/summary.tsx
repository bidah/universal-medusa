import { Cart } from '@medusajs/medusa'
import Button from 'app/modules/common/components/button'
import CartTotals from 'app/modules/common/components/cart-totals'
import { Link, Stack } from 'app/design'
import { useRouter } from 'solito/router'

type SummaryProps = {
  cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>
}

const Summary = ({ cart }: SummaryProps) => {
  const { push } = useRouter()
  return (
    <Stack space={6}>
      <CartTotals cart={cart} />
      <Button onPress={() => push(`/checkout`)}>Go to checkout</Button>
    </Stack>
  )
}

export default Summary
