"use client";
import React from "react";
import {
  FaFireAlt,
  FaServer,
  FaLaptop,
  FaNetworkWired,
  FaCloud,
  FaDesktop,
  FaShieldAlt,
  FaWrench,
  FaCheckCircle,
  FaChartLine,
  FaUserShield,
  FaFileAlt,
} from "react-icons/fa";

// Type definitions
type StatCard = {
  value: string;
  label: string;
};

type WorkflowStep = {
  number: number;
  title: string;
  description: string;
};

type FeatureCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type AlertLevel = {
  severity: string;
  description: string;
  colorClass: string;
};

type SecurityAction = {
  event: string;
  action: string;
  benefit: string;
};

type TimelineItem = {
  title: string;
  description: string;
};

type LogSource = {
  name: string;
  icon: React.ReactNode;
  color: string;
  delay: string;
};

type SoarAction = {
  number: string;
  action: string;
  color: string;
  delay: string;
};

const SiemDashboard: React.FC = () => {
  // Data for the dashboard
  const stats: StatCard[] = [
    { value: "94%", label: "Automated Responses" },
    { value: "78%", label: "False Positive Reduction" },
    { value: "12", label: "Log Sources" },
    { value: "3min", label: "Avg. Response Time" },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      number: 1,
      title: "Log Collection",
      description:
        "Logs from all sources are collected, normalized, and stored securely for analysis.",
    },
    {
      number: 2,
      title: "Threat Detection",
      description:
        "Machine learning algorithms analyze logs to identify patterns and anomalies indicative of threats.",
    },
    {
      number: 3,
      title: "Alert Generation",
      description:
        "When suspicious activities are detected, alerts are generated with contextual information.",
    },
    {
      number: 4,
      title: "Automated Response",
      description:
        "SOAR capabilities automatically execute predefined playbooks based on alert type and severity.",
    },
  ];

  const features: FeatureCard[] = [
    {
      icon: <FaShieldAlt />,
      title: "Pre-Built Playbooks",
      description:
        "Ready-to-use automation playbooks for common security scenarios based on industry best practices.",
    },
    {
      icon: <FaChartLine />,
      title: "Intelligent Triage",
      description:
        "AI-powered alert prioritization reduces alert fatigue and focuses attention on what matters.",
    },
    {
      icon: <FaUserShield />,
      title: "Contextual Enrichment",
      description:
        "Automatically adds context to alerts by pulling information from threat intelligence sources.",
    },
    {
      icon: <FaWrench />,
      title: "Guided Remediation",
      description:
        "Step-by-step instructions for IT staff to resolve security issues that require human intervention.",
    },
    {
      icon: <FaFileAlt />,
      title: "Compliance Reporting",
      description:
        "Automated generation of compliance reports for regulatory requirements.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Continuous Learning",
      description:
        "The system learns from past incidents to improve detection accuracy and reduce false positives.",
    },
  ];

  const alertLevels: AlertLevel[] = [
    {
      severity: "Low Severity",
      description: "Automated documentation only",
      colorClass: "bg-green-500",
    },
    {
      severity: "Medium Severity",
      description: "Automated containment actions",
      colorClass: "bg-yellow-500",
    },
    {
      severity: "High Severity",
      description: "Automated response + notification",
      colorClass: "bg-red-500",
    },
  ];

  const securityActions: SecurityAction[] = [
    {
      event: "Suspicious Login Attempt",
      action: "Temporarily block user account, enforce MFA, notify user",
      benefit:
        "Prevents unauthorized access while allowing legitimate users to recover access",
    },
    {
      event: "Malware Detection",
      action: "Isolate affected endpoint, scan system, remove malicious files",
      benefit: "Contains infection and prevents lateral movement",
    },
    {
      event: "Data Exfiltration Attempt",
      action: "Block outbound connection, create forensic snapshot, alert IT",
      benefit: "Prevents data loss and preserves evidence",
    },
    {
      event: "Phishing Email",
      action: "Quarantine email, scan for similar messages, block sender",
      benefit: "Protects users from falling victim to phishing attacks",
    },
    {
      event: "Unauthorized Configuration Change",
      action:
        "Revert to secure configuration, document change, investigate source",
      benefit:
        "Maintains security posture and identifies potential insider threats",
    },
  ];

  const timelineItems: TimelineItem[] = [
    {
      title: "T+0 min: Detection",
      description:
        "Anomaly detected in log data indicating potential security incident",
    },
    {
      title: "T+1 min: Analysis",
      description:
        "SIEM analyzes event context, severity, and determines appropriate response",
    },
    {
      title: "T+2 min: Response Initiation",
      description:
        "SOAR platform initiates appropriate playbook based on incident type",
    },
    {
      title: "T+3 min: Containment",
      description: "Automated containment actions executed to isolate threat",
    },
    {
      title: "T+5 min: Remediation",
      description:
        "Automated remediation steps executed to address security issue",
    },
    {
      title: "T+10 min: Documentation",
      description:
        "Incident fully documented with all actions taken for audit purposes",
    },
  ];

  const logSources: LogSource[] = [
    {
      name: "Firewalls",
      icon: <FaFireAlt />,
      color: "bg-blue-500",
      delay: "animation-delay-200",
    },
    {
      name: "Servers",
      icon: <FaServer />,
      color: "bg-green-500",
      delay: "animation-delay-500",
    },
    {
      name: "Endpoints",
      icon: <FaLaptop />,
      color: "bg-red-500",
      delay: "animation-delay-800",
    },
    {
      name: "Network Devices",
      icon: <FaNetworkWired />,
      color: "bg-purple-500",
      delay: "animation-delay-1100",
    },
    {
      name: "Cloud Services",
      icon: <FaCloud />,
      color: "bg-yellow-500",
      delay: "animation-delay-1400",
    },
    {
      name: "Applications",
      icon: <FaDesktop />,
      color: "bg-teal-500",
      delay: "animation-delay-1700",
    },
  ];

  const soarActions: SoarAction[] = [
    {
      number: "1",
      action: "Threat Detection",
      color: "bg-green-500",
      delay: "animation-delay-300",
    },
    {
      number: "2",
      action: "Automatic Blocking",
      color: "bg-green-500",
      delay: "animation-delay-600",
    },
    {
      number: "3",
      action: "System Isolation",
      color: "bg-green-500",
      delay: "animation-delay-900",
    },
    {
      number: "4",
      action: "Account Lockdown",
      color: "bg-green-500",
      delay: "animation-delay-1200",
    },
    {
      number: "5",
      action: "Alert Notification",
      color: "bg-green-500",
      delay: "animation-delay-1500",
    },
    {
      number: "6",
      action: "Auto-Remediation",
      color: "bg-green-500",
      delay: "animation-delay-1800",
    },
  ];

  return (
    <div className="w-full mx-auto bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            SIEM & SOAR Integration Dashboard
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Automated Security Without a Dedicated Team
          </p>

          {/* Stat Cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 rounded-lg p-4 w-36 text-center transition-transform duration-300 hover:-translate-y-1 hover:bg-opacity-20"
              >
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* How Our SIEM Works */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
            How Our SIEM Works
          </h2>
          <p className="mb-6">
            Our Security Information and Event Management (SIEM) system collects
            logs and security data from multiple sources across your
            infrastructure, providing real-time visibility and automated
            responses without requiring a dedicated security team.
          </p>

          {/* Data Flow Visualization */}
          <div className="relative h-[400px] bg-gradient-to-b from-gray-50 to-gray-200 rounded-lg mb-6 overflow-hidden">
            {/* Data Sources on the left */}
            <div className="absolute left-[5%] top-1/2 transform -translate-y-1/2 w-1/4 text-right">
              <div className="font-bold mb-4 text-gray-800 text-lg">
                DATA SOURCES
              </div>
              <div className="flex flex-col gap-3">
                {logSources.map((source, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-end gap-2 animate-float"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <span className="text-sm md:text-base">{source.name}</span>
                    <div
                      className={`w-8 h-8 ${source.color} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {React.cloneElement(source.icon as React.ReactElement, {
                        size: 14,
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SIEM Processing in the center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              {/* Data flow lines from left to center */}
              <div className="absolute top-1/2 left-[-120px] w-[120px] h-1 bg-blue-500">
                <div className="absolute top-[-3px] left-[30px] w-2 h-2 bg-blue-500 rounded-full animate-flow-particle"></div>
                <div
                  className="absolute top-[-3px] left-[60px] w-2 h-2 bg-blue-500 rounded-full animate-flow-particle"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-[-3px] left-[90px] w-2 h-2 bg-blue-500 rounded-full animate-flow-particle"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              {/* Data flow lines from center to right */}
              <div className="absolute top-1/2 right-[-120px] w-[120px] h-1 bg-green-500">
                <div className="absolute top-[-3px] right-[30px] w-2 h-2 bg-green-500 rounded-full animate-flow-particle-reverse"></div>
                <div
                  className="absolute top-[-3px] right-[60px] w-2 h-2 bg-green-500 rounded-full animate-flow-particle-reverse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-[-3px] right-[90px] w-2 h-2 bg-green-500 rounded-full animate-flow-particle-reverse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              <div className="w-[180px] h-[180px] bg-gradient-to-br from-blue-500 to-blue-800 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-lg shadow-blue-300/30 relative">
                <div className="text-2xl mb-1">SIEM</div>
                <div className="text-xs max-w-[80%] opacity-90">
                  Collection • Normalization • Analysis
                </div>

                {/* Inner processing rings */}
                <div className="absolute w-[140%] h-[140%] border-2 border-dashed border-white/30 rounded-full animate-slow-spin"></div>
                <div className="absolute w-[120%] h-[120%] border-2 border-dashed border-white/50 rounded-full animate-slow-spin-reverse"></div>
              </div>
            </div>

            {/* SOAR Output on the right */}
            <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 w-1/4 text-left">
              <div className="font-bold mb-4 text-green-600 text-lg">
                SOAR ACTIONS
              </div>
              <div className="flex flex-col gap-3">
                {soarActions.map((action, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 animate-float"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div
                      className={`w-8 h-8 ${action.color} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {action.number}
                    </div>
                    <span className="text-sm md:text-base">
                      {action.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow direction labels */}
            <div className="absolute left-[35%] top-[20%] text-sm text-blue-500 font-bold">
              Incoming Log Data →
            </div>
            <div className="absolute right-[35%] top-[20%] text-sm text-green-500 font-bold">
              → Automated Response
            </div>
          </div>
        </section>

        {/* SIEM & SOAR Integration */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
            SIEM & SOAR Integration
          </h2>
          <p className="mb-6">
            Our platform integrates SIEM (Security Information and Event
            Management) with SOAR (Security Orchestration, Automation and
            Response) to create an end-to-end automated security solution.
          </p>

          {/* Workflow Steps */}
          <div className="flex flex-wrap justify-between gap-6 my-8">
            {workflowSteps.map((step) => (
              <div
                key={step.number}
                className="flex-1 min-w-[240px] bg-white rounded-lg shadow-md p-6 relative border-t-4 border-blue-500"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Alert Classification */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">
            Alert Classification System
          </h3>
          <p className="mb-6">
            Alerts are classified into different severity levels based on
            potential impact and urgency:
          </p>

          <div className="flex flex-wrap justify-between gap-4 mb-6">
            {alertLevels.map((alert, index) => (
              <div
                key={index}
                className={`flex-1 min-w-[200px] ${alert.colorClass} text-white rounded-lg p-4 text-center`}
              >
                <h3 className="text-lg font-semibold mb-2">{alert.severity}</h3>
                <p className="text-sm">{alert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Automated Security */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
            Automated Security Without a Dedicated Team
          </h2>
          <p className="mb-6">
            Our solution enables companies without dedicated security teams to
            maintain enterprise-grade security through automation:
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    {React.cloneElement(feature.icon as React.ReactElement, {
                      size: 12,
                    })}
                  </span>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common SOAR Actions */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
            Common SOAR Automated Actions
          </h2>
          <p className="mb-6">
            Our SOAR capabilities can automatically execute these actions in
            response to security events:
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-8">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">Security Event</th>
                  <th className="p-4 text-left">Automated Action</th>
                  <th className="p-4 text-left">Benefit</th>
                </tr>
              </thead>
              <tbody>
                {securityActions.map((action, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="p-4 border-b border-gray-200">
                      {action.event}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {action.action}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {action.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Incident Response Timeline */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
            Incident Response Timeline
          </h2>
          <p className="mb-6">
            Our integrated SIEM and SOAR system dramatically reduces response
            time compared to manual processes:
          </p>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto my-12 py-8 px-4">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform -translate-x-1/2 md:block hidden"></div>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 md:hidden block"></div>

            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative mb-8 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-8 md:ml-0 md:mr-auto md:text-right"
                    : "md:pl-8 md:ml-auto md:mr-0"
                } pl-12 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute w-5 h-5 bg-white border-4 border-blue-500 rounded-full z-10 md:top-2 top-0 ${
                    index % 2 === 0 ? "md:right-[-10px]" : "md:left-[-10px]"
                  } left-0`}
                ></div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="flex-1 min-w-[180px] py-3 px-6 bg-gray-800 text-white font-bold rounded-md transition-colors hover:bg-gray-900 text-center">
            Schedule Demo
          </button>
          <button className="flex-1 min-w-[180px] py-3 px-6 bg-blue-500 text-white font-bold rounded-md transition-colors hover:bg-blue-600 text-center">
            Download Datasheet
          </button>
          <button className="flex-1 min-w-[180px] py-3 px-6 bg-white text-blue-500 font-bold rounded-md border-2 border-blue-500 transition-colors hover:bg-blue-50 text-center">
            Contact Sales
          </button>
        </div>
      </main>

      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes flowParticle {
          0% {
            left: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes flowParticleReverse {
          0% {
            right: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            right: 100%;
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 3s infinite ease-in-out;
        }

        .animate-flow-particle {
          animation: flowParticle 3s infinite linear;
        }

        .animate-flow-particle-reverse {
          animation: flowParticleReverse 3s infinite linear;
        }

        .animate-slow-spin {
          animation: spin 30s linear infinite;
        }

        .animate-slow-spin-reverse {
          animation: spin 20s linear infinite reverse;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1100 {
          animation-delay: 1.1s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }

        .animation-delay-1700 {
          animation-delay: 1.7s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-1800 {
          animation-delay: 1.8s;
        }
      `}</style>
    </div>
  );
};

export default SiemDashboard;
