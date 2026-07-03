import { useState } from "react";
import { eyebrow, heading, gradientText, bodyText, chip, cardBase, fontDisplay, fontMono } from "./designTokens";

const experiences = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Intelaix",
    duration: "Nov 2025 – Jan 2026",
    description: [
      "Built backend infrastructure to migrate client communication from WhatsApp to scalable web push notifications.",
      "Engineered a Java Spring Boot + Apache Kafka event-driven pipeline to replace manual WhatsApp notifications with automated web push delivery, integrating FCM token lifecycle management (registration, validation, dispatch).",
      "Architected for 10,000+ device registrations with Kafka consumers triggering real-time push notifications on system events — achieving sub-100ms async processing over synchronous blocking calls.",
    ],
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "Kafka"],
  },
];

function Experience() {
  const [certOpen, setCertOpen] = useState(false);

  return (
    <div>
      <p className={eyebrow}>02 — Experience</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        Time <span className={gradientText}>on the job</span>
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className={`${cardBase} p-8`}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className={`${fontDisplay} text-xl font-bold text-[#EDEFF7]`}>{exp.role}</h3>
                  <span className={chip}>Internship</span>
                </div>
                <p className="text-[#6FA8FF] font-semibold text-lg">{exp.company}</p>
              </div>
              <span className={`${fontMono} text-[#8891A8] text-sm whitespace-nowrap`}>{exp.duration}</span>
            </div>

            <ul className="space-y-2 mb-6">
              {exp.description.map((point, i) => (
                <li key={i} className={`${bodyText} flex items-start gap-2`}>
                  <span className="text-[#6FA8FF] mt-1.5 shrink-0">▸</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {exp.skills.map((skill) => (
                <span key={skill} className={chip}>{skill}</span>
              ))}
            </div>

            <button
              onClick={() => setCertOpen(true)}
              className={`${fontMono} inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#6FA8FF]/30 text-[#6FA8FF] text-sm font-medium hover:bg-[#6FA8FF]/10 transition-all duration-300`}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {certOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setCertOpen(false)}
        >
          <div
            className="relative bg-[#10131F] rounded-2xl border border-white/10 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className={`${fontDisplay} text-lg font-semibold text-[#EDEFF7]`}>Internship Certificate — Intelaix</h3>
              <button onClick={() => setCertOpen(false)} className="text-[#8891A8] hover:text-[#EDEFF7] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <iframe src="./intern_certificate.pdf" className="w-full h-[70vh] rounded-lg" title="Internship Certificate" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
