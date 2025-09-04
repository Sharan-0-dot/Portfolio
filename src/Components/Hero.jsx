
import { ChevronDown } from 'lucide-react';

function Hero({ scrollToSection, scrollY }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div
          className="transform transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Hello, I'm Sharan S C
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Hi, I'm Sharan — a passionate backend developer and software
            engineering enthusiast. Welcome to my portfolio! Here, you'll find
            my projects, problem-solving journey, and the technologies I'm
            exploring as I build scalable and reliable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
}

export default Hero;