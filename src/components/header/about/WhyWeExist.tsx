import React from "react";

const WhyWeExist = () => {
  return (
    <div className="w-full min-h-[600px] relative z-0">
      <img
        src="/detection_bg.png"
        alt="incident management"
        className="w-full h-full object-cover absolute z-[-1] inset-0 rotate-180"
      />
      <div className="max-w-[1440px] mx-auto items-center justify-center h-full grid md:grid-cols-2 gap-5 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
        <div className="text-white space-y-3">
          <p className=" text-2xl md:text-3xl font-bold">Why We Exist</p>
          <p>
            Modern organizations — especially digital-first companies — face a
            new wave of threats: AI-generated phishing, bot-driven fraud, and
            insider access abuse
          </p>

          <p>But most tools require:</p>
          <ul className=" list-disc pl-4">
            <li>Deep technical knowledge</li>
            <li>Manual rule writing</li>
            <li>Expensive SOC teams</li>
          </ul>

          <p>
            We built Scrubbe to change that. We believe security should be as
            intuitive as writing an English sentence, and as fast as an
            automated response. With Scrubbe, security is no longer reactive —
            it&apos;s proactive, explainable, and accessible.
          </p>
        </div>
        <div className=" w-full md:h-[500px] h-[400px] bg-gray-700 rounded-lg px-6 pt-6 relative">
          <img
            src="/about-us.png"
            alt="incident management"
            className=" object-cover w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default WhyWeExist;
