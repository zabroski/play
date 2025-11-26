
// import React from "react";
// import "./Services.css";

// const SERVICE_LIST = [
//   {
//     title: "Play Therapy",
//     body: `“Scientists have discovered that it takes approximately 400 repetitions to create new synapses in the brain. Unless it is done in play, in which it only takes 10-20 repetitions.“ Karyn Purvis
// The primary modality used in our sessions is Play Therapy. Play is used as the primary communication tool with the purpose of using this symbolic communication to speak in the primary learning vehicle for children. Children use play to express feelings when they do not have the verbal skills to express thoughts, feelings and ideas. Play therapy relieves clinical symptoms by arming them with skills to use when struggling. Through play we will learn the skills needed to self regulate and then understand how to generalize these skills globally in various settings.`,
//   },
//   {
//     title: "Grown-up Consultation",
//     body: `With a specialization in Children and Families, and over 20 years in the dynamic field of social work I understand families are all special and unique. Through our work together, my goal is to help families and the grown ups in my client’s life understand how to best support their loved one. This is done with monthly sessions to talk through strategies and progress.`,
//   },
//   {
//     title: "School Consultation",
//     body: `“When a flower doesn't bloom, you fix the environment in which it grows, not the flower.” Alexander Den Heijer
// As a school based social worker for over 15 years, I understand that some spaces may be a challenge for some children. Where some children thrive, others may struggle. My work is rooted in understanding, and surfacing what needs are not being met. Once we have a better idea of this need, we can clearly articulate it and make a plan to ensure that your child is thriving and accommodated.`,
//   },
//   {
//     title: "Clinical Supervision",
//     body: `“Let go of who you think you’re supposed to be; and embrace who you are.” -Brene Brown
// As a social worker with more than 25 years in the field, I understand and am beyond passionate about the profession. Being a social worker has been one of the most pivotal and rewarding experiences of my life. My goal in clinical supervision is to build a strong relationship that empowers social workers to find what makes them thrive in the field. I have worked and supervised students for the last ten years in both individual and group settings.`,
//   }
// ];

// // HELPERS – KEEP PARAGRAPH FORMATTING
// function paragraphsFrom(text) {
//   return text
//     .split(/\n{1,}/)
//     .map(p => p.trim())
//     .filter(Boolean);
// }

// export default function Services() {
//   return (
//     <div className="container">
//       <div className="section-header">
//         <p className="heading">Services</p>
//       </div>

//       <div className="services-grid">
//         {SERVICE_LIST.map((s, i) => (
//           <article key={s.title} className="service-card card">
//             <h3 className="service-title">{s.title}</h3>

//             {paragraphsFrom(s.body).map((p, idx) => (
//               <p className="text-muted service-paragraph" key={idx}>
//                 {p}
//               </p>
//             ))}
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// }




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
    body: `With a specialization in Children and Families, and over 20 years in the dynamic field of social work I understand families are all special and unique. Through our work together, my goal is to help families and the grown ups in my client’s life understand how to best support their loved one. This is done with monthly sessions to talk through strategies and progress.`,
  },
  {
    title: "School Consultation",
    body: `“When a flower doesn't bloom, you fix the environment in which it grows, not the flower.” Alexander Den Heijer
As a school based social worker for over 15 years, I understand that some spaces may be a challenge for some children. Where some children thrive, others may struggle. My work is rooted in understanding, and surfacing what needs are not being met. Once we have a better idea of this need, we can clearly articulate it and make a plan to ensure that your child is thriving and accommodated.`,
  },
  {
    title: "Clinical Supervision",
    body: `“Let go of who you think you’re supposed to be; and embrace who you are.” -Brene Brown
As a social worker with more than 25 years in the field, I understand and am beyond passionate about the profession. Being a social worker has been one of the most pivotal and rewarding experiences of my life. My goal in clinical supervision is to build a strong relationship that empowers social workers to find what makes them thrive in the field. I have worked and supervised students for the last ten years in both individual and group settings.`,
  }
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
