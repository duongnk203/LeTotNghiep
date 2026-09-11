import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GraduationInvitation } from './pages/GraduationInvitation';
import './styles/luxury-theme.css';

export function App() {
  return (
    <Router>
      <Routes>
        {/* Main invitation page (supports query params e.g. /?to=Anh Tuấn&role=Bạn thân) */}
        <Route path="/" element={<GraduationInvitation />} />

        {/* Personalized Guest Route by slug e.g. /graduation/anh-tuan */}
        <Route path="/graduation/:guestSlug" element={<GraduationInvitation />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
