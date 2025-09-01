import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-white">
      <div className=" container flex mx-auto justify-between  items-center min-h-[400px]">
        <div className=" space-y-5 flex-[.6]">
          <h2 className=" text-5xl md:text-6xl font-bigshotOne text-IMSLightGreen">
            Scrubbe
          </h2>
          <p>
            1207 Delaware Ave #3296 <br /> Wilmington, DE 19806, United States
          </p>
          <div className="w-full">
            <div className=" flex items-center gap-4">
              <SocialLink
                icon={FaSquareXTwitter}
                href="https://x.com/_Scrubbe"
              />
              <SocialLink
                icon={FaLinkedin}
                href="https://www.linkedin.com/company/scrubbe/"
              />
              <SocialLink icon={FaGithub} href="#" />
            </div>
          </div>
        </div>

        <div>
          <div className=" grid grid-cols-3 gap-5">
            <div className=" md:text-lg font-medium flex flex-col gap-2">
              <Link href={"#"}>
                <p>Documentation</p>{" "}
              </Link>
              <Link href={"#"}>
                <p>API Reference</p>{" "}
              </Link>
              <Link href={"#"}>
                <p>Contact Us</p>
              </Link>
            </div>
            <div className=" md:text-lg font-medium flex flex-col gap-2">
              <Link href={"#"}>
                <p>Privacy Policy</p>{" "}
              </Link>
              <Link href={"#"}>
                <p>Terms of Service</p>{" "}
              </Link>
              <Link href={"#"}>
                <p>Support</p>
              </Link>
            </div>
            <div className=" md:text-lg font-medium flex flex-col gap-2">
              <Link href={"#"}>
                <p>Blog</p>{" "}
              </Link>
              <Link href={"#"}>
                <p>Careers</p>{" "}
              </Link>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email for demo"
              className="h-[42px]  w-[300px] px-2 bg-white outline-none rounded-l-lg border-1 border-IMSLightGreen"
            />
            <div className="h-[42px] rounded-r-lg bg-IMSLightGreen text-white flex items-center px-6 font-semibold">
              Schedule a Demo
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#00474D]">
        <div className="flex justify-between items-center container h-[50px] text-white px-4 mx-auto ">
          @2025 Scrubbe IMS. All rights reserved.
          <div>
            Contact:
            <Link href={"mailto:support@scrubbe.com"} className=" underline">
               support@scrubbe.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Type definitions
interface SocialLinkProps {
  icon: IconType;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, href }) => (
  <Link
    href={href}
    className={
      "size-[40px] bg-black rounded-full flex items-center justify-center"
    }
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={24} className=" text-white" />
  </Link>
);

export default Footer;
