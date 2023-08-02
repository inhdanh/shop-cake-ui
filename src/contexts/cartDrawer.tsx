'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface DrawerContextType {
  isOpen: boolean
  setIsOpen: any
}

const CartDrawerContext = createContext<DrawerContextType>({
  isOpen: false,
  setIsOpen: () => {},
})

interface PropsType {
  children: ReactNode
}

const useCartDrawerContext = () => useContext(CartDrawerContext)

const CartDrawerProvider = (props: PropsType) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CartDrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </CartDrawerContext.Provider>
  )
}

export { useCartDrawerContext, CartDrawerProvider }
