import Image from "next/image";

const BuiltForDevelopers = () => {
  return (
    <div className="w-full h-auto bg-white">
      <section className="w-full max-w-[1440px] mx-auto h-[700px] lg:h-[600px] bg-[linear-gradient(to_bottom,#DBEAFE_40%,white_40%)] lg:bg-[linear-gradient(to_bottom,#DBEAFE_45%,white_45%)] flex flex-col items-center">
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
        <article
          className="rounded-[10px] overflow-hidden grid grid-cols-1 grid-rows-2 
    lg:grid-cols-2 lg:grid-rows-1 
    justify-items-center mx-auto
    w-[288px] h-[450px]
    sm:w-[576px] sm:h-[450px]
    md:w-[692px] md:h-[450px]
    lg:w-[820px] lg:h-[450px]
    xl:w-[1024px] xl:h-[450px]
"
        >
          {/* Top row / Left column */}
          <nav
            className="row-start-1 col-start-1 lg:row-start-1 lg:col-start-1 overflow-y-auto w-full grid 
    grid-cols-1 
    grid-rows-[3fr_7fr] 
    lg:grid-rows-[1fr_1fr] bg-[#1F2B71] text-white"
          >
            <div className="w-full row-start-1 col-start-1 text-center font-extrabold text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] flex items-center justify-center p-4">
              Built for developers. Trusted by enterprises. Designed to protect
              what fintechs value most
            </div>
            <div className="w-full row-start-2 col-start-1 text-[0.7rem] sm:text-[0.9rem] lg:text-[1.2rem] text-justify flex items-center justify-center p-4">
              At Scrubbe, we believe cybersecurity should be powerful,
              accessible, and intuitive for everyone not just security experts.
              Our platform is built to empower organizations of all sizes to
              detect, investigate, and respond to threats in real time without
              needing deep technical knowledge.
            </div>
          </nav>

          {/* Bottom row / Right column */}
          <nav className="row-start-2 col-start-1 lg:row-start-1 lg:col-start-2 relative w-full">
            <Image
              src="/threats-in-motion.svg"
              alt="threats-in-motion"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 280px,
                                (max-width: 768px) 560px,
                                (max-width: 1024px) 670px,
                                (max-width: 1280px) 520px,
                                650px"
            />
          </nav>
        </article>
      </section>
    </div>
  );
};

export default BuiltForDevelopers;
