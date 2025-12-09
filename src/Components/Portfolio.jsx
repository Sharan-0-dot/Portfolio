import { useState, useEffect, useCallback, useRef } from "react";
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Certifications from './Certifications';
import Publications from './Publications';
import Resume from "./Resume";
import Contact from './Contact';
import Footer from './Footer';

function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "certifications", "publications", "resume", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-gray-100">
      <Navigation 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        scrollY={scrollY}
      />
      <Hero scrollToSection={scrollToSection} scrollY={scrollY} />
      <About />
      <Projects />
      <Certifications />
      <Publications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;