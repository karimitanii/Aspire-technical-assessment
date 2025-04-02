import React, { useState } from "react";
import { FaComments } from "react-icons/fa";
import ChatBot from "../components/Chatbot"; // Ensure this is implemented
//import "../styles/LibraryDashboard.css"; // Optional CSS styling
import AddBook from "../components/Addbook";
import EditBook from "../components/EditBook";
import DeleteBook from "../components/DeleteBook";
import CheckInBook from "../components/CheckInBook";
import SearchBooks from "../components/SearchBooks";





function LibraryDashboard() {
  const [showChat, setShowChat] = useState(false);
  const username = "Admin";

  const toggleChat = () => setShowChat(!showChat);
  const [activeSection, setActiveSection] = useState("default");


  return (
    <div className="d-flex bg-light" style={{ minHeight: "100vh", height: "auto" }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3 d-flex flex-column"
        style={{ width: "250px", flexShrink: 0 }}
      >
        <h5 className="text-center mb-4">👤 {username}</h5>

        {/* Library Actions */}
        <div className="d-flex flex-column gap-2">
        <button className="btn btn-outline-light" onClick={() => setActiveSection("add")}>
  📚 Add Book
        </button>
        <button className="btn btn-outline-light" onClick={() => setActiveSection("edit")}>
        ✏️ Edit Book
        </button>
        <button className="btn btn-outline-light" onClick={() => setActiveSection("delete")}>
        🗑️ Delete Book
        </button>
        <button className="btn btn-outline-light" onClick={() => setActiveSection("checkin")}>
        ✅ Check In
        </button>
        <button className="btn btn-outline-light" onClick={() => setActiveSection("checkout")}>
        📤 Check Out
        </button>
        <button className="btn btn-outline-light" onClick={() => setActiveSection("search")}>
        🔍 Search Books
            </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-grow-1 p-4 position-relative">
        <h3 className="mb-4">📖 Library Management Dashboard</h3>

        {/* Dynamic Content */}
        <div className="bg-white p-4 rounded shadow" style={{ minHeight: "400px" }}>
            {activeSection === "add" && <AddBook />}
            {activeSection === "edit" && <EditBook />}
            {activeSection === "delete" && <DeleteBook />}
            {activeSection === "checkin" && <CheckInBook />}
            {activeSection === "search" && <SearchBooks />}




            {activeSection === "default" && (
            <p className="text-muted">Select an action from the sidebar to begin managing the library.</p>
             )}
        </div>

        {/* ChatBot Toggle */}
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

        {/* ChatBot */}
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

export default LibraryDashboard;
