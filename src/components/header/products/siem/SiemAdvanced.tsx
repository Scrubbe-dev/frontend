"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// // Dummy data, replace with real data via props or context in the future
// const ticketStatusData = {
//   labels: [
//     "192.168.1.100",
//     "10.0.0.45",
//     "203.0.113.12",
//     "198.51.100.8",
//     "172.16.0.55",
//   ],
//   datasets: [
//     {
//       label: "Number of Tickets",
//       data: [35, 28, 22, 33, 40],
//       backgroundColor: "#2664EA",
//       borderRadius: 6,
//       maxBarThickness: 55,
//     },
//   ],
// };

// const chartOptions = {
//   responsive: true,
//   plugins: {
//     legend: { display: false },
//     tooltip: {
//       callbacks: {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         title: (items: any) => `IP Address : ${items[0].label}`,
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         label: (item: any) => ` : ${item.parsed.y}`,
//       },
//       backgroundColor: "#18181b",
//       titleColor: "#fff",
//       bodyColor: "#fff",
//       borderColor: "#14D8C8",
//       borderWidth: 1,
//       padding: 12,
//       cornerRadius: 8,
//       displayColors: false,
//     },
//   },
//   scales: {
//     x: {
//       grid: {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         color: "#e5e7eb",
//       },
//       ticks: {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         color: "black",
//         font: { size: 15 },
//       },
//     },
//     y: {
//       beginAtZero: true,
//       grid: {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         color: "#e5e7eb",
//       },
//       ticks: {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         color: "black",
//         font: { size: 15 },
//         stepSize: 50,
//       },
//       title: {
//         display: true,
//         text: "Number of Tickets",
//         color: "black",
//         font: { size: 15 },
//         padding: { bottom: 10 },
//       },
//     },
//   },
//   layout: {
//     padding: { top: 20, right: 20, left: 10, bottom: 10 },
//   },
// };

const SiemAdvanced = () => {
  return (
    <div className="w-full h-full  max-w-[1440px] p-10 ">
      <aside
        className="
     rounded-2xl
    bg-[url('/siem-ellipse-part1361.svg'),url('/siem-ellipse-full1362.svg')] 
    bg-no-repeat 
    bg-[#6A5ACD]
    bg-[position:top_left,bottom_center] 
    bg-[length:327px_266px,400px_400px]
    h-auto lg:h-[625px] w-full p-10   
    flex flex-col lg:grid lg:grid-cols-2 items-center justify-items-center gap-4 lg:gap-8
    "
      >
        {/* Text content */}
        <article className="w-[340px] sm:w-[500px] lg:w-[445px] xl:w-[560px] h-[340px] sm:h-[500px] lg:h-[445px] xl:h-[560px] flex flex-col justify-center p-4 space-y-8">
          <div className="text-[20px] text-white sm:text-[30px] lg:text-[34px] xl:text-[48px] font-medium leading-tight">
            Advanced SIEM Platform for Real-Time Threat Detection & Response
          </div>
          <div className="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] text-white leading-relaxed">
            Protect your organization with enterprise-grade security monitoring,
            log analysis, and incident response capabilities in one centralized
            solution
          </div>
          <div className="flex gap-4 text-[14px] sm:text-[16px]">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-blue-500 text-blue-500 bg-white font-medium py-3 px-6 rounded-md transition-colors">
              Learn More
            </button>
          </div>
        </article>

        {/* Image container */}
        <article className="w-full h-full relative bg-[#1F40AE] p-8 rounded-xl">
          <div className="w-full h-full bg-white rounded-2xl">
            <img
              src="/siem.png"
              alt="Siem Advanced"
              className="w-full h-full"
            />
          </div>
        </article>
      </aside>
    </div>
  );
};

export default SiemAdvanced;
