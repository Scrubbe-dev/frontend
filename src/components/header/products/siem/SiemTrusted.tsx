//import Image from "next/image";
import CTA from "../CTA";
const SiemTrusted = () => {
  return (
    <div className="w-full ">
      <section className="w-full bg-zinc-100 ">
        <article className="w-full h-auto max-w-[1440px] mx-auto py-4 px-4 md:px-6">
          {/* Header Section */}
          <div className="text-center mb-4">
            <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
              Trusted by Security Teams Worldwide
            </h2>
            <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Our platform delivers measurable results for organizations of all
              sizes
            </p>
          </div>

          {/* Stats Section */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 mb-4 md:mb-6">
            <div className="flex flex-col items-center justify-center py-2 md:py-3 border-r-2 border-[#1F2B71]">
              <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
                99.9%
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                Uptime
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                Reliability
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-2 md:py-3 border-r-0 md:border-r-2 border-[#1F2B71]">
              <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
                85%
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                Reduction in
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                Response Time
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-2 md:py-3 border-r-2 border-t md:border-t-0 border-[#1F2B71]">
              <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
                10B+
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                Events Processed
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                Daily
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-2 md:py-3 border-t md:border-t-0">
              <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
                500+
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                Enterprise
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                Customers
              </p>
            </div>
          </div>
        </article>

        {/* CTA Section */}
      </section>
      <CTA />
    </div>
  );
};

export default SiemTrusted;
