/**
 * Audio Engine for Wedding Invitation:
 * Supports HTML5 Audio element with fallback to an Indian Classical Shehnai/Tanpura
 * Web Audio API synthesizer if audio file is not present or blocked.
 */

let audioContext = null;
let isSynthesizing = false;
let synthTimer = null;
let activeGainNodes = [];

// Traditional Raag notes for wedding shehnai vibe (Frequencies in Hz)
const RAAG_YAMAN_NOTES = [
  261.63, // Sa (C4)
  293.66, // Re (D4)
  329.63, // Ga (E4)
  369.99, // Tivra Ma (F#4)
  392.00, // Pa (G4)
  440.00, // Dha (A4)
  493.88, // Ni (B4)
  523.25, // Sa' (C5)
  587.33, // Re' (D5)
];

// Classic celebratory shehnai phrase progression
const SHEHNAI_MELODY_SEQUENCE = [
  { note: 0, dur: 1.2 }, { note: 2, dur: 0.8 }, { note: 3, dur: 1.0 }, { note: 4, dur: 1.5 },
  { note: 4, dur: 0.6 }, { note: 5, dur: 0.6 }, { note: 6, dur: 0.8 }, { note: 7, dur: 2.0 },
  { note: 6, dur: 0.8 }, { note: 5, dur: 0.8 }, { note: 4, dur: 1.2 }, { note: 3, dur: 1.0 },
  { note: 2, dur: 1.2 }, { note: 1, dur: 0.8 }, { note: 0, dur: 2.2 },
];

/**
 * Start the Web Audio synthesized Indian shehnai & tanpura drone
 */
export function startSynthesizedShehnai() {
  if (isSynthesizing) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!audioContext) {
      audioContext = new AudioCtx();
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    isSynthesizing = true;
    activeGainNodes = [];

    // Master Volume
    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0.18, audioContext.currentTime);
    masterGain.connect(audioContext.destination);

    // 1. Tanpura Root Drone (Sa - C3 & Pa - G3)
    const droneFreqs = [130.81, 196.00, 261.63];
    droneFreqs.forEach((freq) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);

      // Low pass filter for warm acoustic tanpura resonance
      const filter = audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, audioContext.currentTime);

      gain.gain.setValueAtTime(0.04, audioContext.currentTime);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start();
      activeGainNodes.push({ osc, gain });
    });

    // 2. Shehnai Melody Lead
    let stepIndex = 0;
    const playNextNote = () => {
      if (!isSynthesizing || !audioContext) return;

      const currentStep = SHEHNAI_MELODY_SEQUENCE[stepIndex % SHEHNAI_MELODY_SEQUENCE.length];
      const targetFreq = RAAG_YAMAN_NOTES[currentStep.note];

      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();

      // Shehnai distinctive double-reed nasal harmonic spectrum
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(targetFreq, audioContext.currentTime);

      // Meend (glide) effect: subtle pitch bend
      osc.frequency.exponentialRampToValueAtTime(
        targetFreq * 1.008,
        audioContext.currentTime + currentStep.dur * 0.4
      );

      // Formant filter characteristic of shehnai horn
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, audioContext.currentTime);
      filter.Q.setValueAtTime(2.2, audioContext.currentTime);

      // Envelope: gentle attack, expressive sustain, slow release
      const now = audioContext.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + currentStep.dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + currentStep.dur);

      stepIndex++;
      synthTimer = setTimeout(playNextNote, currentStep.dur * 1000);
    };

    playNextNote();
  } catch (err) {
    console.warn("Web Audio synthesis error:", err);
  }
}

/**
 * Stop synthesized audio
 */
export function stopSynthesizedShehnai() {
  isSynthesizing = false;
  if (synthTimer) {
    clearTimeout(synthTimer);
    synthTimer = null;
  }
  activeGainNodes.forEach(({ osc, gain }) => {
    try {
      osc.stop();
      osc.disconnect();
    } catch (_) {}
  });
  activeGainNodes = [];
}
