import type { Metadata } from "next";
import Developers from "@/components/solutions/Developers";

export const metadata: Metadata = {
  title: "Solution Developers - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const Developerspage = () => {
  return (
    <>
      <Developers />
    </>
  );
};

export default Developerspage;