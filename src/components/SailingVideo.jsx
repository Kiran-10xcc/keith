import React, { useState, useEffect } from 'react';

const SailingVideo = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Using the images we know exist
    const slides = [
        {
            src: '/assets/keith_sailing_1.png',
            caption: 'Keith battling the 50ft waves!',
            duration: 5000
        },
        {
            src: '/assets/keith_sailing_2.png',
            caption: 'Pull! PULL! The sail needs adjusting!',
            duration: 5000
        },
        {
            src: '/assets/hero.png',
            caption: 'Safe (for now) with the lucky duck.',
            duration: 5000
        },
    ];

    // Auto-advance slideshow
    useEffect(() => {
        if (!isPlaying) return;

        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, slides[currentSlide].duration);

        return () => clearTimeout(timer);
    }, [currentSlide, isPlaying, slides]);

    // Calculate progress for progress bar
    const totalDuration = slides.reduce((sum, s) => sum + s.duration, 0);
    const elapsedDuration = slides.slice(0, currentSlide).reduce((sum, s) => sum + s.duration, 0);
    // Rough estimate of progress within current slide
    const progressPercent = ((elapsedDuration + (slides[currentSlide].duration / 2)) / totalDuration) * 100;

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-deep-ocean)' }}>
            <div className="container">
                <h2 className="text-4xl text-center mb-8">⛵ Keith vs. The Seven Seas</h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Cinematic Preview (Auto-Playing)
                </p>

                {/* Video Player Container */}
                <div className="relative" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-40"></div>

                    {/* Main video container */}
                    <div
                        className="relative rounded-xl overflow-hidden shadow-2xl bg-black"
                        style={{ paddingBottom: '56.25%', height: 0 }} // 16:9 Aspect Ratio
                    >

                        {/* Slides - absolute positioned to stack */}
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                                style={{
                                    opacity: currentSlide === index ? 1 : 0,
                                    zIndex: currentSlide === index ? 10 : 0,
                                }}
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.caption}
                                    className="w-full h-full object-cover"
                                    style={{
                                        animation: currentSlide === index ? 'kenBurns 6s linear forwards' : 'none',
                                        transformOrigin: 'center center'
                                    }}
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                {/* Criterion Collection Style Caption */}
                                <div className="absolute bottom-16 left-0 right-0 text-center">
                                    <h3
                                        className="text-3xl font-bold text-white tracking-widest uppercase mb-2"
                                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                                    >
                                        {slide.caption}
                                    </h3>
                                </div>
                            </div>
                        ))}

                        {/* Controls Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/50 backdrop-blur-sm flex items-center px-4 z-20">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="mr-4 text-white hover:text-gold transition text-xl"
                            >
                                {isPlaying ? '⏸' : '▶'}
                            </button>

                            {/* Progress track */}
                            <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gold transition-all duration-500 ease-linear"
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>

                            <div className="ml-4 text-xs text-gray-300 font-mono">
                                00:{String(Math.floor((elapsedDuration / 1000) + 1)).padStart(2, '0')} / 00:15
                            </div>
                        </div>
                    </div>
                </div>

                {/* Adventure stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
                    <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <div style={{ fontSize: '2rem' }}>🌊</div>
                        <p className="text-2xl font-bold text-gold mt-2">50ft</p>
                        <p className="text-gray-400 text-sm">Expected Wave Height</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <div style={{ fontSize: '2rem' }}>💨</div>
                        <p className="text-2xl font-bold text-gold mt-2">60 knots</p>
                        <p className="text-gray-400 text-sm">Wind Speed Tolerance</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <div style={{ fontSize: '2rem' }}>🤢</div>
                        <p className="text-2xl font-bold text-gold mt-2">100%</p>
                        <p className="text-gray-400 text-sm">Seasickness Probability</p>
                    </div>
                </div>
            </div>

            {/* Global Styles for Animations */}
            <style>{`
                @keyframes kenBurns {
                    0% { transform: scale(1.0); }
                    100% { transform: scale(1.1); }
                }
            `}</style>
        </section>
    );
};

export default SailingVideo;
