import { Listbox, Transition } from '@headlessui/react'
import { useStore } from 'app/lib/context/store-context'
import useToggleState from 'app/lib/hooks/use-toggle-state'
import { useRegions } from 'medusa-react'
import { Fragment, useEffect, useMemo, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'

type CountryOption = {
  country: string
  region: string
  label: string
}

const CountrySelect = () => {
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

  return (
    <div onMouseEnter={open} onMouseLeave={close}>
      <Listbox
        onChange={handleChange}
        value={
          countryCode
            ? options?.find((o) => o.country === countryCode)
            : undefined
        }
      >
        <Listbox.Button className="w-full py-1">
          <div className="text-small-regular xsmall:justify-end flex items-center gap-x-2">
            <span>Shipping to:</span>
            {current && (
              <span className="text-small-semi flex items-center gap-x-2">
                <ReactCountryFlag
                  svg
                  style={{
                    width: '16px',
                    height: '16px',
                  }}
                  countryCode={current.country}
                />
                {current.label}
              </span>
            )}
          </div>
        </Listbox.Button>
        <div className="relative w-full min-w-[316px]">
          <Transition
            show={state}
            as={Fragment}
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="xsmall:left-auto xsmall:right-0 text-small-regular no-scrollbar absolute -bottom-[calc(100%-36px)] left-0 z-[900] max-h-[442px] overflow-y-scroll bg-white uppercase text-black drop-shadow-md"
              static
            >
              {options?.map((o) => {
                return (
                  <Listbox.Option
                    key={o.country}
                    value={o}
                    className="flex cursor-pointer items-center gap-x-2 py-2 px-3 hover:bg-gray-200"
                  >
                    <ReactCountryFlag
                      svg
                      style={{
                        width: '16px',
                        height: '16px',
                      }}
                      countryCode={o.country}
                    />{' '}
                    {o.label}
                  </Listbox.Option>
                )
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CountrySelect
