import { Database, LayoutDashboard, Settings, ShieldCheck } from "lucide-react";
import { BsQuestionOctagon } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa6";
import { TbRouteSquare } from "react-icons/tb";

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
        childMenu: [
          {
            name: "Dashboard",
            link: "dashboard",
          },
          {
            name: "Telemetry + Detection",
            link: "telemetry",
          },
        ],
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
      // {
      //   name: "Incident Ticket",
      //   link: "/dashboard/incident-ticket",
      // },
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
    Icon: LayoutDashboard,
    link: "/dashboard/anotomy-detection",
    isMenu: true,
    isActive: false,
    menu: [
      {
        name: "Fraud Overview",
        link: "/dashboard/fraud-overview",
      },
      {
        name: "Anomaly Detection",
        link: "/dashboard/anotomy-detection",
      },
    ],
  },

  {
    name: "Data Management",
    Icon: ShieldCheck,
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
    Icon: Settings,
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
    Icon: Settings,
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
    Icon: Database,
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
        link: "/dashboard/data-source",
        childMenu: [
          {
            name: "Dashboard",
            link: "dashboard",
          },
          {
            name: "Telemetry + Detection",
            link: "telemetry",
          },
        ],
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

export const developerNavItem: NavItem[] = [
  {
    name: "Dashboard",
    Icon: LayoutDashboard,
    link: "/developer/dashboard",
    isMenu: true,
    isActive: true,
    menu: [
      {
        name: "Device Intelligence",
        link: "/developer/dashboard",
      },
    ],
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
