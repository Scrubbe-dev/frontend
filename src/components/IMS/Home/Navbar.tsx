"use client";
import CButton from "@/components/ui/Cbutton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { VscChevronDown } from "react-icons/vsc";

type MenuItem = {
  label: string;
  href?: string;
  dropdownOptions?: {
    label: string;
    href: string;
    description?: string; // Adding optional description field
  }[];
};

const tabs = [
  {
    title: "Features",
    link: "/features",
  },
  {
    title: "Documentation",
    link: "/",
  },
  {
    title: "Community",
    link: "/community",
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

const menuItems: MenuItem[] = [
  {
    label: "Products",
    dropdownOptions: [
      {
        label: "Code Intelligence",
        href: "#",
        description:
          "Turn failed deploys into PR-ready fixes, grounded in your logs , tests , and Git metadata",
      },
      {
        label: "Incident Command Center",
        href: "/products/soar",
        description: "One real-time view for every active incident",
      },
      {
        label: "Magic Insight Engine",
        href: "/products/incident-management",
        description: "Find the true root cause in  seconds- automatically",
      },
      {
        label: "On-Call Handover",
        href: "#",
        description: "Shift transitions without missing context",
      },
      {
        label: "AI Simulations",
        href: "/products/authentication-sdk",
        description: "Train for real outages before they happen",
      },
      {
        label: "Fraud & Risk",
        href: "/products/compliance",
        description: "Converting high-risk signals into controlled responses",
      },
    ],
  },
  {
    label: "Use Cases",
    dropdownOptions: [
      {
        label: "Deployment Failures",
        href: "#",
        description: "Auto-remediation with code intelligence",
      },
      {
        label: "On-call Handover",
        href: "#",
        description: "Zero-effort shift transitions",
      },
      {
        label: "Fraud-Triggered Incidents",
        href: "#",
        description: "Convert spikes into controlled workflows",
      },
      {
        label: "Reliability Training",
        href: "#",
        description: "Improve MTTR through guided drills",
      },
    ],
  },
  {
    label: "Resources",
    dropdownOptions: [
      {
        label: "Docs",
        href: "#",
        description: "API , guides , and integration steps",
      },
      {
        label: "Quickstart",
        href: "#",
        description: "Connect and trigger your first incident in minutes",
      },
      {
        label: "Onboarding Tutorial",
        href: "#",
        description: "End-to-end setup for engineering teams ",
      },
      {
        label: "Postman Collection",
        href: "#",
        description: "Test and explore the API instantly",
      },
      {
        label: "Release Notes",
        href: "#",
        description: "What’s new and improved",
      },
      {
        label: "Status Page",
        href: "#",
        description: "System availability and uptime",
      },
    ],
  },
  {
    label: "Company",
    dropdownOptions: [
      {
        label: "About",
        href: "/about",
        description: "Why we built Scrubbe",
      },
      {
        label: "Security",
        href: "#",
        description: "Data protection and compliance",
      },
      {
        label: "Careers",
        href: "#",
        description: "Join the team",
      },
      {
        label: "Contact",
        href: "#",
        description: "Speak with product or support",
      },
    ],
  },
  // {
  //   label: "More",
  //   dropdownOptions: [
  //     { label: "Knowledge base", href: "#" },
  //     { label: "Security and Trust", href: "#" },
  //     { label: "Case Studies", href: "#" },
  //     { label: "Blog (Technical and Industry Post)", href: "#" },
  //     { label: "White Papers", href: "#" },
  //     { label: "Careers", href: "#" },
  //     { label: "Compliance Checklist", href: "#" },
  //     { label: "About Us", href: "#" },
  //   ],
  // },
];

const textColor = "text-white";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" w-full mx-auto fixed left-0 right-0 top-0 z-50  ">
      <div className=" h-[88px] flex justify-between items-center px-10 bg-black/20 backdrop-blur-sm">
        <Link href={"/"} className="h-[30px] w-[220px]">
          <img
            src="/whitelogo.png"
            alt="scrubbe.png"
            className="object-contain h-full "
          />
        </Link>
        <ul className="hidden xl:flex items-center gap-6 text-white ">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdownOptions ? (
                <>
                  <button
                    className={`${textColor} text-white font-medium transition-colors flex justify-center gap-1 items-center cursor-pointer whitespace-nowrap py-2 rounded-3xl`}
                  >
                    {item.label} <VscChevronDown />
                  </button>

                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-[#060708] shadow-lg rounded-lg w-[630px] z-50 py-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <div className="grid gap-2">
                      {item.dropdownOptions.map((option) => (
                        <Link
                          key={option.label}
                          href={option.href}
                          className={`block border-b border-neutral-600 hover:border-IMSCyan transition-colors relative overflow-hidden group/item ${
                            option.description ? "p-3" : "py-1 px-3"
                          }`}
                        >
                          {/* Left border that appears on hover */}

                          <h3
                            className={`font-medium ${textColor} group-hover/item:text-IMSCyan group-hover/item:underline transition-colors`}
                          >
                            {option.label}
                          </h3>
                          {option.description && (
                            <p className="text-sm text-gray-500 mt-1 group-hover/item:text-IMSCyan transition-colors">
                              {option.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className={`${textColor} hover:text-blue-600 transition-colors flex justify-center items-center cursor-pointer whitespace-nowrap py-2`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </ul>

        <Link href={"/auth/signin"}>
          <CButton
            // onClick={() => router.push("/incident/tickets/create")}
            className="w-fit h-[40px] hidden xl:flex bg-IMSCyan shadow-none text-base"
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
                  className={`block py-2 text-lg font-medium hover:text-IMSCyan transition-colors`}
                >
                  {item.title}
                </Link>
              </div>
            ))}

            <div className="pt-6 border-t border-gray-200 space-y-3">
              <Link href={"/auth/signin"}>
                <CButton
                  onClick={() => {}}
                  className="!text-black h-[40px] bg-IMSCyan  hover:bg-IMSCyan shadow-none text-base"
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
