export default function RegisterPage() {
  return (
    <div className="mx-5 my-20">
      <div className="max-w-lg p-8 mx-auto bg-purple-100 rounded-2xl">
        <h3 className="my-5 text-3xl font-medium text-center">
          Create account
        </h3>

        <form className="flex flex-col gap-5">
          <input className="form-input" placeholder="Name" />
          <input className="form-input" placeholder="Email" />
          <input
            type="password"
            className="form-input"
            placeholder="Password"
          />
          <input
            type="password"
            className="form-input"
            placeholder="Confirm password"
          />
          <div className="flex flex-wrap justify-center gap-5">
            <button className="primary-btn">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
