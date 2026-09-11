import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import { graduationInfo } from '../../data/graduationInfo';

export const CountdownSection = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(graduationInfo.ceremony.targetDateTime);

  const timeUnits = [
    { label: 'Days', viLabel: 'Ngày', value: days },
    { label: 'Hours', viLabel: 'Giờ', value: hours },
    { label: 'Minutes', viLabel: 'Phút', value: minutes },
    { label: 'Seconds', viLabel: 'Giây', value: seconds }
  ];

  return (
    <section id="countdown" style={{ padding: '70px 20px', maxWidth: '880px', margin: '0 auto' }}>
      <motion.div
        className="luxury-card paper-grain"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{
          padding: 'clamp(32px, 5vw, 60px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle decorative gold circle */}
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#B08A4A', marginBottom: '12px' }}>
          <Clock size={16} />
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.05rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700
            }}
          >
            Đếm Ngược Thời Khắc
          </span>
          <Sparkles size={14} />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            fontWeight: 700,
            color: '#3D302A',
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}
        >
          Đếm Ngược Thời Khắc Vinh Quang
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontSize: '1.25rem',
            color: '#7A695F',
            marginTop: '4px'
          }}
        >
          Cùng chờ đón giây phút tung chiếc nón cử nhân
        </p>

        <div className="gold-divider" style={{ margin: '22px auto 36px' }}>
          <div className="line" />
          <div className="diamond" />
          <div className="line" />
        </div>

        {/* Time Units Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(10px, 2.5vw, 24px)',
            maxWidth: '680px',
            margin: '0 auto'
          }}
        >
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(176, 138, 74, 0.35)',
                borderRadius: '14px',
                padding: 'clamp(16px, 3vw, 28px) 8px',
                boxShadow: '0 10px 25px rgba(130, 110, 95, 0.12), inset 0 0 15px rgba(176, 138, 74, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: '6px'
                }}
                className="gold-text"
              >
                {String(unit.value).padStart(2, '0')}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#B08A4A',
                  fontWeight: 700
                }}
              >
                {unit.viLabel}
              </div>
            </motion.div>
          ))}
        </div>

        {isExpired && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              marginTop: '32px',
              padding: '12px 24px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--color-gold)',
              borderRadius: '30px',
              display: 'inline-block',
              color: 'var(--color-gold-light)',
              fontSize: '0.95rem'
            }}
          >
            🎓 Thời khắc thiêng liêng đã chính thức diễn ra!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
