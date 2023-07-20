import { Dialog, Transition } from '@headlessui/react'
import { ModalProvider, useModal } from 'app/lib/context/modal-context'
import X from 'app/modules/common/icons/x'
import clsx from 'clsx'
import React, { Fragment } from 'react'
import { Columns, View } from 'app/design'

type ModalProps = {
  isOpen: boolean
  close: () => void
  size?: 'small' | 'medium' | 'large'
}

const Modal: React.FC<ModalProps> & {
  Title: React.FC
  Description: React.FC
  Body: React.FC
  Footer: React.FC
} = ({ isOpen, close, size = 'medium', children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
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

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  'h-full max-h-[65vh] w-full transform overflow-hidden bg-white p-10 text-left align-middle shadow-xl transition-all',
                  {
                    'max-w-md': size === 'small',
                    'max-w-xl': size === 'medium',
                    'max-w-3xl': size === 'large',
                  }
                )}
              >
                <ModalProvider close={close}>{children}</ModalProvider>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

const Title: React.FC = ({ children }) => {
  const { close } = useModal()

  return (
    <Dialog.Title className="flex items-center justify-between">
      <div className="text-large-semi">{children}</div>
      <div>
        <button onClick={close}>
          <X size={20} />
        </button>
      </div>
    </Dialog.Title>
  )
}

const Description: React.FC = ({ children }) => {
  return (
    <Dialog.Description className="text-small-regular flex h-full items-center justify-center pb-4 pt-2 text-gray-700">
      {children}
    </Dialog.Description>
  )
}

const Body: React.FC = ({ children }) => {
  return <div className="mb-2">{children}</div>
}

const Footer: React.FC = ({ children }) => {
  return (
    <Columns space={4} className="mt-2 flex flex-row items-center justify-end ">
      {children}
    </Columns>
  )
}

Modal.Title = Title
Modal.Description = Description
Modal.Body = Body
Modal.Footer = Footer

export default Modal
