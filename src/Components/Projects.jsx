import { ExternalLink } from 'lucide-react';
import { eyebrow, heading, gradientText, bodyText, chip, cardBase, fontDisplay, link } from "./designTokens";

function Projects() {
  const projects = [
    {
      title: "ForeignPay",
      subtitle: "UPI Proxy Wallet for International Tourists",
      description: "Fintech proof-of-concept enabling international tourists to transact via UPI without a local bank account. Passport-based KYC, Razorpay wallet top-up, ledger-based debit through a corporate proxy UPI account, Grok-powered spend insights.",
      tech: ["Spring Boot", "React", "PostgreSQL", "Razorpay", "Cloudinary", "Grok AI", "AWS EC2"],
      link: "https://foreignpay.duckdns.org/",
      github: "https://github.com/Sharan-0-dot/ForeignPay",
    },
    {
      title: "FreightIQ",
      subtitle: "Intelligent Freight Marketplace",
      description: "Polyglot freight marketplace connecting companies with drivers via competitive bidding. XGBoost predicts optimal freight pricing; full shipment lifecycle across separate Java and Python microservices.",
      tech: ["Spring Boot", "Microservices", "FastAPI", "XGBoost", "PostgreSQL", "React", "Docker", "AWS EC2"],
      link: "https://freightiq.duckdns.org/",
      github: "https://github.com/Sharan-0-dot/FreightIQ",
    },
    {
      title: "Sentinel",
      subtitle: "Reimbursement Fraud Detection System",
      description: "Simulates a real-world corporate reimbursement workflow. OCR + AI-based extraction validates claims; rule-based checks and perceptual hashing catch duplicate or manipulated receipts, scored into risk tiers.",
      tech: ["Spring Boot", "Microservices", "Gemini AI", "Tesseract OCR", "PostgreSQL", "Docker"],
      link: "https://sentinel-app.duckdns.org/",
      github: "https://github.com/Sharan-0-dot/Sentinel",
    },
    {
      title: "Stature",
      subtitle: "AI Resume Builder",
      description: "Microservices-based app generating ATS-friendly resumes with Gemini AI. Eureka service registry, API Gateway routing, Apache POI for editable Word document output.",
      tech: ["Spring Boot", "Microservices", "Gemini AI", "Apache POI", "Eureka", "MySQL", "Docker"],
      link: "https://resume-builder-frontend-blond.vercel.app/",
      github: "https://github.com/Sharan-0-dot/ResumeBuilder-Micro-Service-",
    },
    {
      title: "Journal App",
      subtitle: "Blogging + Real-time Chat",
      description: "Secure journaling platform with authenticated blog publishing, plus a public real-time chat room for live discussion.",
      tech: ["React", "Spring Boot", "MongoDB", "Tailwind", "WebSockets", "Docker"],
      link: "https://blog-app-psi-tan.vercel.app/",
      github: "https://github.com/Sharan-0-dot/BlogApp-SpringBoot",
    },
    {
      title: "Converge",
      subtitle: "Real-time Video Conferencing",
      description: "One-on-one and group video meetings with low-latency audio/video powered by ZegoCloud.",
      tech: ["React", "Spring Boot", "ZegoCloud", "Tailwind", "Docker"],
      link: "https://converge-psi.vercel.app/",
      github: "https://github.com/Sharan-0-dot/Converge-springboot",
    },
  ];

  return (
    <div>
      <p className={eyebrow}>05 — Projects</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        Things I've <span className={gradientText}>shipped</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className={`${cardBase} p-6 flex flex-col`}>
            <h3 className={`${fontDisplay} text-xl font-bold text-[#EDEFF7]`}>{project.title}</h3>
            <p className="text-[#6FA8FF] text-sm font-medium mb-3">{project.subtitle}</p>
            <p className={`${bodyText} text-sm mb-4 flex-grow`}>{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className={chip}>{t}</span>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-auto">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm font-medium ${link}`}>
                  Live <ExternalLink size={14} />
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#8891A8] hover:text-[#EDEFF7] transition-colors">
                GitHub <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
