import React, { useState } from "react";
import {
  FaComments,
  FaChartPie,
  FaChartBar,
  FaChartLine,
} from "react-icons/fa";
import ChatBot from "../components/Chatbot"; // Make sure this is correct
import "../styles/BusinessPage.css";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import AreaChart from "../components/AreaChart";
import DoughnutChart from "../components/DoughnutChart";
import RadarChart from "../components/RadarChart";
import PolarAreaChart from "../components/PolarAreaChart";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function BusinessPage() {
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState<number | "">("");

  const handleExport = async () => {
    const chartElement = document.getElementById("chart-box");

    if (!chartElement) return;

    const canvas = await html2canvas(chartElement);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("chart_export.pdf");
  };

  const handleDeleteEntry = (index: number) => {
    const newLabels = [...labels];
    const newValues = [...values];
    newLabels.splice(index, 1);
    newValues.splice(index, 1);
    setLabels(newLabels);
    setValues(newValues);
  };

  const handleAddData = () => {
    if (newLabel.trim() === "" || newValue === "" || isNaN(Number(newValue)))
      return;

    setLabels([...labels, newLabel]);
    setValues([...values, Number(newValue)]);

    // Reset inputs
    setNewLabel("");
    setNewValue("");
  };

  const [showChat, setShowChat] = useState(false);
  const username = "Karim";

  const [labels, setLabels] = useState<string[]>([
    "Apples",
    "Bananas",
    "Cherries",
  ]);
  const [values, setValues] = useState<number[]>([20, 15, 30]);
  const [chartType, setChartType] = useState<string>("pie");

  const toggleChat = () => setShowChat(!showChat);

  return (
    <div
      className="d-flex bg-light"
      style={{ minHeight: "100vh", height: "auto" }}
    >
      {/* Left Sidebar */}
      <div
        className="bg-dark text-white p-3 d-flex flex-column"
        style={{ width: "250px", flexShrink: 0 }}
      >
        <h5 className="text-center mb-4"> {username}</h5>

        {/* Input Data Section */}
        <div className="mb-4">
          <h6>Insert Data</h6>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Label"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Value"
            value={newValue}
            onChange={(e) =>
              setNewValue(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
          <button className="btn btn-primary w-100" onClick={handleAddData}>
            Add
          </button>{" "}
        </div>

        {/* Chart Type Buttons */}
        <div className="d-flex flex-column gap-2">
          <button
            onClick={() => setChartType("pie")}
            className="btn btn-outline-light d-flex align-items-center gap-2"
          >
            <FaChartPie /> Pie Chart
          </button>
          <button
            onClick={() => setChartType("bar")}
            className="btn btn-outline-light d-flex align-items-center gap-2"
          >
            <FaChartBar /> Bar Chart
          </button>
          <button
            onClick={() => setChartType("line")}
            className="btn btn-outline-light d-flex align-items-center gap-2"
          >
            <FaChartLine /> Line Chart
          </button>
          <button
            onClick={() => setChartType("area")}
            className="btn btn-outline-light d-flex align-items-center gap-2"
          >
            📈 Area Chart
          </button>
          <button
            onClick={() => setChartType("doughnut")}
            className="btn btn-outline-light d-flex align-items-center gap-2"
          >
            🍩 Doughnut Chart
          </button>
          <button
            onClick={() => setChartType("radar")}
            className="btn btn-outline-light d-flex align-items-center gap-2"
          >
            🧭 Radar Chart
          </button>
          <button
            onClick={() => setChartType("polar")}
            className="btn btn-outline-light d-flex align-items-center gap-2"
          >
            📡 Polar Chart
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-grow-1 p-4 position-relative">
        <h3 className="mb-4">📊 Business Data Overview</h3>

        {/* Chart Rendering with Export + Entries */}
        <div
          id="chart-box"
          className="bg-white rounded p-4 shadow position-relative"
          style={{ width: "100%", maxWidth: "800px" }}
        >
          {/* Export Button */}
          <button
            className="btn btn-sm btn-outline-dark position-absolute"
            style={{ top: "15px", right: "15px", zIndex: 10 }}
            onClick={handleExport}
          >
            📁 Export
          </button>

          {/* Chart Display */}
          <div style={{ height: "400px" }}>
            {chartType === "pie" && (
              <PieChart labels={labels} values={values} />
            )}
            {chartType === "bar" && (
              <BarChart labels={labels} values={values} />
            )}
            {chartType === "line" && (
              <LineChart labels={labels} values={values} />
            )}
            {chartType === "area" && (
              <AreaChart labels={labels} values={values} />
            )}
            {chartType === "doughnut" && (
              <DoughnutChart labels={labels} values={values} />
            )}
            {chartType === "radar" && (
              <RadarChart labels={labels} values={values} />
            )}
            {chartType === "polar" && (
              <PolarAreaChart labels={labels} values={values} />
            )}
          </div>

          {/* Entry List + Delete */}
          <div className="mt-4">
            <h6>Entries:</h6>
            <ul className="list-group">
              {labels.map((label, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {label} — {values[idx]}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteEntry(idx)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Floating Chat Icon */}
        <div
          className="position-absolute"
          style={{ bottom: "20px", right: "20px", zIndex: 999 }}
        >
          <button
            className="btn btn-primary rounded-circle p-3"
            onClick={toggleChat}
          >
            <FaComments size={24} />
          </button>
        </div>

        {/* ChatBot Box */}
        {showChat && (
          <div
            className="position-absolute"
            style={{ bottom: "80px", right: "20px", width: "300px" }}
          >
            <ChatBot />
          </div>
        )}
      </div>
    </div>
  );
}

export default BusinessPage;