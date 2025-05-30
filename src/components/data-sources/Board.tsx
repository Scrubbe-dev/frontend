"use client";
import Card from "./Card";
import AddSourceCard from "./AddSourceCard";
import { useAppStore } from "@/store/StoreProvider";

const Board: React.FC = () => {
  // Use Zustand store
  const {
    selectedDataSource,
    getFilteredCards,
    handleTabClick,
    handleButtonClick,
    handleGetStartedClick,
  } = useAppStore((state) => state);

  // Get filtered cards based on selected data source
  const filteredCards = getFilteredCards();

  // Determine if we should show the AddSourceCard
  const showAddSourceCard =
    selectedDataSource === "dashboard" || selectedDataSource === "add-new";

  return (
    <div className="p-8 bg-gray-50 h-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Scrubbe Data Ingestion Dashboard
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(345px,_1fr))] gap-6">
        {/* Render filtered cards */}
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            logo={card.logo}
            title={card.title}
            status={card.status}
            statusColor={card.statusColor}
            buttonText={card.buttonText}
            timestamp={card.timestamp}
            processedData={card.processedData}
            onTabClick={handleTabClick}
            onButtonClick={handleButtonClick}
          />
        ))}

        {/* Conditionally render Add new source card */}
        {showAddSourceCard && (
          <AddSourceCard
            title="Add new source"
            onTabClick={handleTabClick}
            onGetStartedClick={handleGetStartedClick}
          />
        )}
      </div>
    </div>
  );
};

export default Board;
