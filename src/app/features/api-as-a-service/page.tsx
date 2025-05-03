import type { Metadata } from "next";
import ApiService from "@/components/features/ApiService";

export const metadata: Metadata = {
  title: "API as a Service - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const ApiServicePage = () => {
  return (
    <>
      <ApiService />
    </>
  );
}

export default ApiServicePage;