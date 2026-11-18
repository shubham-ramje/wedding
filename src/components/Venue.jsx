import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INVITATION_DATA } from '../data/invitation';
import { MandalaDivider, SwastikIcon } from './DecorativeDividers';
import { FaMapMarkerAlt, FaDirections, FaCopy, FaCheck, FaCarSide, FaHome } from 'react-icons/fa';

export const Venue = () => {
  const { primary, baraat } = INVITATION_DATA.venues;
  const [copiedKey, setCopiedKey] = useState(null);

  const copyAddress = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch (_) {
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  return (
    <section id="venue" className="section-wrapper venue-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            <SwastikIcon size={16} />
            <span>कार्यक्रम स्थल एवं मार्ग दर्शन</span>
            <SwastikIcon size={16} />
          </div>
          <h2 className="section-title">कार्यक्रम स्थल (Venue)</h2>
          <p className="section-subtitle">
            शुभ प्रसंगों के आयोजन स्थल एवं सुगम मार्ग हेतु दिशा-निर्देश
          </p>
        </div>

        {/* Venues Grid */}
        <div className="venues-grid">
          {/* 1. Primary Venue (Nij Nivas) */}
          <motion.div
            className="venue-card royal-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="venue-card-top">
              <div className="venue-type-icon">
                <FaHome />
              </div>
              <div>
                <span className="venue-tag">मुख्य समारोह स्थल</span>
                <h3 className="venue-card-title">{primary.name}</h3>
              </div>
            </div>

            <p className="venue-desc">{primary.description}</p>

            <div className="address-box">
              <FaMapMarkerAlt className="addr-pin" />
              <p className="address-text">{primary.address}</p>
            </div>

            <div className="venue-btn-group">
              <a
                href={primary.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaDirections />
                <span>दिशा निर्देश (Get Directions)</span>
              </a>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => copyAddress(primary.address, 'primary')}
              >
                {copiedKey === 'primary' ? <FaCheck /> : <FaCopy />}
                <span>{copiedKey === 'primary' ? 'पता कॉपी हुआ!' : 'पता कॉपी करें'}</span>
              </button>
            </div>
          </motion.div>

          {/* 2. Baraat Venue (Gajanand Mangal Parisar) */}
          <motion.div
            className="venue-card royal-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="venue-card-top">
              <div className="venue-type-icon baraat-icon">
                <FaCarSide />
              </div>
              <div>
                <span className="venue-tag">विवाह स्थल (बारात एवं फेरे)</span>
                <h3 className="venue-card-title">{baraat.name}</h3>
              </div>
            </div>

            <p className="venue-desc">{baraat.departure}</p>

            <div className="address-box">
              <FaMapMarkerAlt className="addr-pin" />
              <p className="address-text">{baraat.address}</p>
            </div>

            <div className="venue-btn-group">
              <a
                href={baraat.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaDirections />
                <span>दिशा निर्देश (Get Directions)</span>
              </a>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => copyAddress(baraat.address, 'baraat')}
              >
                {copiedKey === 'baraat' ? <FaCheck /> : <FaCopy />}
                <span>{copiedKey === 'baraat' ? 'पता कॉपी हुआ!' : 'पता कॉपी करें'}</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Embedded Map Section */}
        <motion.div
          className="map-embed-wrapper royal-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="map-card-header">
            <FaMapMarkerAlt className="map-header-icon" />
            <span className="map-header-title">इन्दौर नगर स्थिति मानचित्र (Indore City Location Map)</span>
          </div>

          <div className="map-frame-box">
            <iframe
              title="Google Map Location Indore"
              width="100%"
              height="340"
              style={{ border: 0, borderRadius: 'var(--radius-md)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Kabitkhedi,+Indore,+Madhya+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </motion.div>

        <MandalaDivider />
      </div>

      <style>{`
        .venue-section {
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--bg-secondary) 50%,
            transparent 100%
          );
        }

        .text-center {
          text-align: center;
          margin-bottom: 3rem;
        }

        .venues-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: clamp(1.5rem, 4vw, 2.5rem);
          max-width: 1040px;
          margin: 0 auto 3rem auto;
        }

        .venue-card {
          padding: clamp(1.8rem, 4vw, 2.4rem);
          display: flex;
          flex-direction: column;
        }

        .venue-card-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .venue-type-icon {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1.5px solid var(--color-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .venue-type-icon.baraat-icon {
          color: var(--color-marigold-deep);
        }

        .venue-tag {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .venue-card-title {
          font-size: 1.45rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .venue-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.2rem;
        }

        .address-box {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          background: var(--bg-secondary);
          border: 1px dashed var(--border-gold);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .addr-pin {
          font-size: 1.3rem;
          color: var(--color-maroon);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .address-text {
          font-size: 0.98rem;
          color: var(--text-primary);
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        .venue-btn-group {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .map-embed-wrapper {
          max-width: 1040px;
          margin: 0 auto;
          padding: 1.2rem;
          background: var(--card-bg-elevated);
        }

        .map-card-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0.5rem 1rem 0.5rem;
        }

        .map-header-icon {
          color: var(--color-maroon);
          font-size: 1.2rem;
        }

        .map-header-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-maroon);
        }

        .map-frame-box {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
        }

        @media (max-width: 480px) {
          .venue-btn-group {
            flex-direction: column;
            width: 100%;
          }
          .venue-btn-group button, .venue-btn-group a {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
