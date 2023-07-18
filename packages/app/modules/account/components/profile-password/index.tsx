import { medusaClient } from 'app/lib/config'
import { Customer } from '@medusajs/medusa'
import Input from 'app/modules/common/components/input'
import { useUpdateMe } from 'medusa-react'
import React, { useEffect } from 'react'
import { View, Text } from 'app/design'

import { FormProvider, useForm } from 'react-hook-form'
import AccountInfo from '../account-info'

type MyInformationProps = {
  customer: Omit<Customer, 'password_hash'>
}

type UpdateCustomerPasswordFormData = {
  old_password: string
  new_password: string
  confirm_password: string
}

const ProfileName: React.FC<MyInformationProps> = ({ customer }) => {
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    undefined
  )
  const methods = useForm<UpdateCustomerPasswordFormData>()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = methods

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  useEffect(() => {
    reset()
  }, [customer, reset])

  const updatePassword = async (data: UpdateCustomerPasswordFormData) => {
    const isValid = await medusaClient.auth
      .authenticate({
        email: customer.email,
        password: data.old_password,
      })
      .then(() => true)
      .catch(() => false)

    if (!isValid) {
      setError('old_password', {
        type: 'validate',
        message: 'Old password is incorrect',
      })
      setErrorMessage('Old password is incorrect')

      return
    }

    if (data.new_password !== data.confirm_password) {
      setError('confirm_password', {
        type: 'validate',
        message: 'Passwords do not match',
      })
      setErrorMessage('Passwords do not match')

      return
    }

    return update({
      id: customer.id,
      password: data.new_password,
    })
  }

  return (
    <FormProvider {...methods}>
      <AccountInfo
        handleSubmit={handleSubmit(updatePassword)}
        label="Password"
        currentInfo={
          <Text>Password hidden for security reasons</Text>
        }
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage={errorMessage}
        clearState={clearState}
      >
        <View className="grid grid-cols-2 gap-4">
          <Input
            label="Old password"
            {...register('old_password', {
              required: true,
            })}
            type="password"
            errors={errors}
          />
          <Input
            label="New password"
            type="password"
            {...register('new_password', { required: true })}
            errors={errors}
          />
          <Input
            label="Confirm password"
            type="password"
            {...register('confirm_password', { required: true })}
            errors={errors}
          />
        </View>
      </AccountInfo>
    </FormProvider>
  )
}

export default ProfileName
