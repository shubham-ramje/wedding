import React from 'react';
import { INVITATION_DATA } from '../data/invitation';
import { GaneshIcon, SwastikIcon, DiyaIcon } from './DecorativeDividers';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="royal-footer">
      <div className="container footer-content">
        <div className="footer-top-decor">
          <DiyaIcon size={36} />
          <GaneshIcon size={56} />
          <DiyaIcon size={36} />
        </div>

        <h3 className="footer-blessing-title">{INVITATION_DATA.footer.blessing}</h3>
        <p className="footer-guest-quote">{INVITATION_DATA.footer.quote}</p>

        <div className="footer-hashtag-badge">
          <span>{INVITATION_DATA.footer.hashtag}</span>
        </div>

        <div className="footer-names-row font-english">
          <span>{INVITATION_DATA.meta.coupleEnglish}</span>
        </div>

        <p className="footer-family-credit">{INVITATION_DATA.footer.copyright}</p>

        <div className="footer-divider-line" />

        <div className="footer-bottom-row">
          <p className="made-with-love">
            प्रेम एवं श्रद्धा से निर्मित <FaHeart className="heart-tiny" /> वर-वधू के पावन परिणयोत्सव हेतु
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="शीर्ष पर वापस जाएं"
            title="ऊपर जाएं"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      <style>{`
        .royal-footer {
          position: relative;
          background: linear-gradient(
            180deg,
            var(--bg-secondary) 0%,
            var(--bg-tertiary) 40%,
            var(--card-bg-elevated) 100%
          );
          border-top: 2px solid var(--border-gold);
          padding: 4rem 0 2.5rem 0;
          text-align: center;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-top-decor {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 1.4rem;
        }

        .footer-blessing-title {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          color: var(--color-maroon);
          margin-bottom: 0.6rem;
        }

        .footer-guest-quote {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: var(--text-secondary);
          margin-bottom: 1.4rem;
          font-style: italic;
        }

        .footer-hashtag-badge {
          display: inline-block;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          color: var(--color-marigold-deep);
          font-family: var(--font-english-serif);
          font-size: 1.15rem;
          font-weight: 700;
          padding: 0.35rem 1.4rem;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
          box-shadow: var(--shadow-sm);
        }

        .footer-names-row {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-maroon);
          margin-bottom: 0.4rem;
          letter-spacing: 0.05em;
        }

        .footer-family-credit {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .footer-divider-line {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-gold), transparent);
          margin-bottom: 1.5rem;
        }

        .footer-bottom-row {
          width: 100%;
          max-width: 800px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .made-with-love {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 0;
        }

        .heart-tiny {
          color: #E63946;
          font-size: 0.8rem;
        }

        .back-to-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--border-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .back-to-top-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-marigold-deep);
          transform: translateY(-3px);
          box-shadow: var(--shadow-gold);
        }

        @media (max-width: 540px) {
          .footer-bottom-row {
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};
