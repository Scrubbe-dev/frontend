/* eslint-disable @typescript-eslint/no-explicit-any */
import { Moon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Switch from "../ui/Switch";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { useAppStore } from "@/store/StoreProvider";
import {
  developerNavItem,
  ezraNavItem,
  navItem,
  NavItem,
} from "@/lib/constant";

type Props = {
  type?: "dashboard" | "ezra" | "developer";
};
const Sidebar = ({ type = "dashboard" }: Props) => {
  const pathname = usePathname();
  const { selectedDataSource, setSelectedDataSource } = useAppStore(
    (state) => state
  );

  const sideBarItem: NavItem[] =
    type == "dashboard"
      ? navItem
      : type == "ezra"
      ? ezraNavItem
      : developerNavItem;

  // Only open parent if current route matches parent or any child
  const isParentOpen = (item: (typeof sideBarItem)[number]) => {
    if (pathname === item.link) return true;
    if (item.menu && item.menu.some((child) => pathname === child?.link))
      return true;
    return false;
  };

  // Helper: is a child active?
  const isChildActive = (childLink: string) => pathname === childLink;

  // Helper: is a parent active (current route matches parent or any child)?
  const isParentActive = (item: (typeof navItem)[number]) => {
    if (pathname === item.link) return true;
    if (item.menu && item.menu.some((child: any) => pathname === child.link))
      return true;
    return false;
  };

  return (
    <div className="min-w-[300px] h-full p-4 border-r border-blue-400/50 flex flex-col justify-between">
      <div className="relative">
        {/* <Link
          href="/dashboard"
          className="relative w-[141px] h-[40px] sm:w-[176px] sm:h-[50px] lg:w-[211px] lg:h-[60px] "
        > */}
        {type == "ezra" ? (
          <p className=" text-colorScBlue text-4xl font-bold  font-besley">
            EZRA
          </p>
        ) : (
          <Image
            src="/scrubbe-logo-01.png"
            alt="scrubbe-logo-01.png"
            height={200}
            width={200}
            className="object-contain"
          />
        )}
        {/* </Link> */}

        <div className="flex flex-col gap-1 items-center mt-[15%] flex-1 w-full">
          {sideBarItem.map((item) => {
            const parentActive = isParentActive(item);
            const parentOpen = isParentOpen(item);
            const { Icon, link, name, menu } = item;
            return (
              <div key={name} className="w-full">
                <div
                  className={clsx(
                    "flex items-center gap-2 max-h-10 h-full rounded-lg cursor-pointer transition-all duration-300 px-3 py-3 w-full",
                    parentActive
                      ? "font-semibold  dark:text-white"
                      : "bg-transparent opacity-60 hover:opacity-100 dark:text-white"
                  )}
                >
                  <Icon size={20} />
                  <Link href={link} className="flex-1">
                    <p className="text-sm transition-all delay-200 duration-100">
                      {name}
                    </p>
                  </Link>
                  {menu && menu.length > 0 && (
                    <span
                      className={clsx(
                        "ml-auto transition-transform",
                        parentOpen ? "rotate-90" : "rotate-0"
                      )}
                    >
                      <FiChevronRight />
                    </span>
                  )}
                </div>
                {/* Nested children */}
                {menu && menu.length > 0 && parentOpen && (
                  <div className="ml-8 flex flex-col gap-1 py-1">
                    {menu?.map(({ name, link, childMenu }) => {
                      return (
                        <div key={name}>
                          <Link
                            href={link}
                            className={clsx(
                              "flex items-center gap-2 rounded px-2 py-2 text-sm transition-all duration-200",
                              isChildActive(link)
                                ? "bg-colorScBlue text-white font-semibold "
                                : "hover:bg-blue-50 dark:hover:bg-blue-800 dark:text-white opacity-80 hover:opacity-100"
                            )}
                          >
                            {name}
                          </Link>

                          {childMenu && childMenu.length > 0 ? (
                            <div className="ml-8 space-y-2 mt-2">
                              {childMenu.map((item) => {
                                const isSelected =
                                  selectedDataSource === item?.link;

                                return (
                                  <div
                                    onClick={() =>
                                      setSelectedDataSource(item!.link)
                                    }
                                    key={item?.name}
                                    className={clsx(
                                      "flex items-center cursor-pointer gap-2 rounded px-2 py-2 text-sm transition-all duration-200",
                                      isSelected
                                        ? "bg-colorScBlue text-white font-semibold "
                                        : "hover:bg-blue-50 dark:hover:bg-blue-800 dark:text-white opacity-80 hover:opacity-100"
                                    )}
                                  >
                                    {item?.name}
                                  </div>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col ">
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
          <Switch checked={true} onChange={() => {}} />
        </div>

        <div className="flex text-sm items-center gap-2 dark:text-white/60 text-black/60 justify-center ">
          <p>Powered by</p>
          <img
            src="/scrubbe-logo-01.png"
            className="w-10 h-10 scale-[2] ml-4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
