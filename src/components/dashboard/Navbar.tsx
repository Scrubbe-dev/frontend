import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div>
      <div className="h-[80px] w-full border-b border-blue-400/50  flex justify-between items-center px-[3%]">
        <div className=" w-[50%] dark:bg-zinc-800 bg-zinc-100 flex gap-3 items-center border border-zinc-200 dark:border-zinc-600 rounded-lg h-[48px] px-2">
          <img src="/ezrastar.svg" />
          <input
            type="text"
            placeholder="Ask Ezra to summarise incidents for today"
            className="bg-transparent outline-none dark:text-white w-full"
          />
        </div>

        <div className="flex items-center gap-1">
          <div className=" size-9 rounded-full bg-zinc-700 flex justify-center items-center text-[80%] text-white">
            E.S
          </div>
          <ChevronDown className=" text-zinc-400" />
          <Button variant="destructive" size="sm" className="px-2 ml-2">
            <p className="  text-white">48 active threats</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
