
import { Menu, X } from 'lucide-react';

function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection, scrollY }) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["hero", "about", "projects", "certifications", "publications", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-blue-600 ${
                  activeSection === section
                    ? "text-blue-600 font-medium"
                    : "text-gray-600"
                }`}
              >
                {section === "hero" ? "Home" : section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {["hero", "about", "projects", "certifications", "publications", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left capitalize text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;