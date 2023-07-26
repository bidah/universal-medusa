import { useCheckout } from 'app/lib/context/checkout-context'
import Button from 'app/modules/common/components/button'
import Checkbox from 'app/modules/common/components/checkbox'
import Spinner from 'app/modules/common/icons/spinner'
import BillingAddress from '../billing_address'
import ShippingAddress from '../shipping-address'
import { ScrollView, View, Text, Pressable } from 'app/design'
import {
  textSmallRegular,
  textXlSemi,
} from '../../../../design/tailwind/custom-css-classes'

const Addresses = () => {
  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isEdit, toggle: setEdit },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()
  return (
    <View className="bg-white">
      <View className="small:px-8 flex flex-row items-center gap-x-4 px-0 pb-6 pt-8 ">
        <View className="flex h-8 w-8 flex-row items-center justify-center rounded-full bg-gray-900 ">
          <Text className={`text-sm font-bold text-white`}>1</Text>
        </View>
        <Text className={`${textXlSemi} `}>Shipping address</Text>
      </View>
      {isEdit ? (
        <View className="small:px-8 px-0 pb-8">
          <ShippingAddress />
          <View className="mt-6">
            <Checkbox
              label="Same as billing address"
              checked={checked}
              onChange={onChange}
            />
          </View>
          {!checked && (
            <View>
              <View className="text-xl-semi flex flex-row items-center gap-x-4 pb-6 pt-8">
                <View className="flex h-8 w-8 flex-row items-center justify-center rounded-full bg-gray-900 font-mono ">
                  <Text className={'text-sm font-bold text-white'}>2</Text>
                </View>
                <Text className={`${textXlSemi} `}>Billing address</Text>
              </View>
              <BillingAddress />
            </View>
          )}
          <Button
            style="mt-6 max-w-[200px]"
            onPress={handleSubmit(setAddresses)}
          >
            Continue to delivery
          </Button>
        </View>
      ) : (
        <View>
          <View className="small:px-8  bg-gray-50 px-0 py-6">
            {cart && cart.shipping_address ? (
              <View className="flex flex-row items-start gap-x-8">
                <View className=" flex h-6 min-w-[24px] flex-row items-center justify-center rounded-full bg-green-400">
                  <Text className={`${textSmallRegular} text-white`}>✓</Text>
                </View>
                <View className="flex w-full flex-row items-start justify-between">
                  <View className="flex flex-col">
                    <Text>
                      {cart.shipping_address.first_name}{' '}
                      {cart.shipping_address.last_name}
                    </Text>
                    <Text>
                      {cart.shipping_address.address_1}{' '}
                      {cart.shipping_address.address_2}
                    </Text>
                    <Text>
                      {cart.shipping_address.postal_code},{' '}
                      {cart.shipping_address.city}
                    </Text>
                    <Text>
                      {cart.shipping_address.country_code?.toUpperCase()}
                    </Text>
                    <View className="mt-4 flex flex-col">
                      <Text>{cart.shipping_address.phone}</Text>
                      <Text>{cart.email}</Text>
                    </View>
                    {checked && (
                      <View className="mt-6 flex flex-row items-center gap-x-2">
                        <View className="flex h-5 w-5 items-center justify-center border border-gray-900">
                          <Text className={`${textSmallRegular} text-black`}>
                            ✓
                          </Text>
                        </View>

                        <Text className={`${textSmallRegular} text-black`}>
                          Same as billing address
                        </Text>
                      </View>
                    )}
                  </View>
                  <View className={'mx-8'}>
                    <Pressable onPress={setEdit}>
                      <Text>Edit</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            ) : (
              <View className="">
                <Spinner />
              </View>
            )}
          </View>
          {!checked && (
            <View>
              <View className="text-xl-semi flex hidden flex-row items-center gap-x-4 px-8 pb-6 pt-8">
                <View className="flex h-8 w-8 flex-row items-center justify-center rounded-full bg-gray-900 font-mono text-sm">
                  <Text className={`${textSmallRegular} font-bold text-white`}>
                    2
                  </Text>
                </View>
                <Text>Billing address</Text>
              </View>
              <View className="small:px-8 bg-gray-50 px-0 py-6">
                {cart && cart.billing_address ? (
                  <View className="flex flex-row items-start gap-x-8">
                    <View className="text-small-regular flex h-6 min-w-[24px] items-center justify-center rounded-full bg-green-400">
                      <Text className={`${textSmallRegular} text-white`}>
                        ✓
                      </Text>
                    </View>
                    <View className="flex w-full flex-row items-start justify-between ">
                      <View className="flex flex-col">
                        <Text>
                          {cart.billing_address.first_name}{' '}
                          {cart.billing_address.last_name}
                        </Text>
                        <Text>
                          {cart.billing_address.address_1}{' '}
                          {cart.billing_address.address_2}
                        </Text>
                        <Text>
                          {cart.billing_address.postal_code},{' '}
                          {cart.billing_address.city}
                        </Text>
                        <Text>
                          {cart.billing_address.country_code?.toUpperCase()}
                        </Text>

                        <View className="mt-4 flex flex-col">
                          <Text>{cart.billing_address.phone}</Text>
                        </View>
                      </View>
                      <Pressable onPress={setEdit}>
                        <Text>Edit</Text>
                      </Pressable>
                    </View>
                  </View>
                ) : (
                  <View className="">
                    <Spinner />
                  </View>
                )}
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  )
}

export default Addresses
