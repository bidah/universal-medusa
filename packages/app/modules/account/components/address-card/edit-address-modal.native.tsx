import { medusaClient } from 'app/lib/config'
import { useAccount } from 'app/lib/context/account-context'
import useToggleState from 'app/lib/hooks/use-toggle-state'
import { Address } from '@medusajs/medusa'
import CountrySelect from 'app/modules/checkout/components/country-select'
import Button from 'app/modules/common/components/button'
import Input from 'app/modules/common/components/input'
import Modal from 'app/modules/common/components/modal'
import Edit from 'app/modules/common/icons/edit'
import Spinner from 'app/modules/common/icons/spinner'
import Trash from 'app/modules/common/icons/trash'
import clsx from 'clsx'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View, Text, Pressable, Columns } from 'app/design'
import { FormProvider, useForm } from 'react-hook-form'
import { textSmallRegular } from '../../../../design/tailwind/custom-css-classes'
import { Stack } from 'app/design'
import BottomSheet, {
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import { useCart, useRegions } from 'medusa-react'
import RemoveAddressDialog from './remove-address-dialog'

type FormValues = {
  first_name: string
  last_name: string
  city: string
  country_code: string
  postal_code: string
  province?: string
  address_1: string
  address_2?: string
  phone?: string
  company?: string
}

type EditAddressProps = {
  address: Address
  isActive?: boolean
}

const EditAddress: React.FC<EditAddressProps> = ({
  address,
  isActive = false,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['85%', '85%'], [])
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])
  const [submitting, setSubmitting] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { regions } = useRegions()
  const { cart } = useCart()

  const { refetchCustomer } = useAccount()

  const methods = useForm<FormValues>({
    defaultValues: {
      first_name: address.first_name || undefined,
      last_name: address.last_name || undefined,
      city: address.city || undefined,
      address_1: address.address_1 || undefined,
      address_2: address.address_2 || undefined,
      country_code: address.country_code || undefined,
      postal_code: address.postal_code || undefined,
      phone: address.phone || undefined,
      company: address.company || undefined,
      province: address.province || undefined,
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const submit = handleSubmit(
    async (data: FormValues) => {
      setSubmitting(true)
      setError(undefined)

      const payload = {
        first_name: data.first_name,
        last_name: data.last_name,
        company: data.company || 'Personal',
        address_1: data.address_1,
        address_2: data.address_2 || '',
        city: data.city,
        country_code: data.country_code,
        province: data.province || '',
        postal_code: data.postal_code,
        phone: data.phone || 'None',
        metadata: {},
      }

      medusaClient.customers.addresses
        .updateAddress(address.id, payload)
        .then(() => {
          setSubmitting(false)
          refetchCustomer()

          bottomSheetRef.current?.close()
        })
        .catch(() => {
          setSubmitting(false)
          setError('Failed to update address, please try again.')
        })
    },
    (e) => {
      console.log(e)
      setError('Failed to update address, please try again.')
    }
  )

  const removeAddress = () => {
    medusaClient.customers.addresses.deleteAddress(address.id).then(() => {
      refetchCustomer()
    })
  }

  return (
    <>
      <RemoveAddressDialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
        removeAddress={removeAddress}
      />
      <View
        className={clsx(
          'ios:mb-2 web:w-full flex min-h-[220px] flex-col justify-between border border-gray-200 p-5 transition-colors',
          {
            'border-gray-900': isActive,
          }
        )}
      >
        <View className="flex flex-col">
          <Text className="text-base-semi text-left">
            {address.first_name} {address.last_name}
          </Text>
          {address.company && (
            <Text className="text-small-regular text-gray-700">
              {address.company}
            </Text>
          )}
          <View className="text-base-regular mt-2 flex flex-col text-left">
            <Text>
              {address.address_1}
              {address.address_2 && <Text>, {address.address_2}</Text>}
            </Text>
            <Text>
              {address.postal_code}, {address.city}
            </Text>
            <Text>
              {address.province && `${address.province}, `}
              {address.country_code?.toUpperCase()}
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center gap-x-4">
          <Pressable
            className="flex flex-row items-center gap-x-2 text-gray-700"
            onPress={handlePresentModalPress}
          >
            <Edit size={16} />
            <Text className={`${textSmallRegular}`}>Edit</Text>
          </Pressable>
          <Pressable
            className={`flex flex-row items-center gap-x-2 text-gray-700`}
            onPress={() => setShowDialog(true)}
          >
            <Trash />
            <Text className={` ${textSmallRegular} `}>Remove</Text>
          </Pressable>
        </View>
      </View>

      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: 'white' }}
        backgroundComponent={(props) => (
          <View {...props} className="border-t-[1px]" />
        )}
      >
        <FormProvider {...methods}>
          <BottomSheetScrollView
            style={{
              marginHorizontal: 8,
            }}
            keyboardShouldPersistTaps={'always'}
          >
            <Stack space={2}>
              <Input
                label="First name"
                {...register('first_name', {
                  required: 'First name is required',
                })}
                required
                errors={errors}
                autoComplete="given-name"
              />
              <Input
                label="Last name"
                {...register('last_name', {
                  required: 'Last name is required',
                })}
                required
                errors={errors}
                autoComplete="family-name"
              />
              <Input label="Company" {...register('company')} errors={errors} />
              <Input
                label="Address"
                {...register('address_1', {
                  required: 'Address is required',
                })}
                required
                errors={errors}
                autoComplete="address-line1"
              />
              <Input
                label="Apartment, suite, etc."
                {...register('address_2')}
                errors={errors}
                autoComplete="address-line2"
              />
              <Input
                label="Postal code"
                {...register('postal_code', {
                  required: 'Postal code is required',
                })}
                required
                errors={errors}
                autoComplete="postal-code"
              />
              <Input
                label="City"
                {...register('city', {
                  required: 'City is required',
                })}
                errors={errors}
                required
                autoComplete="locality"
              />
              <Input
                label="Province / State"
                {...register('province')}
                errors={errors}
                autoComplete="address-level1"
              />
              {/*TODO add country select*/}
              {/*<CountrySelect*/}
              {/*  {...register('country_code', { required: true })}*/}
              {/*  autoComplete="country"*/}
              {/*  bottomSheetRef={bottomSheetRef}*/}
              {/*  regions={regions}*/}
              {/*  cart={cart}*/}
              {/*/>*/}
              <Input
                label="Phone"
                {...register('phone')}
                errors={errors}
                autoComplete="phone"
              />
            </Stack>
            <Modal.Footer>
              <Button
                variant="secondary"
                onPress={() => bottomSheetRef.current?.close()}
              >
                Cancel
              </Button>
              <Button onPress={submit} disabled={submitting}>
                Save
                {submitting && <Spinner color={'white'} className={'ml-2'} />}
              </Button>
            </Modal.Footer>
          </BottomSheetScrollView>
        </FormProvider>
        {error && (
          <Text className={` ${textSmallRegular} py-2 text-rose-500`}>
            {error}
          </Text>
        )}
        {/*</Modal.Body>*/}
      </BottomSheetModal>
    </>
  )
}

export default EditAddress
