import React from "react";
import { BsSendFill } from "react-icons/bs";

const EzraChatWidget = () => {
  return (
    <div className="overflow-clip dark:bg-[#151e2e] bg-white rounded-xl dark:shadow-md border-t-4 border-blue-400/60 min-h-[350px] flex flex-col gap-2">
      <div className="flex items-center justify-between dark:bg-[#172554] bg-colorScBlue text-white p-3 font-medium">
        <p>Chat with Ezra</p>
      </div>

      <div className=" p-6 flex-1"></div>

      <div className="flex gap-3 items-center w-full px-6 pb-6">
        <div className=" w-full bg-white dark:bg-zinc-800 flex gap-3 items-center border border-zinc-600 rounded-lg h-[48px] px-2">
          <img src="/ezrastar.svg" />
          <input
            type="text"
            placeholder="Ask Ezra to summarise incidents for today"
            className="bg-transparent outline-none dark:text-white w-full"
          />
        </div>
        <div className=" size-10 rounded-lg flex justify-center items-center bg-colorScBlue">
          <BsSendFill className=" text-white" />
        </div>
      </div>
    </div>
  );
};

export default EzraChatWidget;
