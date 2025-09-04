import { Download } from "lucide-react";

function Resume() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">My Resume</h2>
        <p className="text-lg text-gray-600 mb-8">
          You can download my resume below:
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Download size={20} />
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
