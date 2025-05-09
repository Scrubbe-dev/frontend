import type { Metadata } from "next";
import WebhookApi from "@/components/documentation/WebhookApi";

export const metadata: Metadata = {
  title: "Documentation Webhook - Api - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const WebhookApipage = () => {
  return (
    <>
      <WebhookApi />
    </>
  );
};

export default WebhookApipage;