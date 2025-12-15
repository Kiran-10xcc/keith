import React from 'react';

const SurvivalTips = () => {
    const tips = [
        {
            number: "01",
            title: "Never question his navigation",
            description: "He survived the military. He can survive your doubts. Probably."
        },
        {
            number: "02",
            title: "Expect military precision... eventually",
            description: "Old habits die hard. Except on boats. On boats, chaos reigns."
        },
        {
            number: "03",
            title: "Never touch his lucky duck",
            description: "That rubber duck has been through basic training. Respect it."
        },
        {
            number: "04",
            title: "His sea legs are... pending",
            description: "Land combat? No problem. Sea legs? We'll find out."
        }
    ];

    return (
        <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--color-deep-ocean) 0%, #1a1a2e 100%)' }}>
            <div className="container">
                <h2 className="text-4xl text-center mb-4 text-white">Crew Survival Guide</h2>
                <p className="text-center text-gray-400 mb-12">Essential tips for anyone sailing with Keith</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tips.map((tip, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                padding: '30px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <span style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-10px',
                                fontSize: '8rem',
                                fontWeight: '800',
                                color: 'rgba(251, 191, 36, 0.05)',
                                lineHeight: '1'
                            }}>{tip.number}</span>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h3 className="text-2xl text-gold mb-4">{tip.title}</h3>
                                <p className="text-gray-300 text-lg">{tip.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SurvivalTips;
