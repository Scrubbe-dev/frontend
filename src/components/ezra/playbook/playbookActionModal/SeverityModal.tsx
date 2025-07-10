import React, { useState } from "react";
import Select from "@/components/ui/select";
import CButton from "@/components/ui/Cbutton";
import Input from "@/components/ui/input";

const SeverityModal = ({ closeModal }: { closeModal: () => void }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSave = () => {
    console.log(selectedOption);
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold dark:text-white">
        Configure Severity = High
      </h2>
      <Input label="Field" placeholder="Severity" />
      <Select
        options={[
          { label: "more than >", value: "more than >" },
          { label: "less than <", value: "less than <" },
          { label: "equal to =", value: "equal to =" },
          { label: "not equal !=", value: "not equal !=" },
          { label: "is", value: "is" },
          { label: "in", value: "in" },
          { label: "not in", value: "not in" },
          { label: "exceeds", value: "exceeds" },
          { label: "below", value: "below" },
        ]}
        onChange={(value) => {
          setSelectedOption(value.target.value);
        }}
      />
      <Input label="Value" placeholder="High" />
      <div className="flex gap-2 justify-end">
        <CButton
          onClick={closeModal}
          className=" w-fit border border-colorScBlue bg-transparent hover:bg-colorScBlue hover:text-white"
        >
          Cancel
        </CButton>
        <CButton className=" w-fit" onClick={handleSave}>
          Save
        </CButton>
      </div>{" "}
    </div>
  );
};

export default SeverityModal;
