'use client'

import { ReactNode } from 'react'
import { CartDrawerProvider } from './cartDrawer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface PropsType {
  children: ReactNode
}

const queryClient = new QueryClient()

export default function GlobalContextProvider(props: PropsType) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartDrawerProvider>{props.children}</CartDrawerProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
