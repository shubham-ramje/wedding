import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INVITATION_DATA } from '../data/invitation';
import { MandalaDivider, SwastikIcon } from './DecorativeDividers';
import {
  FaChevronDown,
  FaPhoneAlt,
  FaUsers,
  FaHeart,
  FaChild,
  FaHandHoldingHeart,
  FaEnvelope,
} from 'react-icons/fa';

export const Family = () => {
  const { family } = INVITATION_DATA;
  // Open Preshak, Darshanabhilashi and Balmanuhar by default
  const [openSections, setOpenSections] = useState({
    preshak: true,
    darshanabhilashi: true,
    swagatatur: false,
    vineet: false,
    balmanuhar: true,
  });

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const all = {};
    family.sections.forEach((s) => {
      all[s.id] = true;
    });
    setOpenSections(all);
  };

  const collapseAll = () => {
    setOpenSections({});
  };

  const getSectionIcon = (id) => {
    switch (id) {
      case 'preshak':
        return <FaEnvelope />;
      case 'darshanabhilashi':
        return <FaHeart />;
      case 'swagatatur':
        return <FaUsers />;
      case 'vineet':
        return <FaHandHoldingHeart />;
      case 'balmanuhar':
        return <FaChild />;
      default:
        return <FaUsers />;
    }
  };

  return (
    <section id="family" className="section-wrapper family-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <SwastikIcon size={16} />
            <span>रामजे परिवार</span>
            <SwastikIcon size={16} />
          </div>
          <h2 className="section-title">{family.heading}</h2>
          <p className="section-subtitle">{family.subheading}</p>

          <div className="accordion-toggle-all">
            <button type="button" className="toggle-btn-small" onClick={expandAll}>
              सभी खोलें (Expand All)
            </button>
            <span className="dot-divider">•</span>
            <button type="button" className="toggle-btn-small" onClick={collapseAll}>
              सभी बंद करें (Collapse All)
            </button>
          </div>
        </div>

        {/* Accordion Cards Container */}
        <div className="accordion-stack">
          {family.sections.map((sec, index) => {
            const isOpen = !!openSections[sec.id];

            return (
              <motion.div
                key={sec.id}
                className="accordion-card royal-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Header / Trigger */}
                <button
                  type="button"
                  className={`accordion-header ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleSection(sec.id)}
                  aria-expanded={isOpen}
                  aria-controls={`family-sec-${sec.id}`}
                >
                  <div className="header-left">
                    <span className="sec-icon-circle">{getSectionIcon(sec.id)}</span>
                    <div className="title-group">
                      <span className="sec-badge-text">{sec.badge}</span>
                      <h3 className="sec-main-title">{sec.title}</h3>
                    </div>
                  </div>
                  <FaChevronDown className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
                </button>

                {/* Animated Collapsible Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`family-sec-${sec.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="accordion-body-collapse"
                    >
                      <div className="accordion-body-content">
                        {/* 1. Preshak View */}
                        {sec.id === 'preshak' && (
                          <div className="preshak-box">
                            {sec.items.map((item, idx) => (
                              <div key={idx} className="preshak-item">
                                <h4 className="preshak-name">{item.name}</h4>
                                <p className="preshak-address">{item.address}</p>
                                <div className="preshak-phones">
                                  {item.phones.map((phone, pIdx) => (
                                    <a
                                      key={pIdx}
                                      href={`tel:${phone}`}
                                      className="phone-pill-btn"
                                      aria-label={`कॉल करें ${phone}`}
                                    >
                                      <FaPhoneAlt className="phone-icon" />
                                      <span>मो. {phone}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* 2. Darshanabhilashi & Swagatatur View */}
                        {sec.groups && (
                          <div className="groups-stack">
                            {sec.groups.map((grp, gIdx) => (
                              <div key={gIdx} className="family-subgroup">
                                <span className="subgroup-title">{grp.role}:</span>
                                <div className="members-chips-wrap">
                                  {grp.members.map((m, mIdx) => (
                                    <span key={mIdx} className="member-chip">
                                      {m}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* 3. Vineet View */}
                        {sec.members && (
                          <div className="vineet-wrap">
                            <div className="members-chips-wrap">
                              {sec.members.map((m, mIdx) => (
                                <span key={mIdx} className="member-chip vineet-chip">
                                  {m}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 4. Bal Manuhar View */}
                        {sec.id === 'balmanuhar' && (
                          <div className="balmanuhar-card">
                            <p className="balmanuhar-quote">"{sec.quote}"</p>
                            <div className="children-chips-row">
                              {sec.children.map((child, cIdx) => (
                                <span key={cIdx} className="child-name-badge">
                                  ❤ {child}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <MandalaDivider />
      </div>

      <style>{`
        .family-section {
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

        .accordion-toggle-all {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 1rem;
        }

        .toggle-btn-small {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-marigold-deep);
          cursor: pointer;
          padding: 0.2rem 0.5rem;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .dot-divider {
          color: var(--border-gold);
        }

        .accordion-stack {
          max-width: 860px;
          margin: 0 auto 3rem auto;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .accordion-card {
          border-width: 1.5px;
          background: var(--card-bg-elevated);
          overflow: hidden;
        }

        .accordion-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 1.6rem;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .accordion-header:hover {
          background: var(--bg-tertiary);
        }

        .accordion-header.active {
          border-bottom: 1px dashed var(--border-gold);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .sec-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--color-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .title-group {
          display: flex;
          flex-direction: column;
        }

        .sec-badge-text {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .sec-main-title {
          font-size: 1.35rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .chevron-icon {
          font-size: 1.1rem;
          color: var(--color-gold-dark);
          transition: transform 0.3s ease;
        }

        .chevron-icon.rotate {
          transform: rotate(180deg);
        }

        .accordion-body-collapse {
          overflow: hidden;
        }

        .accordion-body-content {
          padding: 1.4rem 1.6rem;
          background: var(--bg-primary);
        }

        /* Preshak styling */
        .preshak-name {
          font-size: 1.25rem;
          color: var(--color-maroon);
          margin-bottom: 0.3rem;
        }

        .preshak-address {
          font-size: 0.98rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .preshak-phones {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .phone-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-maroon);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }

        .phone-pill-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-marigold-deep);
          transform: translateY(-2px);
        }

        .phone-icon {
          color: #25D366;
        }

        /* Groups & Chips */
        .groups-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .family-subgroup {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .subgroup-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-maroon);
        }

        .members-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .member-chip {
          display: inline-block;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.92rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .vineet-chip {
          background: var(--bg-tertiary);
          font-weight: 600;
        }

        /* Bal Manuhar */
        .balmanuhar-card {
          text-align: center;
          padding: 0.5rem;
        }

        .balmanuhar-quote {
          font-family: var(--font-heading-hindi);
          font-size: 1.05rem;
          color: var(--color-maroon);
          font-style: italic;
          line-height: 1.7;
          margin-bottom: 1.2rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          padding: 1rem 1.4rem;
          border-left: 3px solid var(--color-gold);
        }

        .children-chips-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .child-name-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: linear-gradient(135deg, var(--card-bg-elevated) 0%, var(--bg-secondary) 100%);
          border: 1.5px solid var(--color-gold);
          padding: 0.45rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-maroon);
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </section>
  );
};
