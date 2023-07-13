'use client'

import Image from 'next/image'
import footerImg from '@/assets/images/footer.webp'
import logoImg from '@/assets/images/logo.png'
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa6'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Blog', path: '/blog' },
    { title: 'About', path: '/about' },
    { title: 'Faq', path: '/faq' },
    { title: 'Contact', path: '/contact' },
  ]
  const [emailAddress, setEmailAddress] = useState('')

  return (
    <footer className="relative text-base">
      <div className="overflow-hidden">
        <Image
          className="absolute top-0 left-0 object-cover object-top w-screen h-full -z-10"
          src={footerImg}
          alt="Footer"
        />
      </div>
      <div>
        <div className="relative p-8 mt-12">
          <div className="text-center text-white -order-1 md:order-1">
            <Image
              className="object-cover mx-auto mt-5 md:mt-2"
              src={logoImg}
              alt="Logo"
            />
            <p className="mt-5">
              Tempus quam pellentesque nec nam aliquam sem. Faucibus a
              pellentesque sit amet porttitor.
            </p>
            <ul className="flex flex-wrap justify-center gap-5 mt-10 uppercase md:gap-10">
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className="relative font-bold transition-colors duration-500 hover:text-gray-800"
                >
                  <Link href="#">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
            <div className="order-1 text-white">
              <h3 className="text-lg font-bold mb-7">Address</h3>
              <ul className="text-lg">
                <li className="flex items-center gap-5 mb-6">
                  <FaLocationDot /> No: 58 A, East Madison Street, Baltimore,
                  MD, USA 4508
                </li>
                <li className="flex items-center gap-5 mb-6">
                  <FaPhone /> 0000 - 123 - 456789
                </li>
                <li className="mb-6">
                  <Link
                    className="flex items-center gap-5"
                    href="mailto:info@example.com"
                  >
                    <FaEnvelope /> info@example.com
                  </Link>
                </li>
              </ul>
            </div>

            <div className="order-1 text-white md:text-right">
              <h3 className="text-lg font-bold mb-7">News Letter</h3>
              <p className="my-4">
                Sign Up Our News Letter And Get An Exclusive Offers
              </p>
              <div className="relative flex max-w-sm mt-10 md:ml-auto">
                <input
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="w-full px-5 py-3 bg-white bg-opacity-50 border-2 border-white rounded-lg outline-none peer"
                />
                {!emailAddress && (
                  <label className="absolute px-5 transition-all duration-500 pointer-events-none top-5 left-3 peer-focus:-top-3 peer-focus:scale-0 peer-focus:-translate-x-1/2">
                    Email Address
                  </label>
                )}
                <button className="py-5 -ml-4 text-red-500 transition-colors duration-500 bg-white border border-white rounded-lg px-7 hover:bg-red-500 hover:text-white">
                  <FaPaperPlane size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 text-center text-white border-t border-white">
          <p className="mb-5 text-sm">© 2023, dt-cakey Powered by Shopify</p>
          <ul className="justify-center gap-5 md:flex">
            <li className="mb-3 transition-colors hover:text-gray-800">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="mb-3 transition-colors hover:text-gray-800">
              <Link href="#">Terms & Condition</Link>
            </li>
            <li className="mb-3 transition-colors hover:text-gray-800">
              <Link href="#">Advanced Search</Link>
            </li>
            <li className="mb-3 transition-colors hover:text-gray-800">
              <Link href="#">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
