const IncidentHero = () => {
  return (
    <div className="w-full h-[600px] relative z-0">
      <img
        src="/incident_management_bg.png"
        alt="incident management"
        className="w-full h-full object-cover absolute z-[-1] inset-0"
      />
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-white md:text-[60px] text-[30px] font-bold">
          Incident Management
        </h1>
        <p className="text-white text-center  md:text-lg">
          End-to-end visibility for security events from detection to
          resolution,
          <br className="hidden md:block" /> helping your team respond faster
          and more effectively.
        </p>
        <div className="flex gap-4 text-[14px] sm:text-[16px] mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Request Demo
          </button>
          <button className="border-2 border-blue-500 text-blue-500 bg-white font-medium py-3 px-6 rounded-md transition-colors">
            Learn More
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default IncidentHero;
