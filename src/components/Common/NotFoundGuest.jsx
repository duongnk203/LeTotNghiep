import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, Users, Home } from 'lucide-react';
import { guests } from '../../data/guests';

export const NotFoundGuest = ({ slug }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 20px',
        textAlign: 'center',
        background: '#0B0D13',
        color: '#FFF'
      }}
    >
      <motion.div
        className="luxury-card paper-grain"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: 'clamp(32px, 5vw, 48px)',
          border: '1px solid rgba(212, 175, 55, 0.4)'
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'var(--color-gold)'
          }}
        >
          <AlertCircle size={32} />
        </div>

        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)'
          }}
        >
          Thông Báo Lỗi Đường Dẫn
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            color: '#FFF',
            margin: '12px 0 16px',
            lineHeight: 1.3
          }}
        >
          Thiệp mời không tồn tại hoặc đường dẫn không hợp lệ.
        </h2>

        <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.6 }}>
          Hệ thống không tìm thấy khách mời với mã định danh <code style={{ color: 'var(--color-gold)', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '4px' }}>{slug}</code>. Vui lòng kiểm tra lại liên kết được gửi đến bạn.
        </p>

        <div className="gold-divider" style={{ margin: '20px auto 28px' }}>
          <div className="line" />
          <div className="diamond" />
          <div className="line" />
        </div>

        <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-light)', marginBottom: '14px' }}>
          Hoặc khám phá các thiệp mời mẫu:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
          {guests.map((g) => (
            <Link
              key={g.slug}
              to={`/graduation/${g.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '8px',
                color: '#FFF',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: '#FFF' }}>{g.name}</span>
                <span style={{ display: 'block', fontSize: '0.72rem', color: '#8891A5' }}>{g.role}</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)' }}>Mở thiệp →</span>
            </Link>
          ))}
        </div>

        <Link to="/graduation/nguyen-kim-duong" className="btn-gold" style={{ width: '100%' }}>
          <Home size={16} />
          <span>Về trang thiệp chính</span>
        </Link>
      </motion.div>
    </div>
  );
};
