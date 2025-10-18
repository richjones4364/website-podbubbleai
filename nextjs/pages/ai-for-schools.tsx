import React from 'react';
import Head from 'next/head';
// import { School, BookOpen, Clock, Award, ChevronRight, MessageSquare, Users, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import LeadCaptureSection from '../components/LeadCaptureSection';
// import TestimonialSection from './components/TestimonialSection';
import CTASection from '../components/CTASection';
// import IncidentReport from '../components/IncidentReport';
import ComplianceSection from '../components/ComplianceSection';
// import ParentFAQ from '../components/ParentFAQ';

function HomePage() {
  return (
    <>
      <Head>
        <title>AI Agents for Schools | Reduce Staff Workload | PodBubble</title>
        <meta name="description" content="Custom AI agents trained on your school's policies to reduce staff workload. Lucy for pastoral care and Rob for parent FAQs. GDPR compliant and secure." />
        <meta name="keywords" content="AI agents schools, pastoral care AI, parent FAQ automation, school AI solutions, education technology, staff workload reduction" />
        <meta property="og:title" content="AI Agents for Schools | PodBubble" />
        <meta property="og:description" content="Custom AI agents trained on your school's policies to reduce staff workload. Lucy for pastoral care and Rob for parent FAQs." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <div id="lucy-section" className="bg-orange-50">
          <p className="pt-4 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Meet The Agents!</p>
        </div>
        <div className="bg-orange-50 py-16 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Lucy, the Pastoral Team Assistant</h3> {/* Style h3 */}
        <h4 className="text-xl font-medium text-gray-700 mb-4">Help your Pastoral Team respond to students in need of support.</h4> {/* Style h4 */}
        {/* <IncidentReport /> */}
        <div className="bg-white rounded-lg shadow-md max-w-lg mx-auto p-6">
          <p className="text-gray-600 mb-4">Interactive demo temporarily unavailable</p>
          <p className="text-sm text-gray-500">Lucy will help students report incidents and provide pastoral care support.</p>
        </div>
        <h6 className="font-bold text-gray-800 mt-4">How it works:</h6> {/* Style h6 */}
        <div className="text-gray-600 space-y-2"> {/* Style p */}
        <p>Students can explain what happened to them and how it made them feel.</p>
        <p>Lucy gathers all necessary information in a caring, age-appropriate way.</p>
        <p>The full conversation is emailed to your pastoral team for efficient triage.</p>
        <p className="mt-2">All conversations are handled with complete confidentiality and data protection.</p>
        </div>
        </div>
        <div className="bg-blue-50 py-8 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Rob, the Reception Team Assistant</h3> {/* Style h3 */}
        <h4 className="text-xl font-medium text-gray-700 mb-4">Answer Parent FAQs more efficiently.</h4> {/* Style h4 */}
        {/* <ParentFAQ /> */}
        <div className="bg-white rounded-lg shadow-md max-w-lg mx-auto p-6">
          <p className="text-gray-600 mb-4">Interactive demo temporarily unavailable</p>
          <p className="text-sm text-gray-500">Rob will help answer common parent questions instantly.</p>
        </div>
        <p className="mt-3">Rob is trained on your school's specific policies and procedures.</p>
        <p className="mt-3">Reduces reception workload by handling routine inquiries automatically.</p>
        <p className="mt-3">All interactions are logged and monitored for quality assurance.</p>
        </div>
        <LeadCaptureSection />
        {/* <TestimonialSection /> */}
        <ComplianceSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
