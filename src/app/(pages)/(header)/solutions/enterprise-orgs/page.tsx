import type { Metadata } from "next";
import EnterpriseOrgs from "@/components/solutions/EnterpriseOrgs";

export const metadata: Metadata = {
  title: "Solution Enterprise Orgs - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const EnterpriseOrgspage = () => {
  return (
    <>
      <EnterpriseOrgs />
    </>
  );
};

export default EnterpriseOrgspage;