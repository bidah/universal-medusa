import useToggleState from 'app/lib/hooks/use-toggle-state'
import Button from 'app/modules/common/components/button'
import clsx from 'clsx'
import { useEffect } from 'react'
import { View, Text } from 'app/design'
import { textSmallRegular } from 'app/design/tailwind/custom-css-classes'
type AccountInfoProps = {
  handleSubmit: () => void
  label: string
  currentInfo: string | React.ReactNode
  isLoading?: boolean
  isSuccess?: boolean
  isError?: boolean
  errorMessage?: string
  clearState: () => void
  children?: React.ReactNode
}

const AccountInfo = ({
  handleSubmit,
  label,
  currentInfo,
  isLoading,
  isSuccess,
  isError,
  clearState,
  errorMessage = 'An error occurred, please try again',
  children,
}: AccountInfoProps) => {
  const { state, close, toggle } = useToggleState()

  const handleToggle = () => {
    clearState()
    setTimeout(() => toggle(), 100)
  }

  useEffect(() => {
    if (isSuccess) {
      close()
    }
  }, [isSuccess, close])

  return (
    <View className={`${textSmallRegular}`}>
      <View className="flex flex-row items-end justify-between">
        <View className="flex flex-col">
          <Text className="uppercase text-gray-700">{label}</Text>
          <View className="flex flex-1 flex-row items-center justify-end gap-x-4">
            {typeof currentInfo === 'string' ? (
              <Text className="font-semibold">{currentInfo}</Text>
            ) : (
              <Text className="font-semibold">{currentInfo}</Text>
            )}
          </View>
        </View>
        <View>
          <Button
            variant="secondary"
            style="min-h-[45px] w-[100px] py-1"
            onPress={handleToggle}
            type={state ? 'reset' : 'button'}
          >
            {state ? 'Cancel' : 'Edit'}
          </Button>
        </View>
      </View>

      {/* Success state */}
      <View
        static
        className={clsx(
          'overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out',
          {
            'max-h-[1000px] opacity-100': isSuccess,
            'max-h-0 opacity-0': !isSuccess,
          }
        )}
      >
        <View className="my-4 bg-green-100 p-4">
          <Text className={'text-green-500'}>{label} updated succesfully</Text>
        </View>
      </View>

      {/* Error state  */}
      <View
        static
        className={clsx(
          'overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out',
          {
            'max-h-[1000px] opacity-100': isError,
            'max-h-0 opacity-0': !isError,
          }
        )}
      >
        <View className="mt-4 bg-rose-100 p-4">
          <Text className={'text-rose-500'}>{errorMessage}</Text>
        </View>
      </View>

      <View
        static
        className={clsx(
          'overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out',
          {
            'max-h-[1000px] opacity-100': state,
            'max-h-0 opacity-0': !state,
          }
        )}
      >
        <View className="flex flex-col gap-y-2 py-4">
          <View>{children}</View>
          <View className="mt-2 flex flex-row items-center justify-end">
            <Button
              onPress={handleSubmit}
              isLoading={isLoading}
              style="min-w-full"
              type="submit"
            >
              Save changes
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
}

export default AccountInfo
