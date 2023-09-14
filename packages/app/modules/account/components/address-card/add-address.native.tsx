import { medusaClient } from 'app/lib/config'
import { useAccount } from 'app/lib/context/account-context'
import useToggleState from 'app/lib/hooks/use-toggle-state'
import CountrySelect from 'app/modules/checkout/components/country-select'
import Button from 'app/modules/common/components/button'
import Input from 'app/modules/common/components/input'
import Modal from 'app/modules/common/components/modal'
import Plus from 'app/modules/common/icons/plus'
import Spinner from 'app/modules/common/icons/spinner'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View, Text, Pressable, Columns, Column, Stack, Row } from 'app/design'

import { FormProvider, useForm } from 'react-hook-form'
import { Platform } from 'react-native'
import BottomSheet, {
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import {
  textBaseSemi,
  textSmallRegular,
} from '../../../../design/tailwind/custom-css-classes'

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

const AddAddressNative: React.FC = () => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { refetchCustomer } = useAccount()
  const methods = useForm<FormValues>()
  const {
    setValue,
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods

  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['65%', '65%'], [])
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])

  const handleClose = () => {
    reset({
      first_name: '',
      last_name: '',
      city: '',
      country_code: '',
      postal_code: '',
      address_1: '',
      address_2: '',
      company: '',
      phone: '',
      province: '',
    })
    bottomSheetRef.current?.close()
  }

  const submit = handleSubmit(async (data: FormValues) => {
    setSubmitting(true)
    setError(undefined)

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      company: data.company || '',
      address_1: data.address_1,
      address_2: data.address_2 || '',
      city: data.city,
      country_code: data.country_code,
      province: data.province || '',
      postal_code: data.postal_code,
      phone: data.phone || '',
      metadata: {},
    }

    medusaClient.customers.addresses
      .addAddress({ address: payload })
      .then(() => {
        setSubmitting(false)
        refetchCustomer()
        handleClose()
      })
      .catch(() => {
        setSubmitting(false)
        setError('Failed to add address, please try again.')
      })
  })

  return (
    <>
      <Pressable
        className=" ios:max-h-[200px] web:min-h-[220px] mb-2 flex h-full flex-col justify-between border border-gray-200 p-5"
        onPress={handlePresentModalPress}
      >
        <Text className={` ${textBaseSemi} `}>New address</Text>
        <Plus size={24} />
      </Pressable>

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
              <Columns space={2}>
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
              </Columns>
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
              <Columns space={2}>
                <Column width={'1/3'}>
                  <Input
                    label="Postal code"
                    {...register('postal_code', {
                      required: 'Postal code is required',
                    })}
                    required
                    errors={errors}
                    autoComplete="postal-code"
                  />
                </Column>
                <Column width={'2/3'}>
                  <Input
                    label="City"
                    {...register('city', {
                      required: 'City is required',
                    })}
                    errors={errors}
                    required
                    autoComplete="locality"
                  />
                </Column>
              </Columns>
              <Input
                label="Province / State"
                {...register('province')}
                errors={errors}
                autoComplete="address-level1"
              />

              <CountrySelect setValue={setValue} control={control} />
              <Input
                label="Phone"
                {...register('phone')}
                errors={errors}
                autoComplete="phone"
              />
            </Stack>
            {error && (
              <Text className={`${textSmallRegular} py-2 text-rose-500`}>
                {error}
              </Text>
            )}

            <Modal.Footer>
              <Button
                style="min-h-0 !border-gray-200 !bg-gray-200 !text-gray-900"
                onPress={handleClose}
              >
                Cancel
              </Button>
              <Button style="min-h-0" onPress={submit} disabled={submitting}>
                Save
                {submitting && <Spinner />}
              </Button>
            </Modal.Footer>
          </BottomSheetScrollView>
        </FormProvider>
      </BottomSheetModal>
    </>
  )
}

export default AddAddressNative
