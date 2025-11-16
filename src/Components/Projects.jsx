import { ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "AI Resume Builder",
      description:
        "An intelligent microservices-based application that generates ATS-friendly resumes using Google's Gemini AI. The system uses Eureka service registry for service discovery, API Gateway for routing, and Apache POI to create professionally formatted, editable Word documents. Users receive optimized resumes with enhanced content, proper formatting, and keyword optimization tailored for Applicant Tracking Systems, ensuring maximum job application success.",
      tech: ["Spring Boot", "Microservices", "Gemini AI", "Apache POI", "Eureka", "API Gateway", "MySQL"],
      image:
        "https://play-lh.googleusercontent.com/9cStI0kHWmjALUEVwZwkuPhkwtuesVwSgQeHUA4YEqGRzF31yXYjjdpAQkW5DGqp2dE",
      link: "https://resume-builder-frontend-blond.vercel.app/",
      github: "https://github.com/Sharan-0-dot/ResumeBuilder-Micro-Service-",
    },
    {
      title: "Journal App",
      description:
        "A secure journaling platform where users can write and share blogs, with authentication to protect their accounts. It also includes a public real-time chat room, allowing users to interact and discuss ideas live. Designed to be simple, responsive, and easy to use for a smooth writing and collaboration experience.",
      tech: ["React", "SpringBoot", "MongoDB", "Tailwind", "WebSockets"],
      image: "https://weandthecolor.com/wp-content/uploads/2012/10/Journal-iOS-Icon-Design-25356.jpg",
      link: "https://blog-app-psi-tan.vercel.app/",
      github: "https://github.com/Sharan-0-dot/BlogApp-SpringBoot",
    },
    {
      title: "Converge",
      description:
        "A real-time video conferencing application that enables seamless one-on-one and group meetings with high-quality audio and video, powered by ZegoCloud services. Converge provides a smooth, low-latency communication experience with features like instant room creation, secure joining links, and an intuitive interface for hassle-free collaboration.",
      tech: ["React", "SpringBoot", "ZegoCloud", "TailWind"],
      image:
        "https://i.pinimg.com/736x/04/ae/44/04ae44bdd748cc51bce741a4c54e78ad.jpg",
      link: "https://converge-psi.vercel.app/",
      github: "https://github.com/Sharan-0-dot/Converge-springboot",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    View Project
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    GitHub
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          <div className="mt-10 w-full overflow-hidden whitespace-nowrap">
        <p className="text-center text-red-600 font-medium animate-marquee">
          ⚠️ These projects are hosted on Render’s free tier. When you open them, they may take 30–60 seconds to start up.
        </p>
      </div>
    </section>
  );
}

export default Projects;
