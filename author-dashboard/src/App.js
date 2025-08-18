// src/App.js
import React, { useState } from "react";
import { Badge, Table, Pagination } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const itemsPerPage = 5;
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const paginatedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Segoe UI, sans-serif" }}>
      {/* Sidebar */}
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
            className={`btn w-100 text-start my-1`}
            style={{
              backgroundColor: activePage === "profile" ? "#CDC5FC" : "#CFBADE",
              color: "#343a40"
            }}
          >
            Profile
          </button>
          <button
            onClick={() => setActivePage("articles")}
            className={`btn w-100 text-start my-1`}
            style={{
              backgroundColor: activePage === "articles" ? "#CDC5FC" : "#CFBADE",
              color: "#343a40"
            }}
          >
            My Articles
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ backgroundColor: "#E0B0FF" }}>
        {activePage === "profile" && (
          <div className="card shadow-lg p-5" style={{
            maxWidth: "600px",
            margin: "auto",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #CDC5FC, #E0B0FF)"
          }}>
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src="https://i.pinimg.com/736x/cd/55/2f/cd552fc9b63dd21d344aeab11e9bf95d.jpg"
                alt="Profile"
                className="rounded-circle border border-3 shadow"
                style={{ width: "140px", height: "140px", objectFit: "cover" }}
              />
              <h2 className="mt-3">Ismat Jahan Dola</h2>
              <p className="text-muted mb-1">dola.cse.20230104138@aust.edu</p>
              <p className="text-secondary">Joined on: 15th June 2025</p>
            </div>
          </div>
        )}

        {activePage === "articles" && (
          <div className="card p-4 shadow-sm" style={{ borderRadius: "15px" }}>
            <h3 className="mb-3">My Articles</h3>
            <Table striped hover responsive>
              <thead style={{ backgroundColor: "#CDC5FC" }}>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {paginatedArticles.map((article) => (
                  <tr key={article.id}>
                    <td>{article.id}</td>
                    <td>{article.title}</td>
                    <td>
                      <Badge
                        pill
                        bg={
                          article.status === "Published"
                            ? "success"
                            : article.status === "Draft"
                            ? "warning"
                            : "secondary"
                        }
                      >
                        {article.status}
                      </Badge>
                    </td>
                    <td>{article.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="d-flex justify-content-center mt-3">
              <Pagination>
                <Pagination.First onClick={() => setCurrentPage(1)} />
                <Pagination.Prev onClick={() => setCurrentPage(p => Math.max(1, p -1))} />
                {Array.from({ length: totalPages }, (_, i) => (
                  <Pagination.Item
                    key={i}
                    active={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setCurrentPage(p => Math.min(totalPages, p +1))} />
                <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
              </Pagination>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
