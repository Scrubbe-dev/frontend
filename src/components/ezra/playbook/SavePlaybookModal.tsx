import CButton from "@/components/ui/Cbutton";
import Input from "@/components/ui/input";
import Modal from "@/components/ui/Modal";
import React from "react";

interface SavePlaybookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const SavePlaybookModal = ({
  isOpen,
  onClose,
  onSave,
}: SavePlaybookModalProps) => {
  const handleSave = () => {
    onSave();
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Save Playbook</h2>
        <Input
          type="text"
          label="Playbook Name"
          placeholder="Enter playbook name"
        />
        <div className="flex gap-2 justify-end">
          <CButton
            onClick={onClose}
            className=" w-fit border border-colorScBlue bg-transparent hover:bg-colorScBlue hover:text-white"
          >
            Cancel
          </CButton>
          <CButton className=" w-fit" onClick={handleSave}>
            Save
          </CButton>
        </div>{" "}
      </div>
    </Modal>
  );
};

export default SavePlaybookModal;
