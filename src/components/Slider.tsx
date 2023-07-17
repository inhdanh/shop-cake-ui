'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export default function Slider() {
  const sliderItems = [
    {
      name: 'Dark Chocolate Cakes',
      image: '/img/sliders/grid01.jpg',
      description: 'Diam phasellus vestibulum lorem sed risus ultricies.',
    },
    {
      name: 'Nuts Filled Cupcakes',
      image: '/img/sliders/grid02.jpg',
      description: 'Diam phasellus vestibulum lorem sed risus ultricies.',
    },
    {
      name: 'Sandwich Cakes',
      image: '/img/sliders/grid03.jpg',
      description: 'Diam phasellus vestibulum lorem sed risus ultricies.',
    },
    {
      name: 'Mint Brownie Cakes',
      image: '/img/sliders/grid04.jpg',
      description: 'Diam phasellus vestibulum lorem sed risus ultricies.',
    },
    {
      name: 'No Egg Cakes',
      image: '/img/sliders/grid05.jpg',
      description: 'Diam phasellus vestibulum lorem sed risus ultricies.',
    },
    {
      name: 'Fruit Cakes',
      image: '/img/sliders/grid06.jpg',
      description: 'Diam phasellus vestibulum lorem sed risus ultricies.',
    },
    {
      name: 'Choco Velvet Cakes',
      image: '/img/sliders/grid07.jpg',
      description: 'Diam phasellus vestibulum lorem sed risus ultricies.',
    },
  ]
  const sliderRef = useRef(null)

  const slide = (direction: 'prev' | 'next') => {
    const sliderElm = sliderRef.current as unknown as HTMLElement

    if (!sliderElm) {
      return
    }

    const { scrollLeft, clientWidth } = sliderElm

    console.log('scrollLeft', scrollLeft)
    console.log('clientWidth', clientWidth)

    const left =
      direction === 'prev' ? scrollLeft - clientWidth : scrollLeft + clientWidth

    sliderElm.scroll({ left, behavior: 'smooth' })
  }

  return (
    <div className="mt-8">
      <ul
        ref={sliderRef}
        className="flex overflow-hidden scroll-smooth snap-x snap-mandatory"
      >
        {sliderItems.map((item) => (
          <li
            key={item.name}
            className="relative w-full snap-start shrink-0 group"
          >
            <div className="relative w-full h-full rounded-3xl before:absolute before:left-0 before:top-0 before:bg-gradient-radial before:w-full before:h-full before:transition-all group-hover:before:bg-red-600 group-hover:before:bg-none group-hover:before:bg-opacity-70 before:duration-1000">
              <Image
                src={item.image}
                alt={item.name}
                width={620}
                height={880}
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-125"
              />
            </div>
            <h3 className="absolute z-10 text-2xl font-medium text-white bottom-5 left-5">
              {item.name}
            </h3>
            <div className="absolute text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <h3 className="mb-4 text-2xl">{item.name}</h3>
              <p className="mb-4">{item.description}</p>
              <Link href="#" className="font-semibold underline">
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