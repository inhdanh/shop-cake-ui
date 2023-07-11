import { ReactNode } from 'react'
import { CartDrawerProvider } from './cartDrawer'

interface PropsType {
  children: ReactNode
}

export default function GlobalContextProvider(props: PropsType) {
  return <CartDrawerProvider>{props.children}</CartDrawerProvider>
}
