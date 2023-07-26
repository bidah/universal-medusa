import { Dialog, Transition } from '@headlessui/react'
import { useMobileMenu } from 'app/lib/context/mobile-menu-context'
import { Fragment } from 'react'

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  const { state, close } = useMobileMenu()
  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 flex" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="absolute inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-500 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-500 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="trans absolute inset-0 overflow-hidden">
            <div className="right-left pointer-events-none fixed inset-y-0 flex max-w-full">
              <div className="pointer-events-auto relative flex w-screen flex-col overflow-y-auto bg-white text-gray-900">
                {children}
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default Container
