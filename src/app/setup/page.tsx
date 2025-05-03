import type { Metadata } from "next";
import SetupConfiguration from "@/components/setup/SetupConfiguration";

export const metadata: Metadata = {
  title: "SetUp - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const SetupPage = () => {
  return (
    <>
      <SetupConfiguration />
    </>
  );
}

export default SetupPage;