import { useStore } from 'app/lib/context/store-context'
import { LineItem, Region } from '@medusajs/medusa'
import LineItemOptions from 'app/modules/common/components/line-item-options'
import LineItemPrice from 'app/modules/common/components/line-item-price'
import NativeSelect from 'app/modules/common/components/native-select'
import Trash from 'app/modules/common/icons/trash'
import Thumbnail from 'app/modules/products/components/thumbnail'
import { CalculatedVariant } from 'app/types/medusa'
import { View, Text, Pressable, Columns } from 'app/design'
import {
  textBaseRegular,
  textSmallRegular,
} from 'app/design/tailwind/custom-css-classes'
import { Platform } from 'react-native'
import { useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'

type ItemProps = {
  item: Omit<LineItem, 'beforeInsert'>
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const { updateItem, deleteItem } = useStore()

  return (
    <View className="flex-row">
      <View className="mr-4 w-[122px]">
        <Thumbnail thumbnail={item.thumbnail} size="full" />
      </View>
      <View className="ios:gap-y-2 web:xsmall:gap-y-2 web:small:gap-y-8 flex flex-1 flex-col">
        <View className="xsmall:flex-column small:flex-row flex  items-start justify-between  ">
          <View className="flex flex-col">
            <Text className={`${textBaseRegular}`}>{item.title}</Text>
            <LineItemOptions variant={item.variant} />
          </View>
          <NativeSelect
            ref={bottomSheetRef}
            value={item.quantity}
            onChange={(value) =>
              updateItem({
                lineId: item.id,
                quantity: parseInt(value.target.value),
              })
            }
            className="max-h-[35px] w-[75px]"
          >
            {Array.from([...Array(item.variant.inventory_quantity)].keys())
              .slice(0, 10)
              .map((i) => {
                const value = i + 1
                return Platform.OS === 'web' ? (
                  <option value={value} key={i}>
                    {value}
                  </option>
                ) : (
                  <Pressable
                    onPress={async () => {
                      updateItem({
                        lineId: item.id,
                        quantity: parseInt(value),
                      })
                      await new Promise((r) => setTimeout(r, 1000))
                      bottomSheetRef?.current?.dismiss()
                    }}
                    className={`my mx-4 mt-2 border border-gray-200 bg-white px-3 py-4 ${
                      item.quantity === value && 'border-gray-900'
                    } ${!i && 'mt-0'}`}
                    key={i}
                  >
                    <Text className={'text-center'}>{value}</Text>
                  </Pressable>
                )
              })}
          </NativeSelect>
        </View>
        <View className=" flex flex-1 flex-row items-end justify-between   ">
          <Pressable
            className="flex flex-row items-center gap-x-1 text-gray-500"
            onPress={() => deleteItem(item.id)}
          >
            <Trash size={14} />
            <Text className={textSmallRegular}>Remove</Text>
          </Pressable>
          <View>
            <LineItemPrice
              variant={item.variant as CalculatedVariant}
              quantity={item.quantity}
              region={region}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Item
