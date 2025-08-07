import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[600px] relative z-0 ]">
      <img
        src="/authentication-bg.png"
        alt="incident management"
        className="w-full h-full object-cover absolute z-[-1] inset-0"
      />
      <div className="w-full h-full">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center h-full">
          <h1 className="text-white md:text-[60px] text-[30px] font-bold text-center max-w-4xl">
            Secure Authentication for Your Enterprise SIEM & SOAR
          </h1>
          <p className="text-white text-center  md:text-lg max-w-4xl">
            ScrubbAuth provides robust, scalable authentication services with an
            easy-to-integrate SDK that simplifies security implementation while
            meeting the highest industry standards
          </p>
          <div className="flex gap-4 text-[14px] sm:text-[16px] mt-6">
            <button
              onClick={() => router.push("/auth/signin")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Get Started
            </button>
            <button className="border-2 border-blue-500 text-blue-500 bg-white font-medium py-3 px-6 rounded-md transition-colors">
              Go to Documentation
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
