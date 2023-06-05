import { Popover, Transition } from '@headlessui/react'
import {
  useFeaturedProductsQuery,
  useNavigationCollections,
} from 'app/lib/hooks/use-layout-data'
import repeat from 'app/lib/util/repeat'
import ProductPreview from 'app/modules/products/components/product-preview'
// import SkeletonProductPreview from 'app/modules/skeletons/components/skeleton-product-preview'
import clsx from 'clsx'
import { chunk } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const DropdownMenu = () => {
  const [open, setOpen] = useState(false)
  const { push } = useRouter()
  const { data: collections, isLoading: loadingCollections } =
    useNavigationCollections()
  const { data: products, isLoading: loadingProducts } =
    useFeaturedProductsQuery()

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="h-full"
    >
      <div className="flex h-full items-center">
        <Popover className="flex h-full">
          <>
            <Link href="/shop" passHref className="relative flex h-full">
                <Popover.Button
                  className={clsx(
                    'relative flex h-full items-center transition-all duration-200 ease-out'
                  )}
                  onClick={() => push('/store')}
                >
                  Store
                </Popover.Button>
            </Link>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel
                static
                className="absolute inset-x-0 top-full z-30 border-y border-gray-200 text-sm text-gray-700"
              >
                <div className="relative bg-white py-8">
                  <div className="content-container flex items-start">
                    <div className="flex max-w-[30%] flex-1 flex-col">
                      <h3 className="text-base-semi mb-4 text-gray-900">
                        Collections
                      </h3>
                      <div className="flex items-start">
                        {collections &&
                          chunk(collections, 6).map((chunk, index) => {
                            return (
                              <ul
                                key={index}
                                className="min-w-[152px] max-w-[200px] pr-4"
                              >
                                {chunk.map((collection) => {
                                  return (
                                    <div key={collection.id} className="pb-3">
                                      <Link
                                        href={`/collections/${collection.id}`}
                                        onClick={() => setOpen(false)}
                                      >
                                          {collection.title}
                                      </Link>
                                    </div>
                                  )
                                })}
                              </ul>
                            )
                          })}
                        {loadingCollections &&
                          repeat(6).map((index) => (
                            <div
                              key={index}
                              className="h-4 w-12 animate-pulse bg-gray-100"
                            />
                          ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-3 gap-4">
                        {products?.slice(0, 3).map((product) => (
                          <ProductPreview {...product} key={product.id} />
                        ))}
                        {/*{loadingProducts &&*/}
                        {/*  repeat(3).map((index) => (*/}
                        {/*    <SkeletonProductPreview key={index} />*/}
                        {/*  ))}*/}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        </Popover>
      </div>
    </div>
  )
}

export default DropdownMenu
