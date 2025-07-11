import { LayoutDashboard, Moon, Settings, ShieldCheck } from "lucide-react";
import { TbRouteSquare } from "react-icons/tb";
import { FaCodepen } from "react-icons/fa6";
import { BsQuestionOctagon } from "react-icons/bs";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Switch from "../ui/Switch";
import { FiChevronRight } from "react-icons/fi";

export const navItem = [
  {
    name: "Dashboard",
    Icon: LayoutDashboard,
    link: "/ezra/dashboard",
    isMenu: true,
    isActive: true,
    menu: [
      {
        name: "Global Overview",
        link: "/ezra/dashboard",
      },
      {
        name: "Quick Access Panel",
        link: "/ezra/dashboard/incident-overview",
      },
    ],
  },
  {
    name: "SIEM",
    Icon: FaCodepen,
    link: "/ezra/dashboard/data-source",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Source Categories (Cloud, Apps)",
        link: "/ezra/dashboard/source-categories",
      },
      {
        name: "Event Streams",
        link: "/ezra/dashboard/event-streams",
      },
    ],
  },
  {
    name: "SOAR",
    Icon: TbRouteSquare,
    link: "/ezra/dashboard/natural-language-rule",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Natural Language Rule Input",
        link: "/ezra/dashboard/natural-language-rule",
      },
      {
        name: "Incident Ticket",
        link: "/ezra/dashboard/incident-ticket",
      },
      {
        name: "Actions & Triggers",
        link: "/ezra/dashboard/actions-triggers",
      },
      {
        name: "Scheduling",
        link: "/ezra/dashboard/scheduling",
      },
    ],
  },
  {
    name: "Fraud Detection",
    Icon: LayoutDashboard,
    link: "/ezra/dashboard/anotomy-detection",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Fraud Overview",
        link: "/ezra/dashboard/fraud-overview",
      },
      {
        name: "Anomaly Detection",
        link: "/ezra/dashboard/anotomy-detection",
      },
    ],
  },
  // {
  //   name: "Playbook Builder",
  //   Icon: FaCodepen,
  //   link: "ezra/dashboard",
  // },
  {
    name: "Data Management",
    Icon: ShieldCheck,
    link: "/ezra/dashboard/control-log",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Control log",
        link: "/ezra/dashboard/control-log",
      },
      {
        name: "Retention Policies",
        link: "/ezra/dashboard/retention-policy",
      },
    ],
  },
  {
    name: "Security & Compliance",
    Icon: Settings,
    link: "/ezra/dashboard/audit-logs",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Audit Logs",
        link: "/ezra/dashboard/audit-logs",
      },
      {
        name: "Compliance Reports",
        link: "/ezra/dashboard/compliance-reports",
      },
      {
        name: "Policy Management",
        link: "/ezra/dashboard/policy-management",
      },
    ],
  },
  {
    name: "Organization Settings",
    Icon: Settings,
    link: "/ezra/dashboard/user-management",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "User Management",
        link: "/ezra/dashboard/user-management",
      },
      {
        name: "Role & Permissions",
        link: "/ezra/dashboard/role-management",
      },
      {
        name: "SSO/Identity Providers",
        link: "/ezra/dashboard/sso-identity-providers",
      },
    ],
  },
  {
    name: "Settings",
    Icon: Settings,
    link: "/ezra/dashboard/settings",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "General Settings",
        link: "/ezra/dashboard/settings",
      },

      {
        name: "Notification Settings",
        link: "/ezra/dashboard/notification-settings",
      },
    ],
  },
  {
    name: "Support",
    Icon: BsQuestionOctagon,
    link: "/ezra/dashboard/support",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Support Ticket",
        link: "/ezra/dashboard/support",
      },
      {
        name: "Community Forum",
        link: "/ezra/dashboard/community-forum",
      },
    ],
  },
];
const EzraSidebar = () => {
  const pathname = usePathname();
  // Only open parent if current route matches parent or any child
  const isParentOpen = (item: (typeof navItem)[number]) => {
    if (pathname === item.link) return true;
    if (item.menu && item.menu.some((child) => pathname === child.link))
      return true;
    return false;
  };

  // Helper: is a child active?
  const isChildActive = (childLink: string) => pathname === childLink;

  // Helper: is a parent active (current route matches parent or any child)?
  const isParentActive = (item: (typeof navItem)[number]) => {
    if (pathname === item.link) return true;
    if (item.menu && item.menu.some((child) => pathname === child.link))
      return true;
    return false;
  };

  return (
    <div className="min-w-[300px] h-full p-4 border-r border-blue-400/50 flex flex-col justify-between">
      <div>
        <p className=" text-colorScBlue text-4xl font-bold  font-besley">
          EZRA
        </p>

        <div className="flex flex-col gap-1 items-center mt-[15%] flex-1 w-full">
          {navItem.map((item) => {
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
                    {menu.map((child) => (
                      <Link
                        href={child.link}
                        key={child.name}
                        className={clsx(
                          "flex items-center gap-2 rounded px-2 py-2 text-sm transition-all duration-200",
                          isChildActive(child.link)
                            ? "bg-colorScBlue text-white font-semibold "
                            : "hover:bg-blue-50 dark:hover:bg-blue-800 dark:text-white opacity-80 hover:opacity-100"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
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

export default EzraSidebar;
