

import React from "react";
import "./ClosureBanner.css";

export default function ClosureBanner() {
  return (
    <aside
      className="closureBanner"
      role="region"
      aria-label="Practice closure notice"
    >
      <div className="closureBanner__inner">
        <div className="closureBanner__topRow">
          <div className="closureBanner__badge" aria-hidden="true">
            <span className="closureBanner__dot" />
            Office closed
          </div>

          {/* Optional: quick action on mobile only */}
          <a className="closureBanner__cta" href="tel:911" aria-label="Call 911">
            Call 911
          </a>
        </div>

        <div className="closureBanner__content">
        <p className="closureBanner__title">
  <span className="closureBanner__icon" aria-hidden="true">❄️</span>
  Happiest of Holidays.
</p>


          <p className="closureBanner__message">
            The practice of <strong>Summer Sheridan-Zabre, LCSW</strong> will be
            closed until <strong>Saturday, January 3, 2026</strong>. For any
            emergencies, please call <strong>911</strong>. We will reach out to
            you upon return to the office in the New Year.
            <span className="closureBanner__signoff"> Rest well.</span>
          </p>
        </div>
      </div>
    </aside>
  );
}
