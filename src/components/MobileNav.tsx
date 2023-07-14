import { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

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
        z-50
        ${props.isVisible ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <ul
        className={`text-lg text-white pt-14 ${
          history.indexOf(current) > 0
            ? 'animate-move-to-left'
            : props.isVisible
            ? 'animate-move-to-right'
            : ''
        }`}
      >
        {history.indexOf(current) > 0 && (
          <li
            className="flex items-center gap-5 px-12 py-3 transition-colors cursor-pointer hover:bg-red-400"
            onClick={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
          >
            <FaArrowLeft />
            {current.title}
          </li>
        )}
        {current.data.map((item) => (
          <li
            className="flex items-center justify-between px-12 py-3 transition-colors cursor-pointer hover:bg-red-400"
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
            {item.children && <FaArrowRight />}
          </li>
        ))}
      </ul>
    </div>
  )
}
