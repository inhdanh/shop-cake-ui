import { useState } from 'react'

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
      bg-yellow-600 
        w-[calc(100vw-2rem)]
        md:w-[50vw]
        transition-transform
        duration-300
        ${props.isVisible ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <ul>
        {history.length > 1 && (
          <li
            onClick={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
          >
            Back ({current.title})
          </li>
        )}
        {current.data.map((item) => (
          <li
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
          </li>
        ))}
      </ul>
    </div>
  )
}
