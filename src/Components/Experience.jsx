import { useState } from "react";

const experiences = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Intelaix",
    duration: "Nov 2025 – Jan 2026",
    type: "Internship",
    description: [
      "Built backend infrastructure to migrate client communication from WhatsApp to scalable web push notifications.",
      "Engineered a Java Spring Boot + Apache Kafka event-driven pipeline to replace manual WhatsApp notifications with automated web push delivery, integrating FCM token lifecycle management (registration, validation, dispatch).",
      "Architected for 10,000+ device registrations with Kafka consumers triggering real-time push notifications on system events — achieving sub-100ms async processing over synchronous blocking calls.",
    ],
    certificate: "/internship-certificate.pdf",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "Kafka"],
  },
];

function Experience() {
  const [certOpen, setCertOpen] = useState(false);

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional experience and internships
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{exp.duration}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-cyan-400 mt-1.5 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setCertOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400 font-medium hover:from-cyan-500/30 hover:to-blue-600/30 hover:shadow-cyan-500/20 hover:shadow-md transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {certOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setCertOpen(false)}
        >
          <div
            className="relative bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">Internship Certificate — Intelaix</h3>
              <button
                onClick={() => setCertOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {/* If your cert is an image, use <img>. If PDF, use <iframe> */}
              <iframe
                src="./intern_certificate.pdf"
                className="w-full h-[70vh] rounded-lg"
                title="Internship Certificate"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;