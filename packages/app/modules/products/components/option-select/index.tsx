import { onlyUnique } from 'app/lib/util/only-unique'
import { ProductOption } from '@medusajs/medusa'
import clsx from 'clsx'
import React from 'react'
import { View, Text, Pressable, Tiles } from 'app/design'

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  return (
    <View className="flex-column flex gap-y-3">
      <Text className="text-base-semi">Select {title}</Text>
      <Tiles space={2} columns={[3, 6]} className="">
        {filteredOptions.map((v) => {
          return (
            <Pressable
              onPress={() => updateOption({ [option.id]: v })}
              key={v}
              className={clsx(
                `text-xsmall-regular h-[50px] items-center justify-center border  transition-all duration-200`,
                { 'border-gray-200': v !== current },
                { 'border-gray-900': v === current }
              )}
            >
              <Text>{v}</Text>
            </Pressable>
          )
        })}
      </Tiles>
    </View>
  )
}

export default OptionSelect
