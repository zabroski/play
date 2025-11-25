import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* <div className="container footer-inner">
        <div>
          <div className="heading">Office Hours</div>
          <div className="text-muted">By appointment only</div>
        </div>

        <div>
          <div className="heading">Location</div>
          <div style={{ fontWeight: 600 }}>295 Central Park West</div>
          <div className="text-muted">New York, NY 10024</div>
        </div>

        <div>
          <div className="heading">Email</div>
          <a
            href="mailto:summersheridanzabreLCSW@gmail.com"
            className="text-muted footer-email"
          >
            summersheridanzabreLCSW@gmail.com
          </a>
        </div>
      </div> */}

      <div
        style={{
          background: "#fbf9ff",
          padding: "14px 0",
          borderTop: "1px solid rgba(15,17,36,0.03)",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
            fontSize: ".9rem",
            color: "var(--muted)",
          }}
        >
          © 2023 Summer Sheridan-Zabre LCSW — All rights reserved
        </div>
      </div>
    </footer>
  );
}
