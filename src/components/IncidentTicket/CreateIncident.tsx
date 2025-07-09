import React from "react";
import Modal from "../ui/Modal";
import CButton from "../ui/Cbutton";
import Select from "../ui/select";
import Input from "../ui/input";

type CreateIncidentProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateIncident = ({ isOpen, onClose }: CreateIncidentProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4 space-y-5">
        <h1 className="text-2xl font-bold dark:text-white">
          Create New Incident
        </h1>
        <Select
          label="Template"
          options={[
            { label: "None", value: "none" },
            { label: "Phishing", value: "phishing" },
            { label: "Malware", value: "malware" },
          ]}
        />
        <Input label="User name" placeholder="eg John Doe" />
        <Input label="Reason" placeholder="Enter reason" />
        <Select
          label="Priority"
          options={[
            { label: "Low", value: "low" },
            { label: "Medium", value: "medium" },
            { label: "High", value: "high" },
          ]}
        />
        <Select
          label="Status"
          options={[
            { label: "Open", value: "open" },
            { label: "Closed", value: "closed" },
            { label: "In Progress", value: "in-progress" },
            { label: "Resolved", value: "resolved" },
          ]}
        />
        <Select
          label="Assignee"
          options={[
            { label: "John Doe", value: "john-doe" },
            { label: "Jane Doe", value: "jane-doe" },
          ]}
        />

        <div className="flex gap-2 justify-end">
          <CButton
            className="w-fit border border-gray-300 text-colorScBlue dark:border-gray-700 bg-transparent"
            onClick={onClose}
          >
            Close
          </CButton>
          <CButton className="w-fit">Create Incident</CButton>
        </div>
      </div>
    </Modal>
  );
};

export default CreateIncident;
