import Link from 'next/link'

export default function RecoverPage() {
  return (
    <div className="mx-5 my-20">
      <div className="max-w-lg p-8 mx-auto text-center bg-purple-100 rounded-2xl">
        <h3 className="my-5 text-3xl font-medium text-center">
          Reset your password
        </h3>
        <p>We will send you an email to reset your password</p>
        <form className="flex flex-col gap-5 mt-10">
          <input className="form-input" type="email" placeholder="Email" />
        </form>
        <button className="px-10 py-3 my-5 transition-colors duration-500 bg-gray-100 border-2 border-gray-600 rounded-xl hover:bg-white hover:text-red-500 hover:border-red-500">
          Submit
        </button>
        <div className="flex justify-between gap-5 py-5 border-t border-t-gray-500">
          <Link href="/login">Cancel</Link>
        </div>
      </div>
    </div>
  )
}
