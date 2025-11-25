// src/components/Navbar/Navbar.jsx
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <div className="brand">
          <a href="#home" className="brand-title">Summer Sheridan-Zabre</a>
          <div className="brand-sub">LCSW • Play Therapy</div>
        </div>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main navigation">
          <ul>
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#service" onClick={() => setOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="hamburger" />
        </button>
      </div>
    </header>
  );
}