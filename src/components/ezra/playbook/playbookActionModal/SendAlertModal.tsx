import Input from "@/components/ui/input";
import CButton from "@/components/ui/Cbutton";
import React, { useState } from "react";

const SendAlertModal = ({ closeModal }: { closeModal: () => void }) => {
  const [recipientEmail, setRecipientEmail] = useState("");

  const handleSave = () => {
    console.log(recipientEmail);
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold dark:text-white">
        Configure Send Alert
      </h2>
      <Input
        label="Recipient Email"
        placeholder="admin@scrubble.com"
        value={recipientEmail}
        onChange={(e) => setRecipientEmail(e.target.value)}
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

export default SendAlertModal;
