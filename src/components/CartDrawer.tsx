import { useCartDrawerContext } from '@/contexts/cartDrawer'
import { FaXmark } from 'react-icons/fa6'
import { useEffect, useRef } from 'react'

export default function CartDrawer() {
  const { isOpen, setIsOpen } = useCartDrawerContext()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof setIsOpen !== 'function') {
      return
    }

    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [setIsOpen])

  useEffect(() => {
    const bodyPosition = isOpen ? 'fixed' : ''
    document.body.style.position = bodyPosition
  }, [isOpen])

  return (
    <div
      className={`
      transition-all
      duration-300 
      fixed 
      top-0 
      right-0
      bottom-0
      left-0 
      z-50 
      bg-black 
      bg-opacity-30
      ${isOpen ? 'visible' : 'invisible'}`}
    >
      <div
        ref={ref}
        className={`
          relative
          ml-auto
          h-full
          p-5
          bg-white
          transition-transform
          duration-300
          md:w-[40rem]
          w-[20rem]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button onClick={() => setIsOpen(false)} className="absolute right-5">
          <FaXmark />
        </button>
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-2xl">Your cart is empty</h3>
          <button className="p-3 mt-5 text-white transition-colors duration-700 bg-red-500 rounded-lg hover:outline-2 hover:bg-white hover:text-red-500 hover:outline hover:outline-red-500">
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  )
}
