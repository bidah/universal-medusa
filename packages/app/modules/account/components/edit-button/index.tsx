import React from 'react'
import { View, Pressable, Text } from 'app/design'

const EditButton: React.FC = (props) => {
  return (
    <Pressable {...props}>
      <Text className="text-small-regular mt-2 text-gray-700 underline">
        Edit
      </Text>
    </Pressable>
  )
}

export default EditButton
