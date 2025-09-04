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
    <section id="publications" className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Research Publications
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Published research work and academic contributions
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {publications.map((paper, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-500"
            >
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 leading-tight">
                {paper.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span className="truncate">{paper.journal}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></span>
                  <span>{paper.publishDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
                  <span className="truncate">DOI: {paper.doi}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0"></span>
                  <span>Cited by: {paper.citedBy}</span>
                </div>
              </div>

              {/* Authors */}
              <div className="mb-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="font-medium">Authors:</span> {paper.authors}
                </p>
              </div>

              {/* Abstract */}
              <div className="mb-6">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex justify-start">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                >
                  View on IEEE Xplore
                  <ExternalLink size={16} className="flex-shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;