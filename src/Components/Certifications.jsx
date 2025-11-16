import { ExternalLink } from 'lucide-react';

function Certifications() {
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
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-400">
            Professional certifications and achievements
          </p>
        </div>
        
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