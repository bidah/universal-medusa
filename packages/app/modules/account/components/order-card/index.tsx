import { Order } from '@medusajs/medusa'
import Button from 'app/modules/common/components/button'
import Thumbnail from 'app/modules/products/components/thumbnail'
import { formatAmount } from 'medusa-react'
import Link from 'next/link'
import { useMemo } from 'react'
import { View, Text } from 'app/design'

type OrderCardProps = {
  order: Omit<Order, 'beforeInsert'>
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return order.items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  }, [order])

  const numberOfProducts = useMemo(() => {
    return order.items.length
  }, [order])

  return (
    <View className="flex flex-col bg-white">
      <View className="text-large-semi mb-1 uppercase">
        #{order.display_id}
      </View>
      <View className="text-small-regular flex items-center divide-x divide-gray-200 text-gray-700">
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
      <View className="small:grid-cols-4 my-4 grid grid-cols-2 gap-4">
        {order.items.slice(0, 3).map((i) => {
          return (
            <View key={i.id} className="flex flex-col gap-y-2">
              <Thumbnail
                thumbnail={order.items[0].thumbnail}
                images={[]}
                size="full"
              />
              <View className="text-small-regular flex items-center text-gray-700">
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
      </View>
      <View className="flex justify-end">
        <Link href={`/order/details/${order.id}`}>
            <Button variant="secondary">See details</Button>
        </Link>
      </View>
    </View>
  )
}

export default OrderCard
