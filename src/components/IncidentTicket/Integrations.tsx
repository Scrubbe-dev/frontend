// Integrations.tsx
import React, { useState } from "react";
import { FiCheck, FiX } from "react-icons/fi"; // Assumes react-icons
// You would replace this with actual SVG or image imports
import {
  FaSlack,
  FaGoogle,
  FaVideo,
  FaWhatsapp,
  FaSnowflake,
  FaJira,
  FaAws,
  FaGitlab,
  FaGithub,
  FaPagelines,
  FaFoursquare,
} from "react-icons/fa";
import { SiCalendly } from "react-icons/si";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { VscAzure } from "react-icons/vsc";
import Modal from "../ui/Modal";
import WhatsappIntegration from "./Integration/WhatsappIntegration";
import SMSIntegration from "./Integration/SMSIntegration";
import SlackIntegration from "./Integration/SlackIntegration";
import GoogleMeetIntegration from "./Integration/GoogleMeetIntegration";
import GithubIntegration from "./Integration/GithubIntegration";
import GitlabIntegration from "./Integration/GitlabIntegration";
import { RiCustomerServiceFill } from "react-icons/ri";
import { querykeys } from "@/lib/constant";
import { useFetch } from "@/hooks/useFetch";
import { endpoint } from "@/lib/api/endpoint";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "@/lib/stores/auth.store";
import GitlabConfiguration from "./Configuration/GitlabConfiguration";
import GithubConfiguration from "./Configuration/GithubConfiguration";

// Array of all available integrations
const integrations = [
  {
    name: "Slack",
    icon: FaSlack,
    description:
      "Communication Platform - Real-time coordination and stakeholder updates",
    development: false,
  },
  {
    name: "Microsoft Teams",
    icon: PiMicrosoftTeamsLogo,
    description:
      "Communication Platform - Real-time coordination and stakeholder updates",
    development: true,
  },
  {
    name: "Google Meet",
    icon: FaGoogle,
    description:
      "Video Conferencing - War rooms, briefings, and post-incident reviews",
  },
  {
    name: "Google Calendar",
    icon: FaGoogle,
    description:
      "Video Conferencing - War rooms, briefings, and post-incident reviews",
    development: true,
  },
  {
    name: "Google Chat",
    icon: FaGoogle,
    description:
      "Communication Platform - Real-time coordination and stakeholder updates",
    development: true,
  },
  {
    name: "Zoom",
    icon: FaVideo,
    description:
      "Video Conferencing - War rooms, briefings, and post-incident reviews",
    development: true,
  },
  {
    name: "SMS",
    icon: FaSnowflake, // A placeholder icon
    description:
      "Notification Channel - Critical alerts and stakeholder communications",
    development: false,
  },
  {
    name: "ServiceNow",
    description: "Ticketing System - Incident tracking and follow-up tasks",
    development: true,
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    description:
      "Communication Platform - Real-time coordination and stakeholder updates",
    development: false,
  },
  {
    name: "Jira",
    icon: FaJira,
    description: "Ticketing System - Incident tracking and follow-up tasks",
    development: true,
  },
  {
    icon: RiCustomerServiceFill,
    name: "Freshdesk",
    description: "Ticketing System - Incident tracking and follow-up tasks",
    development: true,
  },
  {
    name: "PagerDuty",
    icon: FaPagelines, // A placeholder icon
    description: "Monitoring Tool - Alert correlation and on-call management",
    development: true,
  },
  {
    name: "Email Services",
    icon: FaFoursquare, // A placeholder icon
    description:
      "Notification Channel - Critical alerts and stakeholder communications",
    development: false,
  },
  {
    name: "Calendly",
    icon: SiCalendly,
    description:
      "Video Conferencing - War rooms, briefings, and post-incident reviews",
    development: true,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    description:
      "Development Platform - Code-related incident tracking and rollbacks",
    development: false,
  },
  {
    name: "GitLab",
    icon: FaGitlab,
    description:
      "Development Platform - Code-related incident tracking and rollbacks",
    development: false,
  },
  {
    name: "Amazon Web Services",
    icon: FaAws,
    description:
      "Cloud Infrastructure - Infrastructure monitoring and resource management",
    development: true,
  },
  {
    name: "Microsoft Azure",
    icon: VscAzure,
    description:
      "Cloud Infrastructure - Infrastructure monitoring and resource management",
    development: true,
  },
];

const sortedIntegrations = integrations.sort((a, b) => {
  // If 'a' is in development and 'b' is not, 'a' comes first (-1)
  if (a.development && !b.development) {
    return 1;
  }
  // If 'b' is in development and 'a' is not, 'b' comes first (1)
  if (!a.development && b.development) {
    return -1;
  }
  // Otherwise, maintain the original order (0)
  return 0;
});

const Integrations: React.FC = () => {
  const [selectedIntegration, setSelectedIntegration] = useState<
    string | undefined
  >();
  const [selectConfiguration, setSelectConfiguration] = useState<
    string | undefined
  >();
  const { get } = useFetch();
  const { user } = useAuthStore();
  const { data } = useQuery({
    queryKey: [querykeys.INTEGRATIONS],
    queryFn: async () => {
      const res = await get(
        endpoint.incident_ticket.integrations + "/" + user?.id
      );
      console.log(res);
      if (res.success) {
        return res.data.data;
      }
      return [];
    },
    enabled: !!user?.id,
  });
  switch (selectedIntegration) {
    case "WhatsApp":
      return (
        <Modal
          isOpen={selectedIntegration === "WhatsApp"}
          onClose={() => setSelectedIntegration(undefined)}
        >
          <WhatsappIntegration />
        </Modal>
      );

    case "SMS":
      return (
        <Modal
          isOpen={selectedIntegration === "SMS"}
          onClose={() => setSelectedIntegration(undefined)}
        >
          <SMSIntegration />
        </Modal>
      );
    case "Slack":
      return (
        <Modal
          isOpen={selectedIntegration === "Slack"}
          onClose={() => setSelectedIntegration(undefined)}
        >
          <SlackIntegration />
        </Modal>
      );
    case "Google Meet":
      return (
        <Modal
          isOpen={selectedIntegration === "Google Meet"}
          onClose={() => setSelectedIntegration(undefined)}
        >
          <GoogleMeetIntegration />
        </Modal>
      );
    case "GitHub":
      return (
        <Modal
          isOpen={selectedIntegration === "GitHub"}
          onClose={() => setSelectedIntegration(undefined)}
        >
          <GithubIntegration />
        </Modal>
      );
    case "GitLab":
      return (
        <Modal
          isOpen={selectedIntegration === "GitLab"}
          onClose={() => setSelectedIntegration(undefined)}
        >
          <GitlabIntegration />
        </Modal>
      );
    default:
      break;
  }

  switch (selectConfiguration) {
    case "GitHub":
      return (
        <Modal
          isOpen={selectConfiguration === "GitHub"}
          onClose={() => setSelectConfiguration(undefined)}
        >
          <GithubConfiguration />
        </Modal>
      );
    case "GitLab":
      return (
        <Modal
          isOpen={selectConfiguration === "GitLab"}
          onClose={() => setSelectConfiguration(undefined)}
        >
          <GitlabConfiguration />
        </Modal>
      );
    default:
      break;
  }

  const connectIntegration = data?.map(
    (integration: { name: string; provider: string; userId: string }) => ({
      ...integration,
      provider: (integration.provider as string).toLowerCase(),
    })
  );

  return (
    <div className="min-h-screen !min-w-[600px]">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white ">
        Available Integrations
      </h1>
      <p className="mb-6 dark:text-white">
        Connect and manage your enterprise tools and services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {sortedIntegrations.map((integration, index) => {
          const isConnected = (
            connectIntegration as {
              name: string;
              provider: string;
              userId: string;
            }[]
          )?.find((value) => value.provider === integration.name.toLowerCase());
          return (
            <div
              key={index}
              className="bg rounded-lg shadow-sm border border-gray-200 dark:border-gray-500 p-6 flex flex-col gap-4"
            >
              {/* Integration Icon */}
              <div className="flex ">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mr-4">
                  {integration.icon ? (
                    <integration.icon size={28} className="text-gray-700" />
                  ) : (
                    <>
                      {integration.name === "ServiceNow" && (
                        <img
                          src="/servicenowlogo.png"
                          alt=""
                          className="size-[28px]"
                        />
                      )}
                    </>
                  )}
                </div>

                {/* Integration Details */}
                <div className="flex-1">
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                    {integration.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {integration.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons and Status */}
              <div className="ml-4 flex-shrink-0 flex flex-col items-end space-y-2">
                {integration.development ? null : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedIntegration(integration.name)}
                      className="px-4 py-2 text-sm font-medium text-green border border-green rounded-md hover:bg-blue-50 focus:outline-none"
                    >
                      {isConnected ? "Connected" : "Connect"}
                    </button>
                    {isConnected &&
                      (integration.name === "GitHub" ||
                        integration.name === "GitLab") && (
                        <button
                          onClick={() =>
                            setSelectConfiguration(integration.name)
                          }
                          className="px-4 py-2 text-sm font-medium text-green border border-green rounded-md hover:bg-blue-50 focus:outline-none"
                        >
                          Configure
                        </button>
                      )}
                  </div>
                )}
                <div className="flex items-center text-xs text-gray-500">
                  {integration.development ? (
                    <span>Coming soon</span>
                  ) : (
                    <>
                      {isConnected ? (
                        <>
                          <FiCheck
                            size={12}
                            className="text-emerald-500 mr-1"
                          />

                          <span>Connected</span>
                        </>
                      ) : (
                        <>
                          <FiX size={12} className="text-red-500 mr-1" />

                          <span>Not connected</span>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Integrations;
