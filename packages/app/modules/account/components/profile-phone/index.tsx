import { useAccount } from 'app/lib/context/account-context'
import { Customer } from '@medusajs/medusa'
import Input from 'app/modules/common/components/input'
import { useUpdateMe } from 'medusa-react'
import React, { useEffect } from 'react'
import { View, Text } from 'app/design'

import { FormProvider, useForm, useWatch } from 'react-hook-form'
import AccountInfo from '../account-info'

type MyInformationProps = {
  customer: Omit<Customer, 'password_hash'>
}

type UpdateCustomerPhoneFormData = {
  phone: string
}

const ProfilePhone: React.FC<MyInformationProps> = ({ customer }) => {
  const methods = useForm<UpdateCustomerPhoneFormData>({
    defaultValues: {
      phone: customer.phone,
    },
  })
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods

  const { refetchCustomer } = useAccount()

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  useEffect(() => {
    reset({
      phone: customer.phone,
    })
  }, [customer, reset])

  const phone = useWatch({
    control,
    name: 'phone',
  })

  const updatePhone = (data: UpdateCustomerPhoneFormData) => {
    return update(
      {
        id: customer.id,
        ...data,
      },
      {
        onSuccess: () => {
          refetchCustomer()
        },
      }
    )
  }

  return (
    <FormProvider {...methods}>
      <AccountInfo
        handleSubmit={handleSubmit(updatePhone)}
        label="Phone"
        currentInfo={`${customer.phone}`}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        clearState={clearState}
      >
        <View className="grid grid-cols-1 gap-y-2">
          <Input
            label="Phone"
            {...register('phone', {
              required: true,
            })}
            defaultValue={phone}
            errors={errors}
          />
        </View>
      </AccountInfo>
    </FormProvider>
  )
}

export default ProfilePhone
