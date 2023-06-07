import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const data = {
  labels: ["JavaScript", "TypeScript", "Python", "CSS", "PHP"],
  datasets: [
    {
      label: "Most used languages",
      data: [45, 25, 12, 10, 8],
      backgroundColor: [
        "rgba(255, 255, 0, 0.5)",
        "rgba(102, 152, 255, 0.5)",
        "rgba(255, 0, 0, 0.5)",
        "rgba(88, 55, 89, 0.5)",
        "rgba(0, 0, 255, 0.5)",
      ],
      borderColor: [
        "rgba(255, 255, 0, 1)",
        "rgba(102, 152, 255, 1)",
        "rgba(255, 0, 0, 1)",
        "rgba(88, 55, 89, 1)",
        "rgba(0, 0, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Pies() {
  return <Pie data={data} options={options} />;
}
