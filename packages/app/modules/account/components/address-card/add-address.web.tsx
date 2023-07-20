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
import { View, Text, Pressable } from 'app/design'

import { FormProvider, useForm } from 'react-hook-form'
import { Platform } from 'react-native'

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

const AddAddress: React.FC = () => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { refetchCustomer } = useAccount()
  const methods = useForm<FormValues>()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods

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
    close()
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
      .then((res) => {
        console.log('add address ok', res)
        setSubmitting(false)
        refetchCustomer()
        handleClose()
      })
      .catch((e) => {
        console.log('add address error', e)
        setSubmitting(false)
        setError('Failed to add address, please try again.')
      })
  })

  return (
    <FormProvider {...methods}>
      <Pressable
        className="flex h-full min-h-[220px] w-full flex-col justify-between border border-gray-200 p-5"
        onPress={open}
      >
        <Text className="text-base-semi">New address</Text>
        <Plus size={24} />
      </Pressable>

      <Modal isOpen={state} close={handleClose}>
        <Modal.Title>Add address</Modal.Title>
        <Modal.Body>
          <View className="grid grid-cols-1 gap-y-2">
            <View className="grid grid-cols-2 gap-x-2">
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
            </View>
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
            <View className="grid grid-cols-[144px_1fr] gap-x-2">
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
            </View>
            <Input
              label="Province / State"
              {...register('province')}
              errors={errors}
              autoComplete="address-level1"
            />
            <CountrySelect
              {...register('country_code', { required: true })}
              autoComplete="country"
            />
            <Input
              label="Phone"
              {...register('phone')}
              errors={errors}
              autoComplete="phone"
            />
          </View>
          {error && (
            <View className="text-small-regular py-2 text-rose-500">
              {error}
            </View>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="min-h-0 !border-gray-200 !bg-gray-200 !text-gray-900"
            onPress={handleClose}
          >
            Cancel
          </Button>
          <Button className="min-h-0" onPress={submit} disabled={submitting}>
            Save
            {submitting && <Spinner />}
          </Button>
        </Modal.Footer>
      </Modal>
    </FormProvider>
  )
}

export default AddAddress
