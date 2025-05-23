"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CONTACT_LABELS = [
  {
    name: "ABOUT US",
    items: [
      "Our Company",
      "Our Coffee",
      "About Starbucks",
      "Starbucks Archive",
      "Investor Relations",
      "Customer Service",
      "Contact Us",
    ],
  },
  {
    name: "CAREERS",
    items: [
      "Culture and Values",
      "Belonging at Starbucks",
      "College Achievement Plan",
      "Alumni Community",
      "U.S. Careers",
      "International Careers",
    ],
  },
  {
    name: "SOCIAL IMPACT",
    items: [
      "Communities",
      "Starbucks Foundation",
      "Sustainability",
      "Environmental and Social Impact Reporting",
    ],
  },
  {
    name: "BUSINESS PARTNERS",
    items: [
      "Landlord Support Center",
      "Suppliers",
      "Corporate Gift Card Sales",
      "Office and Foodservice Coffee",
    ],
  },
  {
    name: "ORDER AND PICKUP",
    items: [
      "Order on the App",
      "Order on the Web",
      "Delivery",
      "Order and Pick Up Options",
      "Explore and Find Coffee for Home",
    ],
  },
];

export default function FooterOne() {
  const [contactIndex, setContactIndex] = useState(null);

  const clickArrowDown = (index) => {
    setContactIndex(index);
  };

  const clickArrowUp = () => {
    setContactIndex(null);
  };

  return (
    <div className="w-full h-[100%] p-8 flex flex-col justify-evenly lg:flex-row border-t-2 border-gray-600">
      {CONTACT_LABELS.map((contact, i) => {
        return (
          <Fragment key={contact.name}>
            <div
              className="w-full h-full flex items-center justify-between lg:flex-col lg:items-start lg:gap-6 "
              key={contact.name}
            >
              <h1 className="font-bold">{contact.name}</h1>
              <motion.svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  contactIndex === i ? clickArrowUp() : clickArrowDown(i)
                }
                className="w-[30px] h-[30px] lg:hidden"
                initial={{ rotate: 0 }}
                animate={{ rotate: contactIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <path
                  d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                  fill="#000000"
                />
              </motion.svg>
              <div className="hidden lg:w-full lg:flex lg:flex-col lg:gap-4 lg:h-full">
                {contact.items.map((item) => {
                  return <h1 key={item}>{item}</h1>;
                })}
              </div>
            </div>
            <AnimatePresence>
              {contactIndex === i && (
                <motion.div
                  className="flex flex-col gap-4 lg:hidden py-4"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {contact.items.map((item) => {
                    if (contactIndex === i) {
                      return <h1>{item}</h1>;
                    }
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </Fragment>
        );
      })}
    </div>
  );
}
