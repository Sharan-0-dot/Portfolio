import { eyebrow, heading, gradientText, bodyText, chip, cardBase, fontDisplay, fontMono } from "./designTokens";

function About() {
  const skills = [
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Microservices", category: "Architecture" },
    { name: "REST API", category: "Backend" },
    { name: "Apache Kafka", category: "Messaging" },
    { name: "WebSockets", category: "Real-time" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Git", category: "Tools" },
    { name: "XGBoost", category: "ML" },
    { name: "Scikit-learn", category: "ML" },
  ];

  const highlights = [
    { title: "Software Dev Intern", subtitle: "IntelAIX · Nov 2025 – Jan 2026" },
    { title: "Full-Stack Development", subtitle: "Spring Boot · React · Microservices" },
    { title: "DevOps & Cloud", subtitle: "Docker · Kubernetes · AWS EC2" },
    { title: "ML Integration", subtitle: "XGBoost · FastAPI · Python" },
    { title: "IEEE Publication", subtitle: "First Author · INDIACom 2024" },
  ];

  return (
    <div>
      <p className={eyebrow}>01 — About</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        Backend engineer who ships <span className={gradientText}>whole systems</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className={`${cardBase} p-8`}>
          <p className={`${bodyText} mb-4`}>
            I'm a final-year Computer Science Engineering student at{" "}
            <span className="text-[#6FA8FF] font-medium">The Oxford College of Engineering, Bangalore</span>,
            passionate about building reliable, scalable backend systems.
          </p>
          <p className={`${bodyText} mb-4`}>
            I build production-ready systems using{" "}
            <span className="text-[#7FD0FF]">Spring Boot, Kafka, Docker, Kubernetes, and AWS</span> — with
            hands-on experience shipping microservices, designing event-driven pipelines, and integrating ML
            models into real applications.
          </p>
          <p className={`${bodyText} mb-4`}>
            I've taken projects from idea to deployment — hosting on{" "}
            <span className="text-[#6FA8FF] font-medium">AWS EC2</span> with custom domains, HTTPS, and
            containerized services — and I'm comfortable owning the full backend stack independently.
          </p>
          <p className={`${bodyText} mb-4`}>
            I enjoy the intersection of backend engineering and ML — building systems where models power real
            decisions, like <span className="text-[#7FD0FF]">fraud detection</span> and{" "}
            <span className="text-[#7FD0FF]">freight pricing prediction</span>.
          </p>
          <p className={bodyText}>
            Outside of projects, I stay sharp through competitive programming —{" "}
            <span className="text-[#6FA8FF] font-medium">1000+ LeetCode problems</span> solved with a{" "}
            <span className="text-[#6FA8FF] font-medium">peak contest rating of 1832</span>, global top 5%.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className={`${fontDisplay} text-xl font-semibold text-[#EDEFF7] mb-2`}>Key Highlights</h3>
          {highlights.map((h) => (
            <div key={h.title} className={`${cardBase} p-4`}>
              <div className={`${fontMono} text-sm font-semibold text-[#6FA8FF]`}>{h.title}</div>
              <div className="text-sm text-[#8891A8] mt-0.5">{h.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className={`${fontDisplay} text-2xl font-bold text-center mb-8 text-[#EDEFF7]`}>Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill.name} className={chip}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
