import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ChevronDown, ChevronUp, UserCheck } from 'lucide-react';
import { guests } from '../../data/guests';

export const GuestSwitcher = ({ currentSlug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}
    >
      {isOpen && (
        <div
          className="luxury-card paper-grain"
          style={{
            marginBottom: '10px',
            padding: '16px',
            width: '280px',
            background: '#FFFFFF',
            border: '1.5px solid rgba(184, 134, 11, 0.35)',
            boxShadow: '0 15px 35px rgba(145, 130, 105, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Users size={16} color="var(--color-gold-deep)" />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold-deep)' }}>
              Đổi Khách Mời Thử Nghiệm
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {guests.map((g) => {
              const isActive = g.slug === currentSlug;
              return (
                <button
                  key={g.slug}
                  onClick={() => {
                    navigate(`/graduation/${g.slug}`);
                    setIsOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    background: isActive ? 'rgba(184, 134, 11, 0.12)' : '#FAF8F4',
                    border: isActive ? '1.5px solid var(--color-gold)' : '1px solid rgba(184, 134, 11, 0.18)',
                    color: isActive ? 'var(--color-gold-deep)' : '#2A3345',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    textAlign: 'left',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: isActive ? 700 : 500 }}>{g.name}</div>
                    <div style={{ fontSize: '0.68rem', color: '#687388' }}>{g.role}</div>
                  </div>
                  {isActive && <UserCheck size={14} color="var(--color-gold-deep)" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Toggle Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 18px',
          borderRadius: '30px',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(10px)',
          border: '1.5px solid rgba(184, 134, 11, 0.4)',
          color: 'var(--color-gold-deep)',
          fontSize: '0.78rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-gold)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border-gold)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <Users size={15} />
        <span>Xem khách mời khác</span>
        {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </button>
    </div>
  );
};
