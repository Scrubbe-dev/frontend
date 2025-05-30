"use client";
import { useEffect } from "react";
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

        {/* Content - Empty for now */}
        <div className="flex-1 overflow-y-auto">
          {/* Content will be added here */}
        </div>
      </div>
    </>
  );
};

export default ModalManager;
