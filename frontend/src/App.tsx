import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/login"; // ✅ Import Login Page
import Dashboard from "./pages/LibraryDashboard";
import LibraryDashboard from "./pages/LibraryDashboard";
import Chartsbook from "./pages/Chartsbook";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/LibraryDashboard" element={<LibraryDashboard />} />{" "}
        <Route path="/Chartsbook" element={<Chartsbook />} />{" "}

        
      </Routes>
    </Router>
  );
}

export default App;


