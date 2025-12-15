import React from 'react';

const Fears = () => {
    const fears = [
        { fear: "Waves taller than him", level: 85, emoji: "🌊" },
        { fear: "Running out of snacks", level: 99, emoji: "🍕" },
        { fear: "Sea monsters (probably real)", level: 72, emoji: "🦑" },
        { fear: "The Wi-Fi going out", level: 100, emoji: "📶" },
        { fear: "Actually having to steer", level: 88, emoji: "🎯" },
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-ocean-blue)' }}>
            <div className="container">
                <h2 className="text-4xl text-center mb-12 text-gold">Secret Fears & Phobias</h2>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    {fears.map((item, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg">
                                    <span style={{ marginRight: '10px' }}>{item.emoji}</span>
                                    {item.fear}
                                </span>
                                <span className="text-gold font-bold">{item.level}%</span>
                            </div>
                            <div style={{
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '9999px',
                                height: '12px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: `${item.level}%`,
                                    background: 'linear-gradient(90deg, var(--color-gold), #f97316)',
                                    height: '100%',
                                    borderRadius: '9999px',
                                    transition: 'width 1s ease-out'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fears;
