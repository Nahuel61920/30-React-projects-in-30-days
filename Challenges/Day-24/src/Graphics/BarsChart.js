import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
let commits = [100, 56, 82, 140, 280, 92, 52, 22, 225, 160, 112, 40];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Agost",
  "September",
  "October",
  "November",
  "December",
];

const myOptions = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      max: 300,
    },
    x: {
      ticks: { color: "rgb(8, 160, 75)" },
    },
  },
};

const myData = {
  labels: months,
  datasets: [
    {
      label: "commits",
      data: commits,
      backgroundColor: "rgba(8, 160, 75, 0.5)",
    },
  ],
};

export default function Bars() {
  return <Bar data={myData} options={myOptions} />;
}
