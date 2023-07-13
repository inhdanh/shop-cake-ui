import Link from 'next/link'

export default function AddressPage() {
  return (
    <div className="mx-5 my-20">
      <div className="max-w-lg p-8 mx-auto bg-purple-100 rounded-2xl">
        <h3 className="my-5 text-3xl font-medium text-center">Addresses</h3>
        <Link className="block py-5 text-center underline" href="/account">
          Return to Account details
        </Link>
        <div className="flex justify-center">
          <button className="my-5 primary-btn">Add a new address</button>
        </div>

        <form className="flex flex-col gap-5">
          <h3 className="mt-5 text-xl">Add a new address</h3>
          <input className="form-input" placeholder="Address" />
          <label className="flex items-center gap-2 w-fit">
            <input type="checkbox" />
            Set as default address
          </label>
          <div className="flex flex-wrap justify-center gap-5 md:justify-start">
            <button className="primary-btn">Add address</button>
            <button className="primary-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
