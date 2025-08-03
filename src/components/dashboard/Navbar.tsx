import { ChevronDown, Search } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const isIncidentTicket = pathname.split("/").includes("incident-ticket");
  return (
    <div>
      <div className="h-[80px] w-full border-b border-blue-400/50  flex justify-between items-center px-[3%]">
        <div className=" w-[50%] dark:bg-zinc-800 bg-zinc-100 flex gap-3 items-center border border-zinc-200 dark:border-zinc-600 rounded-lg h-[48px] px-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none dark:text-white w-full"
          />
          <Search />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className=" size-9 rounded-full bg-zinc-700 flex justify-center items-center text-[80%] text-white">
              E.S
            </div>
            <ChevronDown className=" text-zinc-400" />
            {isIncidentTicket && (
              <Button variant="destructive" size="sm" className="px-2 ml-2">
                <p className="  text-white">48 active threats</p>
              </Button>
            )}
          </div>

          <div className="animated-gradient p-[2px] rounded-3xl">
            <Link
              href={"/ezra/dashboard"}
              className=" bg-[#111827] gap-2 px-6 py-2 text-white rounded-3xl font-medium flex items-center"
            >
              Ezra Ai
              <img src="/ezrastar1.svg" alt="ezrastar1.svg" />
              {/* <PiStarFourFill className=" text-blue-500" size={22} /> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
