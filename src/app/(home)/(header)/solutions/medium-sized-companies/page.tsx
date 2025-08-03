import type { Metadata } from "next";
import MediumSizedCompanies from "@/components/header/solutions/MediumSizedCompanies";

export const metadata: Metadata = {
  title: "Solution Medium Sized Companies - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const MediumSizedCompaniespage = () => {
  return (
    <>
      <MediumSizedCompanies />
    </>
  );
};

export default MediumSizedCompaniespage;
