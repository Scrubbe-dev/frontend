"use client";
import React from "react";
import ChartFraud from "@/components/landing/ChartFraud";
import ChartTransaction from "@/components/landing/ChartTransaction";
import { Button } from "@heroui/react";

const ChartHome = () => {
  // Define charts
  const charts = [
    { id: "transaction", Component: ChartTransaction },
    { id: "fraud", Component: ChartFraud },
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      {/* Header */}
      <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
        <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl xl:text-4xl font-semibold px-4 text-center">
          Security Analytics Dashboard
        </div>
        <div className="bg-emerald-500 h-1 w-16 rounded-full"></div>
      </div>

      <article className="w-full md:h-[620px] mt-4 overflow-y-auto">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:justify-center">
            {charts.map((chart, index) => (
              <div
                key={`${chart.id}-${index}`}
                className="w-full md:w-1/2 px-2 mb-4 md:mb-0"
              >
                <chart.Component />
              </div>
            ))}
          </div>
        </div>
      </article>

      <div className="mt-8 px-1 md:px-8 mb-4 flex flex-row gap-4 md:gap-8 justify-end">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-800 text-white 
    font-Inter font-semibold text-[0.75rem] sm:text-[0.9rem] md:text-[1.1rem] rounded-sm transition-colors duration-200 px-1 sm:px-4"
        >
          Explore our Dashboards
        </Button>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-800 text-white 
    font-Inter font-semibold text-[0.75rem] sm:text-[0.9rem] md:text-[1.1rem] rounded-sm transition-colors duration-200 px-1 sm:px-4"
        >
          Start free trial
        </Button>
      </div>
    </div>
  );
};

export default ChartHome;
