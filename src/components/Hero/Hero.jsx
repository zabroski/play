
import React from "react";
import "./Hero.css";
import homeLogo from "../../assets/home-logo.png";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-heading-block">
          <p className="hero-kicker">Welcome</p>

          <h1 id="hero-heading" className="section-title">
            Central Park Play Therapy
            <span className="hero-subtitle">For children &amp; families</span>
          </h1>

          <div className="hero-heading-actions">
            <p className="hero-meta text-muted">
              By appointment only · Upper West Side, New York City
            </p>
            <a className="btn hero-contact-button" href="#contact">Contact Us</a>
          </div>
        </div>

        <div className="hero-grid">
          <figure className="hero-card card">
            <div className="hero-logo-frame">
              <img src={homeLogo} alt="Central Park Play Therapy logo: a smiling child holding a pink heart" />
            </div>
          </figure>

          <div className="hero-copy">
            <h2 className="hero-subheading">About Central Park Play Therapy</h2>

            <p className="text-muted">
              At <strong>Central Park Play Therapy</strong>, we believe every child deserves a place where they feel safe, understood, and free to grow. Our mission is to create a thoughtfully designed therapeutic environment where meaningful relationships, curiosity, and play become the foundation for skill building and lifelong emotional well-being.
            </p>

            <p className="text-muted">
              We provide a safe, compassionate space encompassing your family’s culture and values within the therapeutic process. We provide exceptional, relationship-centered psychotherapy for children, adolescents, and families, recognizing that every child has a unique story, every family has inherent strengths, and every challenge presents an opportunity for growth.
            </p>

            <p className="text-muted">
              Through evidence-based practice, developmentally-informed care, and the transformative power of play, we help children build emotional resilience, strengthen self-confidence, deepen relationships, and develop the skills needed to navigate life's complexities.
            </p>

            <p className="text-muted">
              We are committed to partnering with families and others in a child’s community through every stage of their journey—offering compassionate guidance, clinical excellence, and a personalized approach that honors each child's individuality. Our goal is not simply to reduce symptoms, but to nurture confident, connected, and emotionally healthy children who can flourish at home, in school, and throughout their lives.
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

            {/* <div className="hero-cta-row">
              <a className="btn" href="#service">
                Explore services
              </a>

              <a
                className="btn btn-ghost"
                href="#contact"
              >
                Book a consultation
              </a>
            </div> */}

            {/* ⭐ Star Rating Section */}
            {/* <StarRating /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
