import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { resolveGuest } from '../data/guests';
import { Envelope3D } from '../components/Envelope/Envelope3D';
import { InvitationCard } from '../components/InvitationCard/InvitationCard';
import { EventInfoSection } from '../components/EventInfo/EventInfoSection';
import { CountdownSection } from '../components/Countdown/CountdownSection';
import { FinalSceneSection } from '../components/FinalScene/FinalSceneSection';
import { AmbientAudio } from '../components/AudioPlayer/AmbientAudio';
import { NotFoundGuest } from '../components/Common/NotFoundGuest';

export const GraduationInvitation = () => {
  const { guestSlug } = useParams();
  const [searchParams] = useSearchParams();
  const guest = resolveGuest(guestSlug, searchParams);

  const [isOpened, setIsOpened] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);

  // Reset opened state when changing guest slug or query params
  useEffect(() => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [guestSlug, searchParams]);

  if (!guest) {
    return <NotFoundGuest slug={guestSlug} />;
  }

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setShouldPlayMusic(true);

    // Smoothly scroll down to invitation card after envelope unboxing animation
    setTimeout(() => {
      const cardElement = document.getElementById('invitation-card');
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };

  const handleReplay = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Ambient Audio */}
      <AmbientAudio autoPlayTrigger={shouldPlayMusic} />

      {/* Scene 1 & Scene 2: 3D Envelope Opening */}
      <Envelope3D
        guest={guest}
        isOpened={isOpened}
        onOpen={handleOpenEnvelope}
      />

      {/* Scenes 3 through 10: Revealed smoothly upon opening */}
      <AnimatePresence>
        {isOpened && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ position: 'relative', zIndex: 10 }}
          >
            {/* Scene 3: Personalized Luxury Card */}
            <InvitationCard guest={guest} />

            {/* Scene 4: Event Information & Schedule */}
            <EventInfoSection />

            {/* Đếm ngược thời gian thực */}
            <CountdownSection />

            {/* Lời cảm ơn & Kết màn */}
            <FinalSceneSection onReplay={handleReplay} />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};
