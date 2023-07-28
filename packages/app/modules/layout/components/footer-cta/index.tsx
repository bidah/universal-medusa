import UnderlineLink from 'app/modules/common/components/underline-link'
import { View, Image, Text } from 'app/design'
import { text2xlSemi } from '../../../../design/tailwind/custom-css-classes'

const FooterCTA = () => {
  return (
    <View className="w-full bg-amber-100">
      <View className="content-container small:flex-row small:items-center web:px-8 relative flex flex-col-reverse justify-between gap-y-8 py-16">
        <View>
          <Text className={` ${text2xlSemi}`}>Shop the latest styles</Text>
          <View className="mt-6">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </View>
        </View>

        <View className="small:w-[35%] small:aspect-[28/36] relative aspect-square w-full">
          <Image
            source={{ uri: '../cta_three.jpg' }}
            // layout="fill"
            // objectFit="cover"
            className="absolute inset-0 object-cover"
          />
        </View>
      </View>
    </View>
  )
}

export default FooterCTA
