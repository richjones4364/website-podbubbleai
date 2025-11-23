import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { CheckCircle, Star, ArrowRight, Mic, Headphones, Music, Zap, Shield, Clock, Users, Radio } from 'lucide-react';
import Footer from '../components/Footer';
import ServicesNavbar from '../components/ServicesNavbar';

const PodcastProductionPage = () => {
  const handleEmailClick = (packageName: string) => {
    const subject = encodeURIComponent(`Podcast Production - ${packageName} Package Inquiry`);
    const body = encodeURIComponent(`Hi there!

I'm interested in your podcast production services. Please could you provide me with a quote for:

Package I'm interested in: ${packageName}

My details:
- Name: 
- Email: 
- Current podcast (if any): 
- Podcast description: 
- Episode frequency: [Weekly/Monthly/Other]

Please let me know the next steps.

Best regards,
[Your name]`);

    window.location.href = `mailto:hello@podbubble.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Head>
        <title>Professional Podcast Production Services | PodBubble</title>
        <meta name="description" content="Professional podcast production services to launch and grow your podcast. From podcast launch packages to monthly subscriptions, we help you create high-quality audio content." />
        <meta name="keywords" content="podcast production, podcast editing, podcast launch, podcast services, audio production, bespoke podcast music" />
        <meta property="og:title" content="Professional Podcast Production Services | PodBubble" />
        <meta property="og:description" content="Professional podcast production services to launch and grow your podcast. From podcast launch packages to monthly subscriptions." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Services Navbar */}
        <ServicesNavbar />
        
        {/* Hero Section */}
        <div id="home" className="relative bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden pt-16">
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Image first, then text */}
            <div className="lg:hidden">
              {/* Mobile Image */}
              <div className="h-56 w-full flex items-center justify-center p-8">
                <div className="relative w-4/5 h-4/5 max-w-md">
                  <Image
                    src="/hosting-services-designs/podcast-hero.jpg"
                    alt="Professional podcast production services"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                    priority
                  />
                  {/* Subtle shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-lg -z-10 transform rotate-6 translate-x-2 translate-y-2"></div>
                </div>
              </div>
              
              {/* Mobile Text */}
              <div className="px-4 pb-8">
                <div className="text-center">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
                    <span className="block">Professional</span>{' '}
                    <span className="block text-blue-600">Podcast Production</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600">
                    Launch and grow your podcast with professional production services. From your first three episodes to ongoing monthly production.
                  </p>
                  <p className="mt-3 text-base text-gray-600">
                    Get bespoke intro music, professional editing, and everything you need to create high-quality podcast content.
                  </p>
                  <div className="mt-5">
                    <button 
                      onClick={() => handleEmailClick('Podcast Launch')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Text first, then image */}
            <div className="hidden lg:block">
              <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">Professional</span>{' '}
                      <span className="block text-blue-600 xl:inline">Podcast Production</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Launch and grow your podcast with professional production services. From your first three episodes to ongoing monthly production.
                    </p>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Get bespoke intro music, professional editing, and everything you need to create high-quality podcast content.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button 
                          onClick={() => handleEmailClick('Podcast Launch')}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                        >
                          Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center p-8">
                  <div className="relative w-4/5 h-4/5 max-w-md">
                    <Image
                      src="/hosting-services-designs/podcast-hero.jpg"
                      alt="Professional podcast production services"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                      priority
                    />
                    {/* Subtle shadow for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-lg -z-10 transform rotate-6 translate-x-2 translate-y-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Podcast Production Services
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We help you create professional podcast content from launch to growth
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Audio Production */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md">
                  <Mic className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Professional Editing</h3>
                <p className="mt-2 text-gray-600">
                  High-quality audio editing and production from the raw audio you provide.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Noise reduction
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Audio leveling
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional mixing
                  </li>
                </ul>
              </div>

              {/* Bespoke Music */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md">
                  <Music className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Bespoke Intro Music</h3>
                <p className="mt-2 text-gray-600">
                  Custom introduction music written by a professionally trained musician, unique to your podcast.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Original composition
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional musician
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tailored to your brand
                  </li>
                </ul>
              </div>

              {/* Templates & Tools */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md">
                  <Headphones className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Audacity Template</h3>
                <p className="mt-2 text-gray-600">
                  Get started with a professional Audacity template to help you record and prepare your audio.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ready-to-use template
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Best practices included
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Easy to customize
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="packages" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Podcast Production Packages
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Choose the perfect package to launch or grow your podcast
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Podcast Launch Package */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Podcast Launch</h3>
                <p className="mt-2 text-gray-600">Perfect for getting your new podcast off the ground</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">£295</span>
                  <span className="text-lg text-gray-600 ml-2">one-time</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Audacity template
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Production of first 3 episodes
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bespoke introduction music
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional audio editing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    From your raw audio
                  </li>
                </ul>
                <button 
                  onClick={() => handleEmailClick('Podcast Launch')}
                  className="mt-6 w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200"
                >
                  Get Started
                </button>
              </div>

              {/* Podcast Growth Package */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-600 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Podcast Growth</h3>
                <p className="mt-2 text-gray-600">Per episode following Podcast Launch</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">£45</span>
                  <span className="text-lg text-gray-600 ml-2">per episode</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Per episode pricing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional production
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Consistent quality
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible frequency
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ongoing support
                  </li>
                </ul>
                <button 
                  onClick={() => handleEmailClick('Podcast Growth')}
                  className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Get Started
                </button>
              </div>

              {/* Podcast Unlimited Package */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Podcast Unlimited</h3>
                <p className="mt-2 text-gray-600">Bespoke package tailored to your needs</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">On Enquiry</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom package
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tailored to your needs
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible pricing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All features included
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Priority support
                  </li>
                </ul>
                <button 
                  onClick={() => handleEmailClick('Podcast Unlimited')}
                  className="mt-6 w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose Our Podcast Production Services?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We deliver professional results with a focus on quality, consistency, and your podcast's success
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto">
                  <Radio className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Professional Quality</h3>
                <p className="mt-2 text-gray-600">
                  High-quality audio production that makes your podcast stand out
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto">
                  <Music className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Bespoke Music</h3>
                <p className="mt-2 text-gray-600">
                  Original intro music created by professionally trained musicians
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Reliable Delivery</h3>
                <p className="mt-2 text-gray-600">
                  Consistent, on-time delivery for all your podcast episodes
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Expert Team</h3>
                <p className="mt-2 text-gray-600">
                  Experienced audio producers with proven track records
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Launch Your Podcast?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Get a free consultation and quote for your podcast production project
            </p>
            <div className="mt-8">
              <button 
                onClick={() => handleEmailClick('General Inquiry')}
                className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Your Free Quote
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PodcastProductionPage;
