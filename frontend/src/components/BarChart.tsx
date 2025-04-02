import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({
  labels,
  values,
}: {
  labels: string[];
  values: number[];
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Bar Dataset",
        data: values,
        backgroundColor: "#0dcaf0",
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;