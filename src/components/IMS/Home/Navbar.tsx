"use client";
import CButton from "@/components/ui/Cbutton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const tabs = [
  {
    title: "Features",
    link: "/",
  },
  {
    title: "Documentation",
    link: "/",
  },
  {
    title: "Community",
    link: "/",
  },
  {
    title: "Case Studies",
    link: "/",
  },

  {
    title: "Pricing",
    link: "/pricing",
  },
];

const textColor = "text-gray-800";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" w-full p-5 container mx-auto fixed left-0 right-0 top-0 z-50">
      <div className=" h-[88px] flex justify-between items-center px-10 rounded-full bg-black/20 border border-gray-500 backdrop-blur-sm ">
        <Link href={"/"} className="h-[30px] w-[220px]">
          <img
            src="/whitelogo.png"
            alt="scrubbe.png"
            className="object-contain h-full "
          />
        </Link>
        <ul className="hidden xl:flex items-center gap-6 text-white ">
          {tabs.map((tab) => (
            <li key={tab.link}>
              <Link href={tab.link}>{tab.title}</Link>
            </li>
          ))}
        </ul>

        <Link href={"/auth/signin"}>
          <CButton
            // onClick={() => router.push("/incident/tickets/create")}
            className="w-fit h-[40px] hidden xl:flex bg-IMSLightGreen text-white hover:bg-IMSGreen shadow-none text-base"
          >
            Get Started
          </CButton>
        </Link>

        <div className="flex items-center gap-3 xl:hidden">
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 bg-gray-100 rounded-lg cursor-pointer"
          >
            <GiHamburgerMenu size={20} />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-white z-50 xl:hidden ">
          {/* Modal Header */}
          <div className="flex justify-between items-center px-4 h-16 border-b border-gray-200">
            <Link
              href="/"
              onClick={() => setIsModalOpen(false)}
              className="relative w-[141px] h-[40px] sm:w-[176px] sm:h-[50px] lg:w-[211px] lg:h-[60px]"
            >
              <div className="h-[30px] w-[220px]">
                <Image
                  src="/scrubbe-logo-01.png"
                  alt="scrubbe-logo-01.png"
                  fill
                  sizes="(min-width: 360px) 100vw"
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              <IoMdClose size={24} className={textColor} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="px-4 py-6 space-y-4 overflow-y-auto max-h-[calc(100vh-64px)]">
            {tabs.map((item) => (
              <div key={item.title} className="w-full">
                <Link
                  href={item.link || "#"}
                  onClick={() => setIsModalOpen(false)}
                  className={`block py-2 text-lg font-medium hover:text-IMSLightGreen transition-colors`}
                >
                  {item.title}
                </Link>
              </div>
            ))}

            <div className="pt-6 border-t border-gray-200 space-y-3">
              <Link href={"/auth/signin"}>
                <CButton
                  onClick={() => {}}
                  className=" h-[40px]  bg-IMSLightGreen text-white hover:bg-IMSGreen shadow-none text-base"
                >
                  Get Started
                </CButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
