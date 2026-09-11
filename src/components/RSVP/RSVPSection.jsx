import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Send, Sparkles, Heart, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RSVPSection = ({ guest }) => {
  const storageKey = `rsvp_${guest?.slug || 'guest'}`;

  const [status, setStatus] = useState(null); // 'yes' | 'no' | null
  const [wishes, setWishes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        setStatus(parsed.status);
        setWishes(parsed.wishes || '');
        setSubmitted(true);
      }
    } catch (e) {
      console.error(e);
    }
  }, [storageKey]);

  const fireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#F3E5AB', '#FFFFFF', '#AA771C']
    });
  };

  const handleSelectStatus = (choice) => {
    setStatus(choice);
    if (choice === 'yes') {
      fireConfetti();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!status) return;

    const data = {
      guestSlug: guest?.slug,
      guestName: guest?.name,
      status,
      wishes,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem(storageKey, JSON.stringify(data));
    setSubmitted(true);
    if (status === 'yes') {
      fireConfetti();
    }
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <section id="rsvp" style={{ padding: '80px 20px', maxWidth: '820px', margin: '0 auto' }}>
      <motion.div
        className="luxury-card paper-grain"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{
          padding: 'clamp(32px, 5vw, 55px)',
          textAlign: 'center',
          position: 'relative'
        }}
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
          RSVP & Wishes
          <Sparkles size={14} />
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: '#FFFFFF',
            marginTop: '8px'
          }}
        >
          Will you join us?
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--color-ivory-muted)',
            marginTop: '6px'
          }}
        >
          Hãy cho mình biết bạn có thể tham dự chung vui cùng mình không nhé!
        </p>

        <div className="gold-divider" style={{ margin: '20px auto 36px' }}>
          <div className="line" />
          <div className="diamond" />
          <div className="line" />
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              padding: '28px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '14px',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <div style={{ color: 'var(--color-gold)', marginBottom: '12px' }}>
              {status === 'yes' ? <CheckCircle2 size={48} style={{ margin: '0 auto' }} /> : <Heart size={48} style={{ margin: '0 auto' }} />}
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFF', marginBottom: '8px' }}>
              {status === 'yes' ? 'Rất mong được hội ngộ cùng bạn!' : 'Cảm ơn tình cảm chân quý của bạn!'}
            </h3>

            <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 16px', lineHeight: 1.6 }}>
              {status === 'yes'
                ? `Cảm ơn ${guest?.name || 'bạn'} đã xác nhận tham dự. Mình đã ghi nhận và chuẩn bị sẵn một vị trí thật ấm cúng đón bạn.`
                : `Dù rất tiếc khi ${guest?.name || 'bạn'} không thể đến trực tiếp, tấm lòng và lời chúc của bạn luôn là nguồn động viên rất lớn đối với mình.`}
            </p>

            {wishes && (
              <div
                style={{
                  padding: '14px 20px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '10px',
                  fontStyle: 'italic',
                  color: 'var(--color-gold-light)',
                  margin: '16px auto',
                  maxWidth: '520px',
                  border: '1px dashed rgba(212, 175, 55, 0.2)'
                }}
              >
                "{wishes}"
              </div>
            )}

            <button
              onClick={handleReset}
              className="btn-outline-gold"
              style={{ fontSize: '0.78rem', marginTop: '14px' }}
            >
              Thay đổi câu trả lời
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: '560px', margin: '0 auto' }}>
            {/* Two choice buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
              <button
                type="button"
                onClick={() => handleSelectStatus('yes')}
                style={{
                  padding: '20px 16px',
                  borderRadius: '12px',
                  border: status === 'yes' ? '2px solid var(--color-gold)' : '1px solid rgba(255, 255, 255, 0.15)',
                  background: status === 'yes'
                    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(170, 119, 28, 0.2) 100%)'
                    : 'rgba(255, 255, 255, 0.03)',
                  color: status === 'yes' ? '#FFF' : '#B2B9CA',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: status === 'yes' ? '0 8px 24px rgba(212, 175, 55, 0.25)' : 'none'
                }}
              >
                <CheckCircle2 size={24} color={status === 'yes' ? 'var(--color-gold)' : '#7B8499'} />
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  YES, I'LL BE THERE
                </span>
                <span style={{ fontSize: '0.75rem', color: '#979EB2' }}>
                  Chắc chắn mình sẽ đến chung vui
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectStatus('no')}
                style={{
                  padding: '20px 16px',
                  borderRadius: '12px',
                  border: status === 'no' ? '2px solid #888' : '1px solid rgba(255, 255, 255, 0.15)',
                  background: status === 'no' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                  color: status === 'no' ? '#FFF' : '#B2B9CA',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <XCircle size={24} color={status === 'no' ? '#FFF' : '#7B8499'} />
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  SORRY, CAN'T MAKE IT
                </span>
                <span style={{ fontSize: '0.75rem', color: '#979EB2' }}>
                  Rất tiếc vì mình có lịch bận
                </span>
              </button>
            </div>

            {/* Wishes Input */}
            <div style={{ textAlign: 'left', marginBottom: '24px' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-ivory-muted)',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                <MessageSquare size={14} color="var(--color-gold)" />
                Gửi lời chúc mừng tốt nghiệp (Tùy chọn)
              </label>
              <textarea
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                placeholder="Chúc mừng Quân tốt nghiệp cử nhân xuất sắc! Chúc bạn tương lai rộng mở và gặt hái thêm nhiều thành công rực rỡ..."
                rows={3}
                style={{
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  color: '#FFF',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-sans)',
                  resize: 'none',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)')}
              />
            </div>

            <button
              type="submit"
              disabled={!status}
              className="btn-gold"
              style={{
                width: '100%',
                opacity: status ? 1 : 0.45,
                cursor: status ? 'pointer' : 'not-allowed'
              }}
            >
              <Send size={16} />
              <span>Gửi phản hồi xác nhận</span>
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};
