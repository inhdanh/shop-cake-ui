'use client'
import MobileNav from '@/components/MobileNav'
import useComponentVisible from '@/hooks/useComponentVisible'
import { FaBars, FaXmark, FaCartShopping, FaUser } from 'react-icons/fa6'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Link from 'next/link'
import CartDrawer from './CartDrawer'
import { useCartDrawerContext } from '@/contexts/cartDrawer'

const menuItems = [
  { title: 'Designer Cakes', path: 'designer-cake' },
  {
    title: 'Birthday Cakes',
    children: {
      title: 'Birthday Cakes',
      data: [{ title: 'Cake 1', path: 'cake-1' }],
    },
  },
]

export default function Header() {
  const { isComponentVisible, ref, setIsComponentVisible } =
    useComponentVisible(false)
  const { setIsOpen } = useCartDrawerContext()

  return (
    <header
      ref={ref}
      className="relative flex justify-between p-5 mx-3 bg-opacity-50 rounded-lg bg-stone-300 md:mx-14"
    >
      <button
        className="inline-flex items-center justify-center w-10 h-10 md:hidden"
        onClick={() => setIsComponentVisible((prev) => !prev)}
      >
        {isComponentVisible ? <FaXmark /> : <FaBars />}
      </button>
      <Link href="/">
        <Image src={logo} alt="Logo" width={130} height={50} />
      </Link>

      <ul className="items-center hidden gap-10 text-sm font-bold text-gray-700 md:flex">
        {menuItems.map((item) => (
          <li
            className="relative p-3 uppercase transition-colors hover:text-red-600 group"
            key={crypto.randomUUID()}
          >
            {item.title}
            {item.children && (
              <ul className="absolute invisible p-5 text-white normal-case transition-opacity duration-1000 bg-red-500 rounded-md shadow-md opacity-0 pointer-events-none top-10 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 hover:visible hover:opacity-100 hover:pointer-events-auto">
                {item.children.data.map((i) => (
                  <li
                    key={crypto.randomUUID()}
                    className="transition-colors hover:text-gray-700"
                  >
                    <Link href={i.path}>{i.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <button onClick={() => setIsOpen(true)}>
          <FaCartShopping />
        </button>
        <Link href="/login">
          <FaUser />
        </Link>
      </div>
      <MobileNav isVisible={isComponentVisible} menuItems={menuItems} />
      <CartDrawer />
    </header>
  )
}
