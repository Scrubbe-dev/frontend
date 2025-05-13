import type { Metadata } from "next";
import Datadog from "@/components/documentation/Datadog";

export const metadata: Metadata = {
  title: "Documentation Datadog - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const Datadogpage = () => {
  return (
    <>
      <Datadog />
    </>
  );
};

export default Datadogpage;