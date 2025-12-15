import React from 'react';

const Stats = () => {
    const stats = [
        { label: "Years of Military Service", value: "Hero", icon: "🎖️" },
        { label: "Weeks of Sailing Training", value: "4", icon: "📚" },
        { label: "Knots Successfully Tied", value: "3", icon: "🪢" },
        { label: "Rubber Ducks Packed", value: "14", icon: "🦆" }
    ];

    return (
        <section className="section-padding bg-opacity-50 bg-blue-900">
            <div className="container">
                <h2 className="text-4xl text-center mb-12 text-gold">The "Impressive" Stats</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-xl text-center border border-white/10 hover:transform hover:scale-105 transition-transform duration-300">
                            <div className="text-5xl mb-4">{stat.icon}</div>
                            <div className="text-3xl font-bold mb-2 text-gold">{stat.value}</div>
                            <div className="text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
