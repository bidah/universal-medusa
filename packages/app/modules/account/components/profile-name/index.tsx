import { useAccount } from 'app/lib/context/account-context'
import { Customer } from '@medusajs/medusa'
import Input from 'app/modules/common/components/input'
import { useUpdateMe } from 'medusa-react'
import React, { useEffect } from 'react'
import { View, Text, Columns } from 'app/design'

import { useForm, useWatch, FormProvider } from 'react-hook-form'
import AccountInfo from '../account-info'

type MyInformationProps = {
  customer: Omit<Customer, 'password_hash'>
}

type UpdateCustomerNameFormData = {
  first_name: string
  last_name: string
}

const ProfileName: React.FC<MyInformationProps> = ({ customer }) => {
  const methods = useForm<UpdateCustomerNameFormData>({
    defaultValues: {
      first_name: customer.first_name,
      last_name: customer.last_name,
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
      first_name: customer.first_name,
      last_name: customer.last_name,
    })
  }, [customer, reset])

  const firstName = useWatch({
    control,
    name: 'first_name',
  })
  const lastName = useWatch({
    control,
    name: 'last_name',
  })

  const updateName = (data: UpdateCustomerNameFormData) => {
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
        handleSubmit={handleSubmit(updateName)}
        label="Name"
        currentInfo={`${customer.first_name} ${customer.last_name}`}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        clearState={clearState}
      >
        <Columns space={2}>
          {/*<View className="grid grid-cols-2 gap-x-4">*/}
          <Input
            label="First name"
            {...register('first_name', {
              required: true,
            })}
            defaultValue={firstName}
            errors={errors}
          />
          <Input
            label="Last name"
            {...register('last_name', { required: true })}
            defaultValue={lastName}
            errors={errors}
          />
        </Columns>
      </AccountInfo>
    </FormProvider>
  )
}

export default ProfileName
