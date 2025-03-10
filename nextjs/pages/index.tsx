import React from 'react';
// import { School, BookOpen, Clock, Award, ChevronRight, MessageSquare, Users, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import LeadCaptureSection from '../components/LeadCaptureSection';
// import TestimonialSection from './components/TestimonialSection';
import CTASection from '../components/CTASection';
import IncidentReport from '../components/IncidentReport';
import ParentFAQ from '../components/ParentFAQ';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <div id="lucy-section" className="bg-orange-50">
        <p className="pt-4 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Meet The Agents!</p>
      </div>
      <div className="bg-orange-50 py-16 text-center py-8">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">Lucy, the Pastoral Team Assistant</h3> {/* Style h3 */}
      <h4 className="text-xl font-medium text-gray-700 mb-4">Help your Pastoral Team respond to students in need of support.</h4> {/* Style h4 */}
      <IncidentReport />
      <h6 className="font-bold text-gray-800 mt-4">Instructions:</h6> {/* Style h6 */}
      <div className="text-gray-600 space-y-2"> {/* Style p */}
      <p>Assume the role of a student.</p>
      <p>Explain what has happened to you and how it made you feel.</p>
      <p>The PDF download at the end shows how the incident report can be sent to the pastoral team for triage.</p>
      </div>
      </div>
      
      <div className="bg-blue-50 py-8 text-center py-8">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">Rob, the Reception Team Assistant</h3> {/* Style h3 */}
      <h4 className="text-xl font-medium text-gray-700 mb-4">Answer Parent FAQs more efficiently.</h4> {/* Style h4 */}
      <ParentFAQ />
      </div>
      <LeadCaptureSection />
      {/* <TestimonialSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
}

export default HomePage;
