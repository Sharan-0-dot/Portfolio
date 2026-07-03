import { fontMono } from "./designTokens";

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className={`${fontMono} text-xs text-[#8891A8] tracking-wide`}>
          © 2026 Sharan S C — built with Spring Boot energy and orbital mechanics
        </p>
      </div>
    </footer>
  );
}

export default Footer;
