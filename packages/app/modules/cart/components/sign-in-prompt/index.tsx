import Button from 'app/modules/common/components/button'
import { View, Text, Link } from 'app/design'
import {
  textBaseRegular,
  textXlSemi,
} from '../../../../design/tailwind/custom-css-classes'
import { useRouter } from 'solito/router'

const SignInPrompt = () => {
  const { push } = useRouter()
  return (
    <View className=" ios:px-2 flex flex-row items-start justify-between bg-white">
      <View className={'ios:w-2/3 web:2xsmall:w-2/3 web:small:w-[80%]'}>
        <Text className={textXlSemi}>Already have an account?</Text>
        <Text className={`${textBaseRegular} mt-2 w-full text-gray-700`}>
          Sign in for a better experience.
        </Text>
      </View>
      <View className={'ios:w-1/3 web:2xsmall:w-1/3 web:small:w-[20%]'}>
        <Button variant="secondary" onPress={() => push('/account/login')}>
          Sign in now
        </Button>
      </View>
    </View>
  )
}

export default SignInPrompt
