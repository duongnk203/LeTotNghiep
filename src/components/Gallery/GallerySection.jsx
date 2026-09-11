import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, X, Maximize2, Camera } from 'lucide-react';
import { graduationInfo } from '../../data/graduationInfo';

export const GallerySection = () => {
  const { memories } = graduationInfo;
  const [activePhoto, setActivePhoto] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" style={{ padding: '70px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Camera size={14} />
            Memories in Frame
            <Sparkles size={14} />
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: '#FFFFFF',
              marginTop: '8px'
            }}
          >
            Khoảnh Khắc Thanh Xuân
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: 'var(--color-ivory-muted)',
              marginTop: '6px'
            }}
          >
            Những lát cắt kỷ niệm không thể nào quên trên giảng đường đại học
          </p>

          <div className="gold-divider">
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>
        </motion.div>

        {/* Scroll Controls */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginBottom: '18px', paddingRight: '10px' }}>
          <button
            onClick={() => scroll('left')}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: 'var(--color-gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label="Cuộn trái"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: 'var(--color-gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label="Cuộn phải"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Parallax Scroll Reel */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          padding: '20px 24px 40px',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {memories.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            onClick={() => setActivePhoto(item)}
            style={{
              flex: '0 0 clamp(280px, 32vw, 380px)',
              scrollSnapAlign: 'center',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div
              className="luxury-card paper-grain"
              style={{
                overflow: 'hidden',
                borderRadius: '16px',
                height: '440px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Image Container with Zoom effect */}
              <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease',
                    filter: 'contrast(102%) brightness(92%)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.filter = 'contrast(105%) brightness(100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'contrast(102%) brightness(92%)';
                  }}
                />

                {/* Gradient vignette */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(11,13,19,0.3) 50%, rgba(11,13,19,0.92) 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Top Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: 'rgba(11, 13, 19, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    color: 'var(--color-gold)',
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}
                >
                  {item.year}
                </div>

                {/* Expand icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(11, 13, 19, 0.65)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF'
                  }}
                >
                  <Maximize2 size={14} />
                </div>

                {/* Bottom Caption Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px',
                    zIndex: 2
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      color: '#FFF',
                      fontWeight: 500,
                      marginBottom: '6px'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-ivory-muted)',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(5, 7, 10, 0.94)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                maxWidth: '850px',
                width: '100%',
                maxHeight: '90vh',
                position: 'relative',
                background: '#10131C',
                border: '1px solid var(--color-border-gold)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 10,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ maxHeight: '65vh', overflow: 'hidden', background: '#000' }}>
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  style={{ width: '100%', height: '100%', maxHeight: '65vh', objectFit: 'contain' }}
                />
              </div>

              <div style={{ padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px' }}>
                  <span>Niên khóa</span>
                  <span>•</span>
                  <span>{activePhoto.year}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFF', marginBottom: '8px' }}>
                  {activePhoto.title}
                </h3>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {activePhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
