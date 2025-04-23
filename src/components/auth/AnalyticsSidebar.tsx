// app/auth/AnalyticsSidebar.tsx
"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

export default function AnalyticsSidebar() {
  const signupChartRef = useRef<HTMLCanvasElement>(null);
  const authMethodsChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Store references to canvas elements to use in cleanup
    const signupCanvas = signupChartRef.current;
    const authCanvas = authMethodsChartRef.current;

    let signupChartInstance: Chart | undefined;
    let authChartInstance: Chart | undefined;

    // Function to initialize charts
    const initializeCharts = () => {
      if (signupCanvas && authCanvas) {
        // Destroy existing charts if they exist
        if (signupChartInstance) signupChartInstance.destroy();
        if (authChartInstance) authChartInstance.destroy();

        // Signup Activity Chart
        const signupCtx = signupCanvas.getContext("2d");

        if (signupCtx) {
          signupChartInstance = new Chart(signupCtx, {
            type: "line",
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              datasets: [
                {
                  label: "Business Signups",
                  data: [35, 42, 58, 75, 89, 102, 115],
                  borderColor: "#1B03A3",
                  backgroundColor: "rgba(27, 3, 163, 0.1)",
                  tension: 0.3,
                  fill: true,
                },
                {
                  label: "Developer Signups",
                  data: [55, 65, 75, 81, 90, 97, 110],
                  borderColor: "#6f61e8",
                  backgroundColor: "rgba(111, 97, 232, 0.1)",
                  tension: 0.3,
                  fill: true,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }

        // Authentication Methods Chart
        const authCtx = authCanvas.getContext("2d");

        if (authCtx) {
          authChartInstance = new Chart(authCtx, {
            type: "doughnut",
            data: {
              labels: ["Email", "Social", "SSO"],
              datasets: [
                {
                  data: [45, 35, 20],
                  backgroundColor: ["#1B03A3", "#6f61e8", "#9f97e8"],
                  borderWidth: 0,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
            },
          });
        }
      }
    };

    // Initialize charts
    initializeCharts();

    // Add resize event listener to make charts responsive
    window.addEventListener("resize", initializeCharts);

    // Cleanup function to destroy charts on unmount
    return () => {
      if (signupChartInstance) signupChartInstance.destroy();
      if (authChartInstance) authChartInstance.destroy();
      window.removeEventListener("resize", initializeCharts);
    };
  }, []);

  return (
    <div className="w-full bg-white p-4 md:p-8 shadow-md">
      {/* Logo Section */}
      <div className="text-center mb-6 md:mb-8">
        <div className="text-xl md:text-2xl font-bold text-[#1B03A3]">
          Scrubbe
        </div>
        <div>SIEM & SOAR Solution</div>
      </div>

      {/* Charts Row on Mobile, Column on Desktop */}
      <div className="flex flex-col md:flex-col gap-6">
        {/* User Signup Activity Card */}
        <div className="bg-white rounded-md shadow mb-4 md:mb-6 p-4 md:p-6">
          <h2 className="text-[#1B03A3] text-base md:text-lg font-semibold mb-3 md:mb-4">
            User Signup Activity
          </h2>
          <div className="h-48 md:h-64 relative">
            <canvas ref={signupChartRef}></canvas>
          </div>
          <div className="flex gap-3 md:gap-4 mt-3 md:mt-4">
            <div className="flex items-center text-xs md:text-sm">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#1B03A3] mr-1 md:mr-2"></div>
              <span>Business</span>
            </div>
            <div className="flex items-center text-xs md:text-sm">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#6f61e8] mr-1 md:mr-2"></div>
              <span>Developer</span>
            </div>
          </div>
        </div>

        {/* Authentication Methods Card */}
        <div className="bg-white rounded-md shadow p-4 md:p-6">
          <h2 className="text-[#1B03A3] text-base md:text-lg font-semibold mb-3 md:mb-4">
            Authentication Methods
          </h2>
          <div className="h-48 md:h-64 relative">
            <canvas ref={authMethodsChartRef}></canvas>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 mt-3 md:mt-4">
            <div className="flex items-center text-xs md:text-sm">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#1B03A3] mr-1 md:mr-2"></div>
              <span>Email</span>
            </div>
            <div className="flex items-center text-xs md:text-sm">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#6f61e8] mr-1 md:mr-2"></div>
              <span>Social</span>
            </div>
            <div className="flex items-center text-xs md:text-sm">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#9f97e8] mr-1 md:mr-2"></div>
              <span>SSO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
