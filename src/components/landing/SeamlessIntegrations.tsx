"use client";
import { useEffect, useRef, RefObject } from "react";
import { integrationData } from "@/features/home/integration/dto/integration-data";
import { ReactNode } from "react";
import Link from "next/link";

interface IntegrationItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  bgColor: string;
  hoverBgColor: string;
}

function SeamlessIntegrations() {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const thirdRowRef = useRef<HTMLDivElement>(null);

  // Split data into three rows
  const firstRowData = integrationData.slice(0, 3);
  const secondRowData = integrationData.slice(3, 6);
  const thirdRowData = integrationData.slice(6);

  // Function to duplicate items enough to fill the screen width
  const getDuplicatedItems = (items: IntegrationItem[]) => {
    return [...items, ...items, ...items, ...items, ...items];
  };

  useEffect(() => {
    const animateRow = (ref: RefObject<HTMLDivElement>, speed: number) => {
      if (!ref.current) return;

      const container = ref.current;
      const itemWidth = 304; // 72 (w-72) + 16 (mx-4) = 88 * 3.45 (scale factor)
      const contentWidth = itemWidth * firstRowData.length;

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

    // Set up animation intervals
    const firstInterval = setInterval(() => animateRow(firstRowRef, 1), 30);
    const secondInterval = setInterval(() => animateRow(secondRowRef, -1), 30); // Reverse direction
    const thirdInterval = setInterval(() => animateRow(thirdRowRef, 1), 30);

    return () => {
      clearInterval(firstInterval);
      clearInterval(secondInterval);
      clearInterval(thirdInterval);
    };
  }, [firstRowData.length, secondRowData.length, thirdRowData.length]);

  // Integration Card component
  const IntegrationCard = ({ item }: { item: IntegrationItem }) => (
    <Link
      className="flex-shrink-0 w-72 h-28 rounded-lg shadow-md mx-4 transition-all hover:-translate-y-2 hover:shadow-lg cursor-pointer"
      href="/"
      style={{
        backgroundColor: item.bgColor,
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = item.hoverBgColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = item.bgColor;
      }}
    >
      <div className="h-full w-full flex items-center p-2">
        <div className="h-12 w-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center flex-shrink-0">
          {item.icon}
        </div>
        <div className="ml-3 flex-1 w-12">
          <div className="font-Raleway font-bold text-base mb-1 text-black">
            {item.title}
          </div>
          <div className="font-Poppins text-[0.75rem] text-black text-opacity-80 h-8 w-full break-words line-clamp-2 whitespace-normal">
            {item.description}
          </div>
        </div>
      </div>
    </Link>
  );
  /* text-pretty */
  const renderScrollingRow = (
    data: IntegrationItem[],
    ref: RefObject<HTMLDivElement>
  ) => {
    const duplicatedData = getDuplicatedItems(data);

    return (
      <div ref={ref} className="w-full overflow-hidden whitespace-nowrap py-4">
        <div className="inline-flex">
          {duplicatedData.map((item, index) => (
            <IntegrationCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-auto bg-white">
      <aside className="w-full max-w-[1440px] mx-auto h-auto py-12 px-6 md:px-12">
        <div className="h-full w-full flex items-center flex-col">
          <div className="container w-full h-full">
            <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
              <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl xl:text-4xl font-semibold text-center">
                Seamless Integrations
              </div>
              <div className="bg-[#10b981] h-1 w-16 rounded-full"></div>
            </div>

            <div className="w-full h-full flex items-center justify-center py-6">
              <span className="h-fit xl:w-3/6 text-wrap text-center text-[1rem] md:text-[1.3rem]  text-muted-foreground px-2 xl:px-0 font-Raleway font-medium">
                Scrubbe connects with your existing security and cloud
                infrastructure to provide comprehensive visibility and control.
              </span>
            </div>

            <div className="w-full mt-6">
              <div className="w-full overflow-hidden px-4">
                {renderScrollingRow(firstRowData, firstRowRef)}
                {renderScrollingRow(secondRowData, secondRowRef)}
                {renderScrollingRow(thirdRowData, thirdRowRef)}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SeamlessIntegrations;
