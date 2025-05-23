import Link from "next/link";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import Header from "./Header";

export default function NavExpander({ clickExpander }) {
  return (
    <motion.div
      className="flex flex-col gap-8 w-full h-full bg-white fixed right-0 pl-12 pr-12 pt-16 z-50"
      initial={{ x: "80vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ x: "80vw" }}
    >
      <Link href="/menu" onClick={clickExpander}>
        Menu
      </Link>
      <Link href="/rewards" onClick={clickExpander}>
        Rewards
      </Link>
      <Link href="/gift" onClick={clickExpander}>
        Gift Cards
      </Link>
      <div className="flex border-t-2 border-gray-500 pt-8 gap-4">
        <Link href="/signin" onClick={clickExpander}>
          <button className="border-2 border-black px-4 py-2 rounded-full">
            Sign in
          </button>
        </Link>
        <Link href="/create" onClick={clickExpander}>
          <button className="border-2 border-black px-4 py-2 rounded-full text-white bg-black">
            Join now
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
