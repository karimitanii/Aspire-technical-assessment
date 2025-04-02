import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChart = ({
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
        label: "Line Dataset",
        data: values,
        fill: false,
        borderColor: "#198754",
        tension: 0.3,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;