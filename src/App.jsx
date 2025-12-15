import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SailingVideo from './components/SailingVideo';
import GearList from './components/GearList';
import Testimonials from './components/Testimonials';
import DailySchedule from './components/DailySchedule';
import Fears from './components/Fears';
import SurvivalTips from './components/SurvivalTips';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <SailingVideo />
      <GearList />
      <Fears />
      <Testimonials />
      <DailySchedule />
      <SurvivalTips />
      <Gallery />
      <FAQ />
      <Sponsors />

      <footer className="bg-black py-8 text-center text-gray-500">
        <p>🎉 Bon Voyage Keith! 🎉</p>
        <p style={{ marginTop: '8px', fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Keith's Sailing Adventures. No rubber ducks were harmed in the making of this website.</p>
      </footer>
    </div>
  );
}

export default App;
