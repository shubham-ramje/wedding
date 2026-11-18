import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INVITATION_DATA } from '../data/invitation';
import { DiyaIcon } from './DecorativeDividers';

export const Countdown = () => {
  const targetTime = new Date(INVITATION_DATA.countdown.targetISO).getTime();

  const calculateTimeLeft = () => {
    const difference = targetTime - Date.now();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  const units = [
    { value: timeLeft.days, label: INVITATION_DATA.countdown.labels.days },
    { value: timeLeft.hours, label: INVITATION_DATA.countdown.labels.hours },
    { value: timeLeft.minutes, label: INVITATION_DATA.countdown.labels.minutes },
    { value: timeLeft.seconds, label: INVITATION_DATA.countdown.labels.seconds },
  ];

  return (
    <section className="countdown-section">
      <div className="container">
        <div className="countdown-container royal-card">
          <div className="countdown-header">
            <DiyaIcon size={32} />
            <div className="countdown-title-group">
              <h3 className="countdown-title">{INVITATION_DATA.countdown.heading}</h3>
              <p className="countdown-subtitle">{INVITATION_DATA.countdown.subtitle}</p>
            </div>
            <DiyaIcon size={32} />
          </div>

          <div className="countdown-digits-grid">
            {units.map((unit, index) => (
              <motion.div
                key={unit.label}
                className="countdown-unit-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="digit-card">
                  <span className="digit-glow" />
                  <span className="digit-number">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="unit-label">{unit.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="countdown-footer-note">
            <span>शुभ लग्न एवं बारात: 11 दिसम्बर 2026, सायं 7:00 बजे, इन्दौर</span>
          </div>
        </div>
      </div>

      <style>{`
        .countdown-section {
          padding: 1.5rem 0 3rem 0;
        }

        .countdown-container {
          max-width: 820px;
          margin: 0 auto;
          padding: clamp(1.8rem, 4vw, 2.5rem);
          text-align: center;
          border-width: 2px;
          border-color: var(--color-gold);
          background: linear-gradient(
            135deg,
            var(--card-bg-elevated) 0%,
            var(--bg-secondary) 100%
          );
        }

        .countdown-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .countdown-title-group {
          display: flex;
          flex-direction: column;
        }

        .countdown-title {
          font-size: clamp(1.3rem, 3.5vw, 1.8rem);
          color: var(--color-maroon);
          margin-bottom: 0.2rem;
        }

        .countdown-subtitle {
          font-size: 0.95rem;
          color: var(--color-marigold-deep);
          font-weight: 600;
          margin: 0;
        }

        .countdown-digits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(0.6rem, 2vw, 1.5rem);
          margin-bottom: 1.8rem;
        }

        .countdown-unit-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .digit-card {
          width: 100%;
          max-width: 130px;
          aspect-ratio: 1 / 1;
          background: linear-gradient(180deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
          border: 1.5px solid var(--color-gold);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(122, 31, 43, 0.3), inset 0 0 15px rgba(201, 162, 75, 0.25);
          position: relative;
          overflow: hidden;
        }

        .digit-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 48%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
          border-bottom: 1px solid rgba(201, 162, 75, 0.3);
        }

        .digit-number {
          font-family: var(--font-english-serif);
          font-size: clamp(2rem, 6vw, 3.8rem);
          font-weight: 700;
          color: #FFF3D6;
          text-shadow: 0 0 14px rgba(253, 230, 138, 0.6);
          line-height: 1;
          z-index: 2;
        }

        .unit-label {
          font-family: var(--font-heading-hindi);
          font-size: clamp(0.95rem, 2.2vw, 1.15rem);
          color: var(--text-primary);
          font-weight: 700;
          margin-top: 0.6rem;
        }

        .countdown-footer-note {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 600;
          padding-top: 1rem;
          border-top: 1px dashed var(--border-gold);
        }

        @media (max-width: 480px) {
          .countdown-digits-grid {
            gap: 0.5rem;
          }
          .digit-card {
            border-radius: var(--radius-sm);
          }
          .unit-label {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};
