import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, ChevronDown } from 'lucide-react';
import './Envelope.css';

export const Envelope3D = ({ guest, onOpen, isOpened }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openingStep, setOpeningStep] = useState(isOpened ? 3 : 0);

  useEffect(() => {
    setOpeningStep(isOpened ? 3 : 0);
  }, [isOpened]);

  const handleOpenEnvelope = () => {
    if (openingStep > 0) return;
    setOpeningStep(1); // 1: wax seal pop & flap opening

    // Step 2: card slides out
    setTimeout(() => {
      setOpeningStep(2);
    }, 600);

    // Step 3: camera zoom & transition to full card view
    setTimeout(() => {
      setOpeningStep(3);
      if (onOpen) onOpen();
    }, 1500);
  };

  return (
    <div className="envelope-scene-wrapper">
      <div className="envelope-glow" />

      {/* Header cinematic intro - Tự động ẩn đi mượt mà khi mở thiệp */}
      <AnimatePresence>
        {openingStep === 0 && (
          <motion.div
            className="envelope-header-intro"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -35,
              scale: 0.95,
              transition: { duration: 0.5, ease: 'easeInOut' }
            }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              textAlign: 'center',
              marginBottom: '36px',
              zIndex: 10
            }}
          >
            <motion.p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.05rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B08A4A',
                fontWeight: 700,
                marginBottom: '6px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.3 }}
            >
              Thư Mời Danh Dự
            </motion.p>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.2rem, 5.5vw, 3.4rem)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#3D302A',
                lineHeight: 1.25
              }}
            >
              Một chương mới bắt đầu...
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2.8vw, 1.35rem)',
                color: '#7A695F',
                marginTop: '6px'
              }}
            >
              Một lời mời đặc biệt dành riêng cho bạn
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Envelope Container */}
      <motion.div
        className="envelope-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: openingStep >= 2 ? 1.05 : 1,
          opacity: 1,
          y: openingStep === 0 ? [0, -8, 0] : 0
        }}
        transition={{
          y: {
            repeat: openingStep === 0 ? Infinity : 0,
            duration: 4,
            ease: 'easeInOut'
          },
          duration: 0.8
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`envelope-3d ${openingStep >= 1 ? 'is-open' : ''}`}
          onClick={handleOpenEnvelope}
          style={{ cursor: openingStep === 0 ? 'pointer' : 'default' }}
        >
          {/* Back Wall */}
          <div className="envelope-back" />

          {/* Letter inside sliding out */}
          <div className="envelope-card-inside">
            <div style={{ border: '1px solid rgba(176, 138, 74, 0.45)', width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#FFFFFF' }}>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', fontWeight: 700 }}>
                Lễ Tốt Nghiệp 2026
              </span>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.2rem', fontWeight: 700, color: '#3D302A', margin: '2px 0' }}>
                {guest?.name || 'Quý Khách Mời'}
              </h2>
              <div className="gold-divider" style={{ margin: '6px auto', maxWidth: '120px' }}>
                <div className="line" />
                <div className="diamond" />
                <div className="line" />
              </div>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '0.95rem', color: '#7A695F' }}>
                "Trân trọng kính mời {guest?.name || 'bạn'} đến chung vui"
              </p>
            </div>
          </div>

          {/* Envelope Pocket Layers */}
          <div className="envelope-pocket-left" />
          <div className="envelope-pocket-right" />
          <div className="envelope-pocket-bottom" />

          {/* Flap that opens */}
          <div className="envelope-flap" />

          {/* Wax Seal */}
          <div
            className="wax-seal"
            title="Nhấn để mở thiệp"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenEnvelope();
            }}
          >
            <span>🎓</span>
          </div>

          {/* Front Personalized Address Label */}
          <div className="envelope-label">
            <p className="envelope-label-tag">{guest?.prefix || 'Kính gửi'}</p>
            <h3 className="envelope-label-name">{guest?.name || 'Khách Quý'}</h3>
          </div>
        </div>
      </motion.div>

      {/* Button & CTA */}
      <AnimatePresence>
        {openingStep === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
            style={{
              marginTop: '45px',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <button
              className="btn-gold"
              onClick={handleOpenEnvelope}
              style={{ padding: '16px 44px', fontSize: '1.05rem' }}
            >
              <Mail size={18} />
              <span>Mở thiệp</span>
              <Sparkles size={16} />
            </button>
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1rem',
                color: '#7A695F',
                letterSpacing: '0.04em'
              }}
            >
              (Hoặc chạm vào phong bì / con dấu sáp)
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator when opened */}
      {openingStep >= 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            zIndex: 10,
            color: '#B08A4A',
            fontSize: '0.95rem',
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}
        >
          <span>Khám phá thiệp mời</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
