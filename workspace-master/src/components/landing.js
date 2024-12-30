import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const roles = [
    'Full Stack Developer',
    'Laravel',
    'React Developer',
    // 'Code Artist'
  ];

  // Text animation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `radial-gradient(circle at center, 
                ${['#60A5FA', '#3B82F6', '#2563EB'][Math.floor(Math.random() * 3)]}55, 
                transparent)`,
              animation: `float ${Math.random() * 10 + 10}s infinite linear`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-white">
        {/* Main heading */}
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold mb-6 text-center tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
            WEB DEVELOPER
          </span>
        </h1>

        {/* Animated role text */}
        <div className="h-12 mb-8">
          <p 
            className={`text-xl md:text-3xl text-blue-400 text-center transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {roles[currentTextIndex]}
          </p>
        </div>

        {/* CTA Button */}
        <button className="group relative px-8 py-3 text-lg font-medium">
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-blue-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative text-white group-hover:text-white">Explore My Work</span>
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1 h-3 bg-white rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Add required styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .animate-float {
          animation: float 20s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Hero;