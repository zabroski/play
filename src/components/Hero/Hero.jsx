
import React from "react";
import "./Hero.css";
import SumImg from "../../assets/sum.jpg";
import StarRating from "../StarRating/StartRating";
// import StarRating from "../StarRating/StarRating";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-grid">
          <div className="hero-card card">
            <img src={SumImg} alt="Summer Sheridan-Zabre, LCSW" />
          </div>

          <div className="hero-copy">
            <p className="hero-kicker">Welcome</p>

            <h1 id="hero-heading" className="section-title">
              Play Space — Therapy for children &amp; families
            </h1>

            <p className="hero-meta text-muted">
              By appointment only · Upper West Side, New York City ·{" "}
              <a href="#contact">Contact Summer</a>
            </p>

            <h2 className="hero-subheading">About Summer</h2>

            <p className="text-muted">
              My name is <strong>Summer Sheridan-Zabre</strong>, a licensed
              clinical social worker. My approach to psychotherapy is to focus
              on relationship building and play. I started my career after
              graduating from Syracuse University with a major in Social Work
              and a minor in Psychology. Shortly after the terrorist attacks on
              the World Trade Center, I relocated to New York City and began
              working for the American Red Cross September 11 Recovery Program.
            </p>

            <p className="text-muted">
              I went on to complete my master’s degree in social work at Fordham
              University with a specialization in children and families. While
              interning in a therapeutic nursery, I discovered my passion for
              social work in educational settings and spent over 10 years
              working as a school social worker.
            </p>

            <p className="text-muted">
              I provide a warm, supportive environment where I help children and
              families address challenges such as managing emotions that impede
              growth, developing social skills, building a positive sense of
              self, and strengthening communication. My approach is rooted in
              relationship building and recognizing that every family is unique.
            </p>

            <div className="hero-cta-row">
              <a className="btn" href="#service">
                Explore services
              </a>

              <a
                className="btn btn-ghost"
                href="#contact"
              >
                Book a consultation
              </a>
            </div>

            {/* ⭐ Star Rating Section */}
            <StarRating />
          </div>
        </div>
      </div>
    </section>
  );
}
