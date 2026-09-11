import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp, Share2, Check, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { graduationInfo } from '../../data/graduationInfo';

export const FinalSceneSection = ({ onReplay }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    // Subtle confetti rain on entering final scene
    const timer = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 90,
        origin: { y: 0.8 },
        ticks: 200,
        gravity: 0.8,
        colors: ['#D4AF37', '#F3E5AB', '#FAF7F0', '#C5A059']
      });
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="final-scene"
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 20px 100px',
        position: 'relative'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ maxWidth: '640px', margin: '0 auto', zIndex: 2 }}
      >
        {/* Glowing Cap Icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 5rem)',
            lineHeight: 1,
            marginBottom: '20px',
            filter: 'drop-shadow(0 10px 25px rgba(212, 175, 55, 0.4))'
          }}
        >
          🎓
        </motion.div>

        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)',
            fontWeight: 700,
            color: '#3D302A',
            lineHeight: 1.25,
            letterSpacing: '0.02em',
            marginBottom: '14px'
          }}
        >
          "Cảm ơn vì đã luôn là một phần trên hành trình của tôi."
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontSize: '1.35rem',
            color: '#7A695F',
            marginBottom: '24px'
          }}
        >
          Cảm ơn vì đã luôn là một mảnh ghép rực rỡ trong thanh xuân của tôi.
        </p>

        <div className="gold-divider" style={{ margin: '24px auto' }}>
          <div className="line" />
          <div className="diamond" />
          <div className="line" />
        </div>

        {/* Graduate Name & Year */}
        <div style={{ marginTop: '12px' }}>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 7vw, 4.8rem)',
              color: '#B08A4A',
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: '0.02em'
            }}
          >
            {graduationInfo.graduate.name}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.15rem',
              letterSpacing: '0.15em',
              color: '#3D302A',
              textTransform: 'uppercase',
              marginTop: '10px',
              fontWeight: 700
            }}
          >
            TÂN CỬ NHÂN {graduationInfo.graduate.faculty} • NIÊN KHÓA {graduationInfo.graduate.cohort || '2021 — 2025'}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.15rem',
              color: '#7A695F',
              marginTop: '4px'
            }}
          >
            {graduationInfo.graduate.university}
          </p>
        </div>

        {/* Action Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginTop: '45px'
          }}
        >
          <button
            onClick={handleCopyLink}
            className="btn-outline-gold"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.78rem' }}
          >
            {copied ? <Check size={16} /> : <Share2 size={16} />}
            <span>{copied ? 'Đã sao chép liên kết!' : 'Chia sẻ thiệp mời'}</span>
          </button>

          {onReplay && (
            <button
              onClick={onReplay}
              className="btn-outline-gold"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.78rem' }}
              title="Đóng thiệp và trải nghiệm lại từ đầu"
            >
              <RefreshCw size={15} />
              <span>Gấp thiệp lại</span>
            </button>
          )}

          <button
            onClick={scrollToTop}
            className="btn-gold"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.78rem', padding: '12px 24px' }}
          >
            <ArrowUp size={16} />
            <span>Lên đầu trang</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
