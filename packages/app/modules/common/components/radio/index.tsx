import clsx from 'clsx'
import { View } from 'app/design'

const Radio = ({ checked }: { checked: boolean }) => {
  return (
    <View
      className={clsx(
        'flex h-3 w-3 items-center justify-center rounded-full border border-gray-200',
        {
          'border-gray-900': checked,
        }
      )}
    >
      {checked && <View className="h-2 w-2 rounded-full bg-gray-900" />}
    </View>
  )
}

export default Radio
