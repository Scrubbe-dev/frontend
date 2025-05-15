import Image from "next/image";

const BuiltForDevelopers = () => {
  return (
    <div className="w-full h-auto bg-white">
      <section className="w-full max-w-[1440px] mx-auto h-[600px] lg:h-[550px] bg-[linear-gradient(to_bottom,#DBEAFE_40%,white_40%)] lg:bg-[linear-gradient(to_bottom,#DBEAFE_45%,white_45%)] flex flex-col items-center">
        <aside className="w-full h-[200px] lg:h-[100px] grid grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))] mx-auto mt-0">
          {/* Stat 1 */}

          <div className=" h-[100px] py-0 flex flex-col items-center justify-center border-x-4 border-blue-900">
            <p className="text-[0.9rem] lg:text-[1.1rem] font-bold text-gray-900">
              {"<"}5 mins
            </p>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-gray-600 text-center mt-2 w-[170px] sm:max-w-[250px]">
              Average time to investigate incident
            </p>
          </div>

          {/* Stat 2 */}
          <div className=" h-[100px] py-0 flex flex-col items-center justify-center border-x-4 border-blue-900">
            <p className="text-[0.9rem] lg:text-[1.1rem] font-bold text-gray-900">
              90%+
            </p>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-gray-600 text-center mt-2 w-[170px] sm:max-w-[250px]">
              Analyst satisfaction with UI usability
            </p>
          </div>

          {/* Stat 3 */}
          <div className=" h-[100px] py-0 flex flex-col items-center justify-center border-x-4 border-blue-900">
            <p className="text-[0.9rem] lg:text-[1.1rem] font-bold text-gray-900">
              99.9%
            </p>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-gray-600 text-center mt-2 w-[170px] sm:max-w-[250px]">
              Uptime for dashboard availability
            </p>
          </div>

          {/* Stat 4 */}
          <div className=" h-[100px] py-0 flex flex-col items-center justify-center border-x-4 border-blue-900">
            <p className="text-[0.9rem] lg:text-[1.1rem] font-bold text-gray-900">
              {"<"}5%
            </p>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-gray-600 text-center mt-2 w-[170px] sm:max-w-[250px]">
              False positives on automated action
            </p>
          </div>
        </aside>
        <article className="w-[90%] lg:w-[80%] h-[350px] lg:h-[400px] rounded-[10px] mx-auto overflow-hidden flex flex-col lg:flex-row">
          {/* Top row / Left column */}
          <div className="flex-1 bg-[#1F2B71] flex flex-col">
            {/* First row */}
            <div className="h-1/2 flex flex-col items-center justify-center p-4 text-white  text-center font-extrabold text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem]">
              Built for developers. Trusted by enterprises. Designed to protect
              what fintechs value most
            </div>
            {/* Second row */}
            <div className="h-1/2 flex flex-col items-center justify-center p-4 text-white text-[0.5rem] sm:text-[0.7rem] lg:text-[1rem] text-justify border-t border-blue-300">
              At Scrubbe, we believe cybersecurity should be powerful,
              accessible, and intuitive for everyone not just security experts.
              Our platform is built to empower organizations of all sizes to
              detect, investigate, and respond to threats in real time without
              needing deep technical knowledge.
            </div>
          </div>

          {/* Bottom row / Right column */}
          <div className="flex-1 bg-[#3C4399] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                <Image
                  src="/threats-in-motion.svg"
                  alt="threats-in-motion"
                  fill
                  sizes="(min-width: 360px) 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default BuiltForDevelopers;
