function LeetCode() {
  return (
    <section id="leetcode" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            LeetCode Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tracking my progress in algorithmic problem-solving and competitive programming
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-full flex justify-center overflow-hidden rounded-xl">
              <img
                src="https://leetcard.jacoblin.cool/sharansc482?ext=heatmap"
                alt="LeetCode Stats"
                className="w-full max-w-2xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="https://leetcode.com/sharansc482"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>View Full Profile</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Consistency is key • Keep solving, keep growing
          </p>
        </div>
      </div>
    </section>
  );
}

export default LeetCode;