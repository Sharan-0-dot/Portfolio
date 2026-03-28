import { ExternalLink, Trophy } from 'lucide-react';

function Certifications() {
  const achievements = [
    {
      title: "2nd Place — HackSetu",
      issuer: "BNMIT · TATVA",
      date: "2026",
      description: "Built SAHAJ — an intelligent traffic management system with ML-driven signal control, Spring Boot backend, and React + Leaflet frontend. Problem statements sourced from Bangalore City Traffic Police Department.",
      icon: "🏆",
      color: "from-yellow-500/15 to-orange-500/15",
      border: "border-yellow-500/30 hover:border-yellow-400/50",
      text: "text-yellow-400",
    },
  ];

  const certifications = [
    {
      title: "Cloud Computing 101",
      issuer: "AWS (Amazon Web Service)",
      date: "2025",
      credentialId: "",
      image: "/cloud.png",
      link: "https://www.credly.com/badges/8541cdbd-022e-4c98-9535-affdc0470d95/public_url"
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "e0eaaf7e4c99",
      image: "/problem-solving(in).png",
      link: "https://www.hackerrank.com/certificates/e0eaaf7e4c99"
    },
    {
      title: "Java",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "d19baa412ea5",
      image: "/java.png",
      link: "https://www.hackerrank.com/certificates/d19baa412ea5"
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "88a488a7e661",
      image: "/problem-solving(basic).png",
      link: "https://www.hackerrank.com/certificates/88a488a7e661"
    },
    {
      title: "MySQL",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "f614c9056464",
      image: "/sql.png",
      link: "https://www.hackerrank.com/certificates/f614c9056464"
    },
    {
      title: "Photonic Society Internship",
      issuer: "IEEE Photonic Society",
      date: "2024",
      credentialId: "null",
      image: "/photonic.jpg",
      link: "#"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-400">
            Professional certifications, awards, and hackathon wins
          </p>
        </div>

        {/* Achievements Row */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Trophy size={20} className="text-yellow-400" />
            <h3 className="text-2xl font-bold text-gray-200">Achievements</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((a, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${a.color} backdrop-blur-sm rounded-2xl p-6 border ${a.border} transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{a.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className={`text-lg font-bold ${a.text}`}>{a.title}</h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap">{a.date}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium mb-2">{a.issuer}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{a.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-gray-500 text-sm font-medium">Certifications</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="aspect-square overflow-hidden bg-gray-900 flex items-center justify-center p-8">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-2 font-medium">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>

                {cert.credentialId && cert.credentialId !== "null" && (
                  <p className="text-xs text-gray-600 mb-4 font-mono bg-gray-900/50 px-2 py-1 rounded">
                    ID: {cert.credentialId}
                  </p>
                )}

                {cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group/link"
                  >
                    View Certificate
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;