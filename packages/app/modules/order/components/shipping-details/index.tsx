import { Address, ShippingMethod } from "@medusajs/medusa"
import {View, Text} from 'app/design'
import {textBaseRegular, textBaseSemi, textSmallRegular} from "../../../../design/tailwind/custom-css-classes";

type ShippingDetailsProps = {
  address: Address
  shippingMethods: ShippingMethod[]
}

const ShippingDetails = ({
  address,
  shippingMethods,
}: ShippingDetailsProps) => {
  return (
    <View className={textBaseRegular}>
      <Text className={textBaseSemi}>Delivery</Text>
      <View className="my-2">
        <Text className={ `${textSmallRegular} text-gray-700 `}>Address</Text>
        <View className="flex flex-col">
          <Text>{`${address.first_name} ${address.last_name}`}</Text>
          <Text>{`${address.address_1}${
            address.address_2 && ", " + address.address_2
          }`}</Text>
          <Text>{`${address.city}, ${address.province} ${address.postal_code}`}</Text>
          <Text>{address.country_code?.toUpperCase()}</Text>
        </View>
      </View>
      <View className="my-2">
        <Text className={`${textSmallRegular} text-gray-700`}>Delivery method</Text>
        <View>
          {shippingMethods.map((sm) => {
            return <Text key={sm.id}>{sm.shipping_option.name}</Text>
          })}
        </View>
      </View>
    </View>
  )
}

export default ShippingDetails
