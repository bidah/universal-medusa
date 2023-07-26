import { Text, View, Pressable, MotiView } from '../../../../design'
import ChevronDown from '../../icons/chevron-down'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import React, { useCallback, useMemo, useRef } from 'react'
import { textBaseRegular } from '../../../../design/tailwind/custom-css-classes'

const NativeSelect = React.forwardRef((props, bottomSheetRef) => {
  const { children } = props

  const snapPoints = useMemo(() => ['50%', '50%'], [])
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])

  return (
    <View className={'pt-2'}>
      <Pressable
        onPress={() => handlePresentModalPress()}
        className={`${textBaseRegular} relative flex items-center border border-gray-200`}
      >
        <Text
          {...props}
          className="flex-1 appearance-none border-none bg-transparent px-4 py-2.5 outline-none transition-colors duration-150 focus:border-gray-700"
        >
          {props.value}
        </Text>
        <View className="pointer-events-none absolute inset-y-[25%] right-4 flex items-center">
          <ChevronDown />
        </View>
      </Pressable>
      <View className={'mx-10'}>
        <BottomSheetModal
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: 'white' }}
          backgroundComponent={(props) => (
            <View {...props} className="border-t-[1px]" />
          )}
        >
          <BottomSheetScrollView
            className={'relative gap-y-3'}
            keyboardShouldPersistTaps={'always'}
          >
            {children}
          </BottomSheetScrollView>
        </BottomSheetModal>
      </View>
    </View>
  )
})

export default NativeSelect
