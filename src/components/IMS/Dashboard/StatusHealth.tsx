// components/SystemHealthCard.tsx
import React from "react";
import StatusPill from "./StatusPill";

type SystemStatus = {
  API: "Healthy" | "Warning" | "Critical";
  Auth: "Healthy" | "Warning" | "Critical";
  Payment: "Healthy" | "Warning" | "Critical";
  DB: "Healthy" | "Warning" | "Critical";
  Storage: "Healthy" | "Warning" | "Critical";
  Network: "Healthy" | "Warning" | "Critical";
};

type Props = {
  statuses: SystemStatus;
};

const SystemHealthCard: React.FC<Props> = ({ statuses }) => {
  const statusItems = Object.entries(statuses).map(([system, status]) => (
    <div
      key={system}
      className="flex items-center justify-between text-gray-900 dark:text-gray-100 flex-1 flex-grow"
    >
      <span className="text-sm">{system} :</span>
      <StatusPill status={status} />
    </div>
  ));

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm h-full flex-1">
      <p className="text-gray-500 text-sm font-medium mb-4">System Health</p>
      <div className="grid grid-cols-3 gap-4">{statusItems}</div>
    </div>
  );
};

export default SystemHealthCard;
