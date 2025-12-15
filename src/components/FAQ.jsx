import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "Does Keith actually know how to sail?",
            a: "Legally, we cannot answer this question."
        },
        {
            q: "What happens if Keith gets seasick?",
            a: "The fish get an unexpected meal. Everyone loses."
        },
        {
            q: "Will Keith see any pirates?",
            a: "We hope not. He'd probably try to befriend them."
        },
        {
            q: "How can I support Keith's journey?",
            a: "Thoughts and prayers. Also snacks. Mostly snacks."
        },
        {
            q: "Is this whole thing a good idea?",
            a: "Define 'good'. Define 'idea'. Next question."
        },
        {
            q: "What will Keith do after the race?",
            a: "Stand on solid ground. Cry a little. Eat pizza."
        }
    ];

    return (
        <section className="section-padding">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="text-4xl text-center mb-12 text-white">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                overflow: 'hidden'
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{
                                    width: '100%',
                                    padding: '20px',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--color-text-light)',
                                    fontSize: '1.125rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    textAlign: 'left'
                                }}
                            >
                                <span>{faq.q}</span>
                                <span style={{
                                    color: 'var(--color-gold)',
                                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                    transition: 'transform 0.3s'
                                }}>▼</span>
                            </button>
                            <div style={{
                                maxHeight: openIndex === index ? '200px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease-out'
                            }}>
                                <p style={{
                                    padding: '0 20px 20px',
                                    color: 'var(--color-text-muted)',
                                    margin: 0
                                }}>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
