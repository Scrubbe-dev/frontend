// Integrations.tsx
import React, { useState } from "react";
import { FiX } from "react-icons/fi"; // Assumes react-icons

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

// Array of all available integrations
const integrations = [
  {
    name: "Slack",
    icon: FaSlack,
    description:
      "Communication Platform - Real-time coordination and stakeholder updates",
  },
  {
    name: "Microsoft Teams",
    icon: PiMicrosoftTeamsLogo,
    description:
      "Communication Platform - Real-time coordination and stakeholder updates",
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
  },
  {
    name: "Google Chat",
    icon: FaGoogle,
    description:
      "Communication Platform - Real-time coordination and stakeholder updates",
  },
  {
    name: "Zoom",
    icon: FaVideo,
    description:
      "Video Conferencing - War rooms, briefings, and post-incident reviews",
  },
  {
    name: "SMS",
    icon: FaSnowflake, // A placeholder icon
    description:
      "Notification Channel - Critical alerts and stakeholder communications",
  },
  {
    name: "ServiceNow",
    description: "Ticketing System - Incident tracking and follow-up tasks",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    description:
      "Communication Platform - Real-time coordination and stakeholder updates",
  },
  {
    name: "Jira",
    icon: FaJira,
    description: "Ticketing System - Incident tracking and follow-up tasks",
  },
  {
    name: "Freshdesk",
    description: "Ticketing System - Incident tracking and follow-up tasks",
  },
  {
    name: "PagerDuty",
    icon: FaPagelines, // A placeholder icon
    description: "Monitoring Tool - Alert correlation and on-call management",
  },
  {
    name: "Email Services",
    icon: FaFoursquare, // A placeholder icon
    description:
      "Notification Channel - Critical alerts and stakeholder communications",
  },
  {
    name: "Calendly",
    icon: SiCalendly,
    description:
      "Video Conferencing - War rooms, briefings, and post-incident reviews",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    description:
      "Development Platform - Code-related incident tracking and rollbacks",
  },
  {
    name: "GitLab",
    icon: FaGitlab,
    description:
      "Development Platform - Code-related incident tracking and rollbacks",
  },
  {
    name: "Amazon Web Services",
    icon: FaAws,
    description:
      "Cloud Infrastructure - Infrastructure monitoring and resource management",
  },
  {
    name: "Microsoft Azure",
    icon: VscAzure,
    description:
      "Cloud Infrastructure - Infrastructure monitoring and resource management",
  },
];

const Integrations: React.FC = () => {
  const [selectedIntegration, setSelectedIntegration] = useState<
    string | undefined
  >();

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

  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white ">
        Available Integrations
      </h1>
      <p className="mb-6 dark:text-white">
        Connect and manage your enterprise tools and services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className="bg rounded-lg shadow-sm border border-gray-200 dark:border-gray-500 p-6 flex flex-col gap-4"
          >
            {/* Integration Icon */}
            <div className="flex ">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mr-4">
                {integration.icon && (
                  <integration.icon size={28} className="text-gray-700" />
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
              <button
                onClick={() => setSelectedIntegration(integration.name)}
                className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none"
              >
                Connect
              </button>
              <div className="flex items-center text-xs text-gray-500">
                <FiX size={12} className="text-red-500 mr-1" />
                <span>Not connected</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
