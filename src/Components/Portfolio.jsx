import { useState, useEffect } from "react";
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
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ["hero", "about", "projects", "certifications", "publications", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 overflow-x-hidden">
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