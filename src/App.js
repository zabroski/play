// src/App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import ClosureBanner from "./components/ClosureBanner/ClosureBanner";

// ensure global css is imported by index.js (CRA default) - otherwise import here:
// import "./index.css";

function App() {
  return (
    <div className="app-root">
      <ClosureBanner />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="service">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
