"use client";
import React, { useState } from "react";
import { useAppStore } from "@/store/StoreProvider";
import type { ModalType } from "@/store/slices/modalSlice";

type TabName = "Overview" | "Configure" | "Logs";

interface AddSourceCardProps {
  title: string;
  onTabClick?: (tab: TabName) => void;
  onGetStartedClick?: () => void;
}

const AddSourceCard: React.FC<AddSourceCardProps> = ({
  title,
  onTabClick = () => {},
  onGetStartedClick = () => {},
}) => {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");
  const { openModal } = useAppStore((state) => state);

  const tabs: TabName[] = ["Overview", "Configure", "Logs"];

  const handleTabClick = (tab: TabName) => {
    setActiveTab(tab);
    onTabClick(tab);

    // Only open modal for non-Overview tabs
    if (tab !== "Overview") {
      const modalType = tab.toLowerCase() as ModalType;
      openModal({
        type: modalType,
        title: tab,
        dataSourceId: "add-new",
        dataSourceName: title,
      });
    }
  };

  const handleGetStartedClick = () => {
    onGetStartedClick();
    // Open modal in configure mode for adding new source
    openModal({
      type: "configure",
      title: "Configure New Source",
      dataSourceId: "add-new",
      dataSourceName: title,
    });
  };

  return (
    <section className="w-[345px] h-[312px] bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col justify-self-center">
      {/* Header with title only */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <span className="text-gray-700 font-medium text-sm">{title}</span>
      </div>

      {/* Navigation tabs (no Metrics tab) */}
      <div className="flex border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area with instructions */}
      <aside className="flex-1 p-4 flex flex-col justify-between">
        {/* Instructions */}
        <div className="text-sm text-gray-600 space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>Add a new data source to Scrubbe for data ingestion</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>Select a source type (e.g., AWS, Azure, Custom API).</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>Enter credentials and configuration details.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>Save to connect and start ingesting data.</span>
          </div>
        </div>

        {/* Get started button */}
        <div className="flex justify-end">
          <button
            onClick={handleGetStartedClick}
            className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-500 rounded hover:bg-blue-50 transition-colors"
          >
            Get started
          </button>
        </div>
      </aside>
    </section>
  );
};

export default AddSourceCard;
