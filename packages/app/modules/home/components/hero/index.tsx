import { A, H1, P, Text, TextLink } from 'app/design/typography'
import UnderlineLink from 'app/modules/common/components/underline-link'
import { View, Image } from 'app/design'
import { text2xlSemi } from '../../../../design/tailwind/custom-css-classes'

const Hero = () => {
  return (
    <View className="web:h-[70vh] ios:h-[260px] relative w-full">
      <Image
        alt="ok"
        source={{ uri: 'https://i.imgur.com/3CSHcVn.jpg' }}
        className="h-full w-full object-cover"
      />
      <View className="small:justify-end small:items-start medium:p-32 absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <View className="ios:p-2">
          <Text
            className={`${text2xlSemi} small:text-left mb-4 text-white shadow-black drop-shadow-md`}
          >
            SUMMER styles are finally here
          </Text>
          <Text className="text-base-regular small:text-left mb-6 max-w-[32rem] text-white shadow-black drop-shadow-md">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn&apos;t care if you live or die.
          </Text>
        </View>
        <UnderlineLink href="/store" color={'white'}>
          Explore products
        </UnderlineLink>
        <View className="mt-4 h-2 bg-amber-400" />
      </View>
      {/*  // layout="fill"*/}
      {/*  // loading="eager"*/}
      {/*  // priority={true}*/}
      {/*  // quality={90}*/}
      {/*  // objectFit="cover"*/}
      {/*  // alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"*/}
      {/*  // className="absolute inset-0"*/}
      {/*  // draggable="false"*/}
      {/*/>*/}
    </View>
  )
}

export default Hero
