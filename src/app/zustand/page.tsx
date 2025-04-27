import type { Metadata } from "next";
import CounterTestComponent from "@/components/landing/CounterTestComponent";

export const metadata: Metadata = {
  title: "Zustand SandBox - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const page = () => {
  return (
    <>
      <div>Zustand page</div>
      <CounterTestComponent />
    </>
  );
}

export default page