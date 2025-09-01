import CButton from "@/components/ui/Cbutton";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-[800px] bg-[url('/IMS/IncidentHero.png')] bg-cover bg-center  ">
      <div className="container mx-auto flex flex-col justify-center h-full p-4">
        <div className="text-white text-5xl md:text-6xl font-bigshotOne">
          Revolutionize Your <br /> DevOps & SRE <br /> Operations
        </div>
        <p className="text-white text-lg md:text-xl max-w-lg mt-5 ">
          Empower your IT team with AI-driven insights , war room collaboration
          and Integration with Github , Gitlab , Slack and More
        </p>
        <div className="flex gap-4 mt-4 md:mt-10">
          <Link
            href={"https://www.scrubbe.com/auth/business-signup"}
            target="_blank"
          >
            <CButton
              // onClick={() => router.push("/incident/tickets/create")}
              className="w-fit h-[50px] bg-IMSLightGreen text-white hover:bg-IMSDarkGreen shadow-none text-base"
            >
              Get Started
            </CButton>
          </Link>
          <CButton
            // onClick={() => router.push("/incident/tickets/create")}
            className="w-fit h-[50px] border bg-transparent hover:bg-transparent  border-IMSLightGreen text-IMSLightGreen  shadow-none text-base"
          >
            Request War Room Demo
          </CButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
