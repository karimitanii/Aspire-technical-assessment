import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarAreaChart({
  labels,
  values,
}: {
  labels: string[];
  values: number[];
}) {
  const data = {
    labels,
    datasets: [
      {
        label: "Polar Dataset",
        data: values,
        backgroundColor: [
          "#007bff",
          "#28a745",
          "#ffc107",
          "#dc3545",
          "#6610f2",
        ],
      },
    ],
  };

  return <PolarArea data={data} />;
}

export default PolarAreaChart;