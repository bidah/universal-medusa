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

type UpdateCustomerEmailFormData = {
  email: string
}

const ProfileEmail: React.FC<MyInformationProps> = ({ customer }) => {
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    undefined
  )

  const methods = useForm<UpdateCustomerEmailFormData>({
    defaultValues: {
      email: customer.email,
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
      email: customer.email,
    })
  }, [customer, reset])

  const email = useWatch({
    control,
    name: 'email',
  })

  const updateEmail = (data: UpdateCustomerEmailFormData) => {
    return update(
      {
        id: customer.id,
        ...data,
      },
      {
        onSuccess: () => {
          refetchCustomer()
        },
        onError: () => {
          setErrorMessage('Email already in use')
        },
      }
    )
  }

  return (
    <FormProvider {...methods}>
      <AccountInfo
        handleSubmit={handleSubmit(updateEmail)}
        label="Email"
        currentInfo={`${customer.email}`}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage={errorMessage}
        clearState={clearState}
      >
        <View className="grid grid-cols-1 gap-y-2">
          <Input
            label="Email"
            {...register('email', {
              required: true,
            })}
            defaultValue={email}
            errors={errors}
          />
        </View>
      </AccountInfo>
    </FormProvider>
  )
}

export default ProfileEmail
