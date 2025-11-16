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
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        const newScrollY = window.scrollY;
        setScrollY(newScrollY);

        const sections = ["hero", "about", "projects", "certifications", "publications", "resume", "contact"];
        const threshold = window.innerHeight / 3;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= threshold && rect.bottom >= threshold) {
              setActiveSection(section);
              break;
            }
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
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