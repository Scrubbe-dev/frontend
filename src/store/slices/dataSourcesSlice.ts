import type { StateCreator } from "zustand";

export type DataSourceId =
  | "dashboard"
  | "aws"
  | "azure"
  | "gcp"
  | "postgres"
  | "api"
  | "add-new";

export interface DataSourceItem {
  id: DataSourceId;
  name: string;
  icon: React.ComponentType<{ className?: string }> | null;
}

export interface CardData {
  id: DataSourceId;
  logo: string | null;
  title: string;
  status: string;
  statusColor: "green" | "yellow" | "red" | "gray";
  buttonText: string;
  timestamp: string;
  processedData: string;
}

export type dataSourcesSliceType = {
  selectedDataSource: DataSourceId;
  dataSourceItems: DataSourceItem[];
  cardData: CardData[];

  // Actions
  setSelectedDataSource: (source: DataSourceId) => void;
  getFilteredCards: () => CardData[];
  handleTabClick: (tab: string) => void;
  handleButtonClick: (buttonText: string, status: string) => void;
  handleGetStartedClick: () => void;
};

export const createDataSourcesSlice: StateCreator<dataSourcesSliceType> = (
  set,
  get
) => ({
  selectedDataSource: "dashboard", // Default to show all cards

  dataSourceItems: [
    { id: "dashboard", name: "Dashboard", icon: null },
    { id: "aws", name: "AWS", icon: null },
    { id: "azure", name: "Azure", icon: null },
    { id: "gcp", name: "GCP", icon: null },
    { id: "postgres", name: "Postgres", icon: null },
    { id: "api", name: "API", icon: null },
    { id: "add-new", name: "Add New Source", icon: null },
    // FiPlus will be imported in the component where it's used
  ],

  cardData: [
    {
      id: "aws",
      logo: "icon-auth-aws.svg",
      title: "AWS",
      status: "connected",
      statusColor: "green",
      buttonText: "Disconnect",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
    {
      id: "azure",
      logo: "icon-auth-azure.svg",
      title: "Azure",
      status: "ingesting",
      statusColor: "yellow",
      buttonText: "Pause",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
    {
      id: "gcp",
      logo: "icon-gcp.svg",
      title: "GCP",
      status: "error",
      statusColor: "red",
      buttonText: "Retry",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
    {
      id: "postgres",
      logo: "icon-postgres.svg",
      title: "Postgres",
      status: "connected",
      statusColor: "green",
      buttonText: "Disconnect",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
    {
      id: "api",
      logo: null,
      title: "APIs",
      status: "connected",
      statusColor: "green",
      buttonText: "Disconnect",
      timestamp: "2025-05-22",
      processedData: "1.2 TB",
    },
  ],

  // Actions
  setSelectedDataSource: (source) => {
    set({ selectedDataSource: source });
  },

  getFilteredCards: () => {
    const { selectedDataSource, cardData } = get();

    if (selectedDataSource === "dashboard") {
      return cardData; // Return all cards for dashboard view
    }

    if (selectedDataSource === "add-new") {
      return []; // No regular cards for add-new, only the AddSourceCard
    }

    // Filter to show only the selected data source card
    return cardData.filter((card) => card.id === selectedDataSource);
  },

  handleTabClick: (tab) => {
    console.log(`Tab clicked: ${tab}`);
  },

  handleButtonClick: (buttonText, status) => {
    console.log(`Button clicked: ${buttonText} for status: ${status}`);
  },

  handleGetStartedClick: () => {
    console.log("Get started clicked for Add new source");
  },
});
