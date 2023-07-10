'use client'
import MobileNav from '@/components/MobileNav'
import useComponentVisible from '@/hooks/useComponentVisible'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'

const menuItems = [
  { text: 'Designer Cakes', path: 'designer-cake' },
  { text: 'Birthday Cakes', subMenu: [{ text: 'Cake 1', path: 'cake-1' }] },
]

export default function Home() {
  const { isComponentVisible, ref, setIsComponentVisible } =
    useComponentVisible(false)

  return (
    <main>
      <section className='h-[80vh] bg-gradient-to-br from-red-400 to-red-600 py-12 px-3'>
        <header
          ref={ref}
          className='relative p-5 bg-opacity-50 rounded-lg bg-stone-300'
        >
          <button
            className='inline-flex items-center justify-center w-10 h-10'
            onClick={() => setIsComponentVisible((prev) => !prev)}
          >
            {isComponentVisible ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </button>
          <MobileNav isVisible={isComponentVisible} menuItems={menuItems} />
        </header>
      </section>
    </main>
  )
}
