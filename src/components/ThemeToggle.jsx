import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check saved theme or system preference
    const saved = localStorage.getItem('wedding-theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
      updateMetaThemeColor(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
      updateMetaThemeColor(initial);
    }
  }, []);

  const updateMetaThemeColor = (currentTheme) => {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', currentTheme === 'dark' ? '#14090B' : '#FFF8EC');
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('wedding-theme', nextTheme);
    updateMetaThemeColor(nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'लाइट मोड चालू करें' : 'डार्क मोड चालू करें'}
      title={theme === 'dark' ? 'दिन का स्वरूप (Light)' : 'रात्रि का स्वरूप (Dark)'}
    >
      <div className={`icon-container ${theme}`}>
        {theme === 'dark' ? (
          <FaSun className="theme-icon sun" />
        ) : (
          <FaMoon className="theme-icon moon" />
        )}
      </div>

      <style>{`
        .theme-toggle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--border-gold);
          color: var(--color-gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .theme-toggle-btn:hover {
          transform: scale(1.08);
          border-color: var(--color-gold);
          box-shadow: var(--shadow-gold);
        }

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .icon-container.dark {
          color: var(--color-marigold);
          transform: rotate(180deg);
        }

        .icon-container.light {
          color: var(--color-maroon);
          transform: rotate(0deg);
        }

        .theme-icon {
          font-size: 1.15rem;
        }
      `}</style>
    </button>
  );
};
