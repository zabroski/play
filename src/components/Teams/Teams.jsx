import React from "react";
import summerPortrait from "../../assets/sum.jpg";
import summerChildhoodPhoto from "../../assets/hero-summer.jpg";
import juliaPortrait from "../../assets/team/julia-current.png";
import malloryPortrait from "../../assets/team/mallory-current.png";
import cordeliaPortrait from "../../assets/team/cordelia-current.png";
import juliaChildhoodPhoto from "../../assets/team/julia-childhood-cropped.png";
import malloryChildhoodPhoto from "../../assets/team/mallory-childhood.png";
import lianaChildhoodPhoto from "../../assets/team/liana-childhood-cropped.png";
import "./Teams.css";

const TEAM_MEMBERS = [
  {
    name: "Summer Sheridan-Zabre",
    credentials: "LCSW",
    portrait: summerPortrait,
    childhoodPhoto: summerChildhoodPhoto,
    isPlaceholder: false,
    paragraphs: [
      <><strong>Summer</strong>, a licensed clinical social worker. My approach to psychotherapy is to focus on relationship building and play. I started my career after graduating from Syracuse University with a major in Social Work and a minor in Psychology. Shortly after the terrorist attacks on the World Trade Center, I relocated to New York City and began working for the American Red Cross September 11 Recovery Program.</>,
      "I went on to complete my master’s degree in social work at Fordham University with a specialization in children and families. While interning in a therapeutic nursery, I discovered my passion for social work in educational settings and spent over 15 years working as a school social worker and various special education and administrative roles.",
      "I provide a warm, supportive environment where I help children and families address challenges such as managing emotions that impede growth, developing social skills, building a positive sense of self, and strengthening communication. My approach is rooted in relationship building and recognizing that every family is unique.",
      "When I am not in the play room working, you can find me rollerblading in central park! All while listening to true crime podcasts and trying to get fellow park dwellers to high five me!",
    ],
  },
  {
    name: "Julia Sawinski",
    credentials: "LMSW",
    portrait: juliaPortrait,
    childhoodPhoto: juliaChildhoodPhoto,
    isPlaceholder: false,
    paragraphs: [
      <><strong>Julia</strong> joins Central Park Play Therapy after working with children as a therapist and educator for over twenty years. She started as an elementary and then nursery school teacher working in Washington Heights, including working in an all-outdoors forest program right in the heart of Fort Tryon Park in northern Manhattan! After becoming a clinical social worker, she worked in three different schools collaborating closely with students and their families as well as school staff.</>,
      "Julia’s passion for working with children through a play-based, relational approach has supported her clients to quickly feel comfortable working alongside her! Julia believes that each client has their own unique goals that inform the work together in the therapeutic space and wants kids to feel empowered and confident upon terminating from therapeutic services. Empowered to understand, feel and manage their emotions, engage with others in healthy and happy ways, and overall just feel like they can better handle any curveball life throws at them!",
      "When Julia was a kid she was an expert pogo stick jumper and feels strongly that she could still be a pogo stick champ!",
    ],
  },
  {
    name: "Mallory Winick",
    credentials: "LMSW",
    portrait: malloryPortrait,
    childhoodPhoto: malloryChildhoodPhoto,
    isPlaceholder: false,
    paragraphs: [
      <><strong>Mallory</strong> Winick is a Licensed Master Social Worker. Mallory takes a strengths based approach in her work with children. Mallory believes that every child has unique strengths that shape their development and social and emotional functioning. Mallory looks closely at person in environment and feels strongly that each child and family is affected greatly by their surroundings. Mallory believes in the importance of learning about a child and family's culture, values and family dynamics to understand the child as a whole.</>,
      "Goals that Mallory often focuses on is for her young clients to feel confident in her space and grow their capacity to express their feelings and be able to grow a stronger connection with peers and caregivers!",
      "Mallory spends her time outside of our play space cheering on the mets, listening to podcasts and eating white pizza!",
    ],
  },
  {
    name: "Cordelia Johnson",
    credentials: "BA, M.Ed., LCSW",
    portrait: cordeliaPortrait,
    paragraphs: [
      <><strong>Cordelia</strong>  (BA, M.Ed., LCSW) is a Licensed Clinical Social Worker and psychotherapist with more than 20 years of experience as a therapist, school social worker, and educator. Her professional path began in the arts — she earned a degree in Art History from the University of Chicago and worked in the fashion industry. This creative foundation continues to shape her work today, particularly in how she uses expression, curiosity, and imagination to support healing.</>,
      "Wanting to work more directly with people, Cordelia earned a Master’s degree in Education from Harvard University and returned to New York City to teach in both independent and cooperative school settings. As a teacher, she was drawn to supporting students and families whose needs extended beyond academics, which ultimately inspired her to pursue clinical training and earn a Master’s degree in Social Work from New York University.",
    ],
  },
  {
    name: "Liana",
    portrait: lianaChildhoodPhoto,
    childhoodPhoto: lianaChildhoodPhoto,
    isPlaceholder: false,
    paragraphs: [
       <><strong>Liana</strong>  joins Central Park Play Therapy with nearly 20 years of experience as a therapist supporting children and adolescents in New York City. She is keenly aware of the specific pressures, worries, and strengths the young people in this city manage. Liana is a present and thoughtful resource for children and their families and aims to help parents understand their children, to help children understand where their parents are coming from, and for this understanding to make their communication and relationships stronger. </>,
      "Liana uses psychodynamic psychotherapy because she has found it is what makes clients most comfortable and likely to talk. Liana is incredibly passionate about using her experience to help young people with the transition from high school to college. For many people, it is the biggest decision and change up to that point in their lives, and adolescents need mental health support alongside this process.",
      "Growing up, Liana’s nickname was LSM which she explains are her initials “since everyone was fascinated with my having a hyphenated last name, which was very uncommon at the time!”",
      "Back then, she planned to grow up and become a famous actress (“in late elementary school or early middle school, I purchased a purse at TJ Maxx that I fully intended to wear to the academy awards”)",
    ],
  },
];

function TeamMember({ member }) {
  const [showPhoto, setShowPhoto] = React.useState(false);
  const photo = member.childhoodPhoto || member.portrait;
  const photoDescription = member.isPlaceholder
    ? "Generic child portrait — AI-generated placeholder"
    : member.childhoodPhoto
      ? `${member.name} as a child`
      : `${member.name}, ${member.credentials}`;
  const panelId = `team-${member.name.split(" ")[0].toLowerCase()}`;

  return (
    <article className={`team-card${member.name === "Liana" ? " team-card-liana" : ""}`}>
      <div className="team-member-heading">
        <img className="team-avatar" src={member.portrait} alt="" loading="lazy" />
        <div>
          <h3>{member.name}</h3>
          {member.credentials && <p className="team-credentials">{member.credentials}</p>}
        </div>
      </div>

      <div
        id={panelId}
        className={`team-reveal${showPhoto ? " is-photo-visible" : ""}`}
        tabIndex={0}
        role="group"
        aria-label={`${member.name}: focus to view photo`}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setShowPhoto(false);
            event.currentTarget.blur();
          }
        }}
      >
        <div className="team-biography">
          {member.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <figure className="team-photo">
          <img src={photo} alt={photoDescription} loading="lazy" />
          <figcaption>{photoDescription}</figcaption>
        </figure>
      </div>

      {/* <button
        type="button"
        className="team-photo-toggle"
        aria-controls={panelId}
        aria-pressed={showPhoto}
        aria-label={`${showPhoto ? "Show biography of" : "Show photo of"} ${member.name}`}
        onClick={() => setShowPhoto((visible) => !visible)}
      >
        {showPhoto ? "Show biography" : "Show photo"}
      </button> */}
    </article>
  );
}

export default function Teams() {
  return (
    <section id="team" className="teams-section" aria-labelledby="teams-heading">
      <div className="container">
        <p className="heading">Our people</p>
        <h2 id="teams-heading" className="section-title">Meet the Team</h2>
        <p className="teams-intro">Get to know the people behind the play.</p>
        <div className="teams-grid">
          {TEAM_MEMBERS.map((member) => <TeamMember key={member.name} member={member} />)}
          <article className="team-card team-play-card" aria-labelledby="team-play-heading">
            <p className="team-play-kicker">Growing through play</p>
            <div className="team-play-art" aria-hidden="true">
              <span className="team-play-orbit team-play-orbit-one" />
              <span className="team-play-orbit team-play-orbit-two" />
              <span className="team-play-spark">✦</span>
              <div className="team-play-blocks">
                <span className="team-play-block">P</span>
                <span className="team-play-block">L</span>
                <span className="team-play-block">A</span>
                <span className="team-play-block">Y</span>
              </div>
            </div>
            <h3 id="team-play-heading">Room to play.<br />Space to grow.</h3>
            <p className="team-play-description">
              Every child brings their own story. Through play, curiosity, and
              caring relationships, we make room for feelings, connection, and
              new possibilities.
            </p>
            <ul className="team-play-values" aria-label="Our approach">
              <li>Feel seen</li>
              <li>Build confidence</li>
              <li>Find connection</li>
            </ul>
            <a href="#contact" className="team-play-link">Let’s start a conversation <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </div>
    </section>
  );
}
