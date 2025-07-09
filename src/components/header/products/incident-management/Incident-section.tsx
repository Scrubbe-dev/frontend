import IncidentDashboard from "./IncidentDashboard";
import IncidentFeature from "./IncidentFeature";
import IncidentHero from "./IncidentHero";
import IncidentTimeline from "./IncidentTimeline";
import IncidentHowWork from "./IncidentHowWork";
import CTA from "../CTA";
const IncidentSection = () => {
  return (
    <div className="bg-white">
      <IncidentHero />
      <IncidentFeature />
      <IncidentTimeline />
      <IncidentHowWork />
      <IncidentDashboard />
      <div>
        <section className="w-full bg-zinc-100 ">
          <article className="w-full h-auto max-w-[1440px] mx-auto py-4 px-4 md:px-6">
            {/* Header Section */}
            <div className="text-center mb-4">
              <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
                Impact Metrics
              </h2>
              <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                See the real-world impact of implementing Scrubbe Incident
                Management
              </p>
            </div>

            {/* Stats Section */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 mb-4 md:mb-6">
              <div className="flex flex-col items-center justify-center py-2 md:py-3 border-r-2 border-[#1F2B71]">
                <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
                  60%
                </p>
                <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                  Faster Response Times
                </p>
              </div>

              <div className="flex flex-col items-center justify-center py-2 md:py-3 border-r-0 md:border-r-2 border-[#1F2B71]">
                <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
                  75%
                </p>
                <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                  Reduction in False Positives{" "}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center py-2 md:py-3 border-r-2 border-t md:border-t-0 border-[#1F2B71]">
                <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
                  45%
                </p>
                <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                  Lower Resolution Costs
                </p>
                <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                  Daily
                </p>
              </div>

              <div className="flex flex-col items-center justify-center py-2 md:py-3 border-t md:border-t-0">
                <p className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] text-[#1F2937] font-bold">
                  99.9%
                </p>
                <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.1rem] text-[#5E5F60] text-center">
                  Incident Tracking Accuracy{" "}
                </p>
              </div>
            </div>
          </article>

          {/* CTA Section */}
        </section>
        <CTA />
      </div>
    </div>
  );
};

export default IncidentSection;
