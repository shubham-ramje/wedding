import React from 'react';
import { motion } from 'framer-motion';
import { DiyaIcon, MandalaDivider, SwastikIcon } from './DecorativeDividers';
import { INVITATION_DATA } from '../data/invitation';

export const Shlok = () => {
  return (
    <section id="shlok" className="section-wrapper shlok-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <SwastikIcon size={16} />
            <span>पावन मंगलाचरण</span>
            <SwastikIcon size={16} />
          </div>
          <h2 className="section-title">शुभ श्लोक</h2>
          <p className="section-subtitle">
            विघ्नहर्ता श्री गणेश एवं जगतपालक श्री हरि विष्णु की पावन स्तुति
          </p>
        </div>

        <div className="shlok-cards-grid">
          {/* Shlok 1: Ganesh Shlok */}
          <motion.div
            className="shlok-card royal-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="shlok-card-header">
              <DiyaIcon size={34} />
              <h3 className="shlok-deity-title">श्री गणेश वंदना</h3>
              <DiyaIcon size={34} />
            </div>

            <div className="shlok-sanskrit-box">
              <p className="sanskrit-text">{INVITATION_DATA.header.shlok1.sanskrit}</p>
            </div>

            <div className="shlok-divider" />

            <div className="shlok-meaning-box">
              <span className="meaning-label">भावार्थ:</span>
              <p className="meaning-text">{INVITATION_DATA.header.shlok1.meaning}</p>
            </div>
          </motion.div>

          {/* Shlok 2: Vishnu Mangalam Shlok */}
          <motion.div
            className="shlok-card royal-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="shlok-card-header">
              <DiyaIcon size={34} />
              <h3 className="shlok-deity-title">मंगलाष्टक स्तुति</h3>
              <DiyaIcon size={34} />
            </div>

            <div className="shlok-sanskrit-box">
              <p className="sanskrit-text">{INVITATION_DATA.header.shlok2.sanskrit}</p>
            </div>

            <div className="shlok-divider" />

            <div className="shlok-meaning-box">
              <span className="meaning-label">भावार्थ:</span>
              <p className="meaning-text">{INVITATION_DATA.header.shlok2.meaning}</p>
            </div>
          </motion.div>
        </div>

        <MandalaDivider />
      </div>

      <style>{`
        .shlok-section {
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--bg-secondary) 50%,
            transparent 100%
          );
        }

        .text-center {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .shlok-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: clamp(1.5rem, 4vw, 2.5rem);
          max-width: 980px;
          margin: 0 auto 2.5rem auto;
        }

        .shlok-card {
          padding: clamp(1.8rem, 4vw, 2.4rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-width: 1.5px;
        }

        .shlok-card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 1.2rem;
        }

        .shlok-deity-title {
          font-size: 1.35rem;
          color: var(--color-maroon);
          font-weight: 700;
        }

        .shlok-sanskrit-box {
          background: var(--bg-tertiary);
          border: 1px dashed var(--border-gold);
          border-radius: var(--radius-md);
          padding: 1.2rem 1.4rem;
          width: 100%;
          margin-bottom: 1.2rem;
        }

        .sanskrit-text {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          color: var(--color-maroon);
          font-weight: 700;
          line-height: 1.7;
          white-space: pre-line;
          margin: 0;
        }

        .shlok-divider {
          width: 60px;
          height: 2px;
          background: var(--color-gold);
          margin-bottom: 1.2rem;
        }

        .shlok-meaning-box {
          text-align: center;
        }

        .meaning-label {
          display: inline-block;
          font-weight: 700;
          color: var(--color-marigold-deep);
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }

        .meaning-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </section>
  );
};
