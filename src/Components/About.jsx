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
    { name: "Kubernetes", icon: "☸️", category: "DevOps" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Apache Kafka", icon: "📡", category: "Messaging" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Profile */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <NeonPulseAvatar />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50" />
            <div className="absolute top-1/4 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-ping" />
          </div>
        </div>

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
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a computer science engineering student who enjoys building reliable backend systems and improving through consistent problem-solving. I regularly practice DSA —
                <span className="text-cyan-400 font-semibold"> 800+ problems on LeetCode</span> with a
                <span className="text-cyan-400 font-semibold"> contest rating of 1732</span>, focusing on strong fundamentals and clean problem-solving.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                Experienced in building production-ready systems using
                <span className="text-cyan-400"> Spring Boot, React, Docker, Kafka, AWS, and microservices</span>.
                I work with JWT authentication, databases, real-time communication, and am currently strengthening my
                <span className="text-cyan-400"> low-level design (LLD)</span> skills.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Key Highlights
            </h3>

            <div className="space-y-4">
              {/* LeetCode */}
              <div className="bg-gradient-to-br from-cyan-500/15 to-blue-500/15 backdrop-blur-sm rounded-lg p-5 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🎯</div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <div className="text-2xl font-bold text-cyan-400">
                        800+
                      </div>
                      <span className="text-gray-500">|</span>
                      <div className="text-xl font-semibold text-yellow-400">
                        1732
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      LeetCode Problems · Contest Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Stack */}
              <div className="bg-gradient-to-br from-purple-500/15 to-pink-500/15 backdrop-blur-sm rounded-lg p-5 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">💻</div>
                  <div>
                    <div className="text-xl font-bold text-purple-400">
                      Full-Stack
                    </div>
                    <div className="text-sm text-gray-400">
                      React · Spring Boot · APIs
                    </div>
                  </div>
                </div>
              </div>

              {/* DevOps */}
              <div className="bg-gradient-to-br from-sky-500/15 to-indigo-500/15 backdrop-blur-sm rounded-lg p-5 border border-sky-500/30 hover:border-sky-400/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">⚙️</div>
                  <div>
                    <div className="text-xl font-bold text-sky-400">
                      DevOps & Cloud
                    </div>
                    <div className="text-sm text-gray-400">
                      Docker · Kubernetes · AWS
                    </div>
                  </div>
                </div>
              </div>

              {/* Research */}
              <div className="bg-gradient-to-br from-green-500/15 to-emerald-500/15 backdrop-blur-sm rounded-lg p-5 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">📄</div>
                  <div>
                    <div className="text-xl font-bold text-green-400">
                      Research
                    </div>
                    <div className="text-sm text-gray-400">
                      Published IEEE Paper
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div className="text-gray-300 font-medium">{skill.name}</div>
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