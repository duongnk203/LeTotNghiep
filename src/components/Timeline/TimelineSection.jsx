import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flag, Users, Zap, Heart, GraduationCap } from 'lucide-react';
import { journeyTimeline } from '../../data/journey';

const iconMap = {
  '2022': <Flag size={18} />,
  '2023': <Users size={18} />,
  '2024': <Zap size={18} />,
  '2025': <Heart size={18} />,
  '2026': <GraduationCap size={20} />
};

export const TimelineSection = () => {
  return (
    <section id="journey" style={{ padding: '80px 20px', maxWidth: '860px', margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '55px' }}
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
          <Sparkles size={14} />
          The Journey
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
          Hành Trình 4 Năm Đại Học
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
          Mỗi cột mốc là một bước trưởng thành quý giá (2021 — 2025)
        </p>

        <div className="gold-divider">
          <div className="line" />
          <div className="diamond" />
          <div className="line" />
        </div>
      </motion.div>

      {/* Timeline Container */}
      <div style={{ position: 'relative', padding: '20px 0' }}>
        {/* Animated Central Glowing Line */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            bottom: '30px',
            left: '32px',
            width: '2px',
            background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.8) 50%, rgba(212, 175, 55, 0.1) 100%)',
            boxShadow: '0 0 12px rgba(212, 175, 55, 0.5)'
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {journeyTimeline.map((step, idx) => {
            const isLast = idx === journeyTimeline.length - 1;

            return (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  position: 'relative',
                  paddingLeft: '72px'
                }}
              >
                {/* Node Milestone Icon */}
                <div
                  style={{
                    position: 'absolute',
                    left: '18px',
                    top: '12px',
                    transform: 'translateX(-50%)',
                    width: isLast ? '46px' : '38px',
                    height: isLast ? '46px' : '38px',
                    borderRadius: '50%',
                    background: isLast
                      ? 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #8E6516 100%)'
                      : 'linear-gradient(135deg, #1A1F2E 0%, #0F121C 100%)',
                    color: isLast ? '#0B0D13' : 'var(--color-gold)',
                    border: `2px solid ${isLast ? '#FFF' : 'var(--color-gold)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isLast
                      ? '0 0 25px rgba(212, 175, 55, 0.8)'
                      : '0 0 15px rgba(212, 175, 55, 0.3)',
                    zIndex: 2
                  }}
                >
                  {iconMap[step.year] || <Sparkles size={16} />}
                </div>

                {/* Milestone Content Card */}
                <div
                  className="luxury-card paper-grain"
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    border: isLast ? '1px solid var(--color-gold)' : undefined,
                    background: isLast ? 'rgba(25, 30, 45, 0.92)' : undefined
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.8rem',
                          fontWeight: 700,
                          color: isLast ? 'var(--color-gold-light)' : 'var(--color-gold)',
                          lineHeight: 1
                        }}
                      >
                        {step.year}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#8B93A7',
                          fontWeight: 600
                        }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        padding: '3px 10px',
                        borderRadius: '20px',
                        background: 'rgba(212, 175, 55, 0.1)',
                        color: 'var(--color-gold-light)',
                        border: '1px solid rgba(212, 175, 55, 0.2)'
                      }}
                    >
                      {step.highlight}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.3rem',
                      color: '#FFF',
                      marginBottom: '8px',
                      fontWeight: 500
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      color: '#B8BFD1'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
