import type { Metadata } from "next";
import SideBar from "@/components/data-sources/SideBar";
import Board from "@/components/data-sources/Board";

export const metadata: Metadata = {
  title: "Data Sources - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const DataSourcesPage = () => {
  return (
    <div className="w-full h-auto">
      <section className="w-screen max-w-[1440px] mx-auto h-full grid grid-cols-[1fr_4fr] grid-rows-[1fr] bg-white">
        <article className="col-start-1 col-end-2 row-start-1 row-end-2">
          <SideBar />
        </article>
        <article className="col-start-2 col-end-3 row-start-1 row-end-2 bg-red-100">
          <Board />
        </article>
      </section>
    </div>
  );
};

export default DataSourcesPage;
