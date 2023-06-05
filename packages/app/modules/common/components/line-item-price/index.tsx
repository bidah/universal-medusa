import { getPercentageDiff } from 'app/lib/util/get-precentage-diff'
import { Region } from '@medusajs/medusa'
import clsx from 'clsx'
import { formatAmount } from 'medusa-react'
import { CalculatedVariant } from 'app/types/medusa'
import { View, Text } from 'app/design'
import { textBaseRegular } from '../../../../design/tailwind/custom-css-classes'

type LineItemPriceProps = {
  variant: CalculatedVariant
  region: Region
  quantity: number
  style?: 'default' | 'tight'
}

const LineItemPrice = ({
  variant,
  region,
  quantity,
  style = 'default',
}: LineItemPriceProps) => {
  const hasReducedPrice = variant.calculated_price < variant.original_price

  return (
    <View className="flex flex-col text-gray-700">
      <Text
        className={clsx('text-right', textBaseRegular, {
          'text-rose-600 ': hasReducedPrice,
        })}
      >
        {formatAmount({
          amount: variant.calculated_price * quantity,
          region: region,
          includeTaxes: false,
        })}
      </Text>
      {hasReducedPrice && (
        <>
          <Text>
            {style === 'default' && (
              <Text className="text-gray-500">Original: </Text>
            )}
            <Text className="line-through">
              {formatAmount({
                amount: variant.original_price * quantity,
                region: region,
                includeTaxes: false,
              })}
            </Text>
          </Text>
          {style === 'default' && (
            <Text className="text-right text-rose-600">
              -
              {getPercentageDiff(
                variant.original_price,
                variant.calculated_price
              )}
              %
            </Text>
          )}
        </>
      )}
    </View>
  )
}

export default LineItemPrice
