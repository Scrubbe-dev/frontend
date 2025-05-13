import type { Metadata } from "next";
import GCP from "@/components/documentation/GCP";

export const metadata: Metadata = {
  title: "Documentation GCP - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const GCPpage = () => {
  return (
    <>
      <GCP />
    </>
  );
};

export default GCPpage;