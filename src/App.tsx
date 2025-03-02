// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { School, BookOpen, Clock, Award, ChevronRight, MessageSquare, Users, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import LeadCaptureSection from './components/LeadCaptureSection';
// import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import DemoPage from './pages/DemoPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <LeadCaptureSection />
      {/* <TestimonialSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;