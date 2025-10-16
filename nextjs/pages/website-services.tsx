import React from 'react';
import Head from 'next/head';
import { CheckCircle, Star, ArrowRight, Globe, Smartphone, Palette, Zap, Shield, Clock, Users } from 'lucide-react';
import Footer from '../components/Footer';
import HostingServicesCarousel from '../components/HostingServicesCarousel';
import PricingFeaturesTable from '../components/PricingFeaturesTable';
import ServicesNavbar from '../components/ServicesNavbar';

const WebsiteServicesPage = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('New WebSite Build Contact');
    const body = encodeURIComponent(`Hi there!

I'm interested in your WordPress website development services. Please could you provide me with a quote for:

Package I'm interested in: [Please specify: Starter (£995), Professional (£1,995), or Premium (£2,995)]

My details:
- Name: 
- Email: 
- Current website (if any): 
- Project description: 

I understand that all packages include:
- Beautiful WordPress website
- SEO optimization
- First year hosting (£150 value)
- Training to manage the site myself

Please let me know the next steps.

Best regards,
[Your name]`);

    window.location.href = `mailto:hello@podbubble.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Head>
        <title>Professional Website Development Services | Custom Web Design</title>
        <meta name="description" content="Transform your business with professional website development services. Custom web design, e-commerce solutions, and website redesign. Get your free quote today!" />
        <meta name="keywords" content="website development, web design, custom websites, e-commerce, website redesign, professional web development" />
        <meta property="og:title" content="Professional Website Development Services" />
        <meta property="og:description" content="Transform your business with professional website development services. Custom web design, e-commerce solutions, and website redesign." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Services Navbar */}
        <ServicesNavbar />
        
        {/* Hero Section */}
        <div id="home" className="relative bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden pt-16">
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Image first, then text */}
            <div className="lg:hidden">
              {/* Mobile Image */}
              <div className="h-56 w-full flex items-center justify-center p-8">
                <div className="relative w-4/5 h-4/5 max-w-md">
                  <img 
                    src="/website-landing-page-hero-mosaic-image.webp" 
                    alt="Professional web development services"
                    className="w-full h-full object-cover rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  />
                  {/* Subtle shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg -z-10 transform rotate-6 translate-x-2 translate-y-2"></div>
                </div>
              </div>
              
              {/* Mobile Text */}
              <div className="px-4 pb-8">
                <div className="text-center">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
                    <span className="block">Beautiful WordPress</span>{' '}
                    <span className="block text-orange-500">Websites for Small Business</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600">
                    Get your business online with a stunning WordPress website and SEO package. No ongoing developer costs - you'll be able to edit your site yourself.
                  </p>
                  <p className="mt-3 text-base text-gray-600">
                    All packages include first year hosting (£150 value) and training to manage your site independently.
                  </p>
                  <div className="mt-5">
                    <button 
                      onClick={handleEmailClick}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
                    >
                      Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                      <span className="block xl:inline">Beautiful WordPress</span>{' '}
                      <span className="block text-orange-500 xl:inline">Websites for Small Business</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Get your business online with a stunning WordPress website and SEO package. No ongoing developer costs - you'll be able to edit your site yourself.
                    </p>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      All packages include training to manage your site independently.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button 
                          onClick={handleEmailClick}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10"
                        >
                          Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center p-8">
                  <div className="relative w-4/5 h-4/5 max-w-md">
                    <img 
                      src="/website-landing-page-hero-mosaic-image.webp" 
                      alt="Professional web development services"
                      className="w-full h-full object-cover rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                    />
                    {/* Subtle shadow for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg -z-10 transform rotate-6 translate-x-2 translate-y-2"></div>
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
            <div className="mb-8">
              <img 
                src="/logo-website-services.png" 
                alt="PodBubble Website Services Logo"
                className="h-10 w-auto mx-auto sm:h-12 lg:h-16 border-2 border-yellow-500"
              />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our WordPress Website Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We specialize in helping small businesses get online with beautiful, easy-to-manage WordPress websites
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* WordPress Websites */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-md">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">WordPress Websites</h3>
              <p className="mt-2 text-gray-600">
                Beautiful, custom WordPress websites that you can easily edit and manage yourself.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Easy to edit yourself
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mobile responsive
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No ongoing costs
                </li>
              </ul>
            </div>

            {/* SEO Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-md">
                <Smartphone className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">SEO Package</h3>
              <p className="mt-2 text-gray-600">
                Complete SEO optimization to help your business get found on Google and attract customers.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Google optimization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Local SEO setup
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Analytics tracking
                </li>
              </ul>
            </div>

            {/* Website Hosting */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-md">
                <Palette className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Website Hosting</h3>
              <p className="mt-2 text-gray-600">
                Fast, reliable hosting with the option to include monthly content updates.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Fast & reliable
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  SSL certificate
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Monthly content updates available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Features Table Section */}
      <div id="build">
        <PricingFeaturesTable />
      </div>
      
      {/* Hosting Services Carousel Section */}
      <div id="host">
        <HostingServicesCarousel />
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our Development Services?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We deliver exceptional results with a focus on quality, performance, and client satisfaction
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Fast Delivery</h3>
              <p className="mt-2 text-gray-600">
                Quick turnaround times without compromising on quality
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Secure & Reliable</h3>
              <p className="mt-2 text-gray-600">
                Built with security best practices and reliable hosting
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">24/7 Support</h3>
              <p className="mt-2 text-gray-600">
                Ongoing support and maintenance for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Expert Team</h3>
              <p className="mt-2 text-gray-600">
                Experienced developers with proven track records
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="host" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              WordPress Website Packages
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              All packages include WordPress website, SEO optimization, Mailerlite integration, and training. 
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Starter Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Starter Package</h3>
              <p className="mt-2 text-gray-600">Suitable for small startups and landing pages</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">£595</span>
                <span className="text-gray-600">/project</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  1 web page
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  WordPress training
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  SEO optimization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  MailerLite integration
                </li>
              </ul>
              <button 
                onClick={handleEmailClick}
                className="mt-6 w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200"
              >
                Get Started
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Package</h3>
              <p className="mt-2 text-gray-600">Perfect for established businesses</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">£995</span>
                <span className="text-gray-600">/project</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Up to 5 pages
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Advanced SEO
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Contact forms
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Analytics setup
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  MailerLite integration
                </li>
              </ul>
              <button 
                onClick={handleEmailClick}
                className="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
              >
                Get Started
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Premium Package</h3>
              <p className="mt-2 text-gray-600">For businesses with complex needs</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">£2,995</span>
                <span className="text-gray-600">/project</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Unlimited pages
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  E-commerce features
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Custom integrations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  MailerLite integration
                </li>
              </ul>
              <button 
                onClick={handleEmailClick}
                className="mt-6 w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "From basic details to a working website in good time. We gave an outline of what we were looking for and Richard delivered an attractive, functional website in a good timescale. We wanted an 'entry-level' website to promote our hall and offer a straightforward booking system. He offered sensible advice, producing a look for the website that felt very right for our organisation."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">SJ</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">The St Just In Roseland Institute</p>
                  <p className="text-sm text-gray-600">Community Organisation</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "A great service, really professional. Podbubble go above and beyond with quick responses. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">ST</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Sarah Thompson</p>
                  <p className="text-sm text-gray-600">Client</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Podbubble have created a modern, easy to navigate, professional website that has enabled both existing and potential customers of J Gas Supplies to interact with us far better than before. They clearly understood our brief and ultimately delivered more than we'd requested; making several excellent suggestions during the design process. Podbubble are now our go to for all things Web!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">SC</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Sam Claydon</p>
                  <p className="text-sm text-gray-600">JS Gas Supplies</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Podbubble have been excellent. Richard has provided advice, recommendations and expertise to build me a website that my clients love and that has exceeded my expectations. Im delighted. Thanks Podbubble!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">TG</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Tim Green</p>
                  <p className="text-sm text-gray-600">Slope Stability Southwest</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Highly recommend. I'm absolutely thrilled with my new website. Rich listened to what I wanted and made my website so me! I must add that Rich was also very patient and guided me through tasks that I had no clue about. Thank you very much Rich for delivering what you promised, a beautiful website."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">ML</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Michelle Liptrot</p>
                  <p className="text-sm text-gray-600">Happy Chakras</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Rich maintains my websites, produces my podcasts, helps with my SEO and builds brilliant landing pages. Superb communications, and nothing is ever too much trouble. I cannot recommend PodBubble highly enough!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">AJ</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Amy Jones</p>
                  <p className="text-sm text-gray-600">Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            Get a free consultation and quote for your website project
          </p>
          <div className="mt-8">
            <button 
              onClick={handleEmailClick}
              className="bg-white text-orange-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
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

export default WebsiteServicesPage;
