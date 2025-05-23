export default function SignInPage() {
  return (
    <>
      <div className="px-4 pb-12 w-full h-max md:flex md:items-center md:flex-col">
        <div className="w-full h-[75px] flex justify-center items-center xl:h-[120px]">
          <h1 className="font-bold text-xl xl:text-3xl ">
            Sign in or create an account
          </h1>
        </div>
        <form className="w-full h-[80vh] pt-10 flex flex-col items-center gap-9 md:w-3/4 md:border-2 md:rounded-lg lg:w-1/2 md:mb-12 xl:w-2/6 xl:h-[75vh]">
          <p className="self-start pl-3 md:pl-7">* indicates required field</p>
          <input
            type="text"
            className="w-11/12 p-3 rounded-lg border-2 border-gray-500"
            placeholder="* Username or email address "
          />
          <input
            type="text"
            className="w-11/12 p-3 rounded-lg border-2 border-gray-500"
            placeholder="* Password"
          />
          <div className="flex self-start pl-3 gap-3 md:pl-7">
            <input type="checkbox" className="w-4" />
            <label>Keep me signed in.</label>
          </div>
          <div className="self-start pl-3 pb-7 md:pl-7">
            <h1 className="text-green-900 font-bold">Forgot your username?</h1>
            <h1 className="text-green-900 font-bold">Forgot your password?</h1>
          </div>
          <div className="w-full flex justify-end pr-7">
            <button className="place-self-end sb-green px-7 py-3 rounded-full text-white font-bold">
              Sign in
            </button>
          </div>
        </form>
        <div className="md:w-1/2 flex flex-col gap-2 md:gap-7 text-center">
          <h1 className="text-green-800 font-bold">Join Starbucks® Rewards</h1>
          <p className="text-sm">
            As a member, start earning free food and drinks, unlock our best
            offers and celebrate your birthday with a treat from us. Best of
            all, it's free to join.
          </p>
          <div>
            <button className="px-7 py-3 rounded-full font-bold border-2 border-green-800 text-green-800">
              Join now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
