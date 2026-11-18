import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_DATA } from '../data/invitation';
import { MandalaDivider } from './DecorativeDividers';
import { FaClock, FaMapMarkerAlt, FaDirections, FaFire, FaMusic } from 'react-icons/fa';
import { GiHorseHead } from 'react-icons/gi';

export const Baraat = () => {
  const baraatVenue = INVITATION_DATA.venues.baraat;

  return (
    <section id="baraat" className="section-wrapper baraat-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <span>शाही बारात एवं पावन फेरे</span>
          </div>
          <h2 className="section-title">बारात एवं शुभ लग्न</h2>
          <p className="section-subtitle">
            ढोल-ताशों और शहनाई की मंगल ध्वनियों के साथ सजेगी बारात
          </p>
        </div>

        <motion.div
          className="baraat-royal-showcase royal-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Banner with Horse & Shehnai Icon */}
          <div className="baraat-badge-row">
            <div className="royal-icon-circle">
              <GiHorseHead className="horse-icon" />
            </div>
            <div className="baraat-header-text">
              <span className="ceremony-tag">11 दिसम्बर 2026, शुक्रवार</span>
              <h3 className="baraat-headline">बारात प्रस्थान एवं शुभ लग्न (फेरे)</h3>
            </div>
          </div>

          <div className="baraat-content-grid">
            {/* Departure Info */}
            <div className="detail-box">
              <div className="box-title-row">
                <FaMusic className="box-icon" />
                <h4>बारात प्रस्थान</h4>
              </div>
              <p className="box-time">
                <FaClock /> सायं 7:00 बजे
              </p>
              <p className="box-desc">{baraatVenue.departure}</p>
            </div>

            {/* Fere / Shubh Lagn Info */}
            <div className="detail-box">
              <div className="box-title-row">
                <FaFire className="box-icon fire" />
                <h4>शुभ लग्न (पावन फेरे)</h4>
              </div>
              <p className="box-time">
                <FaClock /> मध्यरात्रि
              </p>
              <p className="box-desc">
                अग्नि को साक्षी मानकर सात वचन निभाएंगे, पवित्र फेरों के साथ जन्मों के साथी बन जाएंगे।
              </p>
            </div>
          </div>

          {/* Venue Card with Map link */}
          <div className="baraat-venue-banner">
            <div className="venue-info">
              <span className="venue-label">विवाह स्थल:</span>
              <strong className="venue-name">{baraatVenue.name}</strong>
              <p className="venue-address">{baraatVenue.address}</p>
            </div>
            <a
              href={baraatVenue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary get-dir-btn"
            >
              <FaDirections />
              <span>दिशा निर्देश (Get Directions)</span>
            </a>
          </div>
        </motion.div>

        <MandalaDivider />
      </div>

      <style>{`
        .baraat-section {
          position: relative;
        }

        .text-center {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .baraat-royal-showcase {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(1.8rem, 5vw, 3rem);
          border-width: 2px;
          border-color: var(--color-gold);
          background: linear-gradient(
            135deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 60%,
            var(--bg-secondary) 100%
          );
        }

        .baraat-badge-row {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px dashed var(--border-gold);
        }

        .royal-icon-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
          border: 2px solid var(--color-gold);
          color: #FFE5A3;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(122, 31, 43, 0.3);
          flex-shrink: 0;
        }

        .horse-icon {
          font-size: 2.2rem;
        }

        .baraat-header-text {
          display: flex;
          flex-direction: column;
        }

        .ceremony-tag {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          letter-spacing: 0.05em;
        }

        .baraat-headline {
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          color: var(--color-maroon);
          margin: 0;
        }

        .baraat-content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .detail-box {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          padding: 1.4rem;
        }

        .box-title-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.6rem;
        }

        .box-icon {
          font-size: 1.2rem;
          color: var(--color-maroon);
        }

        .box-icon.fire {
          color: var(--color-marigold-deep);
        }

        .detail-box h4 {
          font-size: 1.2rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .box-time {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          margin-bottom: 0.6rem;
        }

        .box-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .baraat-venue-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--color-gold);
          border-radius: var(--radius-md);
          padding: 1.4rem 1.8rem;
          flex-wrap: wrap;
        }

        .venue-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .venue-label {
          font-size: 0.85rem;
          color: var(--color-marigold-deep);
          font-weight: 700;
          text-transform: uppercase;
        }

        .venue-name {
          font-size: 1.3rem;
          color: var(--color-maroon);
        }

        .venue-address {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin: 0;
        }

        .get-dir-btn {
          padding: 0.75rem 1.6rem;
          font-size: 0.95rem;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .baraat-badge-row {
            flex-direction: column;
            text-align: center;
          }
          .baraat-venue-banner {
            flex-direction: column;
            text-align: center;
          }
          .venue-info {
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};
