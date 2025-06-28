import React, { useEffect, useState } from "react";
import { LandingPage, Navbar, About, Skills, Footer } from "./components";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "certifications",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080808] via-gray-90 to-gray-900">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <LandingPage />
      <About />
      <Skills />
    </div>
  );
};

export default App;
