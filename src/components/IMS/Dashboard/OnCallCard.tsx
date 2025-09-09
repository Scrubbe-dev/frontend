// components/OnCallCard.tsx
import React from "react";

type Props = {
  initials: string;
  name: string;
};

const OnCallCard: React.FC<Props> = ({ initials, name }) => {
  return (
    <div className="flex flex-[.5] flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm h-full">
      <div className="text-gray-500 text-sm font-medium mb-3">
        ON-CALL ENGINEER
      </div>
      <div className=" size-10 rounded-full bg-neutral-700 flex items-center justify-center mb-3">
        <span className="font-bold text-white">{initials}</span>
      </div>
      <p className="text-xl font-bold">{name}</p>
    </div>
  );
};

export default OnCallCard;
