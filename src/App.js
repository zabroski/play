// src/App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Teams from "./components/Teams/Teams";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BrandBanner from "./components/BrandBanner/BrandBanner";
import BackToTop from "./components/BackToTop/BackToTop";

// ensure global css is imported by index.js (CRA default) - otherwise import here:
// import "./index.css";

function viewFromHash() {
  const hash = window.location.hash;
  if (!hash || hash === "#home") return "home";
  if (hash === "#service") return "service";
  if (hash === "#team") return "team";
  if (hash === "#contact") return "contact";
  return null;
}

function App() {
  const [view, setView] = React.useState(() => viewFromHash() || "home");

  React.useEffect(() => {
    function onHashChange() {
      const nextView = viewFromHash();
      if (nextView) {
        setView(nextView);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <main id="main-content">
        {view === "home" && <section id="home">
          <Hero />
        </section>}

        {(view === "home" || view === "service") && <section id="service">
          <Services />
        </section>}

        {(view === "home" || view === "team") && <Teams />}

        {(view === "home" || view === "contact") && <section id="contact">
          <Contact />
        </section>}
      </main>

      {view === "team" && <BrandBanner />}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
