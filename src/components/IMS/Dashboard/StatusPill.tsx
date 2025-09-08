// components/StatusPill.tsx
import React from "react";

type Status = "Healthy" | "Warning" | "Critical";

const statusColors = {
  Healthy: "bg-emerald-100 text-emerald-700",
  Warning: "bg-yellow-100 text-yellow-700",
  Critical: "bg-red-100 text-red-700",
};

const StatusPill: React.FC<{ status: Status }> = ({ status }) => {
  return (
    <span
      className={`px-2 py-0.5 rounded-md text-xs font-semibold ${statusColors[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusPill;
