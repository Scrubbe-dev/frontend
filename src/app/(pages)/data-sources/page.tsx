import type { Metadata } from "next";
import Board from "@/components/data-sources/Board";

export const metadata: Metadata = {
  title: "Data Sources - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const DataSourcesPage = () => {
  return <Board />;
};

export default DataSourcesPage;
