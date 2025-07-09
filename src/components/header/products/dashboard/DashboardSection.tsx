import React from "react";
import DashboarHero from "./DashboarHero";
import DashboardSecurity from "./DashboardSecurity";
const DashboardSection = () => {
  return (
    <div className=" bg-white">
      <DashboarHero />
      <DashboardSecurity />
      <div
        className={`w-full  bg-cover bg-center bg-no-repeat bg-[url('/soar_background.png')] bg-blend-saturation !bg-black/30`}
      >
        <article className=" rounded-2xl p-4 md:p-6 text-center py-4">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-white mb-1">
            Ready to Get Started?
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-white max-w-3xl mx-auto mb-4">
            Join thousands of developers who trust Scrubbe Auth for their
            authentication needs. Secure, flexible, and easy to implement
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-center transition-colors">
              Preview Dashboard
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

export default DashboardSection;
