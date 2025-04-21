import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { RefreshCw, Download } from "lucide-react";
import { format } from "date-fns";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartData {
  timelineData: {
    labels: string[];
    attempts: number[];
    detected: number[];
  };
  rawData: {
    date: string;
    attempts: number;
    detected: number;
    preventionRate: number;
    riskScore: number;
  }[];
}

function generateChartData(startDate?: Date, endDate?: Date): ChartData {
  const start =
    startDate || new Date(new Date().setDate(new Date().getDate() - 7));
  const end = endDate || new Date();

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return {
      timelineData: { labels: [], attempts: [], detected: [] },
      rawData: [],
    };
  }

  const dates: Date[] = [];
  const currentDate = new Date(start);

  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const timeLabels = dates.map((date) => format(date, "MMM d"));
  const attemptData = dates.map(() => Math.floor(Math.random() * 50) + 30);
  const detectedData = attemptData.map((val) =>
    Math.floor(val * (0.7 + Math.random() * 0.2))
  );

  return {
    timelineData: {
      labels: timeLabels,
      attempts: attemptData,
      detected: detectedData,
    },
    rawData: dates.map((date, index) => ({
      date: format(date, "yyyy-MM-dd"),
      attempts: attemptData[index],
      detected: detectedData[index],
      preventionRate: Math.floor(
        (detectedData[index] / attemptData[index]) * 100
      ),
      riskScore: Math.floor(Math.random() * 100),
    })),
  };
}

function ChartFraud() {
  const [chartData, setChartData] = useState<ChartData>(() =>
    generateChartData()
  );
  const [refreshing, setRefreshing] = useState(false);
  const [showJson, setShowJson] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Set default date range (last 7 days)
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const [startDate, setStartDate] = useState<Date>(sevenDaysAgo);
  const [endDate, setEndDate] = useState<Date>(today);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    animation: {
      duration: 800,
    },
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setChartData(generateChartData(startDate, endDate));
      setRefreshing(false);
    }, 600);
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(chartData.rawData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", "fraud-data.json");
    linkElement.click();
  };

  const handleApplyDates = () => {
    setChartData(generateChartData(startDate, endDate));
  };

  const handlePresetSelect = (days: number) => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - (days - 1));

    setStartDate(start);
    setEndDate(end);
    setChartData(generateChartData(start, end));
  };

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Auto refresh data every 15 seconds
    const refreshInterval = setInterval(() => {
      setChartData(generateChartData(startDate, endDate));
    }, 15000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(refreshInterval);
    };
  }, [startDate, endDate]);

  const chartData2 = {
    labels: chartData.timelineData.labels,
    datasets: [
      {
        label: "Fraud Attempts",
        data: chartData.timelineData.attempts,
        borderColor: "rgba(74, 134, 232, 0.8)",
        backgroundColor: "rgba(74, 134, 232, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Detected Frauds",
        data: chartData.timelineData.detected,
        borderColor: "rgba(224, 102, 102, 0.8)",
        backgroundColor: "rgba(224, 102, 102, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="h-auto bg-gray-100 flex items-center justify-center p-4">
      <aside className="min-w-[320px] max-w-[650px] bg-white rounded-lg shadow-md p-5 transition-all">
        <div className="space-y-4">
          {/* Header with time and view toggles */}
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-4">
              <div>
                <div className="text-xl font-bold">
                  {format(currentTime, "HH:mm:ss")}
                </div>
                <div className="text-sm text-gray-600">
                  {format(currentTime, "EEE, MMM d, yyyy")}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowJson(false)}
                  className={`px-3 py-1.5 rounded text-sm transition-colors ${
                    !showJson ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
                >
                  Chart View
                </button>
                <button
                  onClick={() => setShowJson(true)}
                  className={`px-3 py-1.5 rounded text-sm transition-colors ${
                    showJson ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
                >
                  JSON View
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Dashboard Refresh Rate: 15 seconds
            </div>
          </div>

          {/* Date controls */}
          <div className="flex flex-wrap gap-3 items-center">
            <div>
              <label
                htmlFor="start-date"
                className="block text-sm text-gray-600"
              >
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                className="mt-1 p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={format(startDate, "yyyy-MM-dd")}
                onChange={(e) => setStartDate(new Date(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-sm text-gray-600">
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                className="mt-1 p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={format(endDate, "yyyy-MM-dd")}
                onChange={(e) => setEndDate(new Date(e.target.value))}
              />
            </div>
            <button
              onClick={handleApplyDates}
              className="mt-5 py-2 px-4 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
            >
              Apply
            </button>
          </div>

          {/* Preset filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handlePresetSelect(1)}
              className="py-1.5 px-3 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
            >
              Today
            </button>
            <button
              onClick={() => handlePresetSelect(7)}
              className="py-1.5 px-3 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
            >
              Last 7 Days
            </button>
            <button
              onClick={() => handlePresetSelect(30)}
              className="py-1.5 px-3 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
            >
              Last 30 Days
            </button>
          </div>

          {/* Chart header */}
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg text-gray-800">
              Fraud Detection - Timeline
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleRefresh}
                className={`p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100 ${
                  refreshing ? "animate-spin text-blue-600" : ""
                }`}
              >
                <RefreshCw size={16} />
              </button>
              <button
                onClick={handleDownload}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <Download size={16} />
              </button>
            </div>
          </div>

          {/* Content container */}
          <div className="h-[300px] w-full">
            {showJson ? (
              <div className="h-full overflow-auto">
                <pre className="text-sm">
                  {JSON.stringify(chartData.rawData, null, 2)}
                </pre>
              </div>
            ) : (
              <Line options={chartOptions} data={chartData2} />
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default ChartFraud;
