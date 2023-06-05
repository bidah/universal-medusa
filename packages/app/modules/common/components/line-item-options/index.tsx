import { ProductVariant } from '@medusajs/medusa'
import { View, Text } from 'app/design'
import { textSmallRegular } from 'app/design/tailwind/custom-css-classes'

type LineItemOptionsProps = { variant: ProductVariant }

const LineItemOptions = ({ variant }: LineItemOptionsProps) => {
  return (
    <View className="text-gray-700">
      {variant.options.map((option) => {
        const optionName =
          variant.product.options.find((opt) => opt.id === option.option_id)
            ?.title || 'Option'
        return (
          <View key={option.id}>
            <Text className={textSmallRegular}>
              {optionName}: {option.value}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

export default LineItemOptions
