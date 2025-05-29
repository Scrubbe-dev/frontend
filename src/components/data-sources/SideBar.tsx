"use client";
import { useState } from "react";
import {
  FiDatabase,
  FiActivity,
  FiSettings,
  FiHelpCircle,
  FiChevronDown,
  FiChevronRight,
  FiLogOut,
  FiPlus,
  FiBarChart,
} from "react-icons/fi";

type SectionKey =
  | "menu"
  | "dataSources"
  | "logsAnalytics"
  | "activities"
  | "settings"
  | "support";
type DataSourceId =
  | "dashboard"
  | "aws"
  | "azure"
  | "gcp"
  | "postgres"
  | "api"
  | "add-new";

interface DataSourceItem {
  id: DataSourceId;
  name: string;
  icon: React.ComponentType<{ className?: string }> | null;
}

const SideBar = () => {
  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    menu: true,
    dataSources: false,
    logsAnalytics: false,
    activities: true,
    settings: false,
    support: false,
  });

  const [selectedDataSource, setSelectedDataSource] =
    useState<DataSourceId | null>(null);

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const selectDataSource = (source: DataSourceId) => {
    setSelectedDataSource(source);
  };

  const dataSourceItems: DataSourceItem[] = [
    { id: "dashboard", name: "Dashboard", icon: null },
    { id: "aws", name: "AWS", icon: null },
    { id: "azure", name: "Azure", icon: null },
    { id: "gcp", name: "GCP", icon: null },
    { id: "postgres", name: "Postgres", icon: null },
    { id: "api", name: "API", icon: null },
    { id: "add-new", name: "Add New Source", icon: FiPlus },
  ];

  return (
    <div className="w-72 max-w-[288px] h-screen border-r border-gray-200 flex flex-col">
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {/* Menu Section */}
        <div className="p-4 border-b border-gray-100">
          <button
            onClick={() => toggleSection("menu")}
            className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <span>Menu</span>
            {expandedSections.menu ? (
              <FiChevronDown className="w-4 h-4" />
            ) : (
              <FiChevronRight className="w-4 h-4" />
            )}
          </button>

          {expandedSections.menu && (
            <div className="ml-4 mt-3 space-y-2">
              {/* Data Sources Section */}
              <div>
                <button
                  onClick={() => toggleSection("dataSources")}
                  className="flex items-center justify-between w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <div className="flex items-center space-x-2">
                    <FiDatabase className="w-4 h-4" />
                    <span>Data Sources</span>
                  </div>
                  {expandedSections.dataSources ? (
                    <FiChevronDown className="w-4 h-4" />
                  ) : (
                    <FiChevronRight className="w-4 h-4" />
                  )}
                </button>

                {expandedSections.dataSources && (
                  <div className="ml-6 mt-2 space-y-1">
                    {/* Data Source Items */}
                    <div className="space-y-1">
                      {dataSourceItems.map((item) => {
                        const IconComponent = item.icon;
                        const isSelected = selectedDataSource === item.id;

                        return (
                          <button
                            key={item.id}
                            onClick={() => selectDataSource(item.id)}
                            className={`flex items-center space-x-2 w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                              isSelected
                                ? "bg-blue-500 text-white font-medium"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                          >
                            {IconComponent && (
                              <IconComponent className="w-4 h-4" />
                            )}
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Logs and Analytics Section */}
              <div>
                <button
                  onClick={() => toggleSection("logsAnalytics")}
                  className="flex items-center justify-between w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <div className="flex items-center space-x-2">
                    <FiBarChart className="w-4 h-4" />
                    <span>Logs and Analytics</span>
                  </div>
                  {expandedSections.logsAnalytics ? (
                    <FiChevronDown className="w-4 h-4" />
                  ) : (
                    <FiChevronRight className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Activities Section */}
        <div className="px-4 py-2">
          <button
            onClick={() => toggleSection("activities")}
            className="flex items-center justify-between w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <div className="flex items-center space-x-2">
              <FiActivity className="w-4 h-4" />
              <span>Activities</span>
            </div>
            {expandedSections.activities ? (
              <FiChevronDown className="w-4 h-4" />
            ) : (
              <FiChevronRight className="w-4 h-4" />
            )}
          </button>

          {expandedSections.activities && (
            <div className="ml-6 mt-2 space-y-2">
              {/* Settings Section */}
              <div>
                <button
                  onClick={() => toggleSection("settings")}
                  className="flex items-center justify-between w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <div className="flex items-center space-x-2">
                    <FiSettings className="w-4 h-4" />
                    <span>Settings</span>
                  </div>
                  {expandedSections.settings ? (
                    <FiChevronDown className="w-4 h-4" />
                  ) : (
                    <FiChevronRight className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Support Section */}
              <div>
                <button
                  onClick={() => toggleSection("support")}
                  className="flex items-center justify-between w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <div className="flex items-center space-x-2">
                    <FiHelpCircle className="w-4 h-4" />
                    <span>Support</span>
                  </div>
                  {expandedSections.support ? (
                    <FiChevronDown className="w-4 h-4" />
                  ) : (
                    <FiChevronRight className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer - Log out */}
      <div className="border-t border-gray-200 p-4">
        <button className="flex items-center justify-between w-full text-left py-2 text-sm text-gray-600 hover:text-gray-900">
          <span>Log out</span>
          <FiLogOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
