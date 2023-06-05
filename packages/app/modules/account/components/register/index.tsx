import { medusaClient } from 'app/lib/config'
import { LOGIN_VIEW, useAccount } from 'app/lib/context/account-context'
import Button from 'app/modules/common/components/button'
import Input from 'app/modules/common/components/input'
import Link from 'next/link'
import { useRouter } from 'solito/router'
import { useState } from 'react'
import { View, Text } from 'app/design'

import { FieldValues, FormProvider, useForm } from 'react-hook-form'

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    console.error(e)
    setAuthError('An error occured. Please try again.')
  }

  const methods = useForm<RegisterCredentials>()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods

  const onSubmit = handleSubmit(async (credentials) => {
    console.log('credentials', credentials)
    medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push('/account')
      })
      .catch(handleError)
  })

  return (
    <FormProvider {...methods}>
      <View className="mt-12 flex max-w-sm flex-col items-center">
        <Text className="text-large-semi mb-6 uppercase">
          Become a Acme Member
        </Text>
        <Text className="text-base-regular mb-4 text-center text-gray-700">
          Create your Acme Member profile, and get access to an enhanced
          shopping experience.
        </Text>
        <View className="flex w-full flex-col">
          <View className="flex w-full flex-col gap-y-2">
            <Input
              label="First name"
              {...register('first_name', {
                required: 'First name is required',
              })}
              autoComplete="given-name"
              errors={errors}
              isSubmitting={isSubmitting}
            />
            <Input
              label="Last name"
              {...register('last_name', { required: 'Last name is required' })}
              autoComplete="family-name"
              errors={errors}
              isSubmitting={isSubmitting}
            />
            <Input
              label="Email"
              {...register('email', { required: 'Email is required' })}
              autoComplete="email"
              errors={errors}
              isSubmitting={isSubmitting}
            />
            <Input
              label="Phone"
              {...register('phone')}
              autoComplete="tel"
              errors={errors}
              isSubmitting={isSubmitting}
            />
            <Input
              label="Password"
              {...register('password', {
                required: 'Password is required',
              })}
              type="password"
              autoComplete="new-password"
              errors={errors}
              isSubmitting={isSubmitting}
            />
          </View>
          {authError && (
            <View>
              <Text className="text-small-regular w-full text-rose-500">
                These credentials do not match our records
                {JSON.stringify(authError, null, 2)}
              </Text>
            </View>
          )}
          {/*TODO: Add privacy policy and terms of use back in*/}
          {/*<Text className="text-small-regular mt-6 text-center text-gray-700">*/}
          {/*  By creating an account, you agree to Acme&apos;s{' '}*/}
          {/*  <Link href="/content/privacy-policy">*/}
          {/*    <a className="underline">Privacy Policy</a>*/}
          {/*  </Link>{' '}*/}
          {/*  and{' '}*/}
          {/*  <Link href="/content/terms-of-use">*/}
          {/*    <a className="underline">Terms of Use</a>*/}
          {/*  </Link>*/}
          {/*  .*/}
          {/*</Text>*/}
          <Button className="mt-6" onPress={onSubmit}>
            Join
          </Button>
        </View>
        <Text className="text-small-regular mt-6 text-center text-gray-700">
          Already a member?{' '}
          <Button
            onPress={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
            style="underline"
          >
            Sign in
          </Button>
          .
        </Text>
      </View>
    </FormProvider>
  )
}

export default Register
