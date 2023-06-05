import useEnrichedLineItems from "app/lib/hooks/use-enrich-line-items"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "app/modules/common/components/line-item-options"
import LineItemPrice from "app/modules/common/components/line-item-price"
import Thumbnail from "app/modules/products/components/thumbnail"
import SkeletonLineItem from "app/modules/skeletons/components/skeleton-line-item"
import { CalculatedVariant } from "app/types/medusa"
import {View, Text, Link} from 'app/design'


type ItemsProps = {
  items: LineItem[]
  region: Region
  cartId: string
}

const Items = ({ items, region, cartId }: ItemsProps) => {
  const enrichedItems = useEnrichedLineItems(items, cartId)

  return (
    <View className="p-3 small:p-10 border-b border-gray-200 gap-y-4 flex flex-col">
      {enrichedItems?.length
        ? enrichedItems.map((item) => {
            return (
                <View className="flex flex-row gap-x-4" key={item.id}>
                <View className="w-[122px]">
                  <Thumbnail thumbnail={item.thumbnail} size="full" />
                </View>
                <View className="flex flex-col justify-between flex-1">
                  <View className="flex flex-col flex-1 text-small-regular">
                    <View className="flex flex-row items-start justify-between">
                      <View>
                          <Link
                            href={`/products/${item.variant.product.handle}`}
                          >
                            <Text className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4">
                            {item.title}
                            </Text>
                          </Link>
                        <LineItemOptions variant={item.variant} />
                        <Text>Quantity: {item.quantity}</Text>
                      </View>
                      <View className="flex flex-row justify-end">
                        <LineItemPrice
                          quantity={item.quantity}
                          region={region}
                          variant={item.variant as CalculatedVariant}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        : Array.from(Array(items.length).keys()).map((i) => {
            return <SkeletonLineItem key={i} />
          })}
    </View>
  )
}

export default Items
