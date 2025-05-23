import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
  labels,
  values,
}: {
  labels: string[];
  values: number[];
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Pie Dataset",
        data: values,
        backgroundColor: [
          "#007bff",
          "#6610f2",
          "#6f42c1",
          "#20c997",
          "#fd7e14",
        ],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;