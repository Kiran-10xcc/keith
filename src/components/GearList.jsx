import React from 'react';

const GearList = () => {
    const items = [
        { name: "Sunscreen (SPF 5000)", checked: true },
        { name: "Emergency Rubber Duck", checked: true },
        { name: "Instructions on 'How to Sail'", checked: true },
        { name: "Dignity", checked: false },
        { name: "Sea Sickness Bags (x50)", checked: true },
        { name: "Pirate Hat (for morale)", checked: true },
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="text-gold" style={{ textAlign: 'center', marginBottom: '40px' }}>The Essential Gear List</h2>
                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    background: 'var(--color-ocean-blue)',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
                }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {items.map((item, index) => (
                            <li key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '12px 0',
                                borderBottom: index !== items.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                            }}>
                                <span style={{
                                    marginRight: '15px',
                                    fontSize: '1.2em',
                                    color: item.checked ? '#4ade80' : '#f87171'
                                }}>
                                    {item.checked ? '✓' : '✗'}
                                </span>
                                <span style={{
                                    textDecoration: item.checked ? 'none' : 'line-through',
                                    opacity: item.checked ? 1 : 0.6
                                }}>
                                    {item.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default GearList;
