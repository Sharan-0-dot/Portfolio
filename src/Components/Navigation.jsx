import { fontDisplay, fontMono } from "./designTokens";

function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection, scrollY }) {
  const navBg = scrollY > 50
  ? "bg-[#10131F]/25 backdrop-blur-xl border-b border-white/10"
  : "bg-transparent";

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
    { id: "leetcode", label: "LeetCode" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <button
            onClick={() => scrollToSection("hero")}
            className={`${fontDisplay} text-xl font-bold text-[#EDEFF7] hover:text-[#6FA8FF] transition-colors duration-300`}
          >
            Sharan
          </button>

          <div className={`hidden md:flex space-x-7 ${fontMono} text-sm`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.id ? "text-[#6FA8FF]" : "text-[#8891A8] hover:text-[#EDEFF7]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-[#6FA8FF]" />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-[#8891A8] hover:text-[#6FA8FF] transition-colors"
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

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
          <div className={`py-4 space-y-1 bg-[#10131F]/90 backdrop-blur-md rounded-2xl border border-white/10 ${fontMono} text-sm`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-5 py-3 transition-colors rounded-lg ${
                  activeSection === item.id ? "text-[#6FA8FF] bg-white/5" : "text-[#8891A8] hover:bg-white/5"
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
