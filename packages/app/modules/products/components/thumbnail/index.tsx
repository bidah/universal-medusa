// import { Image as MedusaImage } from '@medusajs/medusa'

// import PlaceholderImage from 'app/modules/common/icons/placeholder-image'
import clsx from 'clsx'
import React from 'react'
import { View, Image, Text } from 'app/design'
import { ImageSourcePropType } from 'react-native'

type ThumbnailProps = {
  thumbnail?: string | null
  images?: ImageSourcePropType[] | null
  size?: 'small' | 'medium' | 'large' | 'full'
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = 'small',
}) => {
  const initialImage = thumbnail || images?.[0]?.url

  return (
    <View
      className={clsx('relative aspect-[29/34]', {
        'w-[180px]': size === 'small',
        'w-[290px]': size === 'medium',
        'w-[440px]': size === 'large',
        'max-w-[100%]': size === 'full',
      })}
    >
      <ImageOrPlaceholder image={initialImage} size={size} />
    </View>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
}: Pick<ThumbnailProps, 'size'> & { image?: string }) => {
  return image ? (
    <Image
      source={{ uri: image }}
      // TODO: className not working here. investigate
      // className="absolute inset-0 object-cover object-center"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  ) : (
    <View className="absolute inset-0 flex h-full w-full items-center justify-center bg-gray-100">
      <Text>placeholder</Text>
      {/*<PlaceholderImage size={size === 'small' ? 16 : 24} />*/}
    </View>
  )
}

export default Thumbnail
