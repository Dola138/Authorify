// src/components/MyArticles.js
import React from "react";
import { Table, Badge, Pagination } from "react-bootstrap";

export default function MyArticles({ articles, currentPage, setCurrentPage }) {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const paginatedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
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
          <Pagination.Prev
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item
              key={i}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          />
          <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
        </Pagination>
      </div>
    </div>
  );
}
