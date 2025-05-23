"use client";
import Image from "next/image";

const SiemDashboard = () => {
  return (
    <>
      <div className="w-full h-auto bg-white">
        <section className="h-full w-screen max-w-[1440px] mx-auto flex flex-col justify-center items-center">
          <aside
            className="
  bg-[url('/siem-ellipse-part1361.svg'),url('/siem-ellipse-full1362.svg')] 
  bg-no-repeat 
  bg-[position:top_left,bottom_center] 
  bg-[length:327px_266px,400px_400px]
  h-auto lg:h-[625px] w-full px-4 py-4 sm:py-8   
  flex flex-col lg:grid lg:grid-cols-2 items-center justify-items-center gap-4 lg:gap-8
  "
          >
            {/* Text content */}
            <article className="w-[340px] sm:w-[500px] lg:w-[445px] xl:w-[560px] h-[340px] sm:h-[500px] lg:h-[445px] xl:h-[560px] flex flex-col justify-center p-4 space-y-8">
              <div className="text-[20px] sm:text-[30px] lg:text-[34px] xl:text-[48px] font-bold text-[#374151] leading-tight">
                Advanced SIEM Platform for Real-Time{" "}
                <span className="text-[#2664EA]">Threat</span> Detection &
                Response
              </div>
              <div className="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] text-gray-600 leading-relaxed">
                Protect your organization with enterprise-grade security
                monitoring, log analysis, and incident response capabilities in
                one centralized solution
              </div>
              <div className="flex gap-4 text-[14px] sm:text-[16px]">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
                  Request Demo
                </button>
                <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors">
                  Learn More
                </button>
              </div>
            </article>

            {/* Image container */}
            <article className="w-[340px] sm:w-[500px] lg:w-[445px] xl:w-[560px] h-[340px] sm:h-[500px] lg:h-[445px] xl:h-[560px] relative">
              <Image
                src="/siem-log-event.png"
                alt="siem-log-event"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 600px, (max-width: 1280px) 445px, 560px"
              />
            </article>
          </aside>
          <aside className="w-full bg-[#185e5d]">Rest of page</aside>
        </section>
      </div>
    </>
  );
};

export default SiemDashboard;
