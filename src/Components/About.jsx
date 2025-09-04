function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                <img
                  src="/mainPhoto.JPG"
                  alt="Sharan SC"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <div className="text-4xl sm:text-5xl md:text-6xl hidden">
                  👨‍💻
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-purple-500 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute top-1/4 -left-8 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
              About Me
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center sm:text-left">
                I’m a Computer Science engineering student with a passion for
                building scalable backends and solving tough problems. I treat
                DSA like my daily workout — 600+ problems solved on LeetCode and
                counting! When I’m not debugging or optimizing code, you’ll
                probably find me planning my next full-stack project or learning
                something new.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center sm:text-left">
                Currently, I am building full-stack projects using React for the
                frontend and working with Spring Boot for the backend, where I
                have implemented features like JWT authentication, database
                integration, and real-time communication using WebSockets. I
                enjoy creating scalable, reliable applications and continuously
                exploring new technologies to improve my skills. Outside of
                coding, I like taking on challenges that push me to think
                critically and enjoy building clean, user-friendly solutions
                that solve real problems.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 text-gray-800">
              Key Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  600+
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  LeetCode Problems Solved
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                  Full-Stack
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  Development Projects
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                  Research
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  Published IEEE Paper
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
