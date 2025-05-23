"use client";

import Link from "next/link";
import { useState } from "react";
import NavExpander from "./NavExpander";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [expand, setExpand] = useState(false);

  const clickExpander = () => {
    setExpand((prev) => !prev);
  };

  return (
    <>
      <div
        className={`w-full h-[100px] border-b-2 border-gray-300 bg-white ${
          expand && "sticky top-0 z-40"
        }`}
      >
        <div className="w-full h-full flex items-center justify-between pl-12 pr-12 lg:justify-normal lg:gap-8">
          <Link href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              alt="starbucks logo"
              className="w-8 md:w-12"
            />
          </Link>
          <div className="hidden lg:w-full lg:flex lg:justify-between lg:items-center ">
            <div className="hidden lg:flex lg:gap-8">
              <Link href="/menu" className="text-sm font-bold">
                MENU
              </Link>
              <Link href="/rewards" className="text-sm font-bold">
                REWARDS
              </Link>
              <Link href="/gift" className="text-sm font-bold">
                GIFT CARDS
              </Link>
            </div>
            <div className="hidden lg:flex lg:gap-8">
              <Link href="/signin">
                <button className="text-sm border-2 border-black px-4 py-1 rounded-full font-medium">
                  Sign in
                </button>
              </Link>
              <Link href="/create">
                <button className="text-sm border-2 border-black px-4 py-1 rounded-full text-white bg-black font-medium">
                  Join now
                </button>
              </Link>
            </div>
          </div>
          {/* NAV HAMBURGER */}
          {expand ? (
            <svg
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] lg:hidden"
              onClick={clickExpander}
            >
              <path
                d="M3 21.32L21 3.32001"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 3.32001L21 21.32"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // <img
            //   src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-navicon-round-512.png"
            //   alt="expander"
            //   className="w-[50px] lg:hidden"
            //   onClick={clickExpander}
            // />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] lg:hidden"
              onClick={clickExpander}
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          )}
        </div>
      </div>
      <AnimatePresence>
        {expand && <NavExpander clickExpander={clickExpander} />}
      </AnimatePresence>
    </>
  );
}
