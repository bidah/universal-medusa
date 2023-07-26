import { useMobileMenu } from 'app/lib/context/mobile-menu-context'
import { searchClient, SEARCH_INDEX_NAME } from 'app/lib/search-client'
import Search from 'app/modules/common/icons/search'
import MobileHit from 'app/modules/search/components/mobile-hit'
import MobileHits from 'app/modules/search/components/mobile-hits'
import SearchBox from 'app/modules/search/components/search-box'
import { InstantSearch } from 'react-instantsearch-hooks-web'

const SearchMenu = () => {
  const {
    screen: [_, setScreen],
  } = useMobileMenu()

  return (
    <InstantSearch searchClient={searchClient} indexName={SEARCH_INDEX_NAME}>
      <div className="flex flex-1 flex-col">
        <div className="flex w-full items-center justify-between border-b border-gray-200 px-6 py-4">
          <div className="flex-1 basis-0">
            <div className="flex items-center gap-x-2">
              <Search className="text-gray-500" size={20} />
              <SearchBox />
            </div>
          </div>
          <div className="ml-4 flex justify-end">
            <button
              onClick={() => setScreen('main')}
              className="text-small-semi uppercase"
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="px-8 py-4">
          <MobileHits hitComponent={MobileHit} />
        </div>
      </div>
    </InstantSearch>
  )
}

export default SearchMenu
