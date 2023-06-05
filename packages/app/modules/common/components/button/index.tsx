import Spinner from 'app/modules/common/icons/spinner'
import clsx from 'clsx'
import React from 'react'
import { Text, View, Pressable } from 'app/design'
import { textSmallRegular } from 'app/design/tailwind/custom-css-classes'
import { GestureResponderEvent } from 'react-native'

type ButtonProps = {
  isLoading?: boolean
  variant?: 'primary' | 'secondary'
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined
  children: React.ReactNode
  style?: string
  disabled?: boolean
}

const Button = ({
  children,
  style,
  isLoading = false,
  variant = 'primary',
  onPress,
    disabled = false,
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View
        className={clsx(
          'group/button flex min-h-[50px] w-full items-center justify-center border px-5 py-[10px] transition-colors duration-200 disabled:opacity-50',
          {
            'border-gray-900 bg-gray-900 hover:bg-white disabled:hover:bg-gray-900 ':
              variant === 'primary',
            'border-gray-920 bg-transparent text-gray-900 hover:bg-gray-100':
              variant === 'secondary',
          },
          style
        )}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <Text
            className={clsx(textSmallRegular, 'uppercase', {
              'text-white group-hover/button:text-gray-900 disabled:group-hover:text-white':
                variant === 'primary',
              'text-gray-900': variant === 'secondary',
            })}
          >
            {children}
          </Text>
        )}
      </View>
    </Pressable>
  )
}

export default Button
