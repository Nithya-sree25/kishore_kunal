import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // 👉 close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">

      <h2 className="logo">Dr.VAIRAVEL MADESHWARAN</h2>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu */}
      <ul
        ref={menuRef}
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/journal" onClick={() => setMenuOpen(false)}>Journal</Link></li>
        <li><Link to="/conference" onClick={() => setMenuOpen(false)}>Conference</Link></li>
        <li><Link to="/book" onClick={() => setMenuOpen(false)}>Book</Link></li>
        <li><Link to="/membership" onClick={() => setMenuOpen(false)}>Membership</Link></li>
        <li><Link to="/awards" onClick={() => setMenuOpen(false)}>Awards</Link></li>
        <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;