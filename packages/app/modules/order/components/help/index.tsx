import React from 'react'
import { View, Pressable, Text } from 'app/design'
import { Link } from 'solito/link'
import {
  textBaseRegular,
  textBaseSemi,
} from '../../../../design/tailwind/custom-css-classes'

const Help = () => {
  return (
    <View className={'ios:mb-4'}>
      <Text className={textBaseSemi}>Need help?</Text>
      <View className={`${textBaseRegular} my-2 `}>
        <View className="flex flex-col gap-y-2">
          <Link href="/contact">
            <Text>Contact</Text>
          </Link>
          <Link href="/contact">
            <Text>Returns & Exchanges</Text>
          </Link>
        </View>
      </View>
    </View>
  )
}

export default Help
