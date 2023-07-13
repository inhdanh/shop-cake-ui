import Link from 'next/link'
import { FaUser } from 'react-icons/fa6'

export default function AccountPage() {
  return (
    <div className="px-8 mt-16 mb-24">
      <h3 className="my-3 text-3xl">Account</h3>
      <button className="flex items-center gap-2 underline transition-colors hover:text-red-500">
        <FaUser />
        Log out
      </button>
      <div className="justify-between mt-10 mb-3 leading-8 md:flex">
        <div>
          <h4 className="text-2xl">Order history</h4>
          <p className="mt-3">You haven&apos;t placed any orders yet.</p>
        </div>
        <div className="mt-10 md:mt-0">
          <h4 className="text-2xl">Account details</h4>
          <p className="mt-3">john doe</p>
          <p>Vietnam</p>
          <Link
            className="block mt-5 text-gray-700 underline transition-colors hover:text-red-500"
            href="/address"
          >
            View addresses (1)
          </Link>
        </div>
      </div>
    </div>
  )
}
