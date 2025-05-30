"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAppStore } from "@/store/StoreProvider";
import type { DataSourceId } from "@/store/slices/dataSourcesSlice";
import type { ModalType } from "@/store/slices/modalSlice";

export type StatusColor = "green" | "yellow" | "red" | "gray";
type TabName = "Overview" | "Configure" | "Logs" | "Metrics";

interface CardProps {
  logo: string | null;
  title: string;
  status: string;
  statusColor: StatusColor;
  buttonText: string;
  timestamp: string;
  processedData: string;
  dataSourceId?: DataSourceId;
  onTabClick?: (tab: TabName) => void;
  onButtonClick?: (buttonText: string, status: string) => void;
}

const Card: React.FC<CardProps> = ({
  logo,
  title,
  status,
  statusColor,
  buttonText,
  timestamp,
  processedData,
  dataSourceId,
  onTabClick = () => {},
  onButtonClick = () => {},
}) => {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");
  const { openModal } = useAppStore((state) => state);

  const tabs: TabName[] = ["Overview", "Configure", "Logs", "Metrics"];

  const handleTabClick = (tab: TabName) => {
    setActiveTab(tab);
    onTabClick(tab);

    // Open modal with the selected tab
    const modalType = tab.toLowerCase() as ModalType;
    openModal({
      type: modalType,
      title: tab,
      dataSourceId,
      dataSourceName: title,
    });
  };

  const getStatusColor = (): string => {
    switch (statusColor) {
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="w-[345px] h-[312px] bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col justify-self-center">
      {/* Header with logo and title */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        {/* Only show logo if it exists */}
        {logo && (
          <div className="w-8 h-8 relative">
            <Image
              src={logo}
              alt={title}
              fill
              sizes="(min-width: 360px) 100vw"
              className="object-contain"
            />
          </div>
        )}
        <span className="text-gray-700 font-medium text-sm">{title}</span>
      </div>

      {/* Navigation tabs */}
      <div className="flex border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            } ${tab === tabs[0] ? "rounded-tl-none" : ""} ${
              tab === tabs[tabs.length - 1] ? "rounded-tr-none" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        {/* Status indicator and button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${getStatusColor()}`}></div>
            <span className="text-sm text-gray-600 capitalize">{status}</span>
          </div>
          <button
            onClick={() => onButtonClick(buttonText, status)}
            className={`px-3 py-1 text-xs font-medium rounded border transition-colors ${
              statusColor === "red"
                ? "border-blue-500 text-blue-600 hover:bg-blue-50"
                : statusColor === "yellow"
                ? "border-blue-500 text-blue-600 hover:bg-blue-50"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {buttonText}
          </button>
        </div>

        {/* Data info */}
        <div className="text-xs text-gray-500 space-y-1">
          <div>Processed: {processedData}</div>
          <div>Last Update: {timestamp}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
