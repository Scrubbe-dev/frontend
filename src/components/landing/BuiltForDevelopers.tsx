//import Image from "next/image";
import SecurityDashboard from "./SecurityDashboard";

const BuiltForDevelopers = () => {
  return (
    <div className="w-full h-auto bg-white">
      <section className="w-full max-w-[1440px] mx-auto h-[800px] lg:h-[600px] bg-[linear-gradient(to_bottom,#DBEAFE_45%,white_45%)] py-16 px-4 grid grid-rows-[2fr_4fr] lg:grid-rows-[3fr_7fr] grid-cols-1 justify-items-center gap-4">
        <aside
          className="row-start-1 row-end-2 w-full 
 
 grid 
                 grid-cols-2 grid-rows-2 
                 lg:grid-cols-4 lg:grid-rows-1
                 [grid-template-areas:'aaa_bbb'_'ccc_ddd']
                 lg:[grid-template-areas:'aaa_bbb_ccc_ddd']"
        >
          <menu className="[grid-area:aaa] flex flex-col items-center justify-center border-r-2 border-[#1F2B71]">
            <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
              {"<"}5 mins
            </p>
            <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60]">
              Average time to
            </p>
            <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60]">
              investigate incident
            </p>
          </menu>
          <menu className="[grid-area:bbb] flex flex-col items-center justify-center lg:border-r-2 lg:border-[#1F2B71]">
            <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
              90%+
            </p>
            <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60]">
              Analyst satisfaction
            </p>
            <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60]">
              with UI usability
            </p>
          </menu>

          <menu className=" [grid-area:ccc] flex flex-col items-center justify-center  border-r-2 border-[#1F2B71]">
            <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
              99.9%
            </p>
            <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60]">
              Uptime for dashboard
            </p>
            <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60]">
              availability
            </p>
          </menu>
          <menu className=" [grid-area:ddd] flex flex-col items-center justify-center">
            <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
              {"<"}5%
            </p>
            <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60]">
              False positives on
            </p>
            <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60]">
              automated action
            </p>
          </menu>
        </aside>
        <div className="row-start-2 row-end-3 w-full">
          <article className=" bg-[#1F2B71] text-white rounded-[20px] overflow-hidden w-full lg:w-[80%] h-full mx-auto grid grid-cols-1 grid-rows-[55fr_45fr] lg:grid-rows-1 lg:grid-cols-[55fr_45fr] justify-items-center">
            <nav className=" w-full grid grid-rows-[2fr_3fr] lg:grid-rows-[1fr_1fr] grid-cols-1 justify-items-center gap-4">
              <div className="w-full  flex flex-col justify-center items-start p-4 sm:p-8 text-[0.9rem] sm:text-[1.2rem] lg:text-[1.5rem]">
                Built for developers. Trusted by enterprises. Designed to
                protect what fintechs value most
              </div>
              <div className="w-full flex flex-col justify-center items-start p-4 sm:p-8  text-[0.7rem] sm:text-[0.85rem] lg:text-[1rem]">
                At Scrubbe, we believe cybersecurity should be powerful,
                accessible, and intuitive for everyone not just security
                experts. Our platform is built to empower organizations of all
                sizes to detect, investigate, and respond to threats in real
                time without needing deep technical knowledge.
              </div>
            </nav>
            <nav className=" w-full">
              <SecurityDashboard />
            </nav>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BuiltForDevelopers;
