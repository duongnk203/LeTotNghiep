import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { graduationInfo } from '../../data/graduationInfo';

export const InvitationCard = ({ guest }) => {
  return (
    <section id="invitation-card" style={{ padding: '70px 20px 80px', maxWidth: '780px', margin: '0 auto' }}>
      {/* Light Luxury & Double Gold Border Card */}
      <motion.div
        className="navy-gold-card paper-grain"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Khung viền vàng kép bên trong */}
        <div className="navy-gold-inner-frame">
          {/* Tiêu đề chính sử dụng Cormorant Garamond - Thanh lịch & Vương giả */}
          <div style={{ marginBottom: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.05rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#B08A4A',
                fontWeight: 700,
                display: 'block',
                marginBottom: '4px'
              }}
            >
              THIỆP MỜI LỄ TỐT NGHIỆP
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.9rem, 4.8vw, 2.9rem)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#3D302A',
                textTransform: 'uppercase',
                lineHeight: 1.2
              }}
            >
              LỄ TỐT NGHIỆP 2026
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.1rem, 2.6vw, 1.45rem)',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#B08A4A',
                textTransform: 'uppercase',
                marginTop: '4px'
              }}
            >
              Trường Đại học FPT • “RISING TOGETHER WITH THE NATION”
            </p>
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
                fontStyle: 'italic',
                color: '#7A695F',
                display: 'block',
                marginTop: '6px'
              }}
            >
              Trân trọng kính mời {guest?.name ? guest.name : 'bạn'} đến chung vui cùng Tân cử nhân
            </span>
          </div>

          <div className="gold-divider" style={{ margin: '18px auto 20px', maxWidth: '180px' }}>
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>

          {/* Dành riêng cho khách mời */}
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '0.95rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#B08A4A',
              fontWeight: 700,
              marginBottom: '4px'
            }}
          >
            {guest?.prefix || 'Kính gửi'}
          </p>

          {/* Tên khách mời sử dụng Cormorant Garamond - Thanh mảnh, cổ điển, sang trọng */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ margin: '4px 0 16px' }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 6.5vw, 4.2rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#3D302A',
                letterSpacing: '0.02em',
                textShadow: '0 2px 10px rgba(176, 138, 74, 0.15)'
              }}
            >
              {guest?.name || 'Quý Khách Mời'}
            </h1>
            {guest?.role && (
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '4px',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-cormorant)',
                  color: '#B08A4A',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                — {guest.role} —
              </span>
            )}
          </motion.div>

          {/* Lời mời từ Tân Cử Nhân Nguyễn Kim Dương */}
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.1rem, 2.3vw, 1.25rem)',
              color: '#5C4E46',
              maxWidth: '620px',
              margin: '0 auto 24px',
              lineHeight: 1.75,
              fontWeight: 500
            }}
          >
            Sau 4 năm nỗ lực học tập và rèn luyện dưới mái trường Đại học FPT, mình đã chính thức hoàn thành chặng đường đại học và vinh dự đón nhận tấm bằng Cử nhân. Sự hiện diện và lời chúc phúc của {guest?.name || 'bạn'} là niềm vinh hạnh to lớn và nguồn động viên quý giá nhất đối với mình trong cột mốc trọng đại này.
          </p>

          {/* Thông tin sự kiện đúng theo vé */}
          <div
            style={{
              paddingTop: '22px',
              borderTop: '1px solid rgba(176, 138, 74, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.25rem',
                color: '#B08A4A',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}
            >
              {graduationInfo.ceremony.dateDisplay} • {graduationInfo.ceremony.timeDisplay}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.45rem',
                color: '#3D302A',
                fontWeight: 700,
                letterSpacing: '0.02em'
              }}
            >
              {graduationInfo.ceremony.venue} — {graduationInfo.ceremony.center}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.05rem',
                color: '#7A695F',
                lineHeight: 1.5
              }}
            >
              {graduationInfo.ceremony.address}
            </p>

            {/* Tên tân cử nhân */}
            <div
              style={{
                marginTop: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 22px',
                borderRadius: '25px',
                background: 'rgba(176, 138, 74, 0.08)',
                border: '1px solid rgba(176, 138, 74, 0.3)',
                fontSize: '0.95rem',
                color: '#B08A4A'
              }}
            >
              <GraduationCap size={16} />
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                Tân Cử Nhân:
              </span>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem', fontWeight: 700, color: '#3D302A' }}>
                {graduationInfo.graduate.name} ({graduationInfo.graduate.studentId})
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
