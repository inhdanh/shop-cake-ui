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
          className="absolute top-0 left-0 h-full w-full -z-10 object-cover object-center"
          src={footerImg}
          alt="Footer"
        />
      </div>
      <div>
        <div className="p-8 mt-8 relative">
          <div className="text-center text-white -order-1 md:order-1">
            <Image className="object-cover mx-auto" src={logoImg} alt="Logo" />
            <p className="mt-5">
              Tempus quam pellentesque nec nam aliquam sem. Faucibus a
              pellentesque sit amet porttitor.
            </p>
            <ul className="uppercase flex gap-5 md:gap-10 justify-center mt-10 flex-wrap">
              {menuItems.map((item) => (
                <li key={item.path} className="relative transition-colors">
                  <Link href="#">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-10">
            <div className="text-white order-1">
              <h3 className="font-bold mb-7 text-lg">Address</h3>
              <ul className="text-lg">
                <li className="mb-6 flex items-center gap-5">
                  <FaLocationDot /> No: 58 A, East Madison Street, Baltimore,
                  MD, USA 4508
                </li>
                <li className="mb-6 flex items-center gap-5">
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

            <div className="text-white order-1 md:text-right">
              <h3 className="font-bold mb-7 text-lg">News Letter</h3>
              <p className="my-4">
                Sign Up Our News Letter And Get An Exclusive Offers
              </p>
              <div className="relative">
                <input
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="outline-none border-2 border-white rounded-md p-3 bg-white bg-opacity-50 w-full peer"
                />
                {!emailAddress && (
                  <label className="absolute top-4 left-3 px-5 pointer-events-none peer-focus:-top-3 transition-all duration-500 peer-focus:scale-0 peer-focus:-translate-x-1/2">
                    Email Address
                  </label>
                )}
                <button>
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white p-5 text-center text-white">
          <p className="text-sm mb-5">© 2023, dt-cakey Powered by Shopify</p>
          <ul className="md:flex gap-5 justify-center">
            <li className="hover:text-gray-800 mb-3 transition-colors">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="hover:text-gray-800 mb-3 transition-colors">
              <Link href="#">Terms & Condition</Link>
            </li>
            <li className="hover:text-gray-800 mb-3 transition-colors">
              <Link href="#">Advanced Search</Link>
            </li>
            <li className="hover:text-gray-800 mb-3 transition-colors">
              <Link href="#">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
