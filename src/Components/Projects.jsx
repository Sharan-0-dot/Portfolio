import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const projects = [
    {
      title: "Sentinel - Reimbursement Fraud Detection System",
      description: "Sentinel is a software that simulates a real-world corporate reimbursement workflow. It processes reimbursement requests with receipt image uploads, using OCR and AI-based extraction to validate claims against submitted data. The system applies rule-based checks, historical analysis, and perceptual hashing to detect duplicate or manipulated receipts. Each claim is scored and categorized into LOW, MEDIUM, HIGH, or CONFIRMED fraud levels based on policy violations and risk signals.",
      tech: ["Spring Boot", "Microservices", "Gemini AI", "tesseract-OCR", "PostgreSQL", "Perceptual-Hash", "Text-Hash", "docker"],
      image: "https://i.pinimg.com/736x/32/c2/1d/32c21d0dbd486ff16101f7b37df3f6f7.jpg",
      github: "https://github.com/Sharan-0-dot/Sentinel",
    },
    {
      title: "Stature - AI Resume Builder",
      description: "An intelligent microservices-based application that generates ATS-friendly resumes using Google's Gemini AI. The system uses Eureka service registry for service discovery, API Gateway for routing, and Apache POI to create professionally formatted, editable Word documents.",
      tech: ["Spring Boot", "Microservices", "Gemini AI", "Apache POI", "Eureka", "API Gateway", "MySQL", "docker"],
      image: "./resumeBuilder.avif",
      link: "https://resume-builder-frontend-blond.vercel.app/",
      github: "https://github.com/Sharan-0-dot/ResumeBuilder-Micro-Service-",
    },
    {
      title: "Journal App",
      description: "A secure journaling platform where users can write and share blogs, with authentication to protect their accounts. It also includes a public real-time chat room, allowing users to interact and discuss ideas live.",
      tech: ["React", "SpringBoot", "MongoDB", "Tailwind", "WebSockets", "docker"],
      image: "https://weandthecolor.com/wp-content/uploads/2012/10/Journal-iOS-Icon-Design-25356.jpg",
      link: "https://blog-app-psi-tan.vercel.app/",
      github: "https://github.com/Sharan-0-dot/BlogApp-SpringBoot",
    },
    {
      title: "Converge",
      description: "A real-time video conferencing application that enables seamless one-on-one and group meetings with high-quality audio and video, powered by ZegoCloud services. Converge provides a smooth, low-latency communication experience.",
      tech: ["React", "SpringBoot", "ZegoCloud", "TailWind", "docker"],
      image: "https://i.pinimg.com/736x/04/ae/44/04ae44bdd748cc51bce741a4c54e78ad.jpg",
      link: "https://converge-psi.vercel.app/",
      github: "https://github.com/Sharan-0-dot/Converge-springboot",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="aspect-video overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gray-700/50 text-cyan-400 rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    {project.link != null && <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group/link"
                    >
                      View Live
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                    }

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 font-medium group/link"
                    >
                      GitHub
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Banner */}
        <div className="mt-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-4">
          <p className="text-center text-orange-300 font-medium flex items-center justify-center gap-2">
            <span>⚠️</span>
            <span>These projects are hosted on Render's free tier. Initial load may take 30–60 seconds.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Projects;
