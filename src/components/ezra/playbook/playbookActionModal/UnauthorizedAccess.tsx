import CButton from "@/components/ui/Cbutton";
import Select from "@/components/ui/select";
import React, { useState } from "react";

const UnauthorizedAccess = ({ closeModal }: { closeModal: () => void }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSave = () => {
    console.log(selectedOption);
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold dark:text-white">
        Configure Unauthorized Access
      </h2>
      <Select
        options={[
          { label: "SIEM", value: "siem" },
          { label: "SOAR", value: "soar" },
          { label: "Email Gateway", value: "email-gateway" },
        ]}
        onChange={(value) => {
          setSelectedOption(value.target.value);
        }}
      />
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

export default UnauthorizedAccess;
