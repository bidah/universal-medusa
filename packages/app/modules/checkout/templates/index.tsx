import { CheckoutProvider } from 'app/lib/context/checkout-context'
import ChevronDown from 'app/modules/common/icons/chevron-down'
import MedusaCTA from 'app/modules/layout/components/medusa-cta'
import Link from 'next/link'
// import CheckoutLoader from '../components/checkout-loader'
import CheckoutForm from './checkout-form'
import CheckoutSummary from './checkout-summary'
import { ScrollView, View, Text } from 'app/design'

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <View className="small:min-h-screen bg-white-100 relative px-2">
        {/*<View className="h-16 bg-white">*/}
        {/*  <View className="content-container flex h-full items-center justify-between">*/}
        {/*    <Link href="/cart">*/}
        {/*      <View className="flex flex-1 basis-0 flex-row items-center gap-x-2 uppercase">*/}
        {/*        <ChevronDown className="rotate-90" size={16} />*/}
        {/*        <span className="small:block text-small-semi mt-px hidden text-gray-700">*/}
        {/*          Back to shopping cart*/}
        {/*        </span>*/}
        {/*        <span className="small:hidden text-small-semi mt-px block text-gray-700">*/}
        {/*          Back*/}
        {/*        </span>*/}
        {/*      </View>*/}
        {/*    </Link>*/}
        {/*    <Link href="/">*/}
        {/*      <Text className="text-xl-semi">ACME</Text>*/}
        {/*    </Link>*/}
        {/*    <View className="flex-1 basis-0" />*/}
        {/*  </View>*/}
        {/*</View>*/}
        <View className="relative">
          {/*<CheckoutLoader />*/}
          <View className="small:grid-cols-[1fr_416px] small:content-container small:grid xs:grid-cols-1 small:gap-y-8 small:gap-x-8 ios:pb-0 ios:pt-0 web:py-12">
            <CheckoutForm />
            <CheckoutSummary />
          </View>
        </View>
        <View className="flex w-full items-center justify-center py-4">
          {/*<MedusaCTA />*/}
        </View>
      </View>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
