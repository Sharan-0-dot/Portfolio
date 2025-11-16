function NeonPulseAvatar() {
  return (
    <div className="relative mb-8 inline-block">
      <div className="absolute inset-0 animate-pulse-fast">
        <svg className="absolute top-0 right-0 w-12 h-12 text-cyan-400 opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-10 h-10 text-blue-400 opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </div>

      {/* Neon glow rings */}
      <div className="absolute inset-0 animate-ping-slow">
        <div className="w-48 h-48 sm:w-64 sm:h-64 border-2 border-cyan-400 rounded-full"></div>
      </div>
      <div className="absolute inset-0 animate-ping-slow" style={{animationDelay: '0.5s'}}>
        <div className="w-48 h-48 sm:w-64 sm:h-64 border-2 border-blue-400 rounded-full"></div>
      </div>
      <div className="absolute inset-0 animate-ping-slow" style={{animationDelay: '1s'}}>
        <div className="w-48 h-48 sm:w-64 sm:h-64 border-2 border-purple-400 rounded-full"></div>
      </div>

      {/* Main avatar with intense glow */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 animate-float">
        {/* Inner glow layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse blur-sm"></div>
        
        <div className="w-44 h-44 sm:w-60 sm:h-60 bg-gray-800 rounded-full flex items-center justify-center shadow-xl overflow-hidden border-4 border-gray-700 relative">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          <div className="text-5xl sm:text-7xl relative z-10 animate-bounce-slow">👨‍💻</div>
        </div>

        {/* Orbital dots with trail effect */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 shadow-lg shadow-cyan-400/80 blur-sm"></div>
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-300 rounded-full -translate-x-1/2"></div>
        </div>
        <div className="absolute inset-0 animate-spin-reverse">
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 shadow-lg shadow-blue-400/80 blur-sm"></div>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-300 rounded-full -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default NeonPulseAvatar;