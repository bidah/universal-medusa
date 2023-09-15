import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'
import { Cart, Medusa } from './medusa'
import { StoreProvider } from '../lib/context/store-context'
import { CartDropdownProvider } from '../lib/context/cart-dropdown-context'
import { StacksProvider } from '@mobily/stacks'
import { breakPointsAsArray } from 'app/design/tailwind/theme'
import { MobileMenuProvider } from 'app/lib/context/mobile-menu-context'
import { BottomSheetProvider } from './bottom-sheet'
import { AccountProvider } from '../lib/context/account-context'
import { ToastsProvider } from './toasts'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SafeArea>
        <Medusa>
          <StacksProvider spacing={5} breakpoints={breakPointsAsArray}>
            <CartDropdownProvider>
              <Cart>
                <BottomSheetProvider>
                  <StoreProvider>
                    <AccountProvider>{children}</AccountProvider>
                  </StoreProvider>
                </BottomSheetProvider>
              </Cart>
            </CartDropdownProvider>
          </StacksProvider>
        </Medusa>
        <ToastsProvider extraInsets={{ top: 40 }} />
      </SafeArea>
    </>
  )
}
