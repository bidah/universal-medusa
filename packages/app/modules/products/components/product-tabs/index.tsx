import { Product } from '@medusajs/medusa'
import Back from 'app/modules/common/icons/back'
import FastDelivery from 'app/modules/common/icons/fast-delivery'
import Refresh from 'app/modules/common/icons/refresh'
import clsx from 'clsx'
import { useMemo, useState } from 'react'
import { View, Text, Pressable, Stack, Columns } from 'app/design'
import { Column } from '@mobily/stacks'
import { textSmallRegular } from '../../../../design/tailwind/custom-css-classes'

type ProductTabsProps = {
  product: Product
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = useMemo(() => {
    return [
      {
        label: 'Product Information',
        component: <ProductInfoTab product={product} />,
      },
      {
        label: 'Shipping & Returns',
        component: <ShippingInfoTab />,
      },
    ]
  }, [product])

  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].label)

  return (
    <View>
      <View className="space-between flex flex-row items-stretch border-b border-gray-200">
        {tabs.map((tab, i) => {
          return (
            <View
              key={i}
              className={
                selectedTab === tab.label
                  ? 'top-[1px] flex w-1/2 items-start justify-end border-b border-gray-900'
                  : 'top-[1px] flex w-1/2 justify-end border-b border-gray-200'
              }
            >
              <Pressable onPress={() => setSelectedTab(tab.label)} key={i}>
                <Text
                  className={clsx(
                    `${textSmallRegular} transition-color -mb-px pb-2 text-left uppercase duration-150 ease-in-out`
                  )}
                >
                  {tab.label}
                </Text>
              </Pressable>
            </View>
          )
        })}
      </View>
      <View>
        {tabs.map((tab, j) => {
          return (
            <View className={selectedTab !== tab.label ? 'hidden' : ''} key={j}>
              {tab.component}
            </View>
          )
        })}
      </View>
    </View>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <View className={`${textSmallRegular} py-8`}>
      <Columns space={4} className=" gap-x-8 ">
        <View className="flex flex-col gap-y-4 ">
          <View>
            <Text className="font-semibold">Material</Text>
            <Text>{product.origin_country ? product.origin_country : '-'}</Text>
          </View>
          <View>
            <Text className="font-semibold">Country of origin</Text>
            <Text>{product.origin_country ? product.origin_country : '-'}</Text>
          </View>
          <View>
            <Text className="font-semibold">Type</Text>
            <Text>{product.type ? product.type.value : '-'}</Text>
          </View>
        </View>
        <View className="flex flex-col gap-y-4 ">
          <View>
            <Text className="font-semibold">Weight</Text>
            <Text>{product.weight ? `${product.weight} g` : '-'}</Text>
          </View>
          <View>
            <Text className="font-semibold">Dimensions</Text>
            <Text>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : '-'}
            </Text>
          </View>
        </View>
      </Columns>
      {product.tags.length ? (
        <View>
          <Text className="font-semibold">Tags</Text>
        </View>
      ) : null}
    </View>
  )
}

const ShippingInfoTab = () => {
  return (
    <View className={`${textSmallRegular} py-8`}>
      <View className="grid grid-cols-1 gap-y-8">
        <View className="flex flex-row items-start gap-x-2">
          <FastDelivery />
          <View>
            <Text className="font-semibold">Fast delivery</Text>
            <Text className="max-w-sm">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-start gap-x-2">
          <Refresh />
          <View>
            <Text className="font-semibold">Simple exchanges</Text>
            <Text className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-start gap-x-2">
          <Back />
          <View>
            <Text className="font-semibold">Easy returns</Text>
            <Text className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductTabs
