import React from "react";

const Contact = () => {
  return (
    <div className=" bg-[#00474D]">
      <div className=" min-h-[400px] py-10 px-4 container mx-auto flex flex-col justify-center items-center gap-4">
        <p className="text-white text-4xl md:text-5xl sm:text-4xl font-bold  text-center font-bigshotOne">
          Transform your Devops Today
        </p>
        <p className=" md:text-lg text-white">
          Start raising incident via email and collaborating in war rooms
        </p>
        <div className="flex items-center mt-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email for demo"
            className="h-[42px]  w-[300px] px-2 bg-white outline-none rounded-l-lg"
          />
          <div className="h-[42px] rounded-r-lg bg-IMSLightGreen text-white flex items-center px-6 font-semibold">
            Schedule a Demo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
