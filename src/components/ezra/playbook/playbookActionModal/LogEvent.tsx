import CButton from "@/components/ui/Cbutton";
import Input from "@/components/ui/input";
import React, { useState } from "react";

const LogEvent = ({ closeModal }: { closeModal: () => void }) => {
  const [logMessage, setLogMessage] = useState("");

  const handleSave = () => {
    console.log(logMessage);
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold dark:text-white">
        Configure Log Event
      </h2>
      <Input
        label="Log Message"
        placeholder="Low Severity detected"
        value={logMessage}
        onChange={(e) => setLogMessage(e.target.value)}
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

export default LogEvent;
