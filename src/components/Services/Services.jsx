
import React from "react";
import "./Services.css";

const SERVICE_LIST = [
  {
    title: "ABOUT OUR PRACTICE",
    body: ` Welcome to Central Park Play Therapy! We are a small group practice based out of New York, NY that specializes in therapeutic work with children, adolescents, and families. Our Clinical Director, Summer Sheridan-Zabre, is a Licensed Clinical Social Worker, avid podcast listener who moved to New York in 2001 and argues that she is a true New Yorker. When not in the office, she can be found rollerblading, convincing people to try her baked goods, or binge watching 90’s r&b videos.   After over 25 years in the field, she built this practice to create a space where not only children and families can thrive, but therapists feel a sense of community in learning and growing from one another. Each therapist in the practice has their own unique qualities and experiences that lends to specific excellence in their respective niches.  At Central Park Play Therapy, we believe great therapists deserve the same care they provide to others. Through individualized supervision, meaningful professional development, and actually fun team experiences, we cultivate a supportive community where therapists feel valued, connected, and inspired. Our goal isn't simply to help clinicians stay in the field—we aim to help them grow, thrive and love the work they do;  and where they do it.  `,
  },
  {
    title: "Our Commitment to Inclusion",
    body: `At Central Park Play Therapy, we believe every child deserves to feel seen, valued, understood, and accepted exactly as they are today and empower them to become who they strive to be. Our practice is committed to creating a welcoming, affirming, and inclusive space where children and families from all backgrounds can feel safe to explore, grow, and heal. We honor the unique identities, cultures, family structures, abilities, experiences, and perspectives that each child brings into the therapy space. We recognize that children thrive when they are supported by caring adults who respect and celebrate their individuality. Our therapists are dedicated to providing culturally responsive, compassionate care that acknowledges the impact of a child’s environment, relationships, and lived experiences. We welcome and support children and families of all races, ethnicities, religions, gender identities, gender expressions, sexual orientations, abilities, socioeconomic backgrounds, and family configurations. Our practice ensures an accessible environment for all entering our space, which may include physical or other accommodations. We are committed to ongoing learning, reflection, and growth so that our practice remains a place where every child and family knows they belong.  At Central Park Play Therapy, inclusion is more than a value—it is at the heart of how we connect, support, and care for every child and family we serve.  `,
  },

];

// HELPERS – KEEP PARAGRAPH FORMATTING
function paragraphsFrom(text) {
  return text
    .split(/\n{1,}/)
    .map(p => p.trim())
    .filter(Boolean);
}

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-overlay" />

      <div className="container services-content">
        <div className="section-header">
          <p className="heading">Services</p>
        </div>

        <div className="services-grid">
          {SERVICE_LIST.map((s) => (
            <article key={s.title} className="service-card card">
              <h3 className="service-title">{s.title}</h3>

              {paragraphsFrom(s.body).map((p, idx) => (
                <p className="text-muted service-paragraph" key={idx}>
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
