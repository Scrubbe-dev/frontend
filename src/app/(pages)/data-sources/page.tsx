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
    <div className="w-full h-[calc(100vh-63px)] bg-white">
      <section className="w-full  mx-auto h-full flex flex-row bg-white overflow-hidden">
        <article className="">
          <SideBar />
        </article>
        <article className=" border w-full">
          <Board />
        </article>
      </section>
    </div>
  );
};

export default DataSourcesPage;
