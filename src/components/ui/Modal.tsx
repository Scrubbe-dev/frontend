import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="dark:bg-[#111827] bg-white rounded-lg p-2 sm:p-6 w-full  sm:max-w-2xl mx-2 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-end">
            <div
              onClick={onClose}
              className="bg-neutral-100 dark:bg-[#111827] dark:text-white rounded-sm p-1 w-fit"
            >
              <X />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
