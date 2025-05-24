import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NominatePage from "./pages/Nominate";
import VotePage from "./pages/Vote";

export default function App() {
  return (
    <Router>
      <nav style={{
        background: "#3F51B5",
        color: "#fff",
        padding: "1rem",
        display: "flex",
        gap: "2rem",
        fontFamily: "'Lora', serif",
        fontWeight: "bold"
      }}>
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/nominate">Nominate</Link>
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/vote">Vote</Link>
      </nav>
      <Routes>
        <Route path="/nominate" element={<NominatePage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/" element={
          <div style={{ margin: "2rem auto", textAlign: "center" }}>
            <h1 style={{ fontFamily: "'Lora', serif" }}>Welcome to Bloggies Awards</h1>
            <p style={{ fontFamily: "'Open Sans', sans-serif" }}>Choose a page: Nominate or Vote.</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}