import type { Metadata } from "next";
import Splunk from "@/components/documentation/Splunk";

export const metadata: Metadata = {
  title: "Documentation Splunk - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const Splunkpage = () => {
  return (
    <>
      <Splunk />
    </>
  );
}

export default Splunkpage;