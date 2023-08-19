import useEnrichedLineItems from 'app/lib/hooks/use-enrich-line-items'
// import DiscountCode from 'app/modules/checkout/components/discount-code'
import SkeletonCartPage from 'app/modules/skeletons/templates/skeleton-cart-page'
import { useCart, useMeCustomer } from 'medusa-react'
import EmptyCartMessage from '../components/empty-cart-message'
import SignInPrompt from '../components/sign-in-prompt'
import ItemsTemplate from './items'
import Summary from './summary'
import { View } from 'app/design'
import { contentContainer } from '../../../design/tailwind/custom-css-classes'

const CartTemplate = () => {
  const { cart } = useCart()
  const { customer, isLoading } = useMeCustomer()
  const items = useEnrichedLineItems()

  if (!cart || !cart?.id?.length || isLoading) {
    return <SkeletonCartPage />
  }

  return (
    <View className="web:bg-gray-50 web:py-12 ios:py-8">
      <View className={`${contentContainer}`}>
        {cart.items.length ? (
          <View className="small:grid-cols-[1fr_360px] grid grid-cols-1 gap-x-8">
            <View className="small:p-6 flex flex-col gap-y-6 bg-white px-2">
              {!customer && <SignInPrompt />}
              <ItemsTemplate region={cart?.region} items={items} />
            </View>
            <View className="relative">
              <View className="web:top-12 sticky  flex flex-col gap-y-8">
                {cart && cart.region && (
                  <>
                    <View className="small:p-6 bg-white px-2 ">
                      <Summary cart={cart} />
                    </View>
                    <View className="small:p-6 bg-white px-2">
                      {/*<DiscountCode cart={cart} />*/}
                    </View>
                  </>
                )}
              </View>
            </View>
          </View>
        ) : (
          <View>
            {!customer && <SignInPrompt />}
            <EmptyCartMessage />
          </View>
        )}
      </View>
    </View>
  )
}

export default CartTemplate
