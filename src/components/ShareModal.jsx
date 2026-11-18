import React, { useState } from 'react';
import { FaShareAlt, FaWhatsapp, FaCopy, FaCheck, FaTimes, FaUserEdit } from 'react-icons/fa';
import { INVITATION_DATA } from '../data/invitation';

export const ShareModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [guestNameInput, setGuestNameInput] = useState('');

  const currentOrigin = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : INVITATION_DATA.meta.websiteUrl;
  const currentUrl = guestNameInput.trim()
    ? `${currentOrigin}?guest=${encodeURIComponent(guestNameInput.trim())}`
    : currentOrigin;

  const shareTitle = INVITATION_DATA.meta.title;
  const shareText = `॥ श्री गणेशाय नमः ॥\n\nस्नेही स्वजन, हमारे लाड़ले सुपुत्र हृदयांश राहुल संग हृदयांशी शिल्पा के शुभ विवाह एवं स्नेहभोज में आप सपरिवार सादर आमंत्रित हैं।\n\nदिनांक: 13 दिसम्बर 2026, इन्दौर\nडिजिटल निमंत्रण पत्र देखें:\n`;

  const handleShareClick = async () => {
    // If Web Share API is available and no personalization input is active, attempt native share
    if (navigator.share && !guestNameInput) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
        return;
      } catch (err) {
        // User cancelled or unsupported -> open modal
        if (err.name !== 'AbortError') {
          setIsOpen(true);
        }
      }
    } else {
      setIsOpen(true);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (_) {
      // Fallback
      const input = document.createElement('input');
      input.value = currentUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getWhatsAppShareUrl = () => {
    const text = encodeURIComponent(`${shareText}${currentUrl}`);
    return `https://api.whatsapp.com/send?text=${text}`;
  };

  return (
    <>
      <button
        type="button"
        className="share-trigger-btn"
        onClick={handleShareClick}
        aria-label="निमंत्रण साझा करें"
        title="निमंत्रण पत्र साझा करें (Share)"
      >
        <FaShareAlt className="share-icon" />
      </button>

      {isOpen && (
        <div className="share-modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="share-modal-content royal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-title"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="बंद करें"
            >
              <FaTimes />
            </button>

            <h3 id="share-title" className="modal-title">
              निमंत्रण पत्र साझा करें
            </h3>
            <p className="modal-subtitle">
              अपने स्नेहीजनों और मित्रों को व्हाट्सएप या लिंक द्वारा आमंत्रित करें।
            </p>

            {/* Personalized Guest Link input */}
            <div className="personalize-box">
              <label htmlFor="guest-input" className="personalize-label">
                <FaUserEdit />
                <span>अतिथि का नाम जोड़ें (Personalize Link):</span>
              </label>
              <input
                id="guest-input"
                type="text"
                placeholder="उदा. शर्मा जी / वर्मा परिवार"
                value={guestNameInput}
                onChange={(e) => setGuestNameInput(e.target.value)}
                className="guest-name-input"
              />
              {guestNameInput.trim() && (
                <p className="preview-note">
                  अतिथि को दिखेगा: "प्रिय <strong>{guestNameInput.trim()}</strong> जी, आपका हार्दिक स्वागत है"
                </p>
              )}
            </div>

            {/* Link Copy Box */}
            <div className="link-copy-container">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="link-input"
                onClick={(e) => e.target.select()}
              />
              <button
                type="button"
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={copyToClipboard}
              >
                {copied ? <FaCheck /> : <FaCopy />}
                <span>{copied ? 'कॉपी हुआ!' : 'कॉपी'}</span>
              </button>
            </div>

            {/* WhatsApp Share Button */}
            <a
              href={getWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-share-btn"
            >
              <FaWhatsapp className="wa-icon" />
              <span>व्हाट्सएप पर भेजें</span>
            </a>
          </div>

          <style>{`
            .share-trigger-btn {
              width: 44px;
              height: 44px;
              border-radius: 50%;
              background: var(--card-bg-elevated);
              border: 1.5px solid var(--border-gold);
              color: var(--color-maroon);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: var(--shadow-sm);
              transition: var(--transition-smooth);
              cursor: pointer;
            }

            .share-trigger-btn:hover {
              transform: scale(1.08);
              border-color: var(--color-gold);
              box-shadow: var(--shadow-gold);
              color: var(--color-marigold-deep);
            }

            .share-icon {
              font-size: 1.05rem;
            }

            .share-modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(15, 5, 8, 0.75);
              backdrop-filter: blur(8px);
              z-index: 10000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1.2rem;
            }

            .share-modal-content {
              width: 100%;
              max-width: 460px;
              padding: 2rem 1.6rem;
              text-align: center;
              position: relative;
            }

            .modal-close-btn {
              position: absolute;
              top: 1rem;
              right: 1rem;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: var(--card-bg-elevated);
              border: 1px solid var(--border-gold);
              color: var(--text-muted);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: var(--transition-smooth);
            }

            .modal-close-btn:hover {
              color: var(--color-maroon);
              border-color: var(--color-gold);
            }

            .modal-title {
              font-size: 1.5rem;
              color: var(--color-maroon);
              margin-bottom: 0.4rem;
            }

            .modal-subtitle {
              font-size: 0.95rem;
              color: var(--text-muted);
              margin-bottom: 1.4rem;
            }

            .personalize-box {
              background: var(--bg-secondary);
              border: 1px dashed var(--border-gold);
              border-radius: var(--radius-md);
              padding: 1rem;
              margin-bottom: 1.2rem;
              text-align: left;
            }

            .personalize-label {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              font-size: 0.88rem;
              font-weight: 600;
              color: var(--color-maroon);
              margin-bottom: 0.4rem;
            }

            .guest-name-input {
              width: 100%;
              padding: 0.6rem 0.9rem;
              border-radius: var(--radius-sm);
              border: 1px solid var(--border-gold);
              background: var(--card-bg-elevated);
              color: var(--text-primary);
              font-family: inherit;
              font-size: 0.95rem;
            }

            .preview-note {
              font-size: 0.82rem;
              color: var(--color-marigold-deep);
              margin-top: 0.4rem;
            }

            .link-copy-container {
              display: flex;
              gap: 0.5rem;
              margin-bottom: 1.2rem;
            }

            .link-input {
              flex: 1;
              padding: 0.6rem 0.8rem;
              border-radius: var(--radius-sm);
              border: 1px solid var(--border-gold);
              background: var(--bg-primary);
              color: var(--text-secondary);
              font-size: 0.85rem;
              text-overflow: ellipsis;
            }

            .copy-btn {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              padding: 0.6rem 1rem;
              background: var(--card-bg-elevated);
              border: 1.5px solid var(--color-gold);
              color: var(--color-maroon);
              border-radius: var(--radius-sm);
              font-weight: 600;
              font-size: 0.9rem;
              transition: var(--transition-smooth);
            }

            .copy-btn.copied {
              background: #25D366;
              border-color: #25D366;
              color: #FFF;
            }

            .whatsapp-share-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.6rem;
              width: 100%;
              padding: 0.8rem;
              background: #25D366;
              color: #FFF;
              border-radius: var(--radius-full);
              font-weight: 700;
              font-size: 1.05rem;
              box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
              transition: var(--transition-smooth);
            }

            .whatsapp-share-btn:hover {
              background: #1EBE5B;
              transform: translateY(-2px);
            }

            .wa-icon {
              font-size: 1.3rem;
            }
          `}</style>
        </div>
      )}
    </>
  );
};
