import { medusaClient } from 'app/lib/config'
import { LOGIN_VIEW, useAccount } from 'app/lib/context/account-context'
import Button from 'app/modules/common/components/button'
import Input from 'app/modules/common/components/input'
import { useRouter } from 'solito/router'
import { useState } from 'react'
import { View, Text, Pressable, Stack } from 'app/design'

import { FieldValues, useForm, FormProvider } from 'react-hook-form'

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError('Invalid email or password')
  }

  const methods = useForm<SignInCredentials>({
    defaultValues: { email: '', password: '' },
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods
  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        router.push('/account')
      })
      .catch(handleError)
  })

  return (
    <FormProvider {...methods}>
      <View className="m mx-auto flex w-full max-w-sm flex-col items-center">
        <Text className="text-large-semi mb-6 uppercase">Welcome back</Text>
        <Text className="text-base-regular mb-8 text-center text-gray-700">
          Sign in to access an enhanced shopping experience.
        </Text>
        <View className="w-full">
          <Stack space={2} className=" flex w-full flex-col">
            <Input
              label="Email"
              {...register('email', { required: 'Email is required' })}
              autoComplete="email"
              errors={errors}
              isSubmitting={isSubmitting}
            />
            <Input
              label="Password"
              {...register('password', { required: 'Password is required' })}
              type="password"
              autoComplete="current-password"
              errors={errors}
              isSubmitting={isSubmitting}
            />
          </Stack>
          {authError && (
            <View>
              <Text className="text-small-regular w-full text-rose-500">
                These credentials do not match our records
              </Text>
            </View>
          )}
          <Button style="mt-6" onPress={onSubmit}>
            Enter
          </Button>
        </View>
        <Text className="text-small-regular mt-6 text-center text-gray-700">
          Not a member?{' '}
          <Pressable onPress={() => setCurrentView(LOGIN_VIEW.REGISTER)}>
            <Text className="underline">Join us</Text>
          </Pressable>
          .
        </Text>
      </View>
    </FormProvider>
  )
}

export default Login
