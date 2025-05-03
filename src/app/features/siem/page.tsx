import type { Metadata } from "next";
import SiemDashboard from "@/components/features/SiemDashboard";

export const metadata: Metadata = {
  title: "SIEM - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const page = () => {
  return (
    <>
      <SiemDashboard />
    </>
  );
}

export default page