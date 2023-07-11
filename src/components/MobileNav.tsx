import { useEffect, useState } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons'

interface PropTypes {
  isVisible: boolean
  menuItems: MenuItem[]
}

interface MenuItem {
  title: string
  path?: string
  children?: {
    title: string
    data: MenuItem[]
  }
}

interface History {
  data: MenuItem[]
  title?: string
}

export default function MobileNav(props: PropTypes) {
  const [history, setHistory] = useState<History[]>([{ data: props.menuItems }])
  const current = history[history.length - 1]

  useEffect(() => {
    if (!props.isVisible && props.menuItems) {
      setHistory([{ data: props.menuItems }])
    }
  }, [props.isVisible, props.menuItems])

  return (
    <div
      className={`
        absolute 
        top-24
        -left-3 
        h-[calc(100vh-9rem)]
      bg-red-500 
        w-[calc(100vw-2rem)]
        md:hidden
        transition-transform
        duration-700
        ${props.isVisible ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <ul className='text-lg text-white pt-14'>
        {history.length > 1 && (
          <li
            className='flex items-center gap-5 px-12 py-3 transition-colors cursor-pointer hover:bg-red-400 moveToLeft'
            onClick={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
          >
            <ArrowLeftIcon className='w-5 h-5' />
            {current.title}
          </li>
        )}
        {current.data.map((item) => (
          <li
            className={`flex items-center justify-between px-12 py-3 transition-colors cursor-pointer hover:bg-red-400 ${
              history.length > 1 ? 'moveToLeft' : 'moveToRight'
            }`}
            key={crypto.randomUUID()}
            onClick={
              item.children
                ? () =>
                    setHistory((prev) => [
                      ...prev,
                      item.children || { data: [] },
                    ])
                : undefined
            }
          >
            {item.title}
            {item.children && <ArrowRightIcon className='w-5 h-5' />}
          </li>
        ))}
      </ul>
    </div>
  )
}
