import { LineItem, Region } from '@medusajs/medusa'
import Item from 'app/modules/cart/components/item'
import SkeletonLineItem from 'app/modules/skeletons/components/skeleton-line-item'
import { Text, View, Stack } from 'app/design'
import { textXlSemi } from '../../../design/tailwind/custom-css-classes'
import { Platform } from 'react-native'

type ItemsTemplateProps = {
  items?: Omit<LineItem, 'beforeInsert'>[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <View className={''}>
      {Platform.OS === 'web' && (
        <View
          className={
            'ios:hidden android:hidden flex items-center border-b border-gray-200 pb-3'
          }
        >
          <Text className={`${textXlSemi}`}>Shopping Bag</Text>
        </View>
      )}
      <Stack space={8} className={'web:py-8 ios:pb-8 android:pb-8'}>
        {items && region
          ? items
              .sort((a, b) => {
                return a.created_at > b.created_at ? -1 : 1
              })
              .map((item) => {
                return <Item key={item.id} item={item} region={region} />
              })
          : Array.from(Array(5).keys()).map((i) => {
              return <SkeletonLineItem key={i} />
            })}
      </Stack>
    </View>
  )
}

export default ItemsTemplate
