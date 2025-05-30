"use client";
import { useEffect } from "react";
import { X } from "lucide-react";
import { useAppStore } from "@/store/StoreProvider";

const ModalManager: React.FC = () => {
  const { isOpen, modalData, closeModal } = useAppStore(
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

  // Capitalize first letter for display
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Get the header title with data source name and current tab
  const getHeaderTitle = () => {
    const dataSourceName =
      modalData.dataSourceName || modalData.title || "Data Source";
    const currentTab = capitalizeFirstLetter(modalData.type || "overview");
    return `${dataSourceName} - ${currentTab}`;
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
            {getHeaderTitle()}
          </h2>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Content - Empty for now */}
        <div className="flex-1 overflow-y-auto">
          {/* Content will be added here */}
        </div>
      </div>
    </>
  );
};

export default ModalManager;
