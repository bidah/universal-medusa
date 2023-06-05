import React from 'react'
import { Pressable, Text, View } from '../../../../design'
import { textBaseRegular } from '../../../../design/tailwind/custom-css-classes'

type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
  label: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  label,
}) => {
  return (
    <Pressable
      onPress={onChange}
      className="flex flex-row items-center gap-x-2"
      type="button"
      aria-checked={checked}
    >
      <View
        aria-checked={checked}
        className="flex h-5 w-5 items-center justify-center border border-gray-900"
      >
        <Text>{checked ? '✓' : null}</Text>
      </View>
      <Text>{label}</Text>
    </Pressable>
  )
}

export default Checkbox
