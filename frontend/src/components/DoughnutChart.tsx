
import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ labels, values }: { labels: string[]; values: number[] }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Doughnut Dataset",
        data: values,
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6610f2"],
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default DoughnutChart;