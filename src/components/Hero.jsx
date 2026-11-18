import React from 'react';
import { motion } from 'framer-motion';
import { ToranGarland, GaneshIcon, SwastikIcon, DiyaIcon, MandalaDivider } from './DecorativeDividers';
import { PersonalizedGuest } from './PersonalizedGuest';
import { INVITATION_DATA } from '../data/invitation';
import { FaCalendarAlt, FaHeart, FaChevronDown } from 'react-icons/fa';

export const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Top Hanging Toran Garland */}
      <ToranGarland />

      {/* Floating Ambient Glowing Diyas (Left & Right) */}
      <div className="ambient-diya diya-left" aria-hidden="true">
        <DiyaIcon size={52} />
      </div>
      <div className="ambient-diya diya-right" aria-hidden="true">
        <DiyaIcon size={52} />
      </div>

      <div className="container hero-content">
        {/* Sacred Header: ॥ श्री गणेशाय नमः ॥ */}
        <motion.div
          className="hero-manglik-top"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="manglik-pill">
            <SwastikIcon size={16} />
            <span className="shri-ganesh-text">{INVITATION_DATA.header.topHeader}</span>
            <SwastikIcon size={16} />
          </div>
        </motion.div>

        {/* Lord Ganesha Emblem */}
        <motion.div
          className="hero-ganesh-wrapper"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, type: 'spring' }}
        >
          <GaneshIcon size={88} />
        </motion.div>

        {/* Kuldevi & Pitra blessings */}
        <motion.div
          className="ancestor-blessings"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span>{INVITATION_DATA.header.kuldeviBlessing}</span>
          <span className="bullet-dot">•</span>
          <span>{INVITATION_DATA.header.pitraBlessing}</span>
        </motion.div>

        {/* Hero Main Badges & Titles */}
        <motion.div
          className="hero-titles-wrapper"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-ceremony-badge">
            <span>{INVITATION_DATA.hero.subTitle}</span>
          </div>
          <h1 className="hero-main-title">{INVITATION_DATA.hero.title}</h1>
          <p className="hero-tagline">{INVITATION_DATA.hero.tagline}</p>
        </motion.div>

        {/* Personalized Guest Welcome Banner if present */}
        <PersonalizedGuest />

        {/* Couple Names Showcase */}
        <motion.div
          className="couple-names-royal-card royal-card"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {/* English Calligraphy */}
          <div className="couple-names-english font-english">
            <span className="groom-en">{INVITATION_DATA.meta.groomNameEn}</span>
            <span className="en-heart">
              <FaHeart />
            </span>
            <span className="bride-en">{INVITATION_DATA.meta.brideNameEn}</span>
          </div>

          <div className="names-ornament-line" />

          {/* Hindi Full Devanagari Names */}
          <div className="couple-names-hindi">
            <span className="groom-hi">{INVITATION_DATA.couple.groom.hindiName}</span>
            <span className="sang-word">संग</span>
            <span className="bride-hi">{INVITATION_DATA.couple.bride.hindiName}</span>
          </div>

          <p className="auspicious-quote">{INVITATION_DATA.hero.auspiciousQuote}</p>
        </motion.div>

        {/* Highlighted Auspicious Date Banner */}
        <motion.div
          className="hero-date-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="date-badge-box">
            <FaCalendarAlt className="date-icon" />
            <div className="date-text-content">
              <span className="date-label">मांगलिक स्नेहभोज एवं आशीर्वाद समारोह</span>
              <strong className="date-highlight-text">{INVITATION_DATA.hero.mainDateHighlight}</strong>
            </div>
          </div>
        </motion.div>

        {/* Hero Quick Action Buttons */}
        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            type="button"
            className="btn-primary"
            onClick={() => scrollToSection('#events')}
          >
            <span>मांगलिक कार्यक्रम देखें</span>
            <FaChevronDown />
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => scrollToSection('#rsvp')}
          >
            <span>आशीर्वाद दें (RSVP)</span>
          </button>
        </motion.div>

        <MandalaDivider className="hero-bottom-mandala" />
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: clamp(6.5rem, 14vw, 8.5rem);
          padding-bottom: clamp(3rem, 6vw, 4.5rem);
          text-align: center;
          overflow: hidden;
          background: radial-gradient(circle at 50% 15%, rgba(201, 162, 75, 0.12) 0%, transparent 60%);
        }

        .ambient-diya {
          position: absolute;
          top: 140px;
          pointer-events: none;
          z-index: 2;
        }

        .diya-left {
          left: clamp(10px, 5vw, 60px);
        }

        .diya-right {
          right: clamp(10px, 5vw, 60px);
        }

        @media (max-width: 640px) {
          .ambient-diya {
            display: none;
          }
        }

        .hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-manglik-top {
          margin-bottom: 0.8rem;
        }

        .manglik-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.35rem 1.2rem;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
        }

        .shri-ganesh-text {
          font-family: var(--font-heading-hindi);
          color: var(--color-maroon);
          font-size: clamp(0.95rem, 2.5vw, 1.25rem);
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .hero-ganesh-wrapper {
          margin-bottom: 0.6rem;
          filter: drop-shadow(0 0 16px rgba(201, 162, 75, 0.45));
        }

        .ancestor-blessings {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          font-size: clamp(0.78rem, 2vw, 0.9rem);
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 1.2rem;
        }

        .bullet-dot {
          color: var(--color-gold);
        }

        .hero-titles-wrapper {
          margin-bottom: 1.2rem;
        }

        .hero-ceremony-badge {
          display: inline-block;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .hero-main-title {
          font-size: clamp(2.5rem, 8vw, 4.4rem);
          color: var(--color-maroon);
          line-height: 1.15;
          margin-bottom: 0.3rem;
          text-shadow: 0 2px 12px rgba(122, 31, 43, 0.12);
        }

        .hero-tagline {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: var(--text-secondary);
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        /* Royal Couple Card */
        .couple-names-royal-card {
          width: 100%;
          max-width: 680px;
          padding: clamp(1.6rem, 5vw, 2.6rem);
          margin: 1.5rem 0;
          border-width: 2px;
          border-color: var(--color-gold);
        }

        .couple-names-english {
          font-size: clamp(2.2rem, 7vw, 3.8rem);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.6rem, 2vw, 1.2rem);
          line-height: 1.1;
          color: var(--color-maroon);
          font-weight: 700;
          font-style: italic;
        }

        .en-heart {
          color: #E63946;
          font-size: clamp(1.4rem, 4vw, 2.2rem);
          animation: heartBeat 2s ease-in-out infinite;
          display: flex;
          align-items: center;
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .names-ornament-line {
          width: 140px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
          margin: 1rem auto;
        }

        .couple-names-hindi {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1.3rem, 4.5vw, 2.2rem);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 0.8rem;
        }

        .sang-word {
          font-family: var(--font-english-serif);
          color: var(--color-marigold-deep);
          font-size: 1.1rem;
          font-weight: 600;
          font-style: italic;
        }

        .auspicious-quote {
          font-size: clamp(0.95rem, 2.5vw, 1.12rem);
          color: var(--text-muted);
          margin: 0;
          font-style: italic;
        }

        /* Hero Date Banner */
        .hero-date-banner {
          margin-bottom: 2rem;
          width: 100%;
          max-width: 580px;
        }

        .date-badge-box {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--border-gold);
          padding: 0.9rem 1.8rem;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-md);
        }

        .date-icon {
          font-size: 1.6rem;
          color: var(--color-marigold-deep);
          flex-shrink: 0;
        }

        .date-text-content {
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .date-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .date-highlight-text {
          font-size: clamp(1.1rem, 3.2vw, 1.4rem);
          color: var(--color-maroon);
          font-weight: 700;
        }

        /* Hero CTA Group */
        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-bottom-mandala {
          margin-top: 3rem;
        }
      `}</style>
    </section>
  );
};
