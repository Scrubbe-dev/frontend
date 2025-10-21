import {
  Code,
  LayoutDashboard,
  Lock,
  LucideDatabaseBackup,
  LucideLayoutDashboard,
  Search,
  Settings,
  ShieldCheck,
  SquareCode,
  SquareKanban,
  UsersRound,
} from "lucide-react";
import { LuRefreshCw } from "react-icons/lu";
import {
  BsBoxSeam,
  BsBriefcaseFill,
  BsDatabase,
  BsFillBarChartFill,
  BsQuestionOctagon,
} from "react-icons/bs";
import {
  FaBook,
  FaCircleQuestion,
  FaClock,
  FaCodepen,
  FaUserGroup,
} from "react-icons/fa6";
import { FiGitMerge, FiUsers } from "react-icons/fi";
import { HiOutlineCreditCard } from "react-icons/hi";
import { TbCloudDataConnection, TbRouteSquare } from "react-icons/tb";
import { TiFlowChildren } from "react-icons/ti";
import { GoLock } from "react-icons/go";
import { IoIosNotifications, IoMdCall } from "react-icons/io";
import { CgArrowBottomRightR } from "react-icons/cg";
import { MdAnalytics, MdGroup, MdLock } from "react-icons/md";
import { BiSolidBookBookmark, BiSolidMessageAltEdit } from "react-icons/bi";
import { RiBloggerLine, RiOrganizationChart } from "react-icons/ri";
import { FaBox, FaLink } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { SiAccuweather } from "react-icons/si";
import { GiScrollUnfurled } from "react-icons/gi";
import { PiStarFourFill } from "react-icons/pi";

export type NavItem = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  link: string;
  isMenu: boolean;
  isActive: boolean;
  menu?: NavItemChild[];
};
type NavItemChild = {
  name: string;
  link: string;
  childMenu?: Partial<{ name: string; link: "dashboard" | "telemetry" }[]>;
};
export const navItem: NavItem[] = [
  {
    name: "Dashboard",
    Icon: LayoutDashboard,
    link: "/dashboard",
    isMenu: true,
    isActive: true,
    menu: [
      {
        name: "Global Overview",
        link: "/dashboard",
      },
      {
        name: "Quick Access Panel",
        link: "/dashboard/incident-overview",
      },
    ],
  },
  {
    name: "SIEM",
    Icon: FaCodepen,
    link: "/dashboard/data-source",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Data Source",
        link: "/dashboard/data-source",
      },
      {
        name: "Source Categories (Cloud, Apps)",
        link: "/dashboard/source-categories",
      },
      {
        name: "Event Streams",
        link: "/dashboard/event-streams",
      },
    ],
  },
  {
    name: "SOAR",
    Icon: TbRouteSquare,
    link: "/dashboard/playbook-builder",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Playbook Builder",
        link: "/dashboard/playbook-builder",
      },
      {
        name: "Incident Ticket",
        link: "/dashboard/incident-ticket",
      },
      {
        name: "Actions & Triggers",
        link: "/dashboard/actions-triggers",
      },
      {
        name: "Scheduling",
        link: "/dashboard/scheduling",
      },
    ],
  },
  {
    name: "Fraud Detection",
    Icon: ShieldCheck,
    link: "/dashboard/fraud-overview",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Fraud Overview",
        link: "/dashboard/fraud-overview",
      },
      {
        name: "Anomaly Detection",
        link: "/dashboard/anomaly-detection",
      },
    ],
  },

  {
    name: "Data Management",
    Icon: TbCloudDataConnection,
    link: "/dashboard/control-log",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Control log",
        link: "/dashboard/control-log",
      },
      {
        name: "Retention Policies",
        link: "/dashboard/retention-policy",
      },
    ],
  },
  {
    name: "Security & Compliance",
    Icon: GoLock,
    link: "/dashboard/audit-logs",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Audit Logs",
        link: "/dashboard/audit-logs",
      },
      {
        name: "Compliance Reports",
        link: "/dashboard/compliance-reports",
      },
      {
        name: "Policy Management",
        link: "/dashboard/policy-management",
      },
    ],
  },
  {
    name: "Organization Settings",
    Icon: BsBoxSeam,
    link: "/dashboard/user-management",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "User Management",
        link: "/dashboard/user-management",
      },
      {
        name: "Role & Permissions",
        link: "/dashboard/role-management",
      },
      {
        name: "SSO/Identity Providers",
        link: "/dashboard/sso-identity-providers",
      },
    ],
  },
  {
    name: "Settings",
    Icon: Settings,
    link: "/dashboard/settings",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "General Settings",
        link: "/dashboard/settings",
      },

      {
        name: "Notification Settings",
        link: "/dashboard/notification-settings",
      },
    ],
  },
  {
    name: "Developer Portal",
    Icon: BsDatabase,
    link: "/dashboard/api-keys",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "API Keys",
        link: "/dashboard/api-keys",
      },

      {
        name: "API Documentation",
        link: "/dashboard/api-documentation",
      },
      {
        name: "Webhooks Management",
        link: "/dashboard/webhooks-management",
      },
      {
        name: "SDK Download",
        link: "/dashboard/sdk-download",
      },
      {
        name: "Integration Guides",
        link: "/dashboard/integration-guides",
      },
    ],
  },
  {
    name: "Support",
    Icon: BsQuestionOctagon,
    link: "/dashboard/support",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Support Ticket",
        link: "/dashboard/support",
      },
      {
        name: "Community Forum",
        link: "/dashboard/community-forum",
      },
    ],
  },
];

export const ezraNavItem: NavItem[] = [
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
        name: "Data Source",
        link: "/ezra/dashboard/data-source",
      },
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
    Icon: ShieldCheck,
    link: "/dashboard/fraud-overview",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Fraud Overview",
        link: "/dashboard/fraud-overview",
      },
      {
        name: "Anomaly Detection",
        link: "/ezra/dashboard/anomaly-detection",
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
    Icon: TbCloudDataConnection,
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
    Icon: GoLock,
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
    Icon: BsBoxSeam,
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

export const developerNavItem: NavItem[] = [
  {
    name: "Dashboard",
    Icon: LayoutDashboard,
    link: "/developer/dashboard",
    isMenu: false,
    isActive: true,
  },
  {
    name: "Device Intelligence",
    Icon: FiGitMerge,
    link: "/developer/device-intelligence",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Analytics",
    Icon: SquareKanban,
    link: "/developer/analytics",
    isMenu: false,
    isActive: false,
  },
];

export const developerNavItemDevelopment: NavItem[] = [
  {
    name: "API Playground",
    Icon: SquareCode,
    link: "/developer/api-playground",
    isMenu: false,
    isActive: true,
  },
  {
    name: "Integration Tools",
    Icon: FiGitMerge,
    link: "/developer/integration-tools",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Webhooks",
    Icon: TiFlowChildren,
    link: "/developer/webhooks",
    isMenu: false,
    isActive: false,
  },
];

export const developerNavItemSecurity: NavItem[] = [
  {
    name: "Security Center",
    Icon: Lock,
    link: "/developer/security-center",
    isMenu: false,
    isActive: false,
  },
  {
    name: "API Keys",
    Icon: Code,
    link: "/developer/api-keys",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Audit Logs",
    Icon: LucideDatabaseBackup,
    link: "/developer/audit-logs",
    isMenu: false,
    isActive: false,
  },
];

export const developerNavItemAccount: NavItem[] = [
  {
    name: "Team Management",
    Icon: UsersRound,
    link: "/developer/team-management",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Billing & Usage",
    Icon: HiOutlineCreditCard,
    link: "/developer/billing-usage",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Support",
    Icon: FaCircleQuestion,
    link: "/developer/support",
    isMenu: false,
    isActive: false,
  },
];

export const playbookTemplate = [
  {
    title: "Unauthorize playbook",
    nodes: [
      {
        id: "block-1",
        type: "metric",
        label: "Unauthorized access",
        configuration: {},
        configured: false,
        children: [
          {
            id: "block-2",
            type: "trigger",
            label: "Send Alert",
            configuration: {},
            configured: false,
            children: [],
          },
          {
            id: "block-3",
            type: "action",
            label: "Block IP",
            configuration: {},
            configured: false,
            children: [],
          },
        ],
      },
    ],
  },

  {
    title: "Failed Login",
    nodes: [
      {
        id: "block-4",
        type: "metric",
        label: "Failed Login",
        configuration: {},
        configured: false,
        children: [
          {
            id: "block-7",
            type: "trigger",
            label: "Send Alert",
            configuration: {},
            configured: false,
            children: [],
          },
          {
            id: "block-6",
            type: "action",
            label: "Log event",
            configuration: {},
            configured: false,
            children: [],
          },
        ],
      },
    ],
  },

  {
    title: "Phishing Response",
    nodes: [
      {
        id: "block-8",
        type: "metric",
        label: "Phishing Email",
        configuration: {},
        configured: false,
        children: [
          {
            id: "block-10",
            type: "action",
            label: "Log event",
            configuration: {},
            configured: false,
            children: [
              {
                id: "block-9",
                type: "trigger",
                label: "Send Alert",
                configuration: {},
                configured: false,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const IMSSidebar: NavItem[] = [
  {
    name: "Dashboard",
    Icon: LucideLayoutDashboard,
    link: "/incident",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Incident",
    Icon: FaCircleQuestion,
    link: "/incident/tickets",
    isMenu: false,
    isActive: true,
  },
  {
    name: "On-Call",
    Icon: IoMdCall,
    link: "/incident/on-call",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Ingestion",
    Icon: CgArrowBottomRightR,
    link: "/incident/ingestion",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Postmortems",
    Icon: BiSolidBookBookmark,
    link: "/incident/postmortems",
    isMenu: false,
    isActive: true,
  },
  {
    name: "SLA Management",
    Icon: FaClock,
    link: "/incident/sla",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Changes and Problems",
    Icon: LuRefreshCw,
    link: "/incident/changes-problems",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Runbooks",
    Icon: FaBook,
    link: "/incident/runbooks",
    isMenu: false,
    isActive: false,
  },

  {
    name: "Timeline",
    Icon: FaClock,
    link: "/incident/timeline",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Analytics",
    Icon: MdAnalytics,
    link: "/incident/anlytics",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Ai Suggestions",
    Icon: PiStarFourFill,
    link: "/incident/ai-suggestion",
    isMenu: false,
    isActive: true,
  },

  {
    name: "Workflows",
    Icon: RiOrganizationChart,
    link: "/incident/workflows",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Audit",
    Icon: Search,
    link: "/incident/audit",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Multi-Tenancy",
    Icon: MdGroup,
    link: "/incident/multi-tenancy",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Sandbox",
    Icon: FaBox,
    link: "/incident/sandbox",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Notification",
    Icon: IoIosNotifications,
    link: "/incident/notification",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Permissions",
    Icon: MdLock,
    link: "/incident/permissions",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Relationships",
    Icon: FaLink,
    link: "/incident/relationships",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Climate & Resilience Intelligence",
    Icon: SiAccuweather,
    link: "/incident/climate-resilience-intelligence",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Documentation",
    Icon: GiScrollUnfurled,
    link: "/incident/documentation",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Status & Communication Center",
    Icon: BiSolidMessageAltEdit,
    link: "/incident/status-communication-center",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Knowledge Based & Lessons Learned",
    Icon: FaBook,
    link: "/incident/knowledge-base",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Reports & Export",
    Icon: BsFillBarChartFill,
    link: "/incident/reports-export",
    isMenu: false,
    isActive: false,
  },
];

export const SubSidebar = [
  {
    name: "Team Member",
    Icon: FiUsers,
    link: "/incident/team-management",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Billing & Usage",
    Icon: HiOutlineCreditCard,
    link: "/incident/billings",
    isMenu: false,
    isActive: false,
  },
  {
    name: "Support",
    Icon: AiOutlineQuestionCircle,
    link: "/incident/support",
    isMenu: false,
    isActive: false,
  },
];

export const AdminSidebar: NavItem[] = [
  {
    name: "Dashboard",
    Icon: LucideLayoutDashboard,
    link: "/admin",
    isMenu: false,
    isActive: true,
  },
  {
    name: "User",
    Icon: FaUserGroup,
    link: "/admin/users",
    isMenu: false,
    isActive: true,
  },
  {
    name: "Blog",
    Icon: RiBloggerLine,
    link: "/admin/blogs",
    isMenu: false,
    isActive: true,
  },
  {
    name: "Careers",
    Icon: BsBriefcaseFill,
    link: "/admin/careers",
    isMenu: false,
    isActive: true,
  },
];
