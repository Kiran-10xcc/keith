import React from 'react';

const DailySchedule = () => {
    const schedule = [
        { time: "06:00", activity: "Wake up, immediately regret it." },
        { time: "06:15", activity: "Look for coffee. Realise it's instant." },
        { time: "08:00", activity: "Pretend to understand wind direction." },
        { time: "12:00", activity: "Lunch (subject to swell conditions)." },
        { time: "14:00", activity: "Nap disguised as 'keeping watch'." },
        { time: "18:00", activity: "Wonder if mermaids are real." },
        { time: "22:00", activity: "Sleep / Dream of stationary ground." },
    ];

    return (
        <section className="section-padding">
            <div className="container max-w-2xl">
                <h2 className="text-4xl text-center mb-12 text-white">What Keith's Day Will Look Like</h2>
                <div className="relative border-l-2 border-gold/30 ml-4 md:ml-0 md:pl-8 space-y-8">
                    {schedule.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gold shadow-[0_0_10px_var(--color-gold)]"></div>

                            <div className="md:flex items-baseline justify-between bg-white/5 p-4 rounded-lg border border-white/10 transition hover:bg-white/10">
                                <span className="text-gold font-mono font-bold text-xl mr-4">{item.time}</span>
                                <span className="text-gray-200 text-lg">{item.activity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DailySchedule;
