import React from 'react';
import { motion } from 'framer-motion';
import { Quote, HeartHandshake, Sparkles } from 'lucide-react';
import { graduationInfo } from '../../data/graduationInfo';

export const MessageSection = ({ guest }) => {
  return (
    <section id="invitation-message" style={{ padding: '60px 20px 80px', maxWidth: '820px', margin: '0 auto' }}>
      <motion.div
        className="luxury-card paper-grain"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{
          padding: 'clamp(30px, 5vw, 55px)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle decorative background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* Section Tag */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '0.85rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-deep)',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={14} />
            Lời Nhắn Gửi Yêu Thương
            <Sparkles size={14} />
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '0.03em',
              color: '#151E2D',
              marginTop: '8px',
              lineHeight: 1.3
            }}
          >
            "Một chặng đường khép lại, một hành trình mới mở ra."
          </h2>

          <div className="gold-divider" style={{ margin: '18px auto' }}>
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>
        </div>

        {/* Personalized Message Body */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(184, 134, 11, 0.25)',
            borderRadius: '12px',
            padding: 'clamp(20px, 4vw, 36px)',
            position: 'relative',
            boxShadow: '0 8px 25px rgba(145, 130, 105, 0.08)'
          }}
        >
          <Quote
            size={36}
            style={{
              color: 'rgba(184, 134, 11, 0.2)',
              position: 'absolute',
              top: '16px',
              left: '18px',
              pointerEvents: 'none'
            }}
          />

          {/* Greeting */}
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
              color: 'var(--color-gold-deep)',
              marginBottom: '16px',
              fontWeight: 700,
              letterSpacing: '0.02em'
            }}
          >
            {guest?.greeting || `${guest?.name || 'Bạn'} thân mến,`}
          </h3>

          {/* Custom personal note based on guest */}
          <p
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              lineHeight: 1.8,
              color: '#2A3447',
              marginBottom: '18px',
              fontStyle: 'italic'
            }}
          >
            "{guest?.customNote || 'Cảm ơn bạn đã luôn ở bên, đồng hành và là một phần không thể thiếu trong hành trình 4 năm đại học rực rỡ này.'}"
          </p>

          <p
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: '#4B5569',
              marginBottom: '24px'
            }}
          >
            Lễ Tốt Nghiệp không chỉ đánh dấu ngày nhận bằng cử nhân, mà là khoảnh khắc để nhìn lại và biết ơn những người đã cùng mình đi qua bao thăng trầm, thử thách và nụ cười. Sự hiện diện của bạn vào ngày <strong>{graduationInfo.ceremony.dateDisplay}</strong> sẽ là món quà vô giá và niềm hạnh phúc trọn vẹn nhất cho mình.
          </p>

          {/* Graduate Sign-off */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingTop: '18px',
              borderTop: '1px solid rgba(184, 134, 11, 0.2)'
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--color-gold-deep)',
                  fontWeight: 600
                }}
              >
                Chân thành & Tri ân
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#151E2D',
                  lineHeight: 1.1,
                  marginTop: '2px',
                  letterSpacing: '0.02em'
                }}
              >
                {graduationInfo.graduate.name}
              </p>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(184, 134, 11, 0.08)',
                border: '1px solid rgba(184, 134, 11, 0.25)',
                borderRadius: '30px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-montserrat)',
                color: 'var(--color-gold-deep)',
                fontWeight: 600
              }}
            >
              <HeartHandshake size={15} />
              <span>Khoảnh khắc tri ân 2026</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
