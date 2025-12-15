import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-xl text-gold mb-4 animate-float">🎉 Bon Voyage 🎉</p>
        <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Keith Fowler
        </h1>
        <p className="text-xl md:text-2xl text-gold mb-8 italic">
          Ex-Military. Office Icon. Soon-To-Be Sailor.
        </p>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg inline-block border border-white/20">
          <p className="text-lg">
            About to conquer the Seven Seas, one rubber duck at a time. 🦆
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span style={{ fontSize: '4rem' }}>👇</span>
      </div>
    </section>
  );
};

export default Hero;
