import { Popover, Transition } from '@headlessui/react'
import { useCartDropdown } from 'app/lib/context/cart-dropdown-context'
import { useStore } from 'app/lib/context/store-context'
import useEnrichedLineItems from 'app/lib/hooks/use-enrich-line-items'
import Button from 'app/modules/common/components/button'
import LineItemOptions from 'app/modules/common/components/line-item-options'
import LineItemPrice from 'app/modules/common/components/line-item-price'
import Trash from 'app/modules/common/icons/trash'
import Thumbnail from 'app/modules/products/components/thumbnail'
import { formatAmount, useCart } from 'medusa-react'
import Link from 'next/link'
import { Fragment } from 'react'
import { CalculatedVariant } from 'app/types/medusa'

const CartDropdown = () => {
  const { cart, totalItems } = useCart()
  const items = useEnrichedLineItems()
  const { deleteItem } = useStore()
  const { state, open, close } = useCartDropdown()

  return (
    <div className="z-50 h-full" onMouseEnter={open} onMouseLeave={close}>
      <Popover className="relative h-full">
        <Link href="/cart" passHref>
          <Popover.Button className="h-full">{`My Bag (${totalItems})`}</Popover.Button>
        </Link>
        <Transition
          show={state}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="small:block absolute top-[calc(100%+1px)] right-0 hidden w-[382px] border-x border-b border-gray-200 bg-white text-gray-900"
          >
            <div className="flex items-center justify-center p-4">
              <h3 className="text-large-semi">Shopping Bag</h3>
            </div>
            {cart && items?.length ? (
              <>
                {/*TODO: removing overflow-y-scroll on below div fix layout but it will be missing component needs to scroll*/}
                <div className="no-scrollbar grid max-h-[402px] grid-cols-1 gap-y-8 px-4">
                  {items
                    .sort((a, b) => {
                      return a.created_at > b.created_at ? -1 : 1
                    })
                    .map((item) => (
                      <div
                        className="grid grid-cols-[122px_1fr] gap-x-4"
                        key={item.id}
                      >
                        <div className="w-[122px]">
                          <Thumbnail thumbnail={item.thumbnail} size="full" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-base-regular mr-4 w-[130px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                  <Link
                                    href={`/products/${item.variant.product.handle}`}
                                  >
                                    {item.title}
                                  </Link>
                                </h3>
                                <LineItemOptions variant={item.variant} />
                                <span>Quantity: {item.quantity}</span>
                              </div>
                              <div className="flex justify-end">
                                <LineItemPrice
                                  region={cart.region}
                                  variant={item.variant as CalculatedVariant}
                                  quantity={item.quantity}
                                  style="tight"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-small-regular flex flex-1 items-end justify-between">
                            <div>
                              <button
                                className="flex items-center gap-x-1 text-gray-500"
                                onClick={() => deleteItem(item.id)}
                              >
                                <Trash size={14} />
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="text-small-regular flex flex-col gap-y-4 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">
                      Subtotal{' '}
                      <span className="font-normal">(incl. taxes)</span>
                    </span>
                    <span className="text-large-semi">
                      {formatAmount({
                        amount: cart.subtotal || 0,
                        region: cart.region,
                        includeTaxes: false,
                      })}
                    </span>
                  </div>
                  <Link href="/cart" passHref>
                      <Button>Go to bag</Button>
                  </Link>
                </div>
              </>
            ) : (
              <div>
                <div className="flex flex-col items-center justify-center gap-y-4 py-16">
                  <div className="text-small-regular flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white">
                    <span>0</span>
                  </div>
                  <span>Your shopping bag is empty.</span>
                  <div>
                    <Link href="/store">
                        <span className="sr-only">Go to all products page</span>
                        <Button onClick={close}>Explore products</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown
