"use client";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
  ScatterController,
} from "chart.js";
import { Bar, Pie, Line, Scatter } from "react-chartjs-2";
import { ArrowUpRight, ArrowDownRight, Filter, Eye } from "lucide-react";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ScatterController
);

const ChartTransaction = () => {
  const [activeTab, setActiveTab] = useState("30Days");

  // Transaction volume by hour data
  const hourlyData: ChartData<"bar"> = {
    labels: [
      "00:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
    ],
    datasets: [
      {
        label: "Normal Activity Range",
        data: [5, 7, 6, 8, 10, 15, 20, 18, 15, 12, 10, 8],
        backgroundColor: "rgba(220, 230, 255, 0.5)",
        borderColor: "rgba(220, 230, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Current Period",
        data: [8, 10, 8, 15, 85, 90, 88, 85, 80, 75, 25, 15],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
      {
        label: "Anomalies",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12],
        backgroundColor: "rgba(239, 68, 68, 0.7)",
        borderColor: "rgba(239, 68, 68, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Transaction types data
  const transactionTypesData: ChartData<"pie"> = {
    labels: [
      "Data Access",
      "File Operations",
      "System Login",
      "Database Query",
      "Configuration Change",
    ],
    datasets: [
      {
        data: [45, 15, 15, 20, 5],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(139, 92, 246, 0.7)",
          "rgba(34, 197, 94, 0.7)",
          "rgba(250, 204, 21, 0.7)",
          "rgba(239, 68, 68, 0.7)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(250, 204, 21, 1)",
          "rgba(239, 68, 68, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Timeline data - separate line and scatter data
  const timelineData: ChartData<"line"> = {
    labels: [
      "Mar 20",
      "Mar 21",
      "Mar 22",
      "Mar 23",
      "Mar 24",
      "Mar 25",
      "Mar 26",
      "Mar 27",
      "Mar 28",
      "Mar 29",
      "Mar 30",
      "Mar 31",
      "Apr 01",
      "Apr 02",
      "Apr 03",
      "Apr 04",
    ],
    datasets: [
      {
        label: "Transaction Volume",
        data: [70, 90, 45, 55, 35, 70, 75, 85, 70, 90, 55, 35, 50, 40, 35, 55],
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        fill: true,
        tension: 0.1,
      },
    ],
  };

  // Separate scatter data for anomalies
  const anomalyData: ChartData<"scatter"> = {
    datasets: [
      {
        label: "Anomalies",
        data: [
          { x: 3, y: 35 },
          { x: 11, y: 45 },
          { x: 14, y: 65 },
        ],
        backgroundColor: "rgba(239, 68, 68, 1)",
        pointBackgroundColor: "rgba(239, 68, 68, 1)",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  // Chart options
  const hourlyChartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Hour of Day",
        },
      },
      y: {
        title: {
          display: true,
          text: "Transaction Count",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 12,
          usePointStyle: true,
        },
      },
      title: {
        display: false,
      },
    },
  };

  const pieChartOptions: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          boxWidth: 12,
          usePointStyle: true,
        },
      },
    },
  };

  const timelineChartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Transaction Count",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const scatterChartOptions: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        min: -1,
        max: 16,
      },
      y: {
        display: false,
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: () => "Anomaly detected",
        },
      },
    },
  };

  return (
    <div className="max-w-[650px] mx-auto bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          User Transaction Activity Summary
        </h1>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded-md hover:bg-gray-50 transition-colors">
            Export Report
          </button>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Investigate User
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white border rounded-lg shadow-sm p-4">
          <div className="text-sm text-gray-500">
            Total Transactions (30 days)
          </div>
          <div className="text-2xl font-bold mt-1">1,257</div>
          <div className="flex items-center text-xs text-green-600 mt-1">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            <span>23% from previous period</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow-sm p-4">
          <div className="text-sm text-gray-500">
            Failed Authentication Attempts
          </div>
          <div className="text-2xl font-bold mt-1">3</div>
          <div className="flex items-center text-xs text-green-600 mt-1">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            <span>2 more than baseline</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow-sm p-4">
          <div className="text-sm text-gray-500">Anomalous Activities</div>
          <div className="text-2xl font-bold mt-1">5</div>
          <div className="flex items-center text-xs text-red-600 mt-1">
            <ArrowDownRight className="h-3 w-3 mr-1" />
            <span>2 less than previous period</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow-sm p-4">
          <div className="text-sm text-gray-500">After-hours Access</div>
          <div className="text-2xl font-bold mt-1">7</div>
          <div className="flex items-center text-xs text-green-600 mt-1">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            <span>4 more than baseline</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white border rounded-lg shadow-sm">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium">
                Transaction Volume by Hour
              </h2>
              <div className="flex rounded-md overflow-hidden border border-gray-200">
                <button
                  className={`text-xs py-1 px-2 h-9 ${
                    activeTab === "7Days"
                      ? "bg-gray-100 font-medium border border-blue-600 text-blue-600"
                      : "bg-white text-blue-600 border-blue-600"
                  }`}
                  onClick={() => setActiveTab("7Days")}
                >
                  7 Days
                </button>
                <button
                  className={`text-xs py-1 px-2 h-9 ${
                    activeTab === "30Days"
                      ? "bg-blue-600 font-medium text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("30Days")}
                >
                  30 Days
                </button>
              </div>
            </div>
            <div className="h-[250px]">
              <Bar data={hourlyData} options={hourlyChartOptions} />
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow-sm">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium">Transaction Types</h2>
              <button className="h-7 px-3 text-xs border border-gray-300 rounded-md text-white bg-blue-600 transition-colors">
                View Details
              </button>
            </div>
            <div className="h-[250px]">
              <Pie data={transactionTypesData} options={pieChartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white border rounded-lg shadow-sm">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium">
              Transaction Activity Timeline
            </h2>
            <div className="flex gap-2">
              <button className="h-7 px-3 text-xs border border-blue-600 text-blue-600 rounded-md hover:bg-gray-50 transition-colors flex items-center">
                <Filter className="h-3 w-3 mr-1" />
                Filter
              </button>
              <button className="h-7 px-3 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
                <Eye className="h-3 w-3 mr-1" />
                View Anomalies
              </button>
            </div>
          </div>
          <div className="h-[200px] relative">
            <Line data={timelineData} options={timelineChartOptions} />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <Scatter data={anomalyData} options={scatterChartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTransaction;
