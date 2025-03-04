import React from 'react';
// import { School, BookOpen, Clock, Award, ChevronRight, MessageSquare, Users, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import LeadCaptureSection from '../components/LeadCaptureSection';
// import TestimonialSection from './components/TestimonialSection';
import CTASection from '../components/CTASection';

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

export default HomePage;