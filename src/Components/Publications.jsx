import { ExternalLink } from 'lucide-react';
import { eyebrow, heading, gradientText, bodyText, cardBase, fontDisplay, fontMono, btnPrimary } from "./designTokens";

function Publications() {
  const publications = [
    {
      title: "FBG Sensor Design and Analysis for Early Detection of Cancer",
      journal: "2024 11th INDIACom",
      authors: "S C Sharan, H K Dhruva, T Mary Anitha, Neil Roy, Preeta Sharan, R Madhwesha Moudgalya",
      publishDate: "April 2024",
      doi: "10.23919/INDIACom61295.2024.10498873",
      citedBy: 2,
      abstract: "A simulation-based study on Fiber Bragg Grating (FBG) sensors for early cancer detection. Using RSoft software, FBG sensors were designed and analyzed by precisely varying the grating positions, enabling identification of wavelength shifts that can indicate early-stage cancer.",
      link: "https://ieeexplore.ieee.org/document/10498873",
    }
  ];

  return (
    <div>
      <p className={eyebrow}>07 — Publications</p>
      <h2 className={`${heading} mt-3 mb-10`}>
        Research <span className={gradientText}>contributions</span>
      </h2>

      <div className="space-y-6">
        {publications.map((paper) => (
          <div key={paper.doi} className={`${cardBase} p-8`}>
            <h3 className={`${fontDisplay} text-xl font-bold mb-6 text-[#EDEFF7] leading-tight`}>{paper.title}</h3>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 ${fontMono} text-xs`}>
              <div className="flex items-center gap-2 text-[#8891A8] bg-white/5 px-3 py-2 rounded-lg">
                <span className="w-1.5 h-1.5 bg-[#7FD0FF] rounded-full shrink-0" /> {paper.journal}
              </div>
              <div className="flex items-center gap-2 text-[#8891A8] bg-white/5 px-3 py-2 rounded-lg">
                <span className="w-1.5 h-1.5 bg-[#6FA8FF] rounded-full shrink-0" /> {paper.publishDate}
              </div>
              <div className="flex items-center gap-2 text-[#8891A8] bg-white/5 px-3 py-2 rounded-lg truncate">
                <span className="w-1.5 h-1.5 bg-[#D98E63] rounded-full shrink-0" /> DOI: {paper.doi}
              </div>
              <div className="flex items-center gap-2 text-[#8891A8] bg-white/5 px-3 py-2 rounded-lg">
                <span className="w-1.5 h-1.5 bg-[#E3C16F] rounded-full shrink-0" /> Cited: {paper.citedBy}
              </div>
            </div>

            <p className={`${bodyText} text-sm mb-4`}>
              <span className="font-semibold text-[#6FA8FF]">Authors: </span>{paper.authors}
            </p>
            <p className={`${bodyText} text-sm mb-8`}>{paper.abstract}</p>

            <a href={paper.link} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              View on IEEE Xplore <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;
