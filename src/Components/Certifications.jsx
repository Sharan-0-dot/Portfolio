import { ExternalLink } from 'lucide-react';

function Certifications() {
  const certifications = [
    {
      title: "Problem Solving(Intermidiate)",
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
      title: "Problem Solving(Basic)",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "88a488a7e661",
      image: "/problem-solving(basic).png",
      link: "https://www.hackerrank.com/certificates/88a488a7e661"
    },
    {
      title: "MySql",
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
    <section id="certifications" className="py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-8">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-2 font-medium">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                
                {cert.credentialId && (
                  <p className="text-xs text-gray-400 mb-4">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
                
                {cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    View Certificate
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
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