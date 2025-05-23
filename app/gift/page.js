"use client";

export default function GiftPage() {
  return (
    <>
      <div className="w-full h-[160px] bg-green-200 px-4 flex flex-col justify-center gap-1 md:pl-24 md:pr-12 md:gap-8">
        <div className="w-full flex flex-col gap-2 md:flex-row md:gap-6 md:items-center">
          <h1 className="font-bold md:text-xl lg:text-2xl xl:text-3xl">
            Received a gift card?
          </h1>
          <p className="font-medium">Earns 2★ per $1</p>
          <div className="flex gap-4 pb-5 md:pb-0">
            <button className="px-3 py-1 border-black border-2 text-base rounded-full font-semibold md:text-sm">
              Add or Reload
            </button>
            <button className="px-3 py-1 text-white border-black border-2 bg-black text-base rounded-full font-semibold">
              Check balance
            </button>
          </div>
        </div>
        <div className="self-end">
          <h1 className="font-bold text-green-800 md:text-xl">
            Card Terms & Conditions
          </h1>
        </div>
      </div>
      <div className="w-full h-[80vh]  p-4 md:flex md:pl-28 md:pr-10 md:gap-8 md:items-center lg:h-[60vh] xl:h-[50vh] 2xl:h-[80vh]">
        <div className="w-full h-2/5  md:h-[250px] md:w-2/3 lg:w-1/2 lg:h-2/3 xl:w-1/3">
          <img
            src="https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg"
            alt="bulk gift cards"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-3/5  md:w-1/3 md:h-max lg:w-1/2 lg:h-2/3 xl:w-2/3">
          <div className="w-full h-1/4 p-2">
            <h1 className="text-2xl font-medium xl:text-3xl">
              Business gifting — simplified
            </h1>
          </div>
          <div className="w-full h-2/4 p-2 xl:flex xl:items-center">
            <p className="xl:text-xl xl:w-1/2">
              Bulk send physical or digital Starbucks Cards to gift, reward,
              incentivize, or show appreciation towards your customers, clients
              and team members. Minimum 15 cards per order.
            </p>
          </div>
          <div className="w-full h-1/4  flex items-center">
            <button className="px-6 py-2 border-black border-2 text-base rounded-full font-bold">
              Shop now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[120vh] bg-gray-300 p-4 md:h-[60vh] md:flex md:flex-wrap md:flex-col lg:pl-24 lg:pt-12">
        <div className="w-full h-[35%] md:w-1/2 md:h-1/2">
          <h1 className="py-3 font-semibold lg:text-2xl">About eGift cards</h1>
          <p className="text-sm lg:text-base">
            A Starbucks eGift card (also known as an “eGift”) is a Starbucks
            Gift Card that is purchased and sent digitally.
          </p>
          <p className="text-sm pt-2 lg:text-base">
            For Senders of an eGift, go to eGift History when signed in to view,
            send, or resend eGifts you’ve purchased — or, to directly contact
            Starbucks eGift Support for help with your order.
          </p>
        </div>
        <div className="w-full h-[30%] md:w-1/2 md:h-1/2">
          <h1 className="py-3 font-semibold lg:text-2xl">
            Questions around eGift cards?
          </h1>
          <p className="text-sm lg:text-base">
            Check our Frequently Asked Questions — your question might already
            be answered. There, you’ll find answers for all Starbucks Gift Cards
            in general (including eGifts).
          </p>
          <div className="w-full pt-4 ">
            <button className="px-6 py-2 border-black border-2 text-base rounded-full font-bold">
              Card FAQs
            </button>
          </div>
        </div>
        <div className="w-full h-[35%] md:h-full md:w-1/2 md:pl-12">
          <h1 className="py-3 font-semibold lg:text-2xl">
            About Starbucks Gift Cards in general
          </h1>
          <p className="text-sm lg:text-base">
            Starbucks Gift Cards, including eGifts, can be used to pay in a
            Starbucks store or to join Starbucks® Rewards.
          </p>
          <p className="text-sm pt-2">
            Register Gift Cards and eGifts to a Starbucks® Rewards account and
            earn 2★ per dollar every time you pay with that card. Those Stars
            quickly add up to free food, drinks, and more!
          </p>
          <div className="w-full  pt-4">
            <button className="px-6 py-2 border-black border-2 text-base rounded-full font-bold">
              Card Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
