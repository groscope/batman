import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden">
      {/* Main Batman Logo Container */}
      <div className="relative w-48 h-48 mb-8">
        {/* Batman Logo SVG */}
        <svg 
          viewBox="0 0 100 60" 
          className="w-full h-full animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          <path
            d="M50 0 L100 40 L85 40 C85 40 75 37 50 37 C25 37 15 40 15 40 L0 40 L50 0"
            className="fill-gray-800"
          />
          <path
            d="M21 40 C21 40 27 48 50 48 C73 48 79 40 79 40 C79 40 75 53 50 53 C25 53 21 40 21 40"
            className="fill-gray-800"
          />
          <path
            d="M50 2 L98 40 L84 40 C84 40 74 37 50 37 C26 37 16 40 16 40 L2 40 L50 2"
            className="fill-gray-900 animate-bat-flicker"
          />
          <path
            d="M22 40 C22 40 28 47 50 47 C72 47 78 40 78 40 C78 40 74 52 50 52 C26 52 22 40 22 40"
            className="fill-gray-900 animate-bat-flicker"
          />
        </svg>

        {/* Glowing Circles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-gray-700/30 rounded-full animate-ping"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      {/* Loading Text and Progress */}
      <div className="relative z-10">
        <p className="text-xl font-bold text-gray-600 tracking-[0.3em] mb-6 animate-pulse">
          VENGEANCE
        </p>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden">
          <div className="h-full bg-gray-700 animate-progress-dark" />
        </div>
      </div>

      {/* Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-gray-800 to-transparent animate-rain"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3,
              animationDuration: `${0.5 + Math.random() * 0.5}s`,
              animationDelay: `-${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Smoke Effect */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-overlay animate-smoke opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            background: 'radial-gradient(circle at center, #ffffff, transparent)',
            animationDuration: `${10 + Math.random() * 10}s`,
            animationDelay: `-${Math.random() * 10}s`
          }}
        />
      ))}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes progress-dark {
          0% { width: 0; opacity: 0.5; }
          50% { width: 100%; opacity: 1; }
          100% { width: 0; opacity: 0.5; }
        }

        @keyframes bat-flicker {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @keyframes rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }

        @keyframes smoke {
          0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
          50% { transform: translate(20px, -20px) scale(1.5); opacity: 0.2; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
        }

        .animate-progress-dark {
          animation: progress-dark 3s infinite;
        }

        .animate-bat-flicker {
          animation: bat-flicker 2s infinite;
        }

        .animate-rain {
          animation: rain 1s linear infinite;
        }

        .animate-smoke {
          animation: smoke 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Loading;