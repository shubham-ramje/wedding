import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INVITATION_DATA } from '../data/invitation';
import { MandalaDivider, SwastikIcon } from './DecorativeDividers';
import { FaWhatsapp, FaUser, FaUsers, FaHeart, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

export const RSVP = () => {
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [blessingNote, setBlessingNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // If URL has ?guest=..., pre-fill name
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const name = params.get('guest');
      if (name && name.trim()) {
        setGuestName(name.trim());
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = INVITATION_DATA.rsvp.defaultMessageTemplate(
      guestName.trim(),
      guestCount,
      blessingNote.trim()
    );

    const waUrl = `https://wa.me/${INVITATION_DATA.rsvp.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    setSubmitted(true);
    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="rsvp" className="section-wrapper rsvp-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <SwastikIcon size={16} />
            <span>उपस्थिति एवं शुभाशीष</span>
            <SwastikIcon size={16} />
          </div>
          <h2 className="section-title">{INVITATION_DATA.rsvp.heading}</h2>
          <p className="section-subtitle">{INVITATION_DATA.rsvp.subtitle}</p>
        </div>

        <div className="rsvp-card-wrapper">
          <motion.div
            className="rsvp-form-card royal-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="rsvp-form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="rsvp-name" className="form-label">
                  <FaUser className="form-icon" />
                  <span>आपका शुभ नाम (Full Name) *</span>
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  placeholder="उदा. श्री राजेश शर्मा"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* Guest Count Field */}
              <div className="form-group">
                <label htmlFor="rsvp-count" className="form-label">
                  <FaUsers className="form-icon" />
                  <span>पधारने वाले सदस्यों की संख्या (Number of Guests) *</span>
                </label>
                <div className="count-selector-row">
                  {['1', '2', '3', '4', '5+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`count-chip ${guestCount === num ? 'selected' : ''}`}
                      onClick={() => setGuestCount(num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blessing Note */}
              <div className="form-group">
                <label htmlFor="rsvp-note" className="form-label">
                  <FaHeart className="form-icon heart" />
                  <span>शुभकामना संदेश / शुभाशीष (Optional Wishes)</span>
                </label>
                <textarea
                  id="rsvp-note"
                  rows={3}
                  placeholder="वर-वधू के लिए अपने मंगल वचन लिखें..."
                  value={blessingNote}
                  onChange={(e) => setBlessingNote(e.target.value)}
                  className="form-textarea"
                />
              </div>

              {/* WhatsApp Submit Button */}
              <button type="submit" className="rsvp-submit-btn">
                <FaWhatsapp className="wa-btn-icon" />
                <span>व्हाट्सएप पर उपस्थिति दर्ज करें (हम अवश्य पधारेंगे)</span>
                <FaPaperPlane className="send-icon" />
              </button>

              {submitted && (
                <p className="rsvp-success-hint">
                  व्हाट्सएप खुल रहा है... यदि नहीं खुला, तो कृपया ऊपर दिए गए नंबर पर सीधा संपर्क करें।
                </p>
              )}
            </form>

            <div className="rsvp-divider" />

            {/* Direct Contact Info */}
            <div className="rsvp-contact-footer">
              <span className="contact-head">सीधा संपर्क सूत्र (Contact Person):</span>
              <p className="contact-name">{INVITATION_DATA.rsvp.contactPerson}</p>
              <div className="contact-links-row">
                <a href={`tel:${INVITATION_DATA.meta.primaryPhone}`} className="contact-phone-btn">
                  <FaPhoneAlt />
                  <span>{INVITATION_DATA.meta.primaryPhone}</span>
                </a>
                <a href={`tel:${INVITATION_DATA.rsvp.alternatePhone}`} className="contact-phone-btn">
                  <FaPhoneAlt />
                  <span>{INVITATION_DATA.rsvp.alternatePhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <MandalaDivider />
      </div>

      <style>{`
        .rsvp-section {
          position: relative;
        }

        .text-center {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .rsvp-card-wrapper {
          max-width: 660px;
          margin: 0 auto 3rem auto;
        }

        .rsvp-form-card {
          padding: clamp(1.8rem, 5vw, 2.8rem);
          border-width: 2px;
          border-color: var(--color-gold);
          background: linear-gradient(
            180deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 100%
          );
        }

        .rsvp-form {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-maroon);
        }

        .form-icon {
          color: var(--color-marigold-deep);
        }

        .form-icon.heart {
          color: #E63946;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--border-gold);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition-smooth);
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--color-gold);
          outline: none;
          box-shadow: 0 0 10px rgba(201, 162, 75, 0.35);
        }

        .count-selector-row {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .count-chip {
          flex: 1;
          min-width: 50px;
          padding: 0.65rem 0.5rem;
          background: var(--bg-primary);
          border: 1.5px solid var(--border-gold);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .count-chip:hover {
          border-color: var(--color-gold);
          color: var(--color-maroon);
        }

        .count-chip.selected {
          background: var(--gradient-maroon);
          border-color: var(--color-gold);
          color: #FFF8EC;
          box-shadow: var(--shadow-sm);
        }

        .rsvp-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 0.9rem 1.4rem;
          background: #25D366;
          color: #FFF;
          border-radius: var(--radius-full);
          font-size: clamp(0.95rem, 2.5vw, 1.12rem);
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
          transition: var(--transition-smooth);
          margin-top: 0.5rem;
        }

        .rsvp-submit-btn:hover {
          background: #1EBE5B;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.45);
        }

        .wa-btn-icon {
          font-size: 1.45rem;
        }

        .send-icon {
          font-size: 0.95rem;
        }

        .rsvp-success-hint {
          font-size: 0.88rem;
          color: #25D366;
          text-align: center;
          margin-top: 0.4rem;
        }

        .rsvp-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-gold), transparent);
          margin: 1.8rem 0 1.4rem 0;
        }

        .rsvp-contact-footer {
          text-align: center;
        }

        .contact-head {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .contact-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-maroon);
          margin: 0.2rem 0 0.8rem 0;
        }

        .contact-links-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .contact-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-maroon);
          transition: var(--transition-smooth);
        }

        .contact-phone-btn:hover {
          background: var(--card-bg-elevated);
          border-color: var(--color-gold);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
