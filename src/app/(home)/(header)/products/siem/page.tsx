import type { Metadata } from "next";
import SiemDashboard from "@/components/header/products/siem/SiemDashboard";

export const metadata: Metadata = {
  title: "SIEM - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const SIEMpage = () => {
  return (
    <>
      <SiemDashboard />
    </>
  );
};

export default SIEMpage;
