import NativeSelect, {
  NativeSelectProps,
} from 'app/modules/common/components/native-select'
import { useCart, useRegions } from 'medusa-react'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import { Platform } from 'react-native'
import { Pressable, Text } from '../../../../design'
import { useStore } from '../../../../lib/context/store-context'

const CountrySelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    { placeholder = 'Country', bottomSheetRef, regions, cart, ...props },
    ref
  ) => {
    const innerRef = useRef<HTMLSelectElement>(null)
    // useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
    //   ref,
    //   () => innerRef.current
    // )

    // const { regions } = useRegions()
    // const { cart } = useCart()
    // const { updateItem, deleteItem } = useStore()

    const countryOptions = useMemo(() => {
      const currentRegion = regions?.find((r) => r.id === cart?.region_id)

      if (!currentRegion) {
        return []
      }

      return currentRegion.countries.map((country) => ({
        value: country.iso_2,
        label: country.display_name,
      }))
    }, [regions, cart])

    return (
      <NativeSelect ref={innerRef} placeholder={placeholder} {...props}>
        {countryOptions.map(({ value, label }, i) => {
          return Platform.OS === 'web' ? (
            <option key={i} value={value}>
              {label}
            </option>
          ) : (
            <Pressable
              onPress={async () => {
                // updateItem({
                //   lineId: value.id,
                //   quantity: parseInt(value),
                // })
                await new Promise((r) => setTimeout(r, 1000))
                bottomSheetRef?.current?.dismiss()
              }}
              className={`my mx-4 mt-2 border border-gray-200 bg-white px-3 py-4 ${
                label === value && 'border-gray-900'
              } ${!i && 'mt-0'}`}
              key={i}
            >
              <Text className={'text-center'}>{label}</Text>
            </Pressable>
          )
        })}
      </NativeSelect>
    )
  }
)

CountrySelect.displayName = 'CountrySelect'

export default CountrySelect
