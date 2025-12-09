function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection, scrollY }) {
  const navBg = scrollY > 50 
    ? "bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-800" 
    : "bg-transparent";
  
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "leetcode", label: "Leetcode" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "publications", label: "Publications" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Sharan S C
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}>
          <div className="py-4 space-y-2 bg-gray-800/90 backdrop-blur-md rounded-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 transition-colors rounded-lg ${
                  activeSection === item.id 
                    ? "text-cyan-400 bg-gray-700/50" 
                    : "text-gray-300 hover:bg-gray-700/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;