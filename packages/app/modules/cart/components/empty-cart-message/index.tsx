import UnderlineLink from 'app/modules/common/components/underline-link'
import { View, Text } from 'app/design'
import {
  text2xlSemi,
  textBaseRegular,
} from '../../../../design/tailwind/custom-css-classes'

const EmptyCartMessage = () => {
  return (
    <View className="flex flex-col items-center justify-center bg-amber-100 px-8 py-24 ">
      <Text className={`${text2xlSemi} text-center`}>
        Your shopping bag is empty
      </Text>
      <Text
        className={`${textBaseRegular} mb-6 mt-4 max-w-[32rem] text-center`}
      >
        You don&apos;t have anything in your bag. Let&apos;s change that, use
        the link below to start browsing our products.
      </Text>
      <View>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </View>
    </View>
  )
}

export default EmptyCartMessage
