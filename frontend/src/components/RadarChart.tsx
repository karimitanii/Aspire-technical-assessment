import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function RadarChart({
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
        label: "Radar Dataset",
        data: values,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return <Radar data={data} />;
}

export default RadarChart;