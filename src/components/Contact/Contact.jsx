import React, { useRef, useState } from "react";
import "./Contact.css";
import Drawing from "../../assets/drawing.png";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_do2f6hi";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_nmkj4mq";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "WK_3SacTDGCKivJ8I";

export default function Contact() {
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsSent(false);

    if (!formRef.current) return;

    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);
          formRef.current.reset();
        },
        () => {
          setError("Failed to send message. Please try again later.");
          setIsSending(false);
        }
      );
  };

  const handleReset = () => {
    if (formRef.current) formRef.current.reset();
    setIsSent(false);
    setError("");
    setIsSending(false);
  };

  return (
    <div className="container contact">
      <div className="row">
        <div>
          <div className="heading">Contact</div>
          <h2 className="section-title">Let's connect</h2>
          <p className="text-muted">
            If you'd like to schedule or ask a question, send a short message below.
          </p>

          <form
            ref={formRef}
            className="contact-form card"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            {/* Name */}
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="from_name"
                type="text"
                required
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            {/* Email */}
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="from_email"
                type="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            {/* Message */}
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me a bit about what you'd like help with…"
              />
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
              <button className="btn" type="submit" disabled={isSending}>
                {isSending ? "Sending…" : "Send message"}
              </button>

              <button type="button" className="btn-ghost" onClick={handleReset}>
                Reset
              </button>
            </div>

            <div aria-live="polite" style={{ marginTop: 12 }}>
              {isSent && (
                <div className="success">✅ Thanks — your message has been sent.</div>
              )}
              {error && <div className="error">❌ {error}</div>}
            </div>

            <p className="text-muted" style={{ marginTop: 10 }}>
              Or email directly:{" "}
              <a href="mailto:summersheridanzabreLCSW@gmail.com">
                summersheridanzabreLCSW@gmail.com
              </a>
            </p>
          </form>
        </div>

        <aside>
          <div className="card">
            <img src={Drawing} alt="Therapeutic drawing" />
            <div style={{ marginTop: 12 }}>
              <div className="heading">Office</div>

              {/* ⭐️ CLICKABLE ADDRESS ⭐️ */}
              <a
                href="https://www.google.com/maps?q=215+West+88th+Street+Suite+1C,+New+York,+NY+10024"
                target="_blank"
                rel="noopener noreferrer"
                className="address-link"
              >
                <div style={{ fontWeight: 600 }}>215 West 88th street Suite 1C</div>
                <div className="text-muted">New York, NY 10024</div>
              </a>

              <div style={{ marginTop: 10 }}>
                <div className="heading">Hours</div>
                <div className="text-muted">By appointment only</div>
              </div>

              <div style={{ marginTop: 10 }}>
                <a
                  href="mailto:summersheridanzabreLCSW@gmail.com"
                  className="text-muted"
                >
                  summersheridanzabreLCSW@gmail.com
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
