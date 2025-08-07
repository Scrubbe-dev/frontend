import React from "react";

const services = [
  {
    service: "Fintechs & Digital Banks",
    details:
      "Tackling fraud, compliance, and API threats with advanced behavior analysis and real-time monitoring.",
  },
  {
    service: "SaaS Platforms",
    details:
      "Monitoring logins, transactions, and abuse patterns across user bases and API endpoints.",
  },
  {
    service: "Startups & Mid-Market Teams",
    details:
      "Powerful detection capabilities without needing a dedicated SOC team or extensive security expertise.",
  },
  {
    service: "Enterprise Security Teams",
    details:
      "Streamline response with AI-driven rules and automation while maintaining enterprise-grade security.",
  },
];

const ourDifference = [
  {
    text: "Plain-English Rule Writing",
    sub_text: "Write detection logic in natural language — no code required",
  },
  {
    text: "AI That Explains Itself",
    sub_text:
      "Ezra doesn't just alert — it justifies, summarizes, and suggests",
  },
  {
    text: "Unified Stack",
    sub_text: "SIEM, SOAR, fraud, compliance — all integrated",
  },
  {
    text: "Built for Speed & Scale",
    sub_text: "Modern cloud-native architecture, multi-tenant by design",
  },
  {
    text: "Developer-First",
    sub_text: "Open APIs, SDKs, webhooks, and flexible dashboards",
  },
];
const WhoWeServe = () => {
  return (
    <div className="min-h-[600px]">
      <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
        <div className="text-center mb-4">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-2">
            What We Serve{" "}
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className=" text-sm sm:text-base md:max-w-2xl mx-auto">
            Scrubbe is built for :
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.service}
              className=" border-l-2 bg-blue-100 p-4 rounded-xl border-blue-600 space-y-2"
            >
              <p className=" md:text-xl text-lg font-semibold">
                {item.service}
              </p>
              <p className=" text-gray-500">{item.details}</p>
            </div>
          ))}
        </div>

        <p>
          We give security, compliance, and fraud teams everything they need —
          in one place — without the complexity or cost of legacy stacks.
        </p>
        <div className=" p-4 md:p-10 overflow-hidden w-full bg-[url('/siem-background.png')] bg-blend-saturation bg-colorScGreen bg-cover bg-center bg-no-repeat  rounded-[20px] min-h-[400px] mt-14 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl text-white font-bold">
              What Makes Us Different
            </h2>
            <p className="font-bold text-white mt-2">
              We don&apos;t just plug into your environment — we adapt to your
              threat model.
            </p>
          </div>

          <div className="">
            <div className="grid grid-cols-3 gap-3 mt-10">
              {ourDifference.slice(0, 3).map((value) => (
                <div
                  key={value.text}
                  className="p-2 md:p-4 bg-white rounded-md space-y-2 "
                >
                  <p className=" font-semibold text-lg">{value.text}</p>
                  <p className=" text-sm ">{value.sub_text}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {ourDifference.slice(3, 5).map((value) => (
                <div
                  key={value.text}
                  className="p-2 md:p-4 bg-white rounded-md space-y-2 "
                >
                  <p className=" font-semibold text-lg">{value.text}</p>
                  <p className=" text-sm ">{value.sub_text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-2">
            What we are{" "}
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className=" text-sm sm:text-base md:max-w-2xl mx-auto">
            We&apos;re a team of engineers, data scientists, and cybersecurity
            leaders passionate about making security smarter, simpler, and
            radically more accessible. We&apos;ve built AI systems, governed
            data at scale, and managed high-risk environments — now we&apos;re
            rethinking what a modern security platform should look like.{" "}
          </p>
        </div>
      </div>

      <div
        className={`w-full bg-[url('/cta1.png')] bg-cover bg-center bg-no-repeat `}
      >
        <article className=" rounded-2xl p-4 md:p-6 text-center py-4">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-white mb-1">
            Let&apos;s Secure What Matters{" "}
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-white max-w-3xl mx-auto mb-4">
            Whether you&apos;re defending customer data, APIs, payments, or
            platform integrity — Scrubbe helps you stay ahead of threats with
            clarity, automation, and control.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-center transition-colors">
              Request Demo
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 bg-white font-medium py-3 px-8 rounded-lg text-center transition-colors">
              Learn More
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default WhoWeServe;
