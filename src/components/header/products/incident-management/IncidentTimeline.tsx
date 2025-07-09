const timeline = [
  {
    id: 1,
    title: "Initial Detection",
    description:
      "Multiple failed login attempts detected from IP 192.168.1.45 using brute force techniques",
    time: "08:45AM",
  },
  {
    id: 2,
    title: "Automated Alert Generated",
    description:
      "System generated high-priority alert and notified security team via SMS and email",
    time: "08:50AM",
  },
  {
    id: 3,
    title: "Automated Response Triggered",
    description:
      "IP address temporarily blocked by firewall as per security policy. Account locked for protection",
    time: "09:00AM",
  },
  {
    id: 4,
    title: "Analyst Investigation",
    description:
      "Security analyst John Doe started investigation, reviewed logs and initiated trace analysis.",
    time: "09:10AM",
  },
  {
    id: 5,
    title: "Incident Report Generated",
    description:
      "Detailed report generated with incident details, impact assessment, and recommended actions",
    time: "09:15AM",
  },
  {
    id: 6,
    title: "Escalation ",
    description:
      "Incident escalated to Tier 2 response team due to potential data breach risk.",
    time: "09:30AM",
  },
];
const IncidentTimeline = () => {
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 py-20">
      <div className="flex flex-col gap-y-2">
        <p className="text-2xl font-bold">Sample Incident Timeline</p>
        <p className="">ID: INC-2023-05-13-001 | Unauthorized Access Attemp</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 w-full">
        <div>
          {timeline.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-blue-600" />
                <div className="w-[1px] h-20 bg-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.time}</p>
                <p className="text-lg font-bold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[520px] w-full rounded-xl p-6 bg-blue-100">
          <img
            src="/incident_analysis.png"
            alt="incident-timeline"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default IncidentTimeline;
