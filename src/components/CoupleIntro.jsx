import React from 'react';
import { motion } from 'framer-motion';
import { PaisleyCorner, MandalaDivider } from './DecorativeDividers';
import { INVITATION_DATA } from '../data/invitation';
import { FaHeart, FaUserTie, FaFemale, FaQuoteLeft } from 'react-icons/fa';

export const CoupleIntro = () => {
  const { groom, bride, invitationLetter } = INVITATION_DATA.couple;

  return (
    <section id="couple" className="section-wrapper couple-intro-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <span>परिणय सूत्र</span>
          </div>
          <h2 className="section-title">वर एवं वधू परिचय</h2>
          <p className="section-subtitle">
            दो कुलों का पावन मिलन, दो हृदयों का एक अटूट बंधन
          </p>
        </div>

        {/* Side-by-side / stacked royal profile cards */}
        <div className="couple-cards-container">
          {/* Groom Royal Card */}
          <motion.div
            className="profile-royal-card royal-card groom-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <PaisleyCorner size={36} position="top-left" />
            <PaisleyCorner size={36} position="bottom-right" />

            <div className="avatar-royal-badge">
              <FaUserTie className="avatar-icon" />
            </div>

            <span className="profile-honorific">{groom.title}</span>
            <h3 className="profile-hindi-name">{groom.hindiName}</h3>
            <span className="profile-english-name font-english">({groom.englishName})</span>

            <div className="profile-divider" />

            <div className="lineage-details">
              <div className="lineage-row">
                <span className="lineage-label">सुपौत्र:</span>
                <span className="lineage-val">{groom.grandfather}</span>
              </div>
              <div className="lineage-row">
                <span className="lineage-label">सुपुत्र:</span>
                <span className="lineage-val">{groom.father}</span>
              </div>
              <div className="lineage-row">
                <span className="lineage-label">निवास:</span>
                <span className="lineage-val">{groom.city}</span>
              </div>
            </div>
          </motion.div>

          {/* Central Sacred Knot (Gathbandhan) */}
          <div className="gathbandhan-connector" aria-hidden="true">
            <div className="connector-circle">
              <FaHeart className="connector-heart" />
            </div>
            <span className="connector-text">संग</span>
          </div>

          {/* Bride Royal Card */}
          <motion.div
            className="profile-royal-card royal-card bride-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <PaisleyCorner size={36} position="top-right" />
            <PaisleyCorner size={36} position="bottom-left" />

            <div className="avatar-royal-badge bride-badge">
              <FaFemale className="avatar-icon" />
            </div>

            <span className="profile-honorific">{bride.title}</span>
            <h3 className="profile-hindi-name">{bride.hindiName}</h3>
            <span className="profile-english-name font-english">({bride.englishName})</span>

            <div className="profile-divider" />

            <div className="lineage-details">
              <div className="lineage-row">
                <span className="lineage-label">सुपौत्री:</span>
                <span className="lineage-val">{bride.grandfather}</span>
              </div>
              <div className="lineage-row">
                <span className="lineage-label">सुपुत्री:</span>
                <span className="lineage-val">{bride.father}</span>
              </div>
              <div className="lineage-row">
                <span className="lineage-label">निवास:</span>
                <span className="lineage-val">{bride.city}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grand Invitation Letter from Ramje Family */}
        <motion.div
          className="invitation-letter-card royal-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="letter-header">
            <FaQuoteLeft className="quote-mark" />
            <h3 className="letter-salutation">{invitationLetter.salutation}</h3>
          </div>

          <p className="letter-body-text">{invitationLetter.body}</p>

          <div className="letter-poetry-box">
            <p className="letter-poetry">{invitationLetter.poetry}</p>
          </div>

          <div className="letter-signature">
            <span className="sign-family">{INVITATION_DATA.meta.familyName}</span>
          </div>
        </motion.div>

        <MandalaDivider />
      </div>

      <style>{`
        .couple-intro-section {
          position: relative;
        }

        .text-center {
          text-align: center;
          margin-bottom: 3rem;
        }

        .couple-cards-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1rem, 3vw, 2.5rem);
          max-width: 960px;
          margin: 0 auto 3rem auto;
          position: relative;
        }

        .profile-royal-card {
          flex: 1;
          max-width: 440px;
          padding: clamp(2rem, 4vw, 2.8rem) clamp(1.4rem, 3vw, 2rem);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .avatar-royal-badge {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
          border: 2px solid var(--color-gold);
          color: #FFE5A3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
          box-shadow: 0 6px 18px rgba(122, 31, 43, 0.25);
        }

        .bride-badge {
          background: linear-gradient(135deg, var(--color-marigold-deep) 0%, var(--color-maroon) 100%);
        }

        .avatar-icon {
          font-size: 2.2rem;
        }

        .profile-honorific {
          font-size: 0.95rem;
          color: var(--color-marigold-deep);
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
        }

        .profile-hindi-name {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          color: var(--color-maroon);
          margin-bottom: 0.2rem;
        }

        .profile-english-name {
          font-size: 1.2rem;
          color: var(--text-muted);
          font-style: italic;
          margin-bottom: 0.8rem;
        }

        .profile-divider {
          width: 60px;
          height: 2px;
          background: var(--color-gold);
          margin-bottom: 1.2rem;
        }

        .lineage-details {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 1rem;
        }

        .lineage-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.35rem 0;
          border-bottom: 1px dashed var(--border-gold);
        }

        .lineage-label {
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .lineage-val {
          color: var(--text-primary);
          font-weight: 600;
          text-align: right;
        }

        /* Gathbandhan Connector */
        .gathbandhan-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          z-index: 5;
        }

        .connector-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 2px solid var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-gold);
        }

        .connector-heart {
          font-size: 1.5rem;
          color: #E63946;
          animation: pulseHeart 1.8s ease-in-out infinite;
        }

        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        .connector-text {
          font-family: var(--font-english-serif);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          font-style: italic;
        }

        /* Grand Invitation Letter */
        .invitation-letter-card {
          max-width: 860px;
          margin: 0 auto;
          padding: clamp(2rem, 5vw, 3.2rem);
          border-width: 2px;
          border-color: var(--color-gold);
          background: linear-gradient(
            180deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 100%
          );
        }

        .letter-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .quote-mark {
          font-size: 2rem;
          color: var(--color-gold);
          opacity: 0.8;
        }

        .letter-salutation {
          font-size: 1.45rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .letter-body-text {
          font-size: clamp(1.05rem, 2.2vw, 1.22rem);
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .letter-poetry-box {
          background: var(--bg-tertiary);
          border-left: 4px solid var(--color-gold);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          padding: 1.2rem 1.6rem;
          margin-bottom: 1.5rem;
        }

        .letter-poetry {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: var(--color-maroon);
          font-style: italic;
          line-height: 1.8;
          white-space: pre-line;
          margin: 0;
        }

        .letter-signature {
          text-align: right;
        }

        .sign-family {
          display: inline-block;
          font-family: var(--font-heading-hindi);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-maroon);
          border-top: 1px solid var(--border-gold);
          padding-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .couple-cards-container {
            flex-direction: column;
          }
          .gathbandhan-connector {
            margin: -0.5rem 0;
          }
          .profile-royal-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
