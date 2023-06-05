import { Dialog, Transition } from '@headlessui/react'
import { useProductActions } from 'app/lib/context/product-context'
import useProductPrice from 'app/lib/hooks/use-product-price'
import useToggleState from 'app/lib/hooks/use-toggle-state'
import Button from 'app/modules/common/components/button'
import ChevronDown from 'app/modules/common/icons/chevron-down'
import X from 'app/modules/common/icons/x'
import clsx from 'clsx'
import React, { Fragment, useMemo } from 'react'
import { Product } from 'app/types/medusa'
import OptionSelect from '../option-select'

type MobileActionsProps = {
  product: Product
  show: boolean
}

const MobileActions: React.FC<MobileActionsProps> = ({ product, show }) => {
  const { variant, addToCart, options, inStock, updateOptions } =
    useProductActions()
  const { state, open, close } = useToggleState()

  const price = useProductPrice({ id: product.id, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <>
      <div
        className={clsx('sticky inset-x-0 bottom-0 lg:hidden', {
          'pointer-events-none': !show,
        })}
      >
        <Transition
          as={Fragment}
          show={show}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="text-large-regular flex h-full w-full flex-col items-center justify-center gap-y-3 border-t border-gray-200 bg-white p-4">
            <div className="flex items-center gap-x-2">
              <span>{product.title}</span>
              <span>—</span>
              {selectedPrice ? (
                <div className="flex items-end gap-x-2 text-gray-700">
                  {selectedPrice.price_type === 'sale' && (
                    <p>
                      <span className="text-small-regular line-through">
                        {selectedPrice.original_price}
                      </span>
                    </p>
                  )}
                  <span
                    className={clsx({
                      'text-rose-600': selectedPrice.price_type === 'sale',
                    })}
                  >
                    {selectedPrice.calculated_price}
                  </span>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="grid w-full grid-cols-2 gap-x-4">
              <Button onClick={open} variant="secondary">
                <div className="flex w-full items-center justify-between">
                  <span>
                    {variant
                      ? Object.values(options).join(' / ')
                      : 'Select Options'}
                  </span>
                  <ChevronDown />
                </div>
              </Button>
              <Button onClick={addToCart}>
                {!inStock ? 'Out of stock' : 'Add to cart'}
              </Button>
            </div>
          </div>
        </Transition>
      </div>
      <Transition appear show={state} as={Fragment}>
        <Dialog as="div" className="relative z-[75]" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-x-0 bottom-0">
            <div className="flex h-full min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="flex h-full w-full transform flex-col gap-y-3 overflow-hidden text-left">
                  <div className="flex w-full justify-end pr-6">
                    <button
                      onClick={close}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900"
                    >
                      <X />
                    </button>
                  </div>
                  <div className="bg-white px-6 py-12">
                    {product.variants.length > 1 && (
                      <div className="flex flex-col gap-y-6">
                        {product.options.map((option) => {
                          return (
                            <div key={option.id}>
                              <OptionSelect
                                option={option}
                                current={options[option.id]}
                                updateOption={updateOptions}
                                title={option.title}
                              />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileActions
