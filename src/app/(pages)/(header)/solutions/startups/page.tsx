import type { Metadata } from "next";
import StartUps from "@/components/header/solutions/StartUps";

export const metadata: Metadata = {
  title: "Solution StartUps - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const StartUpspage = () => {
  return (
    <>
      <StartUps />
    </>
  );
};

export default StartUpspage;
