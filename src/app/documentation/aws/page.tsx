import type { Metadata } from "next";
import AWS from "@/components/documentation/AWS";

export const metadata: Metadata = {
  title: "Documentation AWS - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const AWSpage = () => {
  return (
    <>
      <AWS />
    </>
  );
}

export default AWSpage;