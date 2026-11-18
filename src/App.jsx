import React, { useState, useEffect } from 'react';
import { IntroCurtain } from './components/IntroCurtain';
import { PetalsCanvas } from './components/PetalsCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Shlok } from './components/Shlok';
import { CoupleIntro } from './components/CoupleIntro';
import { Countdown } from './components/Countdown';
import { EventsTimeline } from './components/EventsTimeline';
import { Baraat } from './components/Baraat';
import { Reception } from './components/Reception';
import { Venue } from './components/Venue';
import { Family } from './components/Family';
import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';

export function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  // If user has visited before or opened in session, or if prefers direct view
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    // Smoothly scroll to hero or top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="wedding-app-root">
      {/* 1. Opening Palace Doors / Patrika Unfold Animation */}
      <IntroCurtain onOpen={handleOpenInvitation} isOpen={isInvitationOpen} />

      {/* 2. Falling Marigold Petals Canvas (Performance & Reduced Motion Aware) */}
      <PetalsCanvas />

      {/* 3. Floating Navbar with Theme Toggle, Music Toggle, Share Modal */}
      <Navbar />

      <main id="main-content">
        {/* 4. Royal Hero Section */}
        <Hero />

        {/* 5. Sacred Shlokas Section */}
        <Shlok />

        {/* 6. Couple Lineage & Invitation Letter */}
        <CoupleIntro />

        {/* 7. Live Auspicious Countdown */}
        <Countdown />

        {/* 8. Events Timeline (6 Auspicious Events) */}
        <EventsTimeline />

        {/* 9. Baraat & Shubh Lagn (Saat Phere) Spotlight */}
        <Baraat />

        {/* 10. Grand Snehbhoj & Ashirwad Samaroh Showcase */}
        <Reception />

        {/* 11. Venue Directions & Interactive Map */}
        <Venue />

        {/* 12. Family Accordion (Preshak, Darshanabhilashi, Swagatatur, Vineet, Bal Manuhar) */}
        <Family />

        {/* 13. RSVP / "आशीर्वाद दें" WhatsApp confirmation */}
        <RSVP />
      </main>

      {/* 14. Royal Footer */}
      <Footer />

      <style>{`
        .wedding-app-root {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        #main-content {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}

export default App;
