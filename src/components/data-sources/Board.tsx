"use client";
import React from "react";
import Card, { StatusColor } from "./Card";
import AddSourceCard from "./AddSourceCard";

interface CardData {
  logo: string | null;
  title: string;
  status: string;
  statusColor: StatusColor;
  buttonText: string;
  timestamp: string;
  processedData: string;
}

const Board: React.FC = () => {
  const cardData: CardData[] = [
    {
      logo: "icon-auth-aws.svg",
      title: "AWS",
      status: "connected",
      statusColor: "green",
      buttonText: "Disconnect",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
    {
      logo: "icon-auth-azure.svg",
      title: "Azure",
      status: "ingesting",
      statusColor: "yellow",
      buttonText: "Pause",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
    {
      logo: "icon-gcp.svg",
      title: "GCP",
      status: "error",
      statusColor: "red",
      buttonText: "Retry",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
    {
      logo: "icon-postgres.svg",
      title: "Postgres",
      status: "connected",
      statusColor: "green",
      buttonText: "Disconnect",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
    {
      logo: null, // Explicitly null instead of empty string
      title: "APIs",
      status: "connected",
      statusColor: "green",
      buttonText: "Disconnect",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
  ];

  const handleTabClick = (tab: string) => {
    console.log(`Tab clicked: ${tab}`);
  };

  const handleButtonClick = (buttonText: string, status: string) => {
    console.log(`Button clicked: ${buttonText} for status: ${status}`);
  };

  const handleGetStartedClick = () => {
    console.log("Get started clicked for Add new source");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Scrubbe Data Ingestion Dashboard
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(345px,_1fr))] gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            {...card}
            onTabClick={handleTabClick}
            onButtonClick={handleButtonClick}
          />
        ))}
        {/* Add new source card */}
        <AddSourceCard
          title="Add new source"
          onTabClick={handleTabClick}
          onGetStartedClick={handleGetStartedClick}
        />
      </div>
    </div>
  );
};

export default Board;
