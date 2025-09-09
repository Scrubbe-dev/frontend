/* eslint-disable @typescript-eslint/no-explicit-any */
import MetricCard from "./MetricCard";
import OnCallCard from "./OnCallCard";
import { MdOutlineAnalytics, MdBookmark } from "react-icons/md";
import SlaCard from "./SLACard";
import SystemHealthCard from "./StatusHealth";
import { FaClock, FaUser } from "react-icons/fa";
import IncidentGraph from "./IncidentGraph";
import TeamWorkloadChart from "./TeamWorkLoadChart";
import RecurringIssuesTable from "./RecurringIssuesTable";
import SlaBreachesChart from "./SlaBreachesChart";
import AtRiskIncidents from "./AtRiskIncidents";
import RecentPostmortems from "./RecentPostmortems";
import AutomationRuns from "./AutomationRun";
import ActiveIncidentTable from "./ActiveIncidentTable";

const Dashboard = () => {
  const systemStatuses: any = {
    API: "Healthy",
    Auth: "Healthy",
    Payment: "Critical",
    DB: "Warning",
    Storage: "Warning",
    Network: "Warning",
  };

  const topIssues = [
    { name: "DB Timeout :", incidents: 5 },
    { name: "API Rate Limit :", incidents: 4 },
    { name: "Payment Gateway Errors :", incidents: 3 },
    { name: "Auth Token Expiry :", incidents: 3 },
    { name: "Network Latency :", incidents: 2 },
  ];

  const atRiskData = [
    { id: "INC-003", name: "Payment Issue", breachTime: "15 min to breach" },
    { id: "INC-005", name: "Storage Overload", breachTime: "30 min to breach" },
    { id: "INC-006", name: "Network spike", breachTime: "30 min to breach" },
  ];
  const postmortemsData = [
    { id: "PM-001", title: "API Outage Report", published: "2 days ago" },
    { id: "PM-002", title: "DB Failure Analysis", published: "2 days ago" },
    { id: "PM-003", title: "Payment Gateway Review", published: "1 week ago" },
    { id: "PM-004", title: "Auth System Breakdown", published: "10 days ago" },
    {
      id: "PM-005",
      title: "Network Incident Summary",
      published: "2 weeks ago",
    },
  ];
  const automationData = [
    { workflowId: "Workflow A", status: "Success", timestamp: "2 hours ago" },
    { workflowId: "Workflow B", status: "Failure", timestamp: "2 hours ago" },
    { workflowId: "Workflow C", status: "Success", timestamp: "5 hours ago" },
    { workflowId: "Workflow C", status: "Success", timestamp: "2 hours ago" },
    { workflowId: "Workflow C", status: "Success", timestamp: "6 hours ago" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Open Incidents"
          value="142"
          icon={<MdBookmark size={20} />}
          iconColor="bg-emerald-50 text-emerald-700"
        />
        <MetricCard
          title="MTTA"
          value="15 mins"
          trend="down"
          icon={<MdOutlineAnalytics size={20} />}
          iconColor="bg-blue-100 text-blue-700"
        />
        <MetricCard
          title="MTTR"
          value="45 mins"
          trend="up"
          icon={<FaClock size={20} />}
          iconColor="bg-emerald-100 text-emerald-700"
        />
        <SlaCard
          title="86%"
          value="SLA Compliance"
          compliance={86}
          icon={<FaUser size={20} />}
          iconColor="bg-purple-100 text-purple-700"
        />
      </div>

      <div className="mt-8 flex gap-6 w-full">
        <OnCallCard initials="JD" name="JOHN DOE" />
        <SystemHealthCard statuses={systemStatuses} />
      </div>

      <div className="mt-8 w-full">
        <ActiveIncidentTable />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 w-full">
        <IncidentGraph />
        <TeamWorkloadChart />
      </div>

      <div className="mt-8 w-full">
        <RecurringIssuesTable issues={topIssues} />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6 w-full">
        <SlaBreachesChart />
        <AtRiskIncidents incidents={atRiskData} />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6 w-full">
        <RecentPostmortems postmortems={postmortemsData} />
        <AutomationRuns runs={automationData} />
      </div>
    </div>
  );
};

export default Dashboard;
