import React from 'react'
import { MEDUSA_BACKEND_URL, queryClient } from 'app/lib/config'
import { MedusaContext, MedusaProvider, CartProvider } from 'medusa-react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Platform } from 'react-native'

export function Cart({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>
}

export function Medusa({ children }: { children: React.ReactNode }) {
  return (
    <MedusaProvider
      baseUrl={MEDUSA_BACKEND_URL}
      queryClientProviderProps={{
        client: queryClient,
      }}
    >
      {Platform.OS === 'web' && <ReactQueryDevtools />}
      {children}
    </MedusaProvider>
  )
}
