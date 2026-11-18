import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_DATA } from '../data/invitation';
import { MandalaDivider, SwastikIcon, DiyaIcon } from './DecorativeDividers';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaDirections, FaCalendarCheck, FaUtensils } from 'react-icons/fa';

export const Reception = () => {
  const receptionEvent = INVITATION_DATA.events.find((e) => e.isGrandReception) || INVITATION_DATA.events[5];
  const primaryVenue = INVITATION_DATA.venues.primary;

  return (
    <section id="reception" className="section-wrapper reception-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge grand-badge">
            <SwastikIcon size={16} />
            <span>महाप्रीतिभोज एवं शुभाशीष</span>
            <SwastikIcon size={16} />
          </div>
          <h2 className="section-title">स्नेहभोज एवं आशीर्वाद समारोह</h2>
          <p className="section-subtitle">
            आपके स्नेह, शुभाशीष एवं आत्मीय उपस्थिति की अभिलाषा में रामजे परिवार
          </p>
        </div>

        {/* Visually Grand Spotlight Card */}
        <motion.div
          className="grand-reception-showcase royal-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Royal Emblem */}
          <div className="grand-top-emblem">
            <DiyaIcon size={42} />
            <div className="emblem-center">
              <FaUtensils className="utensils-icon" />
            </div>
            <DiyaIcon size={42} />
          </div>

          <span className="grand-date-sub">{receptionEvent.dateDevanagari}</span>
          <h3 className="grand-main-headline">{receptionEvent.title}</h3>
          
          <div className="grand-time-pill">
            <FaClock className="pill-icon" />
            <span>{receptionEvent.timeDevanagari}</span>
          </div>

          <div className="grand-poetry-wrapper">
            <p className="grand-poetry-text">
              "स्नेह की यह शाम होगी, अपनों की महफिल सजेगी, आपके आशीर्वाद से यह पावन बेला धन्य बनेगी।"
            </p>
          </div>

          {/* Venue Card */}
          <div className="reception-venue-card">
            <div className="r-venue-header">
              <FaMapMarkerAlt className="r-pin" />
              <div>
                <span className="r-label">कार्यक्रम स्थल:</span>
                <h4 className="r-title">{primaryVenue.name}</h4>
              </div>
            </div>
            <p className="r-address">{primaryVenue.address}</p>

            <div className="r-btn-group">
              <a
                href={primaryVenue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaDirections />
                <span>गूगल मैप्स दिशा निर्देश</span>
              </a>

              <a
                href={getGoogleCalendarUrl(receptionEvent)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaCalendarCheck />
                <span>कैलेंडर में सेव करें</span>
              </a>
            </div>
          </div>
        </motion.div>

        <MandalaDivider />
      </div>

      <style>{`
        .reception-section {
          position: relative;
          background: radial-gradient(circle at 50% 50%, rgba(201, 162, 75, 0.08) 0%, transparent 70%);
        }

        .text-center {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .grand-badge {
          background: var(--gradient-maroon);
          color: #FFF8EC;
          border-color: var(--color-gold);
        }

        .grand-reception-showcase {
          max-width: 920px;
          margin: 0 auto;
          padding: clamp(2.2rem, 6vw, 3.8rem) clamp(1.4rem, 4vw, 3rem);
          text-align: center;
          border-width: 3px;
          border-color: var(--color-gold);
          background: linear-gradient(
            180deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 50%,
            var(--bg-secondary) 100%
          );
          box-shadow: 0 20px 60px rgba(122, 31, 43, 0.18), 0 0 35px rgba(201, 162, 75, 0.35);
        }

        .grand-top-emblem {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .emblem-center {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-marigold) 0%, var(--color-maroon) 100%);
          border: 2px solid var(--color-gold);
          color: #FFF8EC;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(232, 145, 45, 0.45);
        }

        .utensils-icon {
          font-size: 1.8rem;
        }

        .grand-date-sub {
          display: inline-block;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          margin-bottom: 0.4rem;
        }

        .grand-main-headline {
          font-size: clamp(1.8rem, 5vw, 3rem);
          color: var(--color-maroon);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .grand-time-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--bg-tertiary);
          border: 1.5px solid var(--border-gold);
          padding: 0.5rem 1.4rem;
          border-radius: var(--radius-full);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-maroon);
          margin-bottom: 1.8rem;
        }

        .pill-icon {
          color: var(--color-marigold-deep);
        }

        .grand-poetry-wrapper {
          max-width: 680px;
          margin: 0 auto 2.2rem auto;
          padding: 1.2rem 1.8rem;
          background: var(--card-bg-elevated);
          border-left: 3px solid var(--color-gold);
          border-right: 3px solid var(--color-gold);
          border-radius: var(--radius-md);
        }

        .grand-poetry-text {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1.05rem, 2.5vw, 1.25rem);
          color: var(--text-primary);
          font-style: italic;
          line-height: 1.7;
          margin: 0;
        }

        .reception-venue-card {
          background: var(--bg-secondary);
          border: 1.5px solid var(--border-gold);
          border-radius: var(--radius-lg);
          padding: clamp(1.4rem, 3vw, 2rem);
          text-align: left;
        }

        .r-venue-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.6rem;
        }

        .r-pin {
          font-size: 1.6rem;
          color: var(--color-maroon);
        }

        .r-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
        }

        .r-title {
          font-size: 1.35rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .r-address {
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          padding-left: 2.4rem;
        }

        .r-btn-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          padding-left: 2.4rem;
        }

        @media (max-width: 640px) {
          .r-address, .r-btn-group {
            padding-left: 0;
          }
          .reception-venue-card {
            text-align: center;
          }
          .r-venue-header {
            justify-content: center;
          }
          .r-btn-group {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
