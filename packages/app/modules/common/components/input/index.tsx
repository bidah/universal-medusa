import { ErrorMessage } from '@hookform/error-message'
import Eye from 'app/modules/common/icons/eye'
import EyeOff from 'app/modules/common/icons/eye-off'
import clsx from 'clsx'
import React, { useEffect, useImperativeHandle, useState } from 'react'
import { get, Controller, useForm, useFieldArray } from 'react-hook-form'
import { TextInput, View, Text, Pressable } from '../../../../design'
import { MotiView, Text as MotiText } from 'moti'
import { MotiPressable } from 'moti/interactions'
import colors from 'tailwindcss/colors'
import { textXsmallRegular } from '../../../../design/tailwind/custom-css-classes'
import { TextInputProps } from 'react-native'

type ExtraInputProps = {
  label: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
  removeAnimation: boolean
}

type InputProps =
  | (TextInputProps & ExtraInputProps)
  | (React.InputHTMLAttributes<HTMLInputElement> & ExtraInputProps)

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      name,
      label,
      errors,
      touched,
      required,
      isSubmitting,
      removeAnimation,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(() => {
      if (type === 'password' && showPassword) {
        setInputType('text')
      }

      if (type === 'password' && !showPassword) {
        setInputType('password')
      }
    }, [type, showPassword])

    useImperativeHandle(ref, () => inputRef.current!)

    const { formState } = useForm()
    const hasError = get(errors, name) && get(touched, name)

    const [isFocused, setIsFocused] = useState(false)
    let outerOnBlur
    useEffect(() => {
      if (isSubmitting && isFocused) {
        outerOnBlur()
      }
      console.log('here')
    }, [formState])

    return (
      <View>
        <View className="relative">
          <Controller
            name={name}
            render={({ field: { value, onChange, onBlur } }) => {
              outerOnBlur = onBlur

              return (
                <View className={'relative'}>
                  <TextInput
                    {...props}
                    secureTextEntry={inputType === 'password'}
                    autoCapitalize={
                      ['Password', 'Email'].includes(label)
                        ? 'none'
                        : 'sentences'
                    }
                    editable={true}
                    type={inputType}
                    name={name}
                    value={value}
                    placeholder=" "
                    onChangeText={onChange}
                    onBlur={(e) => {
                      setIsFocused(false)
                      onBlur(e)
                    }}
                    onFocus={(e) => {
                      inputRef.current?.focus()
                      setIsFocused(true)
                    }}
                    // onBlur={() => setIsFocused(false)}
                    className={clsx(
                      'w-full appearance-none border border-gray-200 bg-transparent px-4 py-3 pt-5 focus:outline-none focus:ring-0',
                      {
                        'border-rose-500 focus:border-rose-500':
                          Boolean(hasError),
                      }
                    )}
                    ref={inputRef}
                  />
                  <View style={{ top: 7, position: 'absolute' }}>
                    <MotiPressable
                      onPress={() => {
                        inputRef.current?.focus()
                        setIsFocused(true)
                      }}
                      onFocus={() => {
                        inputRef.current?.focus()
                        setIsFocused(true)
                      }}
                      style={{
                        zIndex: 2,
                        left: 16,
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                      // animate={
                      //   !removeAnimation
                      //     ? {
                      //         ...{
                      //           opacity: 1,
                      //           top: isFocused || value?.length ? 6 : 17,
                      //         },
                      //       }
                      //     : {}
                      // }
                      transition={{
                        type: 'timing',
                      }}
                    >
                      <Text style={{ color: colors.gray[500], fontSize: 11 }}>
                        {label}{' '}
                      </Text>
                      {/*<MotiText*/}
                      {/*  animate={{*/}
                      {/*    fontSize: isFocused || value?.length ? 10 : 14,*/}
                      {/*  }}*/}
                      {/*  style={{ color: colors.gray[500] }}*/}
                      {/*>*/}
                      {/*  {label}{' '}*/}
                      {/*</MotiText>*/}
                      {required && <Text className="text-rose-500">*</Text>}
                    </MotiPressable>
                  </View>
                </View>
              )
            }}
          ></Controller>
          {/*{type === 'password' && (*/}
          {/*  <button*/}
          {/*    type="button"*/}
          {/*    onClick={() => setShowPassword(!showPassword)}*/}
          {/*    className="absolute right-0 top-3 px-4 text-gray-400 outline-none transition-all duration-150 focus:text-gray-700 focus:outline-none"*/}
          {/*  >*/}
          {/*    {showPassword ? <Eye /> : <EyeOff />}*/}
          {/*  </button>*/}
          {/*)}*/}
        </View>
        {Boolean(hasError) && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              return (
                <View className=" pl-2 pt-1 ">
                  <Text className={`${textXsmallRegular} text-rose-500`}>
                    {message}
                  </Text>
                </View>
              )
            }}
          />
        )}
      </View>
    )
  }
)

Input.displayName = 'Input'

export default Input
