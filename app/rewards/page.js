"use client";

import FreeTemplate from "@/components/FreeTemplate";
import { useState } from "react";

const content = [
  {
    step: 1,
    title: "Download the Starbucks app",
    description:
      "To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.",
  },
  {
    step: 2,
    title: "Order and pay how you’d like",
    description:
      "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how",
  },
  {
    step: 3,
    title: "Earn Stars, get Rewards",
    description:
      "As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!",
  },
];

const CONTENT_TWO = [
  {
    title: "Fun freebies",
    src: "https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg",
    alt: "fun freebies",
    description:
      "Not only can you earn free food, drinks and more, look forward to a birthday treat on us.",
  },
  {
    title: "Order & pay ahead",
    src: "https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg",
    alt: "order and pay",
    description:
      "Master the art of ordering ahead with saved favorites and payment methods.",
  },
  {
    title: "Get to free faster",
    src: "https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg",
    alt: "fun taster",
    description:
      "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.",
  },
];

const DYNAMIC_STARS = ["25", "100", "200", "300", "400"];

const REWARD_OPTIONS = [
  {
    header: "Customize your drink",
    subText:
      "Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
    img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/25.png",
  },
  {
    header:
      "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
    subText:
      "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
    img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png",
  },
  {
    header: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
    subText:
      "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
    img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png",
  },
  {
    header: "Sandwich, protein box or at-home coffee",
    subText:
      "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee including Starbucks VIA Instant®.",
    img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png",
  },
  {
    header: "Select Starbucks® merchandise",
    subText:
      "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
    img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png",
  },
];

export default function RewardsPage() {
  const [option, setOption] = useState(0);

  function optionClick(option) {
    setOption(option);
  }

  const selectedReward = REWARD_OPTIONS[option];
  return (
    <>
      <div className="h-[4vh] w-full bg-red-400 px-3 sb-green py-1 flex justify-between items-center text-white sticky top-0">
        <h1>STARBUCKS REWARDS</h1>
        <button className="rounded-full px-4  border-2 text-sm border-white lg:hidden">
          Join in the app
        </button>
      </div>
      <div className="w-full h-[80vh] bg-green-100 md:bg-slate-600 md:text-white flex justify-center md:justify-start lg:h-[90vh]">
        <div className="w-3/4 h-full  text-center flex flex-col gap-6 pt-12 md:w-1/3 md:justify-center">
          <h1 className="text-3xl">FREE COFFEE IS A TAP AWAY</h1>
          <p>Join now to start earning Rwards.</p>
          <div>
            <button className="rounded-full sb-green px-6 py-1 text-white">
              Join in the app
            </button>
          </div>
          <a href="">Or join online</a>
        </div>
        <div className="hidden md:block md:h-full md:w-2/3 bg-slate-400">
          <img
            src="https://stories.starbucks.com/uploads/sites/9/2020/09/Star-Days-1440x700.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full h-[80vh] md:h-[60vh] lg:h-[60vh]">
        <div className="w-full h-1/4  flex flex-col justify-center md:justify-end items-center text-center">
          <h1 className="font-bold text-xl">Getting started is easy</h1>
          <p className="text-sm md:text-lg lg:text-xl">
            Earn Stars and get rewarded in a few easy steps.
          </p>
        </div>
        <div className="w-full h-3/4 pt-4 md:flex md:text-center">
          {content.map((ct) => {
            return (
              <div
                key={ct.step}
                className="w-full max-fit mb-4 flex md:flex-col md:h-1/2 md:items-center md:gap-8"
              >
                <div className="w-1/4 h-full pt-4 pl-4">
                  <div className="px-4 py-2 flex justify-center border-2 w-1/2 rounded-full text-center border-green-800 text-green-600 md:flex md:justify-center">
                    {ct.step}
                  </div>
                </div>
                <div className="w-3/4 h-full flex flex-col gap-2 pr-8 md:pr-0 md:gap-8">
                  <h1 className="text-xs font-bold md:text-xl lg:text-2xl">
                    {ct.title}
                  </h1>
                  <p className="text-sm lg:text-base">{ct.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* DYNAMIC PART */}
      <div className="w-full h-[80vh] ">
        <div className="w-full h-1/4  text-center flex flex-col justify-center gap-6 bg-green-50">
          <h1 className="text-xl font-bold">Get your favorites for free</h1>
          <div className="w-full flex justify-around">
            {DYNAMIC_STARS.map((star, i) => (
              <button key={i} onClick={() => optionClick(i)}>
                {star}★
              </button>
            ))}
          </div>
        </div>
        <div className="w-full h-3/4 bg-green-100">
          <FreeTemplate
            header={selectedReward.header}
            subText={selectedReward.subText}
            img={selectedReward.img}
          />
        </div>
      </div>
      <div className="w-full h-[100vh] ">
        <div className="w-full h-1/4  flex text-center flex-col items-center justify-center gap-4 px-4 md:w-4/5 md:m-auto md:p-0">
          <h1 className="text-2xl font-medium md:font-bold md:text-3xl">
            Endless Extras
          </h1>
          <p className="text-sm">
            Joining Starbucks® Rewards means unlocking access to benefits like
            quick and easy ordering, tasty Rewards and—yes, free coffee.
          </p>
        </div>
        <div className="w-full h-3/4 flex flex-col gap-3 md:flex-row">
          {CONTENT_TWO.map((ct) => {
            return (
              <div
                key={ct.alt}
                className="w-full h-1/3 flex gap-4 md:flex-col md:items-center"
              >
                <div className="w-1/3 h-full pl-4 md:w-full">
                  <img
                    src={ct.src}
                    alt={ct.alt}
                    className="w-full h-1/2 object-contain md:h-full"
                  />
                </div>
                <div className="w-2/3 h-full  flex flex-col gap-2 pr-4 md:items-center md:w-4/5 md:text-center md:gap-8">
                  <h1 className="md:font-bold md:text-2xl">{ct.title}</h1>
                  <p className="text-sm md:text-lg">{ct.description}</p>
                  <a href="" className="text-sm">
                    Learn more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-max flex bg-green-50 flex-col gap-4 justify-center items-center text-center p-4 md:py-8">
        <h1 className="font-bold text-xl lg:text-3xl">
          Cash or card, you earn Stars
        </h1>
        <p className="text-sm md:w-3/4 lg:w-1/2 lg:text-lg">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
      </div>
      <div className="w-full h-[max] bg-green-50 pb-12 md:max-h-fit ">
        <div className="max-h-fit px-4">
          <h1 className="font-bold text-xl pt-4">1★Star per dollar</h1>
          <p className="text-sm">Pay as you go</p>
        </div>
        <div className="w-full h-max  px-4 flex flex-col gap-4 pt-5 md:flex-row md:h-max lg:w-9/12 lg:m-auto">
          <div className="h-1/3 w-full  flex gap-4 md:justify-center">
            <div className="w-1/3 ">
              <img
                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
                alt="ways to pay"
                className="w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 w-[150px] ">
              <h1 className="font-bold text-2xl">Scan and pay separately</h1>
              <p className="text-base">
                Use cash or credit/debit card at the register.
              </p>
            </div>
          </div>
          <div className="max-h-fit w-full flex gap-4 md:justify-center">
            <div className="w-1/3">
              <img
                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
                alt="ways to pay"
                className="w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 w-[150px]">
              <h1 className="font-bold text-2xl">Save payment in the app</h1>
              <p className="text-base">
                Check-out faster by saving a credit/debit card or PayPal to your
                account. You’ll be able to order ahead or scan and pay at the
                register in one step.
              </p>
            </div>
          </div>
        </div>
        <div className="max-h-fit px-4 py-4">
          <h1 className="font-bold text-xl">2★Stars per dollar</h1>
          <p className="text-sm">Add funds in the app</p>
        </div>
        <div className="w-full h-max  px-4 flex flex-col gap-4 pt-5 md:flex-row md:h-max lg:w-9/12 lg:m-auto">
          <div className="max-h-fit w-full flex gap-4 md:justify-center">
            <div className="w-1/3">
              <img
                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
                alt="ways to pay"
                className="w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 w-[150px] ">
              <h1 className="font-bold text-2xl">Preload</h1>
              <p className="text-base">
                To save time and earn Stars twice as fast, add money to your
                digital Starbucks Card using any payment option. Scan and pay in
                one step or order ahead in the app.
              </p>
            </div>
          </div>
          <div className="max-h-fit w-full flex gap-4 md:justify-center">
            <div className="w-1/3">
              <img
                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
                alt="ways to pay"
                className="w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 w-[150px]">
              <h1 className="font-bold text-2xl">Register your gift card</h1>
              <p className="text-base">
                Then use it to pay through the app. You can even consolidate
                balances from multiple cards in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-max md:p-12 outerbox-bg">
        <div className="w-full h-max bg-green-100 flex flex-col gap-4 justify-center items-center text-center px-4 py-8">
          <h1 className="font-bold text-xl">Cash or card, you earn Stars</h1>
          <p className="text-sm md:w-3/4">
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) Rewards.
          </p>
        </div>
        <div className="w-full h-max bg-green-100 flex flex-col gap-3 md:h-max">
          <div className="w-full h-max md:flex md:text-center">
            <div className="w-full h-max flex px-4 gap-4 pb-8 md:flex-col ">
              <div className="h-full w-1/3 md:w-full">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png"
                  alt="delta skymiles"
                  className="w-full object-contain"
                />
              </div>
              <div className="h-full w-2/3 md:w-full">
                <p>
                  Link your Delta SkyMiles® and Starbucks® Rewards accounts to
                  earn miles on Starbucks Card reloads of $25 or more, plus
                  Double Stars on travel days.1
                </p>
              </div>
            </div>
            <div className="w-full  h-max flex px-4 gap-4 pb-8 md:flex-col">
              <div className="h-full w-1/3 md:w-full">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/bank-of-america.png"
                  alt=" bank of america"
                  className="w-full object-contain"
                />
              </div>
              <div className="h-full w-2/3 md:w-full">
                <p>
                  Link your Bank of America eligible card and Starbucks® Rewards
                  account to earn 2% Cash Back and Bonus Stars on qualifying
                  Starbucks in-app purchases.2
                </p>
              </div>
            </div>
            <div className="w-full  h-max flex px-4 gap-4 pb-8 md:flex-col">
              <div className="h-full w-1/3 md:w-full">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/marriott-bonvoy/marriott-logo.png"
                  alt="marriott"
                />
              </div>
              <div className="h-full w-2/3 md:w-full">
                <p>
                  Link your Marriott Bonvoy® and Starbucks® Rewards accounts to
                  earn Double Stars during eligible stays, points during any
                  Marriott Bonvoy Week and more.3
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center pb-8">
            <button className="sb-green rounded-full text-white px-4 py-1">
              Join Starbucks Rewards
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
