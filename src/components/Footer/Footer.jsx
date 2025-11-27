import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container footer-inner">
        <div>
          <div className="heading">Office hours</div>
          <div className="text-muted">By appointment only</div>
        </div>

        <div>
          <div className="heading">Location</div>
          {/* <div style={{ fontWeight: 600 }}>
            215 West 88th Street, Suite 1C
          </div> */}

          <a
            href="https://www.google.com/maps?q=215+West+88th+Street+Suite+1C,+New+York,+NY+10024"
            target="_blank"
            rel="noopener noreferrer"
            className="address-link"
            >
            215 West 88th Street, Suite 1C
          </a>

          <div className="text-muted">New York, NY 10024</div>
          </div>

          <div>
          <div className="heading">Email</div>
          {/* <a
            href="mailto:summersheridanzabreLCSW@gmail.com"
            className="text-muted footer-email"
          >
            summersheridanzabreLCSW@gmail.com
          </a> */}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=summersheridanzabreLCSW@gmail.com&su=Therapy%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted">
              summersheridanzabreLCSW@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          ©2023 Summer Sheridan-Zabre LCSW — All rights
          reserved
        </div>
      </div>
    </footer>
  );
}
