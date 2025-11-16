import { ExternalLink } from 'lucide-react';

function Publications() {
  const publications = [
    {
      title: "FBG Sensor Design and Analysis for Early Detection of Cancer",
      journal: "2024 11th International Conference on Computing for Sustainable Global Development (INDIACom)",
      authors: "S C Sharan, H K Dhruva, T Mary Anitha, Neil Roy, Preeta Sharan, R Madhwesha Moudgalya",
      publishDate: "April 2024",
      publisher: "IEEE",
      doi: "10.23919/INDIACom61295.2024.10498873",
      citedBy: 2,
      abstract: "This paper presents a simulation-based study on Fiber Bragg Grating (FBG) sensors for early cancer detection. Using RSoft software, FBG sensors were designed and analyzed by precisely varying the grating positions, enabling the identification of wavelength shifts that can indicate early-stage cancer.",
      link: "https://ieeexplore.ieee.org/document/10498873",
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Research Publications
          </h2>
          <p className="text-xl text-gray-400">
            Published research work and academic contributions
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((paper, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 leading-tight">
                {paper.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-lg">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="truncate">{paper.journal}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>{paper.publishDate}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-lg">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="truncate">DOI: {paper.doi}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-lg">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Cited: {paper.citedBy}</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-cyan-400">Authors:</span> {paper.authors}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
              >
                View on IEEE Xplore
                <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;