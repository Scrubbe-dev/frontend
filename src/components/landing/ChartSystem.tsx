"use client";
import type React from "react";
import { useEffect, useState, useRef } from "react";

export default function ChartSystem() {
  const [activeTooltip, setActiveTooltip] = useState<{
    title: string;
    content: string;
    x: number;
    y: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = document.querySelectorAll(".scrubbe-node");

    // Add subtle movement to nodes
    nodes.forEach((node) => {
      const interval = setInterval(() => {
        const randomX = (Math.random() - 0.5) * 3;
        const randomY = (Math.random() - 0.5) * 3;

        if (node instanceof HTMLElement) {
          node.style.transform = `translate(${randomX}px, ${randomY}px)`;

          setTimeout(() => {
            node.style.transform = "translate(0px, 0px)";
          }, 500);
        }
      }, 3000 + Math.random() * 2000);

      return () => clearInterval(interval);
    });
  }, []);

  const handleNodeMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    nodeType: "siem" | "soar" | "slack" | "teams" | "email"
  ) => {
    if (!containerRef.current) return;

    const node = e.currentTarget;
    const rect = node.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    let title = "";
    let content = "";

    switch (nodeType) {
      case "siem":
        title = "Scrubbe SIEM";
        content =
          "Security Information and Event Management<br>Collects, analyzes, and correlates log data from your entire infrastructure to detect security threats in real-time.";
        break;
      case "soar":
        title = "Scrubbe SOAR";
        content =
          "Security Orchestration, Automation and Response<br>Coordinates security tools and automates incident response workflows to streamline security operations.";
        break;
      case "slack":
        title = "Slack Integration";
        content =
          "Sends real-time alerts, security notifications, and reports to designated Slack channels for immediate team response.";
        break;
      case "teams":
        title = "Microsoft Teams Integration";
        content =
          "Delivers security insights, threat notifications, and enables collaborative incident management within Microsoft Teams.";
        break;
      case "email":
        title = "Email Notifications";
        content =
          "Sends critical security alerts, scheduled reports, and escalation notices via email to stakeholders.";
        break;
    }

    // Small timeout to prevent flickering
    setTimeout(() => {
      setActiveTooltip({
        title,
        content,
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top - 15,
      });
    }, 50);
  };

  const handleNodeMouseLeave = () => {
    // Small timeout to prevent flickering
    setTimeout(() => {
      setActiveTooltip(null);
    }, 100);
  };

  return (
    <div className="flex justify-center items-center h-auto bg-white">
      <div
        ref={containerRef}
        className="relative w-full min-w-[320px] max-w-[650px] h-[500px] bg-gray-50 rounded-3xl shadow-lg p-5 overflow-hidden"
      >
        {/* Status */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 py-3 px-6 bg-white rounded-full flex items-center gap-3 shadow-md text-sm font-medium">
          <div className="relative w-2.5 h-2.5 rounded-full bg-[#4CAF50]">
            <div className="absolute inset-0 rounded-full bg-[#4CAF50] animate-ping opacity-70"></div>
          </div>
          <span>System Online: All connections active</span>
        </div>

        {/* Main Nodes */}
        <div
          className="scrubbe-node absolute w-[110px] h-[110px] left-[80px] top-[180px] rounded-2xl flex flex-col justify-center items-center shadow-md cursor-pointer transition-all duration-300 ease-in-out z-20 bg-gradient-to-br from-white to-gray-100 border border-white/50 hover:-translate-y-1 hover:shadow-lg"
          onMouseEnter={(e) => handleNodeMouseEnter(e, "siem")}
          onMouseLeave={handleNodeMouseLeave}
        >
          <div className="absolute w-full h-full rounded-2xl bg-[#2196F3] blur-xl opacity-10 -z-10"></div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center mb-2 font-bold text-lg text-white bg-gradient-to-br from-[#2196F3] to-[#1e88e5]">
            SIEM
          </div>
          <div className="text-gray-800 font-semibold text-sm">
            Scrubbe SIEM
          </div>
        </div>

        <div
          className="scrubbe-node absolute w-[110px] h-[110px] left-[280px] top-[180px] rounded-2xl flex flex-col justify-center items-center shadow-md cursor-pointer transition-all duration-300 ease-in-out z-20 bg-gradient-to-br from-white to-gray-100 border border-white/50 hover:-translate-y-1 hover:shadow-lg"
          onMouseEnter={(e) => handleNodeMouseEnter(e, "soar")}
          onMouseLeave={handleNodeMouseLeave}
        >
          <div className="absolute w-full h-full rounded-2xl bg-[#4CAF50] blur-xl opacity-10 -z-10"></div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center mb-2 font-bold text-lg text-white bg-gradient-to-br from-[#4CAF50] to-[#43a047]">
            SOAR
          </div>
          <div className="text-gray-800 font-semibold text-sm">
            Scrubbe SOAR
          </div>
        </div>

        {/* Communication Nodes */}
        <div
          className="scrubbe-node absolute w-[90px] h-[90px] right-[60px] top-[100px] rounded-2xl flex flex-col justify-center items-center shadow-md cursor-pointer transition-all duration-300 ease-in-out z-15 bg-gradient-to-br from-white to-gray-100 border border-white/50 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          onMouseEnter={(e) => handleNodeMouseEnter(e, "slack")}
          onMouseLeave={handleNodeMouseLeave}
        >
          <div className="absolute w-full h-full rounded-2xl bg-[#4A154B] blur-xl opacity-10 -z-10"></div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center mb-2 font-bold text-lg text-white bg-gradient-to-br from-[#4A154B] to-[#3d1040]">
            #
          </div>
          <div className="text-gray-800 font-semibold text-sm">Slack</div>
        </div>

        <div
          className="scrubbe-node absolute w-[90px] h-[90px] right-[60px] top-[205px] rounded-2xl flex flex-col justify-center items-center shadow-md cursor-pointer transition-all duration-300 ease-in-out z-15 bg-gradient-to-br from-white to-gray-100 border border-white/50 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          onMouseEnter={(e) => handleNodeMouseEnter(e, "teams")}
          onMouseLeave={handleNodeMouseLeave}
        >
          <div className="absolute w-full h-full rounded-2xl bg-[#6264A7] blur-xl opacity-10 -z-10"></div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center mb-2 font-bold text-lg text-white bg-gradient-to-br from-[#6264A7] to-[#5a5c99]">
            T
          </div>
          <div className="text-gray-800 font-semibold text-sm">Teams</div>
        </div>

        <div
          className="scrubbe-node absolute w-[90px] h-[90px] right-[60px] top-[310px] rounded-2xl flex flex-col justify-center items-center shadow-md cursor-pointer transition-all duration-300 ease-in-out z-15 bg-gradient-to-br from-white to-gray-100 border border-white/50 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          onMouseEnter={(e) => handleNodeMouseEnter(e, "email")}
          onMouseLeave={handleNodeMouseLeave}
        >
          <div className="absolute w-full h-full rounded-2xl bg-[#EA4335] blur-xl opacity-10 -z-10"></div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center mb-2 font-bold text-lg text-white bg-gradient-to-br from-[#EA4335] to-[#d43126]">
            @
          </div>
          <div className="text-gray-800 font-semibold text-sm">Email</div>
        </div>

        {/* Connections */}
        <div className="absolute left-[190px] top-[235px] z-1 pointer-events-none">
          <div className="h-[3px] w-[90px] bg-gradient-to-r from-gray-200/50 to-gray-400/80 rounded-full"></div>
        </div>

        <div className="absolute left-[345px] top-[195px] z-1 pointer-events-none">
          <div className="h-[3px] w-[160px] bg-gradient-to-r from-gray-200/50 to-gray-400/80 rounded-full origin-left transform -rotate-45"></div>
        </div>

        <div className="absolute left-[390px] top-[235px] z-1 pointer-events-none">
          <div className="h-[3px] w-[140px] bg-gradient-to-r from-gray-200/50 to-gray-400/80 rounded-full"></div>
        </div>

        <div className="absolute left-[345px] top-[245px] z-1 pointer-events-none">
          <div className="h-[3px] w-[160px] bg-gradient-to-r from-gray-200/50 to-gray-400/80 rounded-full origin-left transform rotate-45"></div>
        </div>

        {/* Data Pulses */}
        <div className="absolute left-[190px] top-[234px] w-3.5 h-3.5 rounded-full bg-[#2196F3] filter blur-[1px] shadow-[0_0_8px_rgba(33,150,243,0.7)] z-5 scrubbe-animate-pulse-horizontal-1"></div>
        <div className="absolute left-[345px] top-[194px] w-3.5 h-3.5 rounded-full bg-[#4CAF50] filter blur-[1px] shadow-[0_0_8px_rgba(76,175,80,0.7)] z-5 transform -rotate-45 scrubbe-animate-pulse-angled-1"></div>
        <div className="absolute left-[390px] top-[234px] w-3.5 h-3.5 rounded-full bg-[#4CAF50] filter blur-[1px] shadow-[0_0_8px_rgba(76,175,80,0.7)] z-5 scrubbe-animate-pulse-horizontal-2"></div>
        <div className="absolute left-[345px] top-[244px] w-3.5 h-3.5 rounded-full bg-[#4CAF50] filter blur-[1px] shadow-[0_0_8px_rgba(76,175,80,0.7)] z-5 transform rotate-45 scrubbe-animate-pulse-angled-2"></div>

        {/* Tooltip */}
        {activeTooltip && (
          <div
            className="absolute bg-white rounded-lg p-4 shadow-lg text-sm leading-relaxed max-w-[220px] z-100 transition-opacity duration-300 pointer-events-none"
            style={{
              left: `${activeTooltip.x - 110}px`,
              top: `${activeTooltip.y - 100}px`,
              opacity: 1,
            }}
          >
            <div className="font-semibold mb-1 text-gray-800 text-base">
              {activeTooltip.title}
            </div>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: activeTooltip.content }}
            ></div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 py-3 px-4 bg-white rounded-xl shadow-md">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-[#2196F3]"></div>
            <span>SIEM</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
            <span>SOAR</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-[#4A154B]"></div>
            <span>Slack</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-[#6264A7]"></div>
            <span>Teams</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-[#EA4335]"></div>
            <span>Email</span>
          </div>
        </div>
      </div>
    </div>
  );
}
