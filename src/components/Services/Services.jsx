// src/components/Services/Services.jsx
// src/components/Services/Services.jsx
import React from "react";
import "./Services.css";

const SERVICE_LIST = [
  {
    title: "Play Therapy",
    body: `“Scientists have discovered that it takes approximately 400 repetitions to create new synapses in the brain. Unless it is done in play, in which it only takes 10-20 repetitions.“ Karyn Purvis
The primary modality used in our sessions is Play Therapy. Play is used as the primary communication tool with the purpose of using this symbolic communication to speak in the primary learning vehicle for children. Children use play to express feelings when they do not have the verbal skills to express thoughts, feelings and ideas. Play therapy relieves clinical symptoms by arming them with skills to use when struggling. Through play we will learn the skills needed to self regulate and then understand how to generalize these skills globally in various settings.`,
  },
  {
    title: "Grown-up Consultation",
    body: `With a specialization in Children and Families, and over 20 years in the dynamic field of social work I understand families are all special and unique. Through our work together, my goal is to help families and the grown ups in my client’s life understand how to best support their loved one. This is done with monthly sessions to talk through strategies and progress.

.`,
  },
  {
    title: "School Consultation",
    body: `“When a flower doesn't bloom, you fix the environment in which it grows, not the flower.” Alexander Den Heijer
As a school based social worker for over 15 years, I understand that some spaces may be a challenge for some children. Where some children thrive, others may struggle. My work is rooted in understanding, and surfacing what needs are not being met. Once we have a better idea of this need, we can clearly articulate it and make a plan to ensure that your child is thriving and accommodated.`,
  },
  {
    title: "Clinical Supervision",
    body: `“Let go of who you think you’re supposed to be; and embrace who you are.”
-Brene Brown
As a social worker with more than 25 years in the field, I understand and am beyond passionate about the profession. Being a social worker has been one of the most pivotal and rewarding experiences of my life. My goal in clinical supervision is to build a strong relationship that empowers social workers to find what makes them thrive in the field. I have worked and supervised students for the last ten years in both individual and group settings.`,
  }
];

export default function Services() {
  // track expanded state per card
  const [expanded, setExpanded] = React.useState(() => SERVICE_LIST.map(() => false));

  // change this threshold to control when "View more" appears
  const TRUNCATE_THRESHOLD = 260;

  function toggle(i) {
    setExpanded(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }

  // helper — split body into paragraphs (preserve paragraphs separated by blank lines)
  function paragraphsFrom(text) {
    return text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
  }

  // helper — create a safe truncated preview (single line/paragraph)
  function truncatedText(text, limit = TRUNCATE_THRESHOLD) {
    // collapse newlines for preview
    const single = text.replace(/\s+/g, " ").trim();
    if (single.length <= limit) return single;
    // avoid cutting mid-word
    const sliced = single.slice(0, limit);
    return sliced.replace(/\s+\S*$/, "") + "…";
  }

  return (
    <div className="container">
      <div className="section-header">
        <p className="heading">Services</p>
        <h2 className="section-title">What I offer</h2>
        <p className="text-muted">Relationship and evidence-based practice.</p>
      </div>

      <div className="services-grid">
        {SERVICE_LIST.map((s, i) => {
          const body = s.body || "";
          const needsToggle = body.replace(/\s+/g, " ").length > TRUNCATE_THRESHOLD;
          const isExpanded = Boolean(expanded[i]);

          return (
            <article key={s.title} className="service-card card">
              <div className="service-head">
                <h3 className="service-title">{s.title}</h3>
              </div>

              <div
                id={`service-body-${i}`}
                className={`service-body ${isExpanded ? "expanded" : "collapsed"}`}
                aria-hidden={!isExpanded && needsToggle ? "false" : "false"}
              >
                {isExpanded ? (
                  // expanded: render paragraphs
                  paragraphsFrom(body).map((p, idx) => (
                    <p className="text-muted service-paragraph" key={idx}>
                      {p}
                    </p>
                  ))
                ) : (
                  // collapsed: show truncated preview (single paragraph)
                  <p className="text-muted service-paragraph">
                    {needsToggle ? truncatedText(body) : (
                      // if short, render paragraphs (keeps quotes and paragraphs)
                      paragraphsFrom(body).map((p, idx) => (
                        <span key={idx}>
                          {p}
                          {idx < paragraphsFrom(body).length - 1 ? <><br/><br/></> : null}
                        </span>
                      ))
                    )}
                  </p>
                )}
              </div>

              {needsToggle && (
                <div className="service-footer">
                  <button
                    className="view-btn"
                    onClick={() => toggle(i)}
                    aria-expanded={isExpanded}
                    aria-controls={`service-body-${i}`}
                  >
                    {isExpanded ? "View less" : "View more"}
                    <span className={`caret ${isExpanded ? "open" : ""}`} aria-hidden="true" />
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
