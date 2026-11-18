import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INVITATION_DATA } from '../data/invitation';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { MandalaDivider, SwastikIcon } from './DecorativeDividers';
import {
  FaCalendarPlus,
  FaGoogle,
  FaDownload,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaStar,
} from 'react-icons/fa';
import {
  GiPaintedPottery,
  GiTempleGate,
  GiPlantRoots,
  GiHorseHead,
  GiCelebrationFire,
  GiIndianPalace,
} from 'react-icons/gi';

export const EventsTimeline = () => {
  const [activeCalendarMenu, setActiveCalendarMenu] = useState(null);

  const getEventIcon = (iconName) => {
    switch (iconName) {
      case 'pot':
        return <GiPaintedPottery className="timeline-event-icon" />;
      case 'temple':
        return <GiTempleGate className="timeline-event-icon" />;
      case 'leaves':
        return <GiPlantRoots className="timeline-event-icon" />;
      case 'horse':
        return <GiHorseHead className="timeline-event-icon" />;
      case 'fire':
        return <GiCelebrationFire className="timeline-event-icon" />;
      case 'feast':
        return <GiIndianPalace className="timeline-event-icon" />;
      default:
        return <FaCalendarAlt className="timeline-event-icon" />;
    }
  };

  const toggleCalendarMenu = (id) => {
    setActiveCalendarMenu(activeCalendarMenu === id ? null : id);
  };

  return (
    <section id="events" className="section-wrapper events-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <SwastikIcon size={16} />
            <span>मांगलिक उत्सव रूपरेखा</span>
            <SwastikIcon size={16} />
          </div>
          <h2 className="section-title">मांगलिक कार्यक्रम</h2>
          <p className="section-subtitle">
            विवाह उत्सव के प्रत्येक पावन अनुष्ठान में आपकी गरिमामयी उपस्थिति प्रार्थनीय है
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {/* Central Gold Spine */}
          <div className="timeline-central-spine" aria-hidden="true" />

          {INVITATION_DATA.events.map((event, index) => {
            const isEven = index % 2 === 0;
            const isGrand = event.isGrandReception;

            return (
              <motion.div
                key={event.id}
                className={`timeline-item ${isEven ? 'item-left' : 'item-right'} ${
                  isGrand ? 'item-grand-reception' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Center Node Badge on Spine */}
                <div className="timeline-node" aria-hidden="true">
                  <div className={`node-inner ${isGrand ? 'node-grand' : ''}`}>
                    {getEventIcon(event.icon)}
                  </div>
                </div>

                {/* Event Card Content */}
                <div
                  className={`timeline-card royal-card ${
                    isGrand ? 'grand-reception-card' : ''
                  }`}
                >
                  {isGrand && (
                    <div className="grand-highlight-badge">
                      <FaStar className="star-icon" />
                      <span>मुख्य समारोह एवं स्नेहभोज</span>
                      <FaStar className="star-icon" />
                    </div>
                  )}

                  <div className="card-top-row">
                    <span className="event-num-pill">{event.number}</span>
                    <span className="event-en-title font-english">
                      {event.englishTitle}
                    </span>
                  </div>

                  <h3 className="event-main-title">{event.title}</h3>

                  <div className="event-meta-block">
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span className="meta-val">{event.dateDevanagari}</span>
                    </div>
                    <div className="meta-item">
                      <FaClock className="meta-icon" />
                      <span className="meta-val">{event.timeDevanagari}</span>
                    </div>
                  </div>

                  {/* Poetic Line */}
                  <div className="event-poem-box">
                    <p className="poem-quote">"{event.poeticLine}"</p>
                  </div>

                  {/* Departure detail for Baraat */}
                  {event.departure && (
                    <div className="event-departure-box">
                      <strong>{event.departure}</strong>
                    </div>
                  )}

                  {/* Venue detail */}
                  <div className="event-venue-row">
                    <FaMapMarkerAlt className="venue-pin-icon" />
                    <span>{event.venueText}</span>
                  </div>

                  {/* Add to Calendar Action */}
                  <div className="card-actions-row">
                    <button
                      type="button"
                      className="add-cal-btn"
                      onClick={() => toggleCalendarMenu(event.id)}
                      aria-expanded={activeCalendarMenu === event.id}
                      aria-label="कैलेंडर में जोड़ें"
                    >
                      <FaCalendarPlus />
                      <span>कैलेंडर में जोड़ें</span>
                    </button>

                    {activeCalendarMenu === event.id && (
                      <div className="calendar-dropdown-menu royal-card">
                        <a
                          href={getGoogleCalendarUrl(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cal-option-btn"
                          onClick={() => setActiveCalendarMenu(null)}
                        >
                          <FaGoogle />
                          <span>Google Calendar</span>
                        </a>
                        <button
                          type="button"
                          className="cal-option-btn"
                          onClick={() => {
                            downloadIcsFile(event);
                            setActiveCalendarMenu(null);
                          }}
                        >
                          <FaDownload />
                          <span>Apple / Outlook (.ics)</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <MandalaDivider />
      </div>

      <style>{`
        .events-section {
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--bg-secondary) 50%,
            transparent 100%
          );
        }

        .text-center {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .timeline-container {
          position: relative;
          max-width: 1040px;
          margin: 0 auto 3.5rem auto;
          padding: 1rem 0;
        }

        /* Central Spine on Desktop */
        .timeline-central-spine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 3px;
          background: linear-gradient(
            180deg,
            transparent,
            var(--color-gold) 10%,
            var(--color-gold) 90%,
            transparent
          );
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          width: 100%;
        }

        .timeline-item.item-left {
          justify-content: flex-start;
          padding-right: 50%;
        }

        .timeline-item.item-right {
          justify-content: flex-end;
          padding-left: 50%;
        }

        /* Node in Center */
        .timeline-node {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 3;
        }

        .node-inner {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 2px solid var(--color-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(201, 162, 75, 0.4);
          transition: var(--transition-smooth);
        }

        .node-inner.node-grand {
          width: 58px;
          height: 58px;
          background: linear-gradient(135deg, var(--color-marigold) 0%, var(--color-maroon) 100%);
          color: #FFF8EC;
          border-color: #FFF3D6;
          box-shadow: 0 0 20px rgba(232, 145, 45, 0.6);
          animation: grandPulse 2s ease-in-out infinite;
        }

        @keyframes grandPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .timeline-event-icon {
          font-size: 1.45rem;
        }

        /* Event Card Styling */
        .timeline-card {
          width: calc(100% - 40px);
          margin: 0 20px;
          padding: 1.8rem;
          background: var(--card-bg);
          position: relative;
        }

        /* Grand Reception Highlight Card */
        .grand-reception-card {
          border-width: 2.5px;
          border-color: var(--color-gold);
          background: linear-gradient(
            135deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 60%,
            var(--bg-secondary) 100%
          );
          box-shadow: 0 16px 45px rgba(201, 162, 75, 0.28);
        }

        .grand-highlight-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gradient-maroon);
          color: #FFF8EC;
          border: 1px solid var(--color-gold);
          padding: 0.35rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 0.8rem;
          box-shadow: var(--shadow-sm);
        }

        .star-icon {
          color: #FFD700;
          font-size: 0.8rem;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }

        .event-num-pill {
          font-family: var(--font-english-serif);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-maroon);
          background: var(--bg-tertiary);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-gold);
        }

        .event-en-title {
          font-size: 1.05rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .event-main-title {
          font-size: clamp(1.4rem, 3vw, 1.85rem);
          color: var(--color-maroon);
          margin-bottom: 0.8rem;
        }

        .event-meta-block {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.9rem;
          border: 1px solid var(--border-gold);
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-maroon);
        }

        .meta-icon {
          color: var(--color-marigold-deep);
        }

        .event-poem-box {
          margin-bottom: 0.8rem;
        }

        .poem-quote {
          font-family: var(--font-heading-hindi);
          font-size: 1rem;
          color: var(--text-secondary);
          font-style: italic;
          line-height: 1.55;
          margin: 0;
        }

        .event-departure-box {
          background: var(--card-bg-elevated);
          border-left: 3px solid var(--color-marigold);
          padding: 0.6rem 0.8rem;
          font-size: 0.9rem;
          color: var(--color-maroon);
          margin-bottom: 0.8rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .event-venue-row {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.2rem;
        }

        .venue-pin-icon {
          color: var(--color-maroon);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .card-actions-row {
          position: relative;
        }

        .add-cal-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-maroon);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .add-cal-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-marigold-deep);
          transform: translateY(-2px);
        }

        .calendar-dropdown-menu {
          position: absolute;
          bottom: 100%;
          left: 0;
          margin-bottom: 0.5rem;
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          min-width: 220px;
          z-index: 10;
          box-shadow: var(--shadow-lg);
        }

        .cal-option-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: var(--transition-smooth);
        }

        .cal-option-btn:hover {
          background: var(--border-gold);
          color: var(--color-maroon);
        }

        /* Mobile Responsive View (Vertical Timeline) */
        @media (max-width: 768px) {
          .timeline-central-spine {
            left: 24px;
            transform: none;
          }

          .timeline-item {
            padding-left: 55px !important;
            padding-right: 0 !important;
            justify-content: flex-start !important;
          }

          .timeline-node {
            left: 24px;
            transform: translate(-50%, 0);
          }

          .timeline-card {
            width: 100%;
            margin: 0;
            padding: 1.4rem;
          }

          .card-top-row {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
};
