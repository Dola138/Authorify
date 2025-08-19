// src/components/Sidebar.js
import React from "react";

export default function Sidebar({ sidebarOpen, setSidebarOpen, activePage, setActivePage }) {
  return (
    <div
      className="d-flex flex-column text-white"
      style={{
        width: sidebarOpen ? "220px" : "60px",
        background: "#CFBADE",
        transition: "0.3s",
      }}
    >
      <button
        className="btn my-2 mx-2 text-start"
        style={{ backgroundColor: "#CDC5FC", color: "#343a40" }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "⬅ Collapse" : "➡"}
      </button>
      <nav className="flex-grow-1">
        <button
          onClick={() => setActivePage("profile")}
          className="btn w-100 text-start my-1"
          style={{
            backgroundColor: activePage === "profile" ? "#CDC5FC" : "#CFBADE",
            color: "#343a40",
          }}
        >
          Profile
        </button>
        <button
          onClick={() => setActivePage("articles")}
          className="btn w-100 text-start my-1"
          style={{
            backgroundColor: activePage === "articles" ? "#CDC5FC" : "#CFBADE",
            color: "#343a40",
          }}
        >
          My Articles
        </button>
      </nav>
    </div>
  );
}
