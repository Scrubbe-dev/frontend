const mockHistory = [
  {
    id: 1,
    by: "System",
    time: "2025-05-30 12:44:07",
  },
  {
    id: 2,
    by: "System",
    time: "2025-05-30 12:44:07",
  },
  {
    id: 3,
    by: "System",
    time: "2025-05-30 12:44:07",
  },
  {
    id: 4,
    by: "System",
    time: "2025-05-30 12:44:07",
  },
  {
    id: 5,
    by: "System",
    time: "2025-05-30 12:44:07",
  },
];

const History = () => {
  return (
    <div className="flex flex-col max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 dark:bg-transparent bg-white">
        <div className="space-y-2">
          {mockHistory.map((item) => (
            <div key={item.id} className="dark:text-white">
              <b>Created by: </b>
              <span className="opacity-60">
                By {item.by} at {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
