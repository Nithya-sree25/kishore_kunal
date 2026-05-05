import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navRef = useRef();

  // 👉 Close menu & dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      
      {/* Logo */}
      <h2 className="logo">Dr.KISHORE KUNAL</h2>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>

        {/* Dropdown */}
        <li className="dropdown">
          <span
            className="nav-item"
            onClick={() => setOpen(!open)}
          >
            Journal ▾
          </span>

          {open && (
            <ul className="dropdown-menu">
              
              <li>
                <Link
                  to="/scopus"
                  onClick={() => {
                    setMenuOpen(false);
                    setOpen(false);
                  }}
                >
                  Scopus
                </Link>
              </li>

              <li>
                <Link
                  to="/web"
                  onClick={() => {
                    setMenuOpen(false);
                    setOpen(false);
                  }}
                >
                  Web of Science
                </Link>
              </li>

              <li>
                <Link
                  to="/ugc"
                  onClick={() => {
                    setMenuOpen(false);
                    setOpen(false);
                  }}
                >
                  UGC Journal
                </Link>
              </li>

              <li>
                <Link
                  to="/patent"
                  onClick={() => {
                    setMenuOpen(false);
                    setOpen(false);
                  }}
                >
                  Patent Records
                </Link>
              </li>

            </ul>
          )}
        </li>

        <li>
          <Link to="/conference" onClick={() => setMenuOpen(false)}>
            Conference
          </Link>
        </li>

        <li>
          <Link to="/book" onClick={() => setMenuOpen(false)}>
            Book
          </Link>
        </li>

        <li>
          <Link to="/membership" onClick={() => setMenuOpen(false)}>
            Membership
          </Link>
        </li>

        <li>
          <Link to="/awards" onClick={() => setMenuOpen(false)}>
            Awards
          </Link>
        </li>

        <li>
          <Link to="/events" onClick={() => setMenuOpen(false)}>
            Events
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;