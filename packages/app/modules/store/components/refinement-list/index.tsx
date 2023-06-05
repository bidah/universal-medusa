import { StoreGetProductsParams } from '@medusajs/medusa'
import { useCollections } from 'medusa-react'
import { ChangeEvent } from 'react'
import Checkbox from '../../../common/components/checkbox'
import { View, Pressable, Text } from 'app/design'
import {
  textBaseRegular,
  textBaseSemi,
} from '../../../../design/tailwind/custom-css-classes'

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}

const RefinementList = ({
  refinementList,
  setRefinementList,
}: RefinementListProps) => {
  const { collections, isLoading } = useCollections()

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target

    const collectionIds = refinementList.collection_id || []

    const exists = collectionIds.includes(id)

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        collection_id: [...collectionIds, id],
      })

      return
    }

    if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        collection_id: collectionIds.filter((c) => c !== id),
      })

      return
    }

    return
  }

  return (
    <View>
      <View className="small:pr-0 small:pl-8 small:min-w-[250px] small:px-8 px-2 py-4">
        <View className="small:flex-col small:gap-y-3 flex gap-x-3">
          <Text className={textBaseSemi}>Collections</Text>
          <View
            className={`${textBaseRegular} small:grid small:grid-cols-1 small:gap-y-2 flex items-center gap-x-4`}
          >
            {collections?.map((c) => (
              <View className="flex items-center gap-x-2" key={c.id}>
                <Checkbox
                  label={c.title}
                  checked={refinementList.collection_id?.includes(c.id)}
                  onChange={(e) => handleCollectionChange(e, c.id)}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}

export default RefinementList
