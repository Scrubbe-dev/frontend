"use client";
import React, { useState } from "react";

type Props = {
  faqData: {
    question: string;
    answer: string;
    iscode: boolean;
  }[];
};
const FAQ = ({ faqData }: Props) => {
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20 bg-white">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          Frequently Asked Questions{" "}
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base md:max-w-2xl mx-auto ">
          Got questions? We&apos;ve got answers. Browse our frequently asked
          questions to find what you&apos;re looking for.
        </p>
      </div>

      <div className="mx-auto my-6  rounded-lg bg-white ">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            iscode={item.iscode}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

const AccordionItem = ({
  question,
  answer,
  iscode,
  index,
}: {
  question: string;
  answer: string;
  iscode: boolean;
  index?: number;
}) => {
  const [isOpen, setIsOpen] = useState(index == 0 ? true : false);

  return (
    <div className="border border-gray-200   mt-3 rounded-md">
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`text-lg font-medium text-gray-800 py-3 md:px-8 px-5 w-full flex items-center gap-2 justify-between rounded-t-md ${
            isOpen ? "bg-subDark !text-white" : ""
          }`}
        >
          {question}
          <svg
            className={`h-5 w-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-180 text-white" : "text-gray-400"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {iscode ? (
        <pre
          className={`mt-2 overflow-hidden max-w-5xl text-gray-600 transition-all duration-300 ease-in-out px-5 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="pb-2 text-sm">{answer}</p>
        </pre>
      ) : (
        <div
          className={`mt-2 overflow-hidden max-w-5xl text-gray-600 transition-all duration-300 ease-in-out px-5 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="pb-2 text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};
