import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { MusicToggle } from './MusicToggle';
import { ShareModal } from './ShareModal';
import { SwastikIcon } from './DecorativeDividers';
import { INVITATION_DATA } from '../data/invitation';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'शुभ श्लोक', href: '#shlok' },
    { label: 'वर-वधू', href: '#couple' },
    { label: 'कार्यक्रम', href: '#events' },
    { label: 'स्थल', href: '#venue' },
    { label: 'परिवार', href: '#family' },
    { label: 'आशीर्वाद (RSVP)', href: '#rsvp' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`royal-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand / Manglik Seal */}
        <a href="#hero" className="nav-brand" onClick={(e) => handleLinkClick(e, '#hero')}>
          <SwastikIcon size={20} />
          <span className="brand-names">{INVITATION_DATA.meta.coupleEnglish}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="मुख्य नेविगेशन">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Music, Theme, Share */}
        <div className="nav-actions">
          <MusicToggle />
          <ThemeToggle />
          <ShareModal />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'मेन्यू बंद करें' : 'मेन्यू खोलें'}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer royal-card" role="navigation" aria-label="मोबाइल नेविगेशन">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-drawer-link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .royal-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
        }

        .royal-navbar.scrolled {
          background: var(--card-bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-gold);
          box-shadow: var(--shadow-sm);
          padding: 0.5rem 1rem;
        }

        .nav-container {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-english-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-maroon);
          letter-spacing: 0.04em;
        }

        .brand-names {
          background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-gold-dark) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          position: relative;
          padding: 0.3rem 0;
          transition: var(--transition-smooth);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--color-gold);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--color-maroon);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .mobile-hamburger-btn {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--border-gold);
          color: var(--color-maroon);
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          cursor: pointer;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 1rem;
          right: 1rem;
          margin-top: 0.5rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-drawer-link {
          padding: 0.6rem 1rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          border-radius: var(--radius-sm);
          transition: var(--transition-smooth);
        }

        .mobile-drawer-link:hover {
          background: var(--border-gold);
          color: var(--color-maroon);
        }

        @media (max-width: 860px) {
          .desktop-nav {
            display: none;
          }
          .mobile-hamburger-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};
