export default function CreatePage() {
  return (
    <>
      <div className="px-4 pb-12 w-full h-max md:flex md:items-center md:flex-col">
        <div className="w-full h-[75px] flex justify-center items-center xl:h-[120px]">
          <h1 className="font-bold text-xl xl:text-3xl ">Create an account</h1>
        </div>
        <div className="flex flex-col gap-4 items-center text-center md:pb-7">
          <h1 className="font-medium">Starbucks® Rewards</h1>
          <p className="text-xs font-light md:w-1/2">
            Join Starbucks Rewards to earn Stars for free food and drinks, any
            way you pay. Get access to mobile ordering, a birthday Reward, and
            moremore.
          </p>
        </div>
        <form className="w-full md:px-12 h-max pt-10 flex flex-col items-center gap-9 md:w-3/4 md:border-2 md:rounded-lg lg:w-1/2 md:mb-12 xl:w-2/6 xl:h-max">
          <p className="self-start pl-3 md:pl-7">* indicates required field</p>
          <label className="self-start pl-3 md:pl-7 font-bold">
            Personal Information
          </label>
          <input
            type="text"
            className="w-11/12 p-3 rounded-lg border-2 border-gray-500"
            placeholder="* First name "
          />
          <input
            type="text"
            className="w-11/12 p-3 rounded-lg border-2 border-gray-500"
            placeholder="* Last name"
          />
          <label className="self-start pl-3 md:pl-7 font-bold">
            Account Security
          </label>
          <div className="w-full flex flex-col items-center">
            <input
              type="text"
              className="w-11/12 p-3 rounded-lg border-2 border-gray-500"
              placeholder="* Email address "
            />
            <p className="self-start pl-8 text-sm">
              This will be your username
            </p>
          </div>
          <div className="w-full flex flex-col items-center">
            <input
              type="text"
              className="w-11/12 p-3 rounded-lg border-2 border-gray-500"
              placeholder="* Password"
            />
            <p className="self-start pl-8 text-sm">
              Create a password 8 to 25 characters long that includes at least 1
              uppercase and 1 lowercase letter, 1 number and 1 special character
              like an exclamation point or asterisk.
            </p>
          </div>
          <h1 className="self-start md:pl-7 text-gray-500 font-semibold">
            COLLECT MORE STARS & EARN REWARDS
          </h1>
          <p className="self-start md:pl-7">
            Email is a great way to know about offers and what's new from
            Starbucks
          </p>
          <div className="flex self-start flex-col pl-3 gap-3 md:pl-7">
            <div className="flex gap-3">
              <input type="checkbox" className="w-4" />
              <label>Yes, I'd like email from Starbucks</label>
            </div>
            <p>Know about initiatives, announcements and product offers.</p>
          </div>
          <div className="self-start md:pl-6">
            <h1 className="self-start pb-4 text-gray-500 font-semibold">
              TERMS OF USE
            </h1>
            <div className="flex gap-3 pl-3">
              <input type="checkbox" className="w-4" />
              <p className="text-xs w-[250px]">
                * I agree to the Starbucks® Rewards Terms and the Starbucks Card
                Terms and have read the Starbucks Privacy Statement .
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end pr-7 md:pb-12">
            <button className="place-self-end sb-green px-7 py-3 rounded-full text-white font-bold">
              Create account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
