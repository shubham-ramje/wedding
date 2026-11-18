import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SwastikIcon } from './DecorativeDividers';

export const PersonalizedGuest = () => {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const name = searchParams.get('guest');
      if (name && name.trim()) {
        setGuestName(name.trim());
      }
    }
  }, []);

  if (!guestName) return null;

  return (
    <motion.div
      className="personalized-guest-wrapper"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="personalized-card royal-card">
        <div className="guest-badge">
          <SwastikIcon size={16} />
          <span>सादर आमंत्रण</span>
          <SwastikIcon size={16} />
        </div>
        <h2 className="guest-greeting-text">
          प्रिय <span className="guest-highlight-name">{guestName}</span> जी,
        </h2>
        <p className="guest-welcome-message">
          आपका एवं आपके परिवार का हमारे पारिवारिक मांगलिक प्रसंग में हार्दिक स्वागत एवं स्नेहिल अभिनंदन है।
        </p>
      </div>

      <style>{`
        .personalized-guest-wrapper {
          width: 100%;
          max-width: 680px;
          margin: 1.5rem auto 0 auto;
          padding: 0 1rem;
        }

        .personalized-card {
          padding: 1.2rem 1.6rem;
          text-align: center;
          background: linear-gradient(
            135deg,
            var(--card-bg-elevated) 0%,
            var(--bg-secondary) 100%
          );
          border: 1.5px solid var(--color-gold);
          box-shadow: 0 8px 25px rgba(201, 162, 75, 0.25);
        }

        .guest-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.4rem;
        }

        .guest-greeting-text {
          font-size: clamp(1.3rem, 3.5vw, 1.8rem);
          color: var(--color-maroon);
          margin-bottom: 0.3rem;
          font-weight: 700;
        }

        .guest-highlight-name {
          color: var(--color-marigold-deep);
          text-decoration: underline;
          text-decoration-color: var(--color-gold);
          text-underline-offset: 4px;
        }

        .guest-welcome-message {
          font-size: clamp(0.92rem, 2vw, 1.05rem);
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }
      `}</style>
    </motion.div>
  );
};
