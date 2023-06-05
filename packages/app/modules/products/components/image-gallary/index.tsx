import { Image as MedusaImage } from '@medusajs/medusa'
import { Image, View, Pressable, Text } from 'app/design'
import { useRef } from 'react'

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  // const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const imageRefs = useRef([])

  const handleScrollTo = (id: string) => {
    const element = document.getElementsByClassName(id)
    if (element) {
      element[0]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
  }

  return (
    <View className="relative flex-row items-start">
      <View className="small:flex small:top-20 sticky hidden flex-col gap-y-4">
        {images.map((image, index) => {
          return (
            <Pressable
              key={image.id}
              className="relative h-14 w-12 border border-white"
              onPress={() => {
                handleScrollTo(image.id)
              }}
            >
              <Text className="sr-only">Go to image {index + 1}</Text>
              <Image
                className="w-100 h-100 absolute inset-0 object-cover object-center"
                source={{ uri: image.url }}
                // layout="fill"
                // objectFit="cover"
                alt="Thumbnail"
              />
            </Pressable>
          )
        })}
      </View>
      <View className="small:mx-16 small:top-14 flex w-full flex-1 flex-col items-end gap-y-4">
        {images.map((image, index) => {
          return (
            <View
              ref={(image) => imageRefs.current.push(image)}
              key={image.id}
              className={`relative aspect-[29/34] w-full ${image.id}`}
            >
              <Image
                source={{ uri: image.url }}
                className="small:w-[500px] large:w-[800px] h-full w-full"
                priority={index <= 2 ? true : false}
                alt={`Product image ${index + 1}`}
              />
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default ImageGallery
