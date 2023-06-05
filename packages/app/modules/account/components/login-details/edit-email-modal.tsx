import { useAccount } from 'app/lib/context/account-context'
import useToggleState from 'app/lib/hooks/use-toggle-state'
import { emailRegex } from 'app/lib/util/regex'
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

type EditEmailModalProps = {
  customer: Omit<Customer, 'password_hash'>
}

type FormValues = {
  email: string
}

const EditEmailModal: React.FC<EditEmailModalProps> = ({ customer }) => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { mutate } = useUpdateMe()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: customer.email,
    },
  })

  const { refetchCustomer } = useAccount()

  const submit = handleSubmit((data) => {
    setSubmitting(true)
    setError(undefined)

    if (data.email === customer.email) {
      setSubmitting(false)
      setError('You must enter a new email.')
      return
    }

    mutate(
      { id: customer.id, ...data },
      {
        onSuccess: () => {
          setSubmitting(false)
          refetchCustomer()
          close()
        },
        onError: () => {
          setSubmitting(false)
          setError('Unable to update email, try again later.')
        },
      }
    )
  })

  return (
    <View>
      <EditButton onPress={open} />
      <Modal isOpen={state} close={close}>
        <Modal.Title>Edit your email</Modal.Title>
        <Modal.Body>
          <View className="flex w-full flex-col">
            <Input
              label="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: emailRegex,
                  message: 'Must be a valid email',
                },
              })}
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

export default EditEmailModal
