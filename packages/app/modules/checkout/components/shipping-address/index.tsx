import { CheckoutFormValues } from 'app/lib/context/checkout-context'
import { emailRegex } from 'app/lib/util/regex'
import ConnectForm from 'app/modules/common/components/connect-form'
import Input from 'app/modules/common/components/input'
import { orderKeys, useMeCustomer } from 'medusa-react'
import AddressSelect from '../address-select'
import CountrySelect from '../country-select'
import { Text, View, Columns, Stack } from 'app/design'
import { MotiView } from 'moti'

export const FadeIn = ({ children }) => (
  <MotiView
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'timing' }}
  >
    {children}
  </MotiView>
)

const ShippingAddress = () => {
  const { customer } = useMeCustomer()
  return (
    <FadeIn>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <View className="z-10 mb-6 flex flex-col gap-y-4 bg-amber-100 p-4">
          <Text className="text-small-regular mb-2">
            {`Hi ${customer.first_name}, do you want to use one of your saved addresses?`}
          </Text>
          <AddressSelect addresses={customer.shipping_addresses} />
        </View>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState }) => {
          const { errors, touchedFields, isSubmitting } = formState

          console.log('register', register)
          console.log('formState', formState)
          // return null
          return (
            <Stack space={2} className="bg-white">
              <Input
                removeAnimation
                label="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: emailRegex,
                })}
                autoComplete="email"
                errors={errors}
                touched={touchedFields}
                isSubmitting={isSubmitting}
              />
              <Columns space={2}>
                <Input
                  removeAnimation
                  label="First name"
                  {...register('shipping_address.first_name', {
                    required: 'First name is required',
                  })}
                  autoComplete="given-name"
                  errors={errors}
                  touched={touchedFields}
                  isSubmitting={isSubmitting}
                />
                <Input
                  removeAnimation
                  label="Last name"
                  {...register('shipping_address.last_name', {
                    required: 'Last name is required',
                  })}
                  autoComplete="family-name"
                  errors={errors}
                  touched={touchedFields}
                  isSubmitting={isSubmitting}
                />
              </Columns>
              <Input
                removeAnimation
                label="Company"
                {...register('shipping_address.company')}
                autoComplete="organization"
                errors={errors}
                touched={touchedFields}
                isSubmitting={isSubmitting}
              />
              <Input
                removeAnimation
                label="Address"
                {...register('shipping_address.address_1', {
                  required: 'Address is required',
                })}
                autoComplete="address-line1"
                errors={errors}
                touched={touchedFields}
                isSubmitting={isSubmitting}
              />
              <Input
                removeAnimation
                label="Apartments, suite, etc."
                {...register('shipping_address.address_2')}
                autoComplete="address-line2"
                errors={errors}
                touched={touchedFields}
                isSubmitting={isSubmitting}
              />
              <Columns space={2}>
                <Input
                  removeAnimation
                  label="Postal code"
                  {...register('shipping_address.postal_code', {
                    required: 'Postal code is required',
                  })}
                  autoComplete="postal-code"
                  errors={errors}
                  touched={touchedFields}
                  isSubmitting={isSubmitting}
                />
                <Input
                  removeAnimation
                  label="City"
                  {...register('shipping_address.city', {
                    required: 'City is required',
                  })}
                  autoComplete="address-level2"
                  errors={errors}
                  touched={touchedFields}
                  isSubmitting={isSubmitting}
                />
              </Columns>
              {/*<CountrySelect*/}
              {/*  {...register('shipping_address.country_code', {*/}
              {/*    required: 'Country is required',*/}
              {/*  })}*/}
              {/*  autoComplete="country"*/}
              {/*  errors={errors}*/}
              {/*  touched={touchedFields}*/}
              {/*/>*/}
              <Input
                removeAnimation
                label="State / Province"
                {...register('shipping_address.province')}
                autoComplete="address-level1"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                removeAnimation
                label="Phone"
                {...register('shipping_address.phone')}
                autoComplete="tel"
                errors={errors}
                touched={touchedFields}
              />
            </Stack>
          )
        }}
      </ConnectForm>
    </FadeIn>
  )
}

export default ShippingAddress
