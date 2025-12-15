import React from 'react';

const Sponsors = () => {
    const sponsors = [
        { name: "Big Dramamine", slogan: "Keeping lunch down since 1952" },
        { name: "The Rubber Duck Consortium", slogan: "We float, so you don't have to" },
        { name: "Lost & Found Dept.", slogan: "We have your sunglasses" },
        { name: "SPF 5000", slogan: "For when the sun is strictly personal" }
    ];

    return (
        <section className="section-padding bg-black/30">
            <div className="container text-center">
                <h2 className="text-2xl text-gold mb-8 opacity-70">Proudly (Fake) Sponsored By</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="h-20 w-32 border-2 border-white/20 rounded flex items-center justify-center p-2 mb-2 bg-white/5">
                                <span className="font-bold text-lg">{sponsor.name}</span>
                            </div>
                            <span className="text-xs text-gray-400 italic">{sponsor.slogan}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
