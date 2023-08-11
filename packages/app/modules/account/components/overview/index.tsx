import { Customer, Order } from '@medusajs/medusa'
import ChevronDown from 'app/modules/common/icons/chevron-down'
import MapPin from 'app/modules/common/icons/map-pin'
import Package from 'app/modules/common/icons/package'
import User from 'app/modules/common/icons/user'
import { useAccount } from 'app/lib/context/account-context'
import { formatAmount } from 'medusa-react'
import { View, Pressable, Text, Link } from 'app/design'
import {
  text3xlSemi,
  textBaseRegular,
  textLargeSemi,
  textSmallRegular,
  textXlSemi,
} from '../../../../design/tailwind/custom-css-classes'

type OverviewProps = {
  orders?: Order[]
  customer?: Omit<Customer, 'password_hash'>
}

const Overview = ({ orders, customer }: OverviewProps) => {
  const { handleLogout } = useAccount()
  return (
    <>
      <View>
        <View className="small:hidden">
          <Text className={`${textXlSemi}  mb-4 px-2 `}>
            Hello {customer?.first_name}
          </Text>
          <View className={`${textBaseRegular} flex `}>
            <View>
              <Link href="/account/profile">
                <View className="flex flex-row items-center justify-between border-b border-gray-200 px-2 py-4">
                  <View className="flex flex-row items-center gap-x-2">
                    <User size={16} />
                    <Text>Profile</Text>
                  </View>
                  <ChevronDown className="-rotate-90 transform" />
                </View>
              </Link>
              <Link href="/account/addresses">
                <View className="flex flex-row items-center justify-between border-b border-gray-200 px-2 py-4">
                  <View className="flex flex-row items-center gap-x-2">
                    <MapPin size={16} />
                    <Text>Addresses</Text>
                  </View>
                  <ChevronDown className="-rotate-90 transform" />
                </View>
              </Link>
              <Link href="/account/orders">
                <View className="flex flex-row items-center justify-between border-b border-gray-200 px-2 py-4">
                  <View className="flex flex-row items-center gap-x-2">
                    <Package size={16} />
                    <Text>Orders</Text>
                  </View>
                  <ChevronDown className="-rotate-90 transform" />
                </View>
              </Link>
            </View>
          </View>
        </View>

        <View className="small:block hidden">
          <View className="mb-4 flex flex-row items-start justify-between">
            <Text className={`${textXlSemi}`}>
              Hello {customer?.first_name}
            </Text>
            <Text className={`${textSmallRegular} text-gray-700 `}>
              Signed in as:{' '}
              <Text className="font-semibold">{customer?.email}</Text>
            </Text>
          </View>
          <View className="flex flex-col border-t border-gray-200 py-8">
            <View className="col-span-1 row-span-2 flex h-full flex-1 flex-col gap-y-4">
              <View className="mb-6 flex flex-row items-start gap-x-16">
                <View className="flex flex-col gap-y-4">
                  <Text className={`${textLargeSemi}`}>Profile</Text>
                  <View className="flex flex-row items-end gap-x-2">
                    <Text className={`${text3xlSemi} leading-none `}>
                      {getProfileCompletion(customer)}%
                    </Text>
                    <Text
                      className={`${textBaseRegular} uppercase text-gray-500 `}
                    >
                      Completed
                    </Text>
                  </View>
                </View>

                <View className="flex flex-col gap-y-4">
                  <Text className={textLargeSemi}>Addresses</Text>
                  <View className="flex flex-row items-end gap-x-2">
                    <Text className={`${text3xlSemi} leading-none`}>
                      {customer?.shipping_addresses?.length || 0}
                    </Text>
                    <Text
                      className={`${textBaseRegular} uppercase text-gray-500`}
                    >
                      Saved
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex flex-col gap-y-4">
                <View className="flex flex-row items-center gap-x-2">
                  <Text className={`${textLargeSemi} `}>Recent orders</Text>
                </View>
                <View className="flex flex-col gap-y-4">
                  {orders ? (
                    orders.slice(0, 5).map((order) => {
                      return (
                        <View key={order.id}>
                          <Link href={`/order/details/${order.id}`}>
                            <View className="flex flex-row items-center justify-between bg-gray-50 p-4">
                              <View
                                className={`${textSmallRegular} grid flex-1 grid-cols-3 grid-rows-2 gap-x-4 `}
                              >
                                <Text className="font-semibold">
                                  Date placed
                                </Text>
                                <Text className="font-semibold">
                                  Order number
                                </Text>
                                <Text className="font-semibold">
                                  Total amount
                                </Text>
                                <Text>
                                  {new Date(order.created_at).toDateString()}
                                </Text>
                                <Text>#{order.display_id}</Text>
                                <Text>
                                  {formatAmount({
                                    amount: order.total,
                                    region: order.region,
                                    includeTaxes: false,
                                  })}
                                </Text>
                              </View>
                              <Pressable
                                className="flex flex-row items-center justify-between"
                                // onPress={close}
                              >
                                <Text className="sr-only">
                                  Go to order #{order.display_id}
                                </Text>
                                <ChevronDown className="-rotate-90" />
                              </Pressable>
                            </View>
                          </Link>
                        </View>
                      )
                    })
                  ) : (
                    <Text>No recent orders</Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>

        <Pressable className={'web:hidden'} onPress={handleLogout}>
          <View className="mt-5 flex w-[100%] flex-row justify-center border border-gray-200 px-2 py-4">
            <View className="">
              <Text>Logout</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  )
}

const getProfileCompletion = (customer?: Omit<Customer, 'password_hash'>) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  if (customer.billing_address) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
