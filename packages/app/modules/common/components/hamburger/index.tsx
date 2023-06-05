import clsx from 'clsx'
import React from 'react'
import { Pressable, Text, View } from 'app/design'

type HamburgerProps = {
  setOpen: () => void
}

const Hamburger: React.FC<HamburgerProps> = ({ setOpen }) => {
  return (
    <Pressable
      className="relative h-10 w-10 focus:outline-none"
      onPress={setOpen}
    >
      <Text className="sr-only">Open main menu</Text>
      <View className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2  -translate-y-1/2 transform">
        <Text
          aria-hidden="true"
          className={clsx(
            'absolute block h-0.5 w-5 -translate-y-1.5 rounded-sm bg-current '
          )}
        ></Text>
        <Text
          aria-hidden="true"
          className={clsx(
            'absolute block  h-0.5 w-5 transform rounded-sm bg-current'
          )}
        ></Text>
        <Text
          aria-hidden="true"
          className={clsx(
            'absolute block  h-0.5 w-5 translate-y-1.5 rounded-sm bg-current'
          )}
        ></Text>
      </View>
    </Pressable>
  )
}

export default Hamburger
