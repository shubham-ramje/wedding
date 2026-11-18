import React, { useState, useRef, useEffect } from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import { INVITATION_DATA } from '../data/invitation';
import { startSynthesizedShehnai, stopSynthesizedShehnai } from '../utils/audioPlayer';

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [useSynth, setUseSynth] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    const handleError = () => {
      // Audio file not found or load failed -> fallback to Web Audio synthesizer
      setUseSynth(true);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      stopSynthesizedShehnai();
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current && !useSynth) {
        audioRef.current.pause();
      }
      stopSynthesizedShehnai();
      setIsPlaying(false);
    } else {
      if (useSynth) {
        startSynthesizedShehnai();
        setIsPlaying(true);
      } else if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Audio file playback blocked or missing, using traditional synthesizer:", err);
            setUseSynth(true);
            startSynthesizedShehnai();
            setIsPlaying(true);
          });
      } else {
        setUseSynth(true);
        startSynthesizedShehnai();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="music-toggle-wrapper">
      <audio
        ref={audioRef}
        src={INVITATION_DATA.music.audioSrc}
        preload="none"
        aria-hidden="true"
      />

      <button
        type="button"
        className={`music-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? 'शहनाई संगीत बंद करें' : 'शहनाई संगीत शुरू करें'}
        title={isPlaying ? 'संगीत बंद करें' : 'मांगलिक शहनाई बजाएं'}
      >
        {isPlaying ? (
          <>
            <span className="equalizer-bars" aria-hidden="true">
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
            </span>
            <FaMusic className="music-icon" />
          </>
        ) : (
          <>
            <FaVolumeMute className="music-icon muted" />
          </>
        )}
      </button>

      <style>{`
        .music-toggle-wrapper {
          display: inline-flex;
          align-items: center;
        }

        .music-btn {
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
          position: relative;
          cursor: pointer;
        }

        .music-btn:hover {
          transform: scale(1.08);
          border-color: var(--color-gold);
          box-shadow: var(--shadow-gold);
          color: var(--color-marigold-deep);
        }

        .music-btn.playing {
          border-color: var(--color-gold);
          background: var(--card-bg);
          box-shadow: 0 0 16px rgba(201, 162, 75, 0.45);
        }

        .music-icon {
          font-size: 1.1rem;
        }

        .music-icon.muted {
          color: var(--text-muted);
        }

        /* Equalizer Wave Bars */
        .equalizer-bars {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 14px;
          position: absolute;
          top: 6px;
          right: 6px;
        }

        .bar {
          width: 2px;
          background: var(--color-marigold);
          border-radius: 1px;
          animation: wave 1.2s ease-in-out infinite alternate;
        }

        .bar-1 { height: 6px; animation-delay: 0.1s; }
        .bar-2 { height: 12px; animation-delay: 0.3s; }
        .bar-3 { height: 8px; animation-delay: 0.2s; }

        @keyframes wave {
          0% { height: 3px; }
          100% { height: 14px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bar { animation: none; height: 8px; }
        }
      `}</style>
    </div>
  );
};
