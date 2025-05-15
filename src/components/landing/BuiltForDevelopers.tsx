const BuiltForDevelopers = () => {
  return (
    <div className="w-full h-auto bg-white">
      <section className="w-full max-w-[1440px] mx-auto h-[600px] lg:h-[550px] bg-[linear-gradient(to_bottom,#DBEAFE_40%,white_40%)] lg:bg-[linear-gradient(to_bottom,#DBEAFE_45%,white_45%)] flex flex-col items-center">
        <aside className="w-full h-[200px] lg:h-[100px] grid grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))] mx-auto mt-0">
          {/* Stat 1 */}

          <div className=" h-[100px] py-0 flex flex-col items-center justify-center">
            <p className="text-[0.9rem] lg:text-[1.1rem] font-bold text-gray-900">
              {"<"}5 mins
            </p>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-gray-600 text-center mt-2">
              Average time to investigate incident
            </p>
          </div>

          {/* Stat 2 */}
          <div className=" h-[100px] py-0 flex flex-col items-center justify-center">
            <p className="text-[0.9rem] lg:text-[1.1rem] font-bold text-gray-900">
              90%+
            </p>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-gray-600 text-center mt-2">
              Analyst satisfaction with UI usability
            </p>
          </div>

          {/* Stat 3 */}
          <div className=" h-[100px] py-0 flex flex-col items-center justify-center">
            <p className="text-[0.9rem] lg:text-[1.1rem] font-bold text-gray-900">
              99.9%
            </p>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-gray-600 text-center mt-2">
              Uptime for dashboard availability
            </p>
          </div>

          {/* Stat 4 */}
          <div className=" h-[100px] py-0 flex flex-col items-center justify-center">
            <p className="text-[0.9rem] lg:text-[1.1rem] font-bold text-gray-900">
              {"<"}5%
            </p>
            <p className="text-[0.7rem] lg:text-[0.9rem] text-gray-600 text-center mt-2">
              False positives on automated action
            </p>
          </div>
        </aside>
        <article className="w-[90%] lg:w-[80%] h-[350px] lg:h-[400px] bg-[#1F2B71] rounded-[10px] mx-auto">
          Article
        </article>
      </section>
    </div>
  );
};

export default BuiltForDevelopers;
