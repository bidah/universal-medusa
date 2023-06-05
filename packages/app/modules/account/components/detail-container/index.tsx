import React from 'react'
import {View, Text} from 'app/design'


type DetailProps = {
  title: string
}

type SubDetailProps = {
  title?: string
}

const Detail: React.FC<DetailProps> & {
  SubDetail: React.FC<SubDetailProps>
} = ({ title, children }) => {
  return (
    <View>
      <Text className="text-large-semi mb-2">{title}</h2>
      <View className="text-small-regular flex flex-col gap-y-4">
        {children}
      </View>
    </View>
  )
}

const SubDetail: React.FC<SubDetailProps> = ({ title, children }) => {
  return (
    <View className="flex flex-col">
      {title && <Text className="text-base-semi">{title}</Text>}
      <View className="text-small-regular">{children}</View>
    </View>
  )
}

Detail.SubDetail = SubDetail

export default Detail
