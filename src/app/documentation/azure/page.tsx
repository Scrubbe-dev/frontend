import type { Metadata } from "next";
import Azure from "@/components/documentation/Azure";

export const metadata: Metadata = {
  title: "Documentation Azure - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const Azurepage = () => {
  return (
    <>
      <Azure />
    </>
  );
};

export default Azurepage;