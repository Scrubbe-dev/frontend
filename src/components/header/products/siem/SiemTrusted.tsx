//import Image from "next/image";

const SiemTrusted = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-full max-w-[1440px] mx-auto">
        <article className="w-full h-auto bg-[#DBEAFE] py-4 px-4 md:px-6">
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
          <div className="w-full grid grid-cols-2 md:grid-cols-4 border-b border-gray-200 mb-4 md:mb-6">
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
        <article className="bg-white rounded-2xl p-4 md:p-6 text-center py-4">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
            Ready to Transform Your Security Operations?
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-4">
            Experience the power of our SIEM platform with a personalized demo
            tailored to your organization&lsquo;s unique security challenges
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-center transition-colors">
              Request Demo
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg text-center transition-colors">
              Learn More
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default SiemTrusted;
