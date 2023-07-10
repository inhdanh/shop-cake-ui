import { useState } from 'react'

interface PropTypes {
  isVisible: boolean
  menuItems: MenuItem[]
}

interface MenuItem {
  text: string
  path?: string
  subMenu?: MenuItem[]
}

export default function MobileNav(props: PropTypes) {
  const [currentMenu, setCurrentMenu] = useState<MenuItem[]>(props.menuItems)
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
        {currentMenu.map((item) => (
          <li
            key={crypto.randomUUID()}
            onClick={
              item.subMenu ? () => setCurrentMenu(item.subMenu || []) : () => {}
            }
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
