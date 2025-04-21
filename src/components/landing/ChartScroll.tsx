"use client";
import React, { useEffect, useRef, RefObject } from "react";
import ChartSystem from "@/components/landing/ChartSystem";
import ChartFraud from "@/components/landing/ChartFraud";

const ChartScroll = () => {
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Define charts
  const charts = [
    { id: "system", Component: ChartSystem },
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
      <h2 className="text-3xl font-bold text-center mb-8">
        Security Analytics Dashboard
      </h2>

      <div className="w-full overflow-hidden">
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

      <div className="mt-8 px-4 md:px-8 mb-4">
        <button className="bg-colorScRed hover:bg-red-700 text-white font-semibold font-Inter text-md rounded-sm mx-auto block w-full md:w-1/3 py-3">
          Start free trial
        </button>
      </div>
    </div>
  );
};

export default ChartScroll;
