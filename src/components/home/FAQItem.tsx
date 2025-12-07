"use client";

import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FAQ } from "../data/faqData";

interface Props {
  faq: FAQ;
}

export const FAQItem: React.FC<Props> = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-xl bg-white shadow-sm"
    >
      <button
        className="w-full flex items-center justify-between p-4 md:p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-800 font-medium text-[17px]">
          {faq.question}
        </span>

        <IoChevronDown
          className={`text-gray-500 text-xl transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Answer */}
      <div
        className={`px-4 md:px-5 pb-4 md:pb-5 text-gray-600 text-[15px] leading-relaxed transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        {faq.answer}
      </div>
    </div>
  );
};