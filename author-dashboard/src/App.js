// src/App.js
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import MyArticles from "./components/MyArticles";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("profile");
  const [currentPage, setCurrentPage] = useState(1);

  const articles = [
    { id: 1, title: "10 Tips for Healthy Living", status: "Published", date: "2025-07-05" },
    { id: 2, title: "How to Decorate Your Room on a Budget", status: "Draft", date: "2025-07-12" },
    { id: 3, title: "Top 5 Travel Destinations This Summer", status: "Pending", date: "2025-07-18" },
    { id: 4, title: "Meditation for Beginners", status: "Published", date: "2025-07-22" },
    { id: 5, title: "DIY Crafts for Kids", status: "Draft", date: "2025-07-28" },
    { id: 6, title: "Quick & Easy Breakfast Ideas", status: "Published", date: "2025-08-01" },
    { id: 7, title: "Sustainable Fashion Tips", status: "Pending", date: "2025-08-03" },
    { id: 8, title: "Home Gardening Basics", status: "Published", date: "2025-08-05" },
    { id: 9, title: "Fitness Routines You Can Do at Home", status: "Draft", date: "2025-08-07" },
    { id: 10, title: "Photography Tips for Beginners", status: "Published", date: "2025-08-09" },
    { id: 11, title: "Creative Writing Prompts", status: "Pending", date: "2025-08-10" },
    { id: 12, title: "Budget-Friendly Travel Hacks", status: "Draft", date: "2025-08-11" },
    { id: 13, title: "How to Stay Motivated Daily", status: "Published", date: "2025-08-12" },
    { id: 14, title: "Healthy Smoothie Recipes", status: "Published", date: "2025-08-14" },
    { id: 15, title: "Decluttering Your Home Step by Step", status: "Pending", date: "2025-08-15" }
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Segoe UI, sans-serif" }}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex-grow-1 p-4" style={{ backgroundColor: "#9c8ccdff" }}>
        {activePage === "profile" && <Profile />}
        {activePage === "articles" && (
          <MyArticles
            articles={articles}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
