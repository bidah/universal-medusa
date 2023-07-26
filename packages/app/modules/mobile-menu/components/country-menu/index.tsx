import { useMobileMenu } from 'app/lib/context/mobile-menu-context'
import { useStore } from 'app/lib/context/store-context'
import useCountryOptions from 'app/lib/hooks/use-country-options'
import ChevronDown from 'app/modules/common/icons/chevron-down'
import X from 'app/modules/common/icons/x'
import ReactCountryFlag from 'react-country-flag'

const CountryMenu = () => {
  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()

  const { setRegion } = useStore()
  const countryOptions = useCountryOptions()

  const handleSelectCountry = (regionId: string, countryCode: string) => {
    setRegion(regionId, countryCode)
    close()
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex w-full items-center justify-between border-b border-gray-200 px-6 py-4">
        <div className="flex-1 basis-0">
          <button
            className="flex items-center gap-x-2"
            onClick={() => setScreen('main')}
          >
            <ChevronDown className="rotate-90 text-gray-700" size={20} />
          </button>
        </div>
        <div>
          <h1 className="text-large-regular">Shipping To</h1>
        </div>
        <div className="flex flex-1 basis-0 justify-end">
          <button onClick={close}>
            <X size={20} />
          </button>
        </div>
      </div>

      <div>
        <ul className="py-4">
          {countryOptions?.map((option) => (
            <li key={option.country}>
              <button
                className="flex w-full items-center justify-between border-b border-gray-200 px-8 py-4"
                onClick={() =>
                  handleSelectCountry(option.region, option.country)
                }
              >
                <div className="flex items-center gap-x-4">
                  <ReactCountryFlag svg countryCode={option.country} />
                  <span className="text-base-regular">{option.label}</span>
                </div>
                <ChevronDown size={16} className="-rotate-90" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CountryMenu
