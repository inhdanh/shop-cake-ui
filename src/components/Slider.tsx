'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export default function Slider({ items }: { items: Product[] }) {
  const sliderRef = useRef(null)

  const slide = (direction: 'prev' | 'next') => {
    const sliderElm = sliderRef.current as unknown as HTMLElement

    if (!sliderElm) {
      return
    }

    const { scrollLeft, clientWidth } = sliderElm

    const left =
      direction === 'prev' ? scrollLeft - clientWidth : scrollLeft + clientWidth

    sliderElm.scroll({ left, behavior: 'smooth' })
  }

  return (
    <div className="mt-8">
      <ul
        ref={sliderRef}
        className="flex gap-3 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-full sm:w-[calc(50%-6px)] md:w-[calc(33%-6px)] lg:w-[calc(20%-6px)] snap-start shrink-0 group"
          >
            <div className="relative w-full h-32 overflow-hidden rounded-3xl before:absolute before:left-0 before:top-0 before:bg-gradient-radial before:w-full before:h-full before:transition-all group-hover:before:bg-red-600 group-hover:before:bg-none group-hover:before:bg-opacity-70 before:duration-1000 before:z-10">
              <Image
                src={item.image}
                alt={item.name}
                width={620}
                height={880}
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-125"
              />
            </div>
            <h3 className="absolute z-10 text-2xl font-medium text-white transition-opacity duration-500 md:text-xl bottom-5 left-5 group-hover:opacity-0">
              {item.name}
            </h3>
            <div className="absolute z-10 text-center text-white transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 opacity-0 left-1/2 top-1/2 group-hover:opacity-100">
              <h3 className="mb-4 text-2xl md:text-xl">{item.name}</h3>
              <p className="mb-4">{item.description}</p>
              <Link
                href="#"
                className="font-semibold underline transition-colors duration-500 hover:text-black"
              >
                Shop Now
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-5 mt-10">
        <button
          className="flex items-center justify-center text-white transition-colors bg-red-500 rounded-full w-11 h-11 hover:bg-black"
          onClick={() => slide('prev')}
        >
          <FaChevronLeft />
        </button>
        <button
          className="flex items-center justify-center text-white transition-colors bg-red-500 rounded-full w-11 h-11 hover:bg-black"
          onClick={() => slide('next')}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}
