import NeonPulseAvatar from "./NeonPulseAvatar";

function About() {
  const skills = [
    { name: "Java", icon: "☕", category: "Backend" },
    { name: "Spring Boot", icon: "🍃", category: "Backend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "JavaScript", icon: "📜", category: "Frontend" },
    { name: "Postgresql", icon: "🗄️", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Microservices", icon: "🔄", category: "Architecture" },
    { name: "WebSockets", icon: "🔌", category: "Real-time" },
    { name: "REST API", icon: "🔗", category: "Backend" },
    { name: "Git", icon: "📦", category: "Tools" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "Apache Kafka", icon: "📡", category: "Backend Messaging Framework" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <NeonPulseAvatar></NeonPulseAvatar>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-500 rounded-full opacity-70 animate-bounce shadow-lg shadow-blue-500/50"></div>
            <div className="absolute top-1/4 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a computer science engineering student who enjoys building reliable backend systems and improving through consistent problem-solving. I regularly practice DSA — with over- 
                <span className="text-cyan-400 font-semibold">700 problems on LeetCode</span> — and — <span className="text-cyan-400 font-semibold">Contest rating of 1677</span> — focusing on understanding concepts rather than just solving for numbers. I like learning new tools, exploring system design ideas, and working on projects that challenge me to think better.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                Experienced in building scalable and production-ready systems with expertise in 
                <span className="text-cyan-400">React, Spring Boot, AWS, Docker, Kafka, and microservices architecture</span>. Skilled in implementing features like JWT authentication, database operations, and real-time communication via WebSockets. Recently, I’ve been expanding my knowledge in 
                <span className="text-cyan-400">low-level design (LLD)</span> to strengthen my system design fundamentals.
              </p>

            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Key Highlights</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">700+</div>
                    <div className="text-gray-300">LeetCode Problems Solved</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">💻</div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-1">Full-Stack</div>
                    <div className="text-gray-300">Development Projects</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📄</div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">Research</div>
                    <div className="text-gray-300">Published IEEE Paper</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="text-gray-300 font-medium mb-1">{skill.name}</div>
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
