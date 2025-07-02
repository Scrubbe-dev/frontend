import {
  LayoutDashboard,
  Moon,
  Settings,
  SettingsIcon,
  ShieldCheck,
} from "lucide-react";
import { TbRouteSquare } from "react-icons/tb";
import { FaCodepen } from "react-icons/fa6";
import { BsQuestionOctagon } from "react-icons/bs";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Switch } from "@heroui/react";

export const navItem = [
  {
    name: "Dashboard",
    Icon: LayoutDashboard,
    link: "/ezra/dashboard",
  },
  {
    name: "Natural Language Rule Input",
    Icon: TbRouteSquare,
    link: "/ezra/dashboard/natural-language-rule",
  },
  {
    name: "Anomaly Detection",
    Icon: LayoutDashboard,
    link: "detection",
  },
  {
    name: "Playbook Builder",
    Icon: FaCodepen,
    link: "ezra/dashboard",
  },
  {
    name: "Incident Ticket",
    Icon: ShieldCheck,
    link: "ezra/dashboard",
  },
  {
    name: "Notification Settings",
    Icon: Settings,
    link: "ezra/dashboard",
  },
  {
    name: "Support",
    Icon: BsQuestionOctagon,
    link: "ezra/dashboard",
  },
];
const EzraSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="min-w-[300px] h-full p-4 border-r border-blue-400/50 flex flex-col justify-between">
      <div>
        <p className=" text-colorScBlue text-4xl font-bold">Ezra</p>

        <div className="flex flex-col gap-3  items-center mt-[15%] flex-1">
          {navItem.map(({ Icon, link, name }) => {
            const isActive = pathname === link;
            return (
              <Link
                href={link}
                className={clsx(
                  "flex items-center gap-2 max-h-10 h-full rounded-lg  cursor-pointer transition-all duration-300 px-3 py-3 w-full",
                  isActive
                    ? "bg-colorScBlue  text-white font-semibold"
                    : "bg-transparent opacity-60 hover:opacity-100 dark:text-white"
                )}
                key={name}
              >
                <div className="">
                  <Icon size={20} className={clsx("")} />
                </div>
                <p
                  className={clsx(
                    "text-sm transition-all delay-200 duration-100"
                  )}
                >
                  {name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col mb-6">
        <Link
          href={"/"}
          className={clsx(
            "flex items-center bg-transparent opacity-60 hover:opacity-100 dark:text-white gap-2 max-h-10 h-full rounded-lg  cursor-pointer transition-all duration-300 px-3 py-3 w-full"
          )}
        >
          <div className="">
            <SettingsIcon size={20} className={clsx("")} />
          </div>
          <p className={clsx("text-sm transition-all delay-200 duration-100")}>
            Settings
          </p>
        </Link>
        <hr />
        <div className="flex items-center gap-2 justify-between py-3 px-3">
          <div className="flex items-center gap-2">
            <Moon size={26} className={clsx(" fill-colorScBlue")} />
            <p
              className={clsx(
                "text-sm transition-all delay-200 duration-100 opacity-60 hover:opacity-100 dark:text-white gap-2"
              )}
            >
              Dark Mode
            </p>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default EzraSidebar;
