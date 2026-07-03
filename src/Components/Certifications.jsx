import { ExternalLink, Trophy } from 'lucide-react';
import { eyebrow, heading, gradientText, bodyText, chip, cardBase, fontDisplay, fontMono, link } from "./designTokens";

function Certifications() {
  const achievements = [
    {
      title: "1st Place — OxyHack",
      issuer: "OxyHack · Oxford",
      date: "2026",
      description: "Built ForeignPay — a fintech platform enabling seamless cross-border payments with a scalable Spring Boot backend and React frontend.",
    },
    {
      title: "2nd Place — HackSetu",
      issuer: "BNMIT · TATVA",
      date: "2026",
      description: "Built SAHAJ — an intelligent traffic management system with ML-driven signal control, sourced from Bangalore City Traffic Police problem statements.",
    },
  ];

  const certifications = [
    { title: "Cloud Computing 101", issuer: "AWS", date: "2025", image: "/cloud.png", link: "https://www.credly.com/badges/8541cdbd-022e-4c98-9535-affdc0470d95/public_url" },
    { title: "Problem Solving (Intermediate)", issuer: "HackerRank", date: "2025", credentialId: "e0eaaf7e4c99", image: "/problem-solving(in).png", link: "https://www.hackerrank.com/certificates/e0eaaf7e4c99" },
    { title: "Java", issuer: "HackerRank", date: "2025", credentialId: "d19baa412ea5", image: "/java.png", link: "https://www.hackerrank.com/certificates/d19baa412ea5" },
    { title: "Problem Solving (Basic)", issuer: "HackerRank", date: "2025", credentialId: "88a488a7e661", image: "/problem-solving(basic).png", link: "https://www.hackerrank.com/certificates/88a488a7e661" },
    { title: "MySQL", issuer: "HackerRank", date: "2025", credentialId: "f614c9056464", image: "/sql.png", link: "https://www.hackerrank.com/certificates/f614c9056464" },
    { title: "Photonic Society Internship", issuer: "IEEE Photonic Society", date: "2024", credentialId: null, image: "/photonic.jpg", link: "#" },
  ];

  return (
    <div>
      <p className={eyebrow}>06 — Certifications & Achievements</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        Proof <span className={gradientText}>on paper</span>
      </h2>

      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <Trophy size={18} className="text-[#FFB454]" />
          <h3 className={`${fontDisplay} text-xl font-bold text-[#EDEFF7]`}>Achievements</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <div key={a.title} className={`${cardBase} p-6`}>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-lg font-bold text-[#FFB454]">{a.title}</h4>
                <span className={`${fontMono} text-xs text-[#8891A8] whitespace-nowrap`}>{a.date}</span>
              </div>
              <p className="text-sm text-[#8891A8] font-medium mb-2">{a.issuer}</p>
              <p className={`${bodyText} text-sm`}>{a.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-white/10" />
        <span className={`${fontMono} text-[#8891A8] text-xs uppercase tracking-widest`}>Certifications</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.title} className={`${cardBase} overflow-hidden`}>
            <div className="aspect-square overflow-hidden bg-[#0A0D16] flex items-center justify-center p-8">
              <img src={cert.image} alt={cert.title} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-1 text-[#EDEFF7]">{cert.title}</h3>
              <p className="text-[#8891A8] text-sm mb-1">{cert.issuer}</p>
              <p className={`${fontMono} text-[#8891A8] text-xs mb-4`}>{cert.date}</p>

              {cert.credentialId && (
                <p className={`${fontMono} text-[11px] text-[#8891A8]/70 mb-4 bg-white/5 px-2 py-1 rounded inline-block`}>
                  ID: {cert.credentialId}
                </p>
              )}

              {cert.link !== "#" && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm font-medium ${link}`}>
                  View Certificate <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
