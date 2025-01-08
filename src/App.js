import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import HeroSection from "./components/HeroSection";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-5 py-3">
          {/* Logo */}
          <Link to="/Herosection" className="navbar-brand logo mx-auto d-block">
            COD
          </Link>

          {/* Toggle Button (on mobile/tablet) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
            <div className="nav-links">
              <Link to="/Herosection" className="nav-link">Why us</Link>
              <Link to="/how-it-works" className="nav-link">How it Works</Link>
              <Link to="/pricing" className="nav-link">Pricing</Link>
              <Link to="/faqs" className="nav-link">FAQs</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
            </div>
          </div>

          {/* Buy Button */}
          <button className="btn btn-primary buy-btn d-none d-lg-block">BUY A SIGNATURE BUNDLE</button>
        </nav>

        <Routes>
          <Route path="/Herosection" element={<HeroSection />} />
          <Route path="/how-it-works" element={<h1 className="page-heading">How it Works</h1>} />
          <Route path="/pricing" element={<h1 className="page-heading">Pricing</h1>} />
          <Route path="/faqs" element={<h1 className="page-heading">FAQs</h1>} />
          <Route path="/blog" element={<h1 className="page-heading">Blog</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
