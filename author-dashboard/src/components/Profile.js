// src/components/Profile.js
import React from "react";

export default function Profile() {
  return (
    <div
      className="card shadow-lg p-5"
      style={{
        maxWidth: "600px",
        margin: "auto",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #CDC5FC, #E0B0FF)",
      }}
    >
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
  );
}
