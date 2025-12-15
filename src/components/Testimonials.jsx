import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            author: "His Former Sergeant",
            role: "Retired, Confused",
            quote: "He survived my training. He can probably survive a yacht. Probably."
        },
        {
            author: "The Ocean",
            role: "Vast & Amused",
            quote: "Military discipline? Adorable. Wait till you meet my waves."
        },
        {
            author: "A Concerned Dolphin",
            role: "Local Resident",
            quote: "He salutes every time he sees us. It's endearing but concerning."
        },
        {
            author: "Keith's inner monologue",
            role: "Voice of Reason",
            quote: "I survived combat. How hard can water be? ...Right?"
        }
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-ocean-blue)' }}>
            <div className="container">
                <h2 className="text-gold" style={{ textAlign: 'center', marginBottom: '40px' }}>What We Predict They'll Say</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {reviews.map((review, index) => (
                        <div key={index} style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '20px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"{review.quote}"</p>
                            <div>
                                <strong style={{ color: 'var(--color-gold)' }}>{review.author}</strong>
                                <div style={{ fontSize: '0.9em', color: 'var(--color-text-muted)' }}>{review.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
