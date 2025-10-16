import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('New WebSite Build Contact');
    const body = encodeURIComponent(`Hi there!

I'm interested in your WordPress website development services. Please could you provide me with a quote for:

Package I'm interested in: [Please specify: Starter (£595), Professional (£995), or Premium (£2,995)]

My details:
- Name: 
- Email: 
- Current website (if any): 
- Project description: 

I understand that all packages include:
- Beautiful WordPress website
- SEO optimization
- MailerLite integration
- Training to manage the site myself

Please let me know the next steps.

Best regards,
[Your name]`);

    window.location.href = `mailto:hello@podbubble.com?subject=${subject}&body=${body}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logo-website-services.png" 
              alt="PodBubble Website Services Logo"
              className="h-8 w-auto sm:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('build')}
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Build
              </button>
              <button
                onClick={() => scrollToSection('host')}
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Host
              </button>
              <button
                onClick={handleEmailClick}
                className="bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center"
              >
                Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) {
                  menu.classList.toggle('hidden');
                }
              }}
              className="text-gray-700 hover:text-orange-500 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button
              onClick={() => {
                scrollToSection('home');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('build');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Build
            </button>
            <button
              onClick={() => {
                scrollToSection('host');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Host
            </button>
            <button
              onClick={() => {
                handleEmailClick();
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="bg-orange-500 text-white px-6 py-2 rounded-md text-base font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center w-full mt-4"
            >
              Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ServicesNavbar;
