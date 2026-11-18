import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaneshIcon, SwastikIcon } from './DecorativeDividers';
import { INVITATION_DATA } from '../data/invitation';
import { FaEnvelopeOpenText } from 'react-icons/fa';

export const IntroCurtain = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 900); // Allow doors slide animation to unfold
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="intro-curtain-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="dialog"
          aria-modal="true"
          aria-label="विवाह निमंत्रण पत्रिका"
        >
          {/* Left Palace Door */}
          <motion.div
            className="curtain-door left-door"
            animate={isOpening ? { x: '-100%', rotateY: -35 } : { x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="door-inner-pattern" />
          </motion.div>

          {/* Right Palace Door */}
          <motion.div
            className="curtain-door right-door"
            animate={isOpening ? { x: '100%', rotateY: 35 } : { x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="door-inner-pattern" />
          </motion.div>

          {/* Central Invitation Card Medallion */}
          <motion.div
            className="intro-center-card"
            animate={isOpening ? { scale: 0.7, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Top Shlok */}
            <div className="intro-badge">
              <SwastikIcon size={18} />
              <span>{INVITATION_DATA.header.topHeader}</span>
              <SwastikIcon size={18} />
            </div>

            {/* Ganesh Motif */}
            <div className="intro-ganesh">
              <GaneshIcon size={80} />
            </div>

            {/* Event Name */}
            <p className="intro-event-title">{INVITATION_DATA.hero.eventBadge}</p>

            {/* Couple Name */}
            <h1 className="intro-couple-names">
              <span className="intro-name-hi">{INVITATION_DATA.couple.groom.hindiName}</span>
              <span className="intro-heart">❤</span>
              <span className="intro-name-hi">{INVITATION_DATA.couple.bride.hindiName}</span>
            </h1>

            <p className="intro-english-names">{INVITATION_DATA.meta.coupleEnglish}</p>

            <div className="intro-gold-line" />

            <p className="intro-family-tagline">{INVITATION_DATA.hero.tagline}</p>
            <p className="intro-date-highlight">{INVITATION_DATA.hero.mainDateHighlight}</p>

            {/* Open Invitation Button */}
            <motion.button
              type="button"
              className="intro-open-btn"
              onClick={handleOpenClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="निमंत्रण खोलें"
              autoFocus
            >
              <FaEnvelopeOpenText className="btn-icon" />
              <span>निमंत्रण खोलें</span>
              <span className="btn-glow-ring" />
            </motion.button>
          </motion.div>

          <style>{`
            .intro-curtain-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              perspective: 1200px;
              background-color: #0F0507;
            }

            .curtain-door {
              position: absolute;
              top: 0;
              bottom: 0;
              width: 50.5%;
              height: 100%;
              background: linear-gradient(135deg, #7A1F2B 0%, #4D0E17 60%, #2A060C 100%);
              border: 3px solid var(--color-gold);
              box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.75);
              transform-origin: left center;
              overflow: hidden;
            }

            .left-door {
              left: 0;
              transform-origin: left center;
              border-right: 2px solid var(--color-gold-light);
            }

            .right-door {
              right: 0;
              transform-origin: right center;
              border-left: 2px solid var(--color-gold-light);
            }

            .door-inner-pattern {
              width: 100%;
              height: 100%;
              opacity: 0.15;
              background-image: radial-gradient(circle at 50% 50%, var(--color-gold) 1px, transparent 1px);
              background-size: 24px 24px;
            }

            .intro-center-card {
              position: relative;
              z-index: 10;
              max-width: 90%;
              width: 480px;
              padding: clamp(1.8rem, 4vw, 2.5rem);
              background: rgba(30, 10, 15, 0.94);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              border: 2px solid var(--color-gold);
              border-radius: var(--radius-lg);
              text-align: center;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(201, 162, 75, 0.45);
            }

            .intro-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              color: var(--color-gold-light);
              font-size: 0.95rem;
              font-weight: 600;
              margin-bottom: 0.8rem;
              letter-spacing: 0.05em;
            }

            .intro-ganesh {
              display: flex;
              justify-content: center;
              margin-bottom: 0.8rem;
              filter: drop-shadow(0 0 16px rgba(245, 158, 11, 0.6));
            }

            .intro-event-title {
              color: var(--color-marigold);
              font-size: 1rem;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              font-weight: 600;
              margin-bottom: 0.4rem;
            }

            .intro-couple-names {
              font-size: clamp(1.6rem, 5vw, 2.3rem);
              color: #FFF3D6;
              line-height: 1.25;
              margin-bottom: 0.2rem;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              gap: 0.5rem;
            }

            .intro-heart {
              color: #E63946;
              font-size: 1.4rem;
              animation: heartPulse 1.6s ease-in-out infinite;
            }

            @keyframes heartPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.25); }
            }

            .intro-english-names {
              font-family: var(--font-english-serif);
              font-size: 1.2rem;
              color: var(--color-gold-light);
              font-style: italic;
              letter-spacing: 0.05em;
              margin-bottom: 0.8rem;
            }

            .intro-gold-line {
              width: 120px;
              height: 2px;
              background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
              margin: 0.8rem auto;
            }

            .intro-family-tagline {
              color: #EBD6BC;
              font-size: 1.05rem;
              font-weight: 500;
              margin-bottom: 0.3rem;
            }

            .intro-date-highlight {
              color: var(--color-marigold);
              font-size: 1.15rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .intro-open-btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.75rem;
              padding: 0.85rem 2.2rem;
              background: linear-gradient(135deg, #C9A24B 0%, #E8912D 50%, #996515 100%);
              color: #2D080E;
              border: 1.5px solid #FFF3D6;
              border-radius: var(--radius-full);
              font-size: 1.2rem;
              font-weight: 700;
              cursor: pointer;
              box-shadow: 0 10px 30px rgba(232, 145, 45, 0.45);
              position: relative;
            }

            .intro-open-btn .btn-icon {
              font-size: 1.3rem;
            }

            .btn-glow-ring {
              position: absolute;
              top: -4px;
              left: -4px;
              right: -4px;
              bottom: -4px;
              border-radius: var(--radius-full);
              border: 2px solid var(--color-gold);
              animation: ringPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              pointer-events: none;
            }

            @keyframes ringPulse {
              0% { transform: scale(1); opacity: 0.9; }
              100% { transform: scale(1.12); opacity: 0; }
            }

            @media (max-width: 480px) {
              .intro-center-card {
                padding: 1.5rem 1.2rem;
              }
              .intro-couple-names {
                font-size: 1.5rem;
              }
              .intro-open-btn {
                padding: 0.75rem 1.6rem;
                font-size: 1.05rem;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
