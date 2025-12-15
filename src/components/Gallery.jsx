import React from 'react';

const Gallery = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="text-4xl text-center mb-12">What To Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4 text-center">
                        <h3 className="text-2xl text-gold">Expectation vs. Reality</h3>
                        <p className="text-lg leading-relaxed">
                            While we all imagine Keith will be battling 50-foot waves with a steely gaze, the reality will probably involve more tangled ropes and wondering where the cafeteria is.
                        </p>
                        <p className="text-lg leading-relaxed">
                            We fully expect to see the invention of the "Keith Knot" - a technique so complex, it'll be impossible to undo.
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gold to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src="/assets/knot.png"
                            alt="Comically tangled knot"
                            className="relative rounded-lg shadow-2xl w-full transform transition duration-500 hover:scale-[1.01]"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded text-sm">
                            Fig 1. The "Keith Special"
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
