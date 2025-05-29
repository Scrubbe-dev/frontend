"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useAppStore } from "@/store/StoreProvider";
import { ModalType } from "@/store/slices/modalSlice";

const ModalManager: React.FC = () => {
  const { isOpen, modalData, closeModal, setModalType } = useAppStore(
    (state) => state
  );

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeModal]);

  // Don't render anything if modal is not open
  if (!isOpen || !modalData) return null;

  const tabs: ModalType[] = ["overview", "configure", "logs", "metrics"];

  const handleTabClick = (tab: ModalType) => {
    setModalType(tab);
  };

  const renderModalContent = () => {
    const { type, title, dataSourceName } = modalData;

    switch (type) {
      case "configure":
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Configure {dataSourceName || title}
            </h3>
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                Configuration settings for {dataSourceName || title} will be
                displayed here.
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  • Connection settings
                  <br />
                  • Authentication credentials
                  <br />
                  • Data source parameters
                  <br />• Ingestion frequency
                </p>
              </div>
            </div>
          </div>
        );

      case "logs":
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Logs - {dataSourceName || title}
            </h3>
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                Recent logs and activities for {dataSourceName || title}:
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs">
                <div>[2025-05-29 14:30:22] INFO: Connection established</div>
                <div>[2025-05-29 14:30:25] INFO: Data ingestion started</div>
                <div>[2025-05-29 14:30:28] INFO: Processing 1.2TB of data</div>
                <div>
                  [2025-05-29 14:30:30] SUCCESS: Batch processed successfully
                </div>
              </div>
            </div>
          </div>
        );

      case "metrics":
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Metrics - {dataSourceName || title}
            </h3>
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                Performance metrics for {dataSourceName || title}:
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1.2TB</div>
                  <div className="text-sm text-gray-600">Data Processed</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">15ms</div>
                  <div className="text-sm text-gray-600">Avg Response</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Overview - {dataSourceName || title}
            </h3>
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                Overview and general information for {dataSourceName || title}:
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Status:</span>
                    <span className="ml-2 text-green-600">Connected</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Last Update:
                    </span>
                    <span className="ml-2 text-gray-600">2025-05-29</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Data Size:
                    </span>
                    <span className="ml-2 text-gray-600">1.2 TB</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Health:</span>
                    <span className="ml-2 text-green-600">Good</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={closeModal}
      />

      {/* Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-[600px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            {modalData.dataSourceName || modalData.title}
          </h2>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Navigation tabs */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors capitalize ${
                modalData.type === tab
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">{renderModalContent()}</div>
      </div>
    </>
  );
};

export default ModalManager;
