import { Order } from '@medusajs/medusa'
import Button from 'app/modules/common/components/button'
import Thumbnail from 'app/modules/products/components/thumbnail'
import { formatAmount } from 'medusa-react'
import { useMemo } from 'react'
import { View, Text, Link, Columns } from 'app/design'
import { useRouter } from 'solito/router'
import {
  textLargeSemi,
  textSmallRegular,
} from 'app/design/tailwind/custom-css-classes'

type OrderCardProps = {
  order: Omit<Order, 'beforeInsert'>
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return order.items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  }, [order])

  const router = useRouter()
  const numberOfProducts = useMemo(() => {
    return order.items.length
  }, [order])

  return (
    <View className="flex flex-col bg-white">
      <Text className={`${textLargeSemi} mb-1 uppercase`}>
        #{order.display_id}
      </Text>
      <View
        className={`${textSmallRegular} flex flex-row items-center divide-x divide-gray-200 text-gray-700`}
      >
        <Text className="pr-2">
          {new Date(order.created_at).toDateString()}
        </Text>
        <Text className="px-2">
          {formatAmount({
            amount: order.total,
            region: order.region,
            includeTaxes: false,
          })}
        </Text>
        <Text className="pl-2">{`${numberOfLines} ${
          numberOfLines > 1 ? 'items' : 'item'
        }`}</Text>
      </View>
      {/*<Columns className="small:grid-cols-4 my-4 grid grid-cols-2 gap-4">*/}
      <Columns space={2} className="my-4">
        {order.items.slice(0, 3).map((i) => {
          return (
            <View key={i.id} className="flex flex-col gap-y-2">
              <Thumbnail
                thumbnail={order.items[0].thumbnail}
                images={[]}
                size="full"
              />
              <View className="text-small-regular flex flex-row items-center text-gray-700">
                <Text className="font-semibold text-gray-900">{i.title}</Text>
                <Text className="ml-2">x</Text>
                <Text>{i.quantity}</Text>
              </View>
            </View>
          )
        })}
        {numberOfProducts > 4 && (
          <View className="flex h-full w-full flex-col items-center justify-center">
            <Text className="text-small-regular text-gray-700">
              + {numberOfLines - 4}
            </Text>
            <Text className="text-small-regular text-gray-700">more</Text>
          </View>
        )}
      </Columns>
      <View className="flex justify-end">
        <Button
          variant="secondary"
          onPress={() => router.push(`/order/details/${order.id}`)}
        >
          See details
        </Button>
      </View>
    </View>
  )
}

export default OrderCard
