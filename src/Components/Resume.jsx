import { Download, ExternalLink } from "lucide-react";

function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          My Resume
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Download or view my complete professional resume
        </p>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
          <div className="mb-8">
            <div className="text-6xl mb-4">📄</div>
            <p className="text-gray-300 text-lg">
              Get detailed information about my experience, skills, and achievements
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gray-700/50 border border-gray-600 text-gray-200 font-semibold py-4 px-8 rounded-xl hover:bg-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={20} />
              View Resume
            </a>
          
            <a 
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;