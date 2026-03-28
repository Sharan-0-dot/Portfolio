import NeonPulseAvatar from "./NeonPulseAvatar";

function About() {
  const skills = [
    { name: "Java", icon: "☕", category: "Backend" },
    { name: "Spring Boot", icon: "🍃", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "FastAPI", icon: "⚡", category: "Backend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "JavaScript", icon: "📜", category: "Frontend" },
    { name: "PostgreSQL", icon: "🗄️", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Microservices", icon: "🔄", category: "Architecture" },
    { name: "REST API", icon: "🔗", category: "Backend" },
    { name: "Apache Kafka", icon: "📡", category: "Messaging" },
    { name: "WebSockets", icon: "🔌", category: "Real-time" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "Kubernetes", icon: "☸️", category: "DevOps" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Git", icon: "📦", category: "Tools" },
    { name: "XGBoost", icon: "🤖", category: "ML" },
    { name: "Scikit-learn", icon: "🧠", category: "ML" },
  ];

  const highlights = [
    {
      icon: "💼",
      title: "Software Dev Intern",
      subtitle: "IntelAIX · Nov 2025 – Jan 2026",
      gradient: "from-cyan-500/15 to-blue-500/15",
      border: "border-cyan-500/30 hover:border-cyan-400/50",
      text: "text-cyan-400",
    },
    {
      icon: "💻",
      title: "Full-Stack Development",
      subtitle: "Spring Boot · React · Microservices",
      gradient: "from-purple-500/15 to-pink-500/15",
      border: "border-purple-500/30 hover:border-purple-400/50",
      text: "text-purple-400",
    },
    {
      icon: "⚙️",
      title: "DevOps & Cloud",
      subtitle: "Docker · Kubernetes · AWS EC2",
      gradient: "from-sky-500/15 to-indigo-500/15",
      border: "border-sky-500/30 hover:border-sky-400/50",
      text: "text-sky-400",
    },
    {
      icon: "🤖",
      title: "ML Integration",
      subtitle: "XGBoost · FastAPI · Python",
      gradient: "from-orange-500/15 to-yellow-500/15",
      border: "border-orange-500/30 hover:border-orange-400/50",
      text: "text-orange-400",
    },
    {
      icon: "📄",
      title: "IEEE Publication",
      subtitle: "First Author · INDIACom 2024",
      gradient: "from-green-500/15 to-emerald-500/15",
      border: "border-green-500/30 hover:border-green-400/50",
      text: "text-green-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* About Text */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm a Third-year Computer Science Engineering student at
              <span className="text-cyan-400 font-semibold"> The Oxford College of Engineering, Bangalore</span>,
              passionate about building reliable, scalable backend systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I build production-ready systems using
              <span className="text-cyan-400"> Spring Boot, Kafka, Docker, Kubernetes, and AWS</span> — with hands-on
              experience shipping microservices, designing event-driven pipelines, and integrating ML models into
              real applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I've taken projects from idea to deployment — hosting on
              <span className="text-cyan-400 font-semibold"> AWS EC2</span> with custom domains, HTTPS, and
              containerized services — and I'm comfortable owning the full backend stack independently.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I enjoy the intersection of backend engineering and ML — building systems where models aren't just
              notebooks but actual services powering real decisions, like
              <span className="text-cyan-400"> fraud detection </span>
              and
              <span className="text-cyan-400"> freight pricing prediction</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Outside of projects, I stay sharp through competitive programming —
              <span className="text-cyan-400 font-semibold"> 850+ LeetCode problems</span> solved with a
              <span className="text-cyan-400 font-semibold"> peak contest rating of 1832</span> and a global top 5%
              standing.
            </p>
          </div>
        </div>

          {/* Key Highlights */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Key Highlights</h3>
            {highlights.map((h) => (
              <div
                key={h.title}
                className={`bg-gradient-to-br ${h.gradient} backdrop-blur-sm rounded-lg p-4 border ${h.border} transition-all duration-300`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{h.icon}</div>
                  <div>
                    <div className={`text-lg font-bold ${h.text}`}>{h.title}</div>
                    <div className="text-sm text-gray-400">{h.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div className="text-gray-300 font-medium text-sm">{skill.name}</div>
                  <div className="text-xs text-gray-500">{skill.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;