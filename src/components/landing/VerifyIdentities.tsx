"use client";
import Image from "next/image";

const VerifyIdentities = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-full max-w-[1440px] h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center p-4 gap-4">
        <article
          className="  w-[280px] h-[280px]  
              sm:w-[560px] sm:h-[560px]
              md:w-[672px] md:h-[672px]
              lg:w-[445px] lg:h-[445px]
              xl:w-[560px] xl:h-[560px] p-6
 "
        >
          <div className="w-full h-full flex flex-col justify-center space-y-4">
            <h2 className="text-[18px] sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Verify identities. Profile devices. Expose intent before it
              becomes fraud
            </h2>

            <p className="text-[10px] sm:text-base text-gray-600">
              Scrubbe&apos;s KYC Fraud Intelligence Engine combines user
              verification with behavioral and device fingerprinting to assess
              trust in real time.
            </p>

            <p className="text-[10px] sm:text-base text-gray-600">
              Detect fake accounts, repeat abusers, and high-risk identities
              across signups, transactions, or access flows. Built for
              compliance, designed for speed — all powered by AI and
              device-level risk signals
            </p>

            <div>
              <button
                onClick={() => console.log("Learn More clicked")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </article>
        <article
          className=" w-[280px] h-[280px]  
              sm:w-[560px] sm:h-[560px]
              md:w-[672px] md:h-[672px]
              lg:w-[445px] lg:h-[445px]
              xl:w-[560px] xl:h-[560px] 
 relative"
        >
          <Image
            src="/fraud-intelligence.png"
            alt="fraud-intelligence"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 280px,
                              (max-width: 768px) 560px,
                              (max-width: 1024px) 670px,
                              (max-width: 1280px) 520px,
                              650px"
          />
        </article>
      </section>
    </div>
  );
};

export default VerifyIdentities;
