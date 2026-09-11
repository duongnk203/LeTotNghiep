import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Building, Sparkles, Navigation, CalendarPlus, AlertCircle, Info } from 'lucide-react';
import { graduationInfo } from '../../data/graduationInfo';

export const EventInfoSection = () => {
  const { ceremony, schedule, notes } = graduationInfo;

  return (
    <section id="event-info" style={{ padding: '70px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '45px' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#B08A4A',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Sparkles size={14} />
          Thông Tin Buổi Lễ
          <Sparkles size={14} />
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: '#3D302A',
            marginTop: '6px',
            textTransform: 'uppercase'
          }}
        >
          Thông Tin & Lịch Trình Buổi Lễ
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
          Thời gian & Địa điểm cử hành Lễ Tốt Nghiệp 2026 — {ceremony.university}
        </p>

        <div className="gold-divider">
          <div className="line" />
          <div className="diamond" />
          <div className="line" />
        </div>
      </motion.div>

      {/* Main Info Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '36px'
        }}
      >
        {/* Date & Time Card */}
        <motion.div
          className="luxury-card paper-grain"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(176, 138, 74, 0.1)',
                border: '1px solid rgba(176, 138, 74, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#B08A4A',
                marginBottom: '20px'
              }}
            >
              <Calendar size={22} />
            </div>

            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.95rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', fontWeight: 700 }}>
              Thời gian tổ chức
            </span>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', color: '#3D302A', margin: '4px 0 12px', fontWeight: 700 }}>
              {ceremony.dateDisplay}
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#7A695F' }}>
              <Clock size={16} color="#B08A4A" />
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.35rem', fontWeight: 700, color: '#B08A4A' }}>{ceremony.timeDisplay}</span>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <a
              href={ceremony.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
              style={{ width: '100%', fontSize: '0.9rem', padding: '10px 16px' }}
            >
              <CalendarPlus size={15} />
              <span>Thêm vào Google Calendar</span>
            </a>
          </div>
        </motion.div>

        {/* Venue & Location Card */}
        <motion.div
          className="luxury-card paper-grain"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(176, 138, 74, 0.1)',
                border: '1px solid rgba(176, 138, 74, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#B08A4A',
                marginBottom: '20px'
              }}
            >
              <MapPin size={22} />
            </div>

            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.95rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', fontWeight: 700 }}>
              Địa điểm cử hành
            </span>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', color: '#3D302A', margin: '4px 0 4px', fontWeight: 700 }}>
              {ceremony.venue}
            </h3>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem', color: '#B08A4A', fontWeight: 700, marginBottom: '6px' }}>
              {ceremony.center}
            </p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.05rem', color: '#7A695F', lineHeight: 1.5 }}>
              {ceremony.address}
            </p>
          </div>

          <div style={{ marginTop: '28px' }}>
            <a
              href={ceremony.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
              style={{ width: '100%', fontSize: '0.9rem', padding: '10px 16px' }}
            >
              <Navigation size={15} />
              <span>Chỉ đường trên Google Maps</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ceremony Rundown Timeline Table (AGENDA) */}
      <motion.div
        className="luxury-card paper-grain"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ padding: 'clamp(24px, 4vw, 40px)', marginBottom: '32px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '0.95rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B08A4A',
              fontWeight: 700,
              display: 'block'
            }}
          >
            AGENDA
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.8rem',
              color: '#3D302A',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginTop: '4px'
            }}
          >
            Lịch Trình Buổi Lễ
          </h3>
          <div className="gold-divider" style={{ margin: '14px auto 0', maxWidth: '140px' }}>
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {schedule.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '12px 18px',
                background: 'rgba(176, 138, 74, 0.04)',
                borderRadius: '8px',
                borderLeft: '3px solid #B08A4A',
                borderTop: '1px solid rgba(176, 138, 74, 0.15)',
                borderRight: '1px solid rgba(176, 138, 74, 0.15)',
                borderBottom: '1px solid rgba(176, 138, 74, 0.15)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#B08A4A',
                  minWidth: '125px'
                }}
              >
                {item.time}
              </span>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.15rem', color: '#3D302A', lineHeight: 1.5, fontWeight: 500 }}>
                {item.activity}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Important Notes Section (LƯU Ý) */}
      {notes && notes.length > 0 && (
        <motion.div
          className="luxury-card paper-grain"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            padding: 'clamp(24px, 4vw, 36px)',
            border: '1px solid rgba(176, 138, 74, 0.35)',
            background: 'rgba(248, 243, 234, 0.95)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '18px' }}>
            <AlertCircle size={20} color="#B08A4A" />
            <h4
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.45rem',
                color: '#B08A4A',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                margin: 0
              }}
            >
              Lưu Ý Dành Cho Khách Mời & Người Thân
            </h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {notes.map((note, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '1.05rem',
                  fontFamily: 'var(--font-cormorant)',
                  color: '#5C4E46',
                  lineHeight: 1.6
                }}
              >
                <span
                  style={{
                    color: '#B08A4A',
                    fontSize: '1.2rem',
                    lineHeight: 1,
                    marginTop: '2px'
                  }}
                >
                  ✦
                </span>
                <span>{note}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px dashed rgba(176, 138, 74, 0.25)',
              textAlign: 'center',
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              color: '#7A695F',
              fontSize: '1.15rem'
            }}
          >
            Rất hân hạnh và vui mừng được đón tiếp bạn đến chung vui cùng mình trong ngày tốt nghiệp!
            <br />
            <strong style={{ color: '#3D302A', fontStyle: 'normal', display: 'block', marginTop: '4px' }}>
              Tân Cử Nhân: {graduationInfo.graduate.name} — {ceremony.university}
            </strong>
          </div>
        </motion.div>
      )}
    </section>
  );
};
