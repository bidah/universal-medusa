import { medusaClient } from 'app/lib/config'
import { useAccount } from 'app/lib/context/account-context'
import useToggleState from 'app/lib/hooks/use-toggle-state'
import { Customer } from '@medusajs/medusa'
import EditButton from 'app/modules/account/components/edit-button'
import Button from 'app/modules/common/components/button'
import Input from 'app/modules/common/components/input'
import Modal from 'app/modules/common/components/modal'
import Spinner from 'app/modules/common/icons/spinner'
import { useUpdateMe } from 'medusa-react'
import React, { useState } from 'react'
import { View, Text } from 'app/design'

import { useForm } from 'react-hook-form'

type EditPasswordModalProps = {
  customer: Omit<Customer, 'password_hash'>
}

type FormValues = {
  new_password: string
  old_password: string
}

const EditPasswordModal: React.FC<EditPasswordModalProps> = ({ customer }) => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { mutate: update } = useUpdateMe()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      new_password: undefined,
      old_password: undefined,
    },
  })

  const { refetchCustomer } = useAccount()

  const submit = handleSubmit(async (data) => {
    setSubmitting(true)
    setError(undefined)

    if (data.old_password === data.new_password) {
      setSubmitting(false)
      setError('New password must be different from old password.')
      return
    }

    const passwordMatches = await medusaClient.auth
      .authenticate({ email: customer.email, password: data.old_password })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })

    if (!passwordMatches) {
      setError('Old password does not match our records.')
      setSubmitting(false)
      return
    }

    update(
      { id: customer.id, password: data.new_password },
      {
        onSuccess: () => {
          setSubmitting(false)
          refetchCustomer()
          reset({
            new_password: undefined,
            old_password: undefined,
          })
          close()
        },
        onError: () => {
          setSubmitting(false)
          setError('Unable to update password, try again later.')
        },
      }
    )
  })

  return (
    <View>
      <EditButton onPress={open} />
      <Modal isOpen={state} close={close}>
        <Modal.Title>Edit your password</Modal.Title>
        <Modal.Body>
          <View className="flex flex-col gap-y-8">
            <Input
              label="Old password"
              {...register('old_password', {
                required: 'Old password is required',
              })}
              type="password"
              autoComplete="password"
              errors={errors}
            />
            <Input
              label="New password"
              {...register('new_password', {
                required: 'New password is required',
              })}
              type="password"
              autoComplete="new_password"
              errors={errors}
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
            onPress={close}
          >
            Cancel
          </Button>
          <Button className="min-h-0" onPress={submit} disabled={submitting}>
            Save
            {submitting && <Spinner />}
          </Button>
        </Modal.Footer>
      </Modal>
    </View>
  )
}

export default EditPasswordModal
