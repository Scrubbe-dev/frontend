"use client";
import Image from "next/image";

const ContextAware = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-full max-w-[1440px] h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center p-4 py-6 md:py-12 lg:py-16 gap-4">
        <article
          className=" w-[280px] h-[280px]  
              sm:w-[560px] sm:h-[560px]
              md:w-[672px] md:h-[672px]
              lg:w-[445px] lg:h-[445px]
              xl:w-[560px] xl:h-[560px] 
 relative"
        >
          <Image
            src="/mcp-server.png"
            alt="mcp-server"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 280px,
                              (max-width: 768px) 560px,
                              (max-width: 1024px) 670px,
                              (max-width: 1280px) 520px,
                              650px"
          />
        </article>
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
              Context-aware AI that thinks before it acts
            </h2>

            <p className="text-[10px] sm:text-base text-gray-600">
              Scrubbe blends Large Language Models with a Model Context Protocol
              (MCP) to deliver intelligent, role-aware responses across your
              security stack.
            </p>

            <p className="text-[10px] sm:text-base text-gray-600">
              It interprets raw log data, detection events, and user behavior in
              real time — converting complex alerts into clear, natural-language
              summaries.
              <br />
              From explaining risk scores to suggesting remediation steps or
              even writing detection rules, Scrubbe helps your team respond
              faster, smarter, and with full context.
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
      </section>
    </div>
  );
};

export default ContextAware;
