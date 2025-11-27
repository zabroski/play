
import React, { useRef, useState } from "react";
import "./Contact.css";
import Drawing from "../../assets/drawing.png";
import emailjs from "@emailjs/browser";

const SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_do2f6hi";
const TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_nmkj4mq";
const PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "WK_3SacTDGCKivJ8I";

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

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
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

  return (
    <section
      className="contact-section"
      aria-labelledby="contact-heading"
      id="contact"
    >
      <div className="contact-overlay" />

      <div className="container contact-content">
        <div className="contact-grid">
          <div>
            <p className="heading">Contact</p>
            <h2 className="section-title" id="contact-heading">
              Let&apos;s connect
            </h2>
            <p className="text-muted">
              If you&apos;d like to schedule a session or have a question, send
              a short message below. I&apos;ll respond as soon as I can.
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
                  rows={4}
                  placeholder=""
                />
              </div>

              <div className="contact-actions">
                <button className="btn" type="submit" disabled={isSending}>
                  {isSending ? "Sending…" : "Send message"}
                </button>
              </div>

              <div aria-live="polite" style={{ marginTop: 12 }}>
                {isSent && (
                  <div className="success">
                    ✅ Thanks — your message has been sent.
                  </div>
                )}
                {error && <div className="error">❌ {error}</div>}
              </div>

              <p className="text-muted contact-direct">
                Prefer email?{" "}
                 <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=summersheridanzabreLCSW@gmail.com&su=Therapy%20Inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted">
                    summersheridanzabreLCSW@gmail.com
                  </a>
              </p>
            </form>
          </div>

          <aside aria-label="Office information" className="contact-aside">
            <div className="card contact-card">
              <img src={Drawing} alt="Child-friendly therapy room artwork" />
              <div className="contact-aside-body">
                <div className="heading">Office</div>

                <a
                  href="https://www.google.com/maps?q=215+West+88th+Street+Suite+1C,+New+York,+NY+10024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="address-link"
                >
                  <div className="contact-office-line">
                    215 West 88th Street, Suite 1C
                  </div>
                  <div className="text-muted">New York, NY 10024</div>
                </a>

                <div className="contact-hours">
                  <div className="heading">Hours</div>
                  <div className="text-muted">By appointment only</div>
                </div>

                <div className="contact-email">
                  <div className="heading">Email</div>
                  {/* <a
                    href="mailto:summersheridanzabreLCSW@gmail.com"
                    className="text-muted"
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
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
