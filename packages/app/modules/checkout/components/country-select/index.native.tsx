import { Pressable, Text, View } from 'app/design'
import { useStore } from 'app/lib/context/store-context'
import useToggleState from 'app/lib/hooks/use-toggle-state'
import { useRegions } from 'medusa-react'
import { useEffect, useMemo, useState } from 'react'
import { ActionSheetIOS } from 'react-native'
import ChevronDown from 'app/modules/common/icons/chevron-down'
import clsx from 'clsx'
import { Controller } from 'react-hook-form'

type CountryOption = {
  country: string
  region: string
  label: string
}

const CountrySelect = ({ control, setValue }) => {
  const { countryCode, setRegion } = useStore()
  const { regions } = useRegions()
  const [current, setCurrent] = useState<CountryOption | undefined>(undefined)
  const { state, open, close } = useToggleState()

  const options: CountryOption[] | undefined = useMemo(() => {
    return regions
      ?.map((r) => {
        return r.countries.map((c) => ({
          country: c.iso_2,
          region: r.id,
          label: c.display_name,
        }))
      })
      .flat()
  }, [regions])

  useEffect(() => {
    if (countryCode) {
      const option = options?.find((o) => o.country === countryCode)
      setCurrent(option)
    }
  }, [countryCode, options])

  const handleChange = (option: CountryOption) => {
    setRegion(option.region, option.country)
    close()
  }

  const onPress = (setValue) =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...options.map((opt) => opt.label)],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light',
      },
      (buttonIndex) => {
        if (!buttonIndex) return
        setValue('country_code', options[buttonIndex - 1].country)
        handleChange(options[buttonIndex - 1])
      }
    )

  return (
    <Controller
      control={control}
      name={'country_code'}
      render={({ field: { onChange, value } }) => {
        return (
          <Pressable
            onPress={() => onPress(setValue)}
            className={clsx(
              'relative w-full appearance-none border border-gray-200 bg-transparent px-4 py-3 pt-5 focus:outline-none focus:ring-0'
            )}
          >
            <Text className={'absolute left-4 top-1 text-[11px] text-gray-500'}>
              {'Country'}
            </Text>
            <View
              className={'absolute right-4 top-[17px] text-lg text-gray-500'}
            >
              <ChevronDown className="-rotate-90 transform" />
            </View>
            <Text>{current?.label ?? ''} </Text>
          </Pressable>
        )
      }}
    />
  )
}

export default CountrySelect
