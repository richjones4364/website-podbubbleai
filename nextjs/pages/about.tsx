import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import ServicesNavbar from '../components/ServicesNavbar';

const AboutPage = () => {
  const handleBookCallClick = () => {
    const subject = encodeURIComponent('Book a Call - About Page Inquiry');
    const body = encodeURIComponent(`Hi there!

I'd like to book a call to discuss how we can work together.

My details:
- Name: 
- Email: 
- Phone: 
- Best time to call: 
- What I'm interested in: [Website Development / Podcast Production / Other]

Please let me know your availability.

Best regards,
[Your name]`);

    window.location.href = `mailto:hello@podbubble.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Head>
        <title>About PodBubble - The Reliable Creative Partner | PodBubble</title>
        <meta name="description" content="Meet PodBubble - your honest, kind, and reliable creative partner. Specializing in website design and podcast production for small businesses, non-profits, and schools." />
        <meta name="keywords" content="about podbubble, web designer, podcast producer, reliable creative, website development, podcast production" />
        <meta property="og:title" content="About PodBubble - The Reliable Creative Partner" />
        <meta property="og:description" content="Meet PodBubble - your honest, kind, and reliable creative partner. Specializing in website design and podcast production." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Services Navbar */}
        <ServicesNavbar />
        
        {/* Article Header with Profile Picture */}
        <article className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Profile Picture Section */}
            <div className="mb-12 text-center">
              <div className="inline-block">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/hosting-services-designs/rich-profile-pic.jpeg"
                    alt="Richard Jones - PodBubble Founder"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Article Title */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                The Reliable Creative for Small Businesses, Non-Profits, and Schools
              </h1>
            </header>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                I'm Rich Jones, the founder of PodBubble. The biggest problem my clients face is finding a creative who is genuinely <strong className="text-gray-900">kind, reliable, trustworthy, and has their best interests at heart.</strong> It's a sad reality that many small businesses, non-profits, and schools have been burned by freelancers who overcharge and under-deliver. They come to me following a bad experience, seeking someone who will treat them with respect.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                My promise is simple: <strong className="text-gray-900">I am the honest, kind, and reliable creative partner you've been searching for.</strong> I never take people for a ride, and my focus is always on getting you the maximum value out of your investment.
              </p>
            </div>

            {/* Section: Counsel, Clarity, and Collaboration */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Counsel, Clarity, and Collaboration
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When you choose to work with me, you are getting much more than just a web designer.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Drawing on my extensive background as an <strong className="text-gray-900">orchestral musician and secondary school teacher</strong> (teaching music and computer science), I bring a unique blend of creativity and structured, results-focused guidance to every project.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      I listen like a counselor
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I approach every new project by listening intently to your needs, your fears, and your goals. My focus is entirely on reflecting the personality of your business and telling your unique brand story.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      I coach like a mentor
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I guide you through every step of the process, ensuring you make good, informed decisions. My ability to coach people through the often-stressful formative period of a new venture is a unique skill that guarantees you're getting more than just a web designer here!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Websites and Sound */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Websites and Sound
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I specialise in designing and building <strong className="text-gray-900">beautiful, professional websites</strong> that look great and function perfectly. The goal is always to deliver a site that you genuinely <strong className="text-gray-900">love</strong>, solving the problem of under-delivered, overpriced work.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  My expertise also extends into <strong className="text-gray-900">Podcast Production</strong>. This service solves a common pain point: "How do I get started?" I provide a complete, supportive launch process:
                </p>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-3 mb-6 list-disc list-inside">
                  <li>I write a bespoke introduction soundtrack.</li>
                  <li>I set up a professional template in Audacity or equivalent software.</li>
                  <li>I produce your first three episodes, providing hands-on support.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Critically, I hand over all the materials and templates to you, ensuring you can easily continue your podcast with confidence and independence.
                </p>
              </div>
            </section>

            {/* Section: The Transformation */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Trust, Confidence, and Long-Term Partnership
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  My clients don't just finish a project; they start a long-term relationship.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When you start with me, you may be stressed, confused, and dealing with a costly failure. When we finish, you walk away with a professional, stunning website and the confidence of knowing you have a reliable partner who will always maintain your best interests at heart.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-900 mb-6">
                  Ready to move past bad experiences and invest in a partner you can trust?
                </p>
                <button 
                  onClick={handleBookCallClick}
                  className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors inline-flex items-center"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
