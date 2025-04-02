import React, { useState } from "react";
import axios from "axios";

function ChatBot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "Admin", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/ai/chat", {
        message: input,
      });

      const botMessage = { sender: "Bookie-AI", text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "Bookie-AI", text: "I'm sorry, I couldn't process that." },
      ]);
    }
  };

  return (
    <div
      className="shadow-lg p-4 rounded"
      style={{
        backgroundColor: "#000",
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "20px",
        color: "white",
      }}
    >
      <h5 className="text-center mb-2">💬 Bookie-AI</h5>
      <div
        className="p-2 mb-2 rounded overflow-auto"
        style={{
          height: "260px",
          backgroundColor: "#111",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded ${
              msg.sender === "User"
                ? "bg-primary text-white"
                : "bg-dark text-info"
            }`}
            style={{
              alignSelf: msg.sender === "User" ? "flex-end" : "flex-start",
            }}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot;