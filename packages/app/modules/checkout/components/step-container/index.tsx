import { Disclosure } from '@headlessui/react'
import { useCheckout } from 'app/lib/context/checkout-context'
import clsx from 'clsx'
import { View, Text } from 'app/design'
import { textXlSemi } from '../../../../design/tailwind/custom-css-classes'

type StepContainerProps = {
  index: number
  title: string
  closedState?: React.ReactNode
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const StepContainer = ({
  index,
  title,
  className,
  closedState,
  children,
  ...props
}: StepContainerProps) => {
  const {
    editAddresses: { state },
  } = useCheckout()
  return (
    <View>
      <View
        className={clsx('bg-white', className, {
          'pointer-events-none select-none opacity-50': state,
        })}
        {...props}
      >
        <View
          className={`${textXlSemi} small:px-8 small:pt-8 flex flex-row items-center gap-x-4 px-0 pb-6 pt-0`}
        >
          <View className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 ">
            <Text className={'text-sm font-bold text-white'}>{index}</Text>
          </View>

          <Text className={`${textXlSemi} `}>{title}</Text>
        </View>
        <View
          className={clsx(
            'overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out',
            {
              'max-h-[9999px] opacity-100': !state,
              'max-h-0 opacity-0': state,
            }
          )}
        >
          {children}
        </View>
        {/*<View*/}
        {/*  className={clsx(*/}
        {/*    'overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out',*/}
        {/*    {*/}
        {/*      'max-h-[9999px] opacity-100': state,*/}
        {/*      'max-h-0 opacity-0': !state,*/}
        {/*    }*/}
        {/*  )}*/}
        {/*>*/}
        {/*  {closedState}*/}
        {/*</View>*/}
      </View>
    </View>
  )
}

export default StepContainer
