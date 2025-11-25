


// // src/components/Hero/Hero.jsx
import React from "react";
import "./Hero.css";
import SumImg from "../../assets/sum.jpg";

export default function Hero() {
  return (
    <div className="container hero">
      <div className="hero-grid">
        <div className="hero-card card">
          <img src={SumImg} alt="Summer Sheridan Zabre" />
        </div>

        <div className="hero-copy">
          <p className="heading">Welcome</p>
          <h1 className="section-title">Play Space — Therapy for children & families</h1>

          <p className="text-muted">
            My name is Summer Sheridan-Zabre, a licensed clinical social worker. My approach to psychotherapy is to focus on relationship building and fun. I started my career after graduating from Syracuse University with a major in Social Work and a minor in Psychology. Shortly after the terrorist attacks on the World Trade Center, I relocated to New York City and began working for the American Red Cross September 11 Recovery Program. I then went on to attain my masters in social work from Fordham University with a specialization in children and families. It was my experience in graduate school interning in a therapeutic nursery that I found my passion for social work in educational settings. I spent over 10 years working as a school social worker. I provide a warm and supportive environment where I help children and families address issues that include: managing emotions that impede growth and development, developing social skills, building a positive sense of self, and increasing the capacity for strong communication skills. My approach is rooted in relationship building. I focus on understanding what clients expected outcomes are and know that every family is unique. Through the therapeutic relationship I aim to empower my clients and families to learn and grow together.
          </p>

          <p className="text-muted" style={{marginTop:12}}>
            I trained at Syracuse University and Fordham University, and bring decades of experience
            in school-based social work, play therapy, and clinical supervision.
          </p>

          <div style={{marginTop:18}}>
            <a className="btn" href="#service">Explore Services</a>
            <a className="btn" style={{marginLeft:12, background:'#fff', color:'var(--primary)', border:'1px solid rgba(56,0,76,0.08)'}} href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  );
}
