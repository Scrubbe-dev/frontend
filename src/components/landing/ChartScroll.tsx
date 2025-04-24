"use client";
import React, { useEffect, useRef, RefObject } from "react";
//import ChartSystem from "@/components/landing/ChartSystem";
import ChartFraud from "@/components/landing/ChartFraud";
import ChartTransaction from "@/components/landing/ChartTransaction";
import { Button } from "@heroui/react";

const ChartScroll = () => {
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Define charts  { id: "fraud", Component: ChartFraud },
  const charts = [
    { id: "transaction", Component: ChartTransaction },
    { id: "fraud", Component: ChartFraud },
  ];

  // Function to duplicate items enough to fill the screen width
  const getDuplicatedItems = (items: typeof charts) => {
    return [...items, ...items, ...items, ...items, ...items];
  };

  const duplicatedCharts = getDuplicatedItems(charts);

  useEffect(() => {
    const animateRow = (ref: RefObject<HTMLDivElement>, speed: number) => {
      if (!ref.current) return;

      const container = ref.current;
      const itemWidth = 650; // Width of each chart
      const contentWidth = itemWidth * charts.length;

      container.scrollLeft += speed;

      // Handle reset for forward scrolling (positive speed)
      if (speed > 0 && container.scrollLeft >= contentWidth) {
        container.scrollLeft = 0;
      }
      // Handle reset for reverse scrolling (negative speed)
      else if (speed < 0 && container.scrollLeft <= 0) {
        container.scrollLeft = contentWidth;
      }
    };

    // Set up animation interval
    const scrollInterval = setInterval(() => animateRow(scrollTrackRef, 1), 30);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [charts.length]);

  return (
    <div className="w-full py-12 bg-gray-50">
      {/* Header */}
      <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
        <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl xl:text-4xl font-semibold px-4 text-center">
          Security Analytics Dashboard
        </div>
        <div className="bg-emerald-500 h-1 w-16 rounded-full"></div>
      </div>

      <div className="w-full overflow-hidden mt-4">
        <div
          ref={scrollTrackRef}
          className="w-full overflow-hidden whitespace-nowrap"
        >
          <div className="inline-flex">
            {duplicatedCharts.map((chart, index) => (
              <div
                key={`${chart.id}-${index}`}
                className="min-w-[650px] flex-shrink-0 px-2"
              >
                <chart.Component />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 px-1 md:px-8 mb-4 flex flex-row gap-4 md:gap-8 justify-center">
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-800 text-white 
    font-Inter font-semibold text-[0.75rem] sm:text-[0.9rem] md:text-[1.1rem] rounded-sm transition-colors duration-200 px-1 sm:px-4"
        >
          Explore our Demo Dashboards
        </Button>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-800 text-white 
    font-Inter font-semibold text-[0.75rem] sm:text-[0.9rem] md:text-[1.1rem] rounded-sm transition-colors duration-200 px-1 sm:px-4"
        >
          Start free trial
        </Button>
      </div>
    </div>
  );
};

export default ChartScroll;
