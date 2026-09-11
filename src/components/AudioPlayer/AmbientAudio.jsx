import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AmbientAudio = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Elegant soft piano chord sequence using Web Audio API
  const chords = [
    [261.63, 329.63, 392.00, 523.25], // C Major
    [220.00, 261.63, 329.63, 440.00], // A Minor
    [174.61, 220.00, 261.63, 349.23], // F Major
    [196.00, 246.94, 293.66, 392.00]  // G Major
  ];

  const playChord = (chordNotes, ctx) => {
    if (!ctx || ctx.state === 'closed') return;
    const now = ctx.currentTime;

    chordNotes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.5 + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + 4.0);
    });
  };

  const startAmbient = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      let chordIndex = 0;
      playChord(chords[0], audioCtxRef.current);

      intervalRef.current = setInterval(() => {
        chordIndex = (chordIndex + 1) % chords.length;
        playChord(chords[chordIndex], audioCtxRef.current);
      }, 4000);

      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio Context error", e);
    }
  };

  const stopAmbient = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  };

  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      // Prompt user or start on interaction
      startAmbient();
    }
  }, [autoPlayTrigger]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '30px',
        background: 'rgba(248, 243, 234, 0.94)',
        backdropFilter: 'blur(10px)',
        border: '1.5px solid rgba(176, 138, 74, 0.45)',
        color: isPlaying ? '#B08A4A' : '#7A695F',
        fontFamily: 'var(--font-cormorant)',
        fontSize: '0.95rem',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 6px 20px rgba(130, 110, 95, 0.16)'
      }}
      title={isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền không gian'}
    >
      {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      <span style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {isPlaying ? 'Nhạc nền: Bật' : 'Nhạc nền: Tắt'}
      </span>
      {isPlaying && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#B08A4A',
            boxShadow: '0 0 8px #B08A4A'
          }}
        />
      )}
    </button>
  );
};
