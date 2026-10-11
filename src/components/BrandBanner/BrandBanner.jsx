import React from "react";
import connectedKidLogo from "../../assets/connected-kid-logo.png";
import "./BrandBanner.css";

export default function BrandBanner() {
  return (
    <section className="brand-banner" aria-labelledby="partner-heading">
      <div className="container brand-banner-inner">
        <div className="brand-banner-logo-frame">
          <img
            src={connectedKidLogo}
            alt="The Connected Kid logo"
            className="brand-banner-logo"
            loading="lazy"
          />
        </div>
        <h2 id="partner-heading" className="brand-banner-heading">
          Meet our office partners
          <span>The Connected Kid</span>
        </h2>
        <p className="brand-banner-description">
          Our offices are also home to The Connected Kid, a fellow child therapy practice.
          Get to know their team and explore the support they offer children and families.
        </p>
        <a
          className="brand-banner-link"
          href="https://www.theconnectedkid.com/team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet their team
        </a>
      </div>
    </section>
  );
}
