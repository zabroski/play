
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
    <>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="topnav">
        <div className="container topnav-inner">
          <div className="brand">
            <a href="#home" className="brand-title">
              Summer Sheridan-Zabre
            </a>
            <div className="brand-sub">LCSW • Play Therapy</div>
          </div>

          <nav
            className={`nav ${open ? "open" : ""}`}
            aria-label="Main navigation"
          >
            <ul>
              <li>
                <a href="#home" onClick={() => setOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#service" onClick={() => setOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact
                </a>
              </li>
              {/* Mobile contact info inside menu */}
              <li className="nav-inline-contact mobile-only">
                <span>Upper West Side, NYC</span>
                <a href="mailto:summersheridanzabreLCSW@gmail.com">
                  Email Summer
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-right">
            {/* Desktop quick contact */}
            <div className="nav-inline-contact desktop-only">
              <span className="nav-location">Upper West Side, NYC</span>
              {/* <a
                href="mailto:summersheridanzabreLCSW@gmail.com"
                className="nav-contact-link"
              >
                Email Summer
              </a> */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=summersheridanzabreLCSW@gmail.com"
               target="_blank"
               rel="noopener noreferrer">
                  Email Summer
              </a>

            </div>

            <button
              className="nav-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              <span className="hamburger" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
