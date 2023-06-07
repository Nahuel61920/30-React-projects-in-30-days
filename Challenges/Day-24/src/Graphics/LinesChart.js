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

const myData = {
  labels: months,
  datasets: [
    {
      label: "commits",
      data: commits,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(0, 0, 205)",
      backgroundColor: "rgba(0, 0, 205, 0.2)",
      pointRadius: 5,
      pointBorderColor: "rgba(0, 0, 205)",
      pointBackgroundColor: "rgba(0, 0, 205)",
    },
    {
      label: "pull requests",
      data: [20, 25, 60, 65, 45, 10, 5, 15, 60, 7, 30, 25],
    },
  ],
};

const myOptions = {
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: "rgb(0, 0, 205)" },
    },
  },
};

export default function LinesChart() {
  return <Line data={myData} options={myOptions} />;
}
