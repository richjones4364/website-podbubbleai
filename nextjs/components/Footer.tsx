import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Services Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  WordPress Website Development
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Website Hosting
                </Link>
              </li>
              <li>
                <Link href="/podcast-production" className="text-gray-400 hover:text-white transition-colors">
                  Podcast Production
                </Link>
              </li>
              <li>
                <Link href="/ai-for-schools" className="text-gray-400 hover:text-white transition-colors">
                  AI Agents for Schools
                </Link>
              </li>
            </ul>
          </div>

          {/* Website Packages */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Website Packages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#packages" className="text-gray-400 hover:text-white transition-colors">
                  Starter Package
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-gray-400 hover:text-white transition-colors">
                  Professional Package
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-gray-400 hover:text-white transition-colors">
                  Premium Package
                </Link>
              </li>
            </ul>
          </div>

          {/* Podcast Packages */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Podcast Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/podcast-production#packages" className="text-gray-400 hover:text-white transition-colors">
                  Podcast Launch
                </Link>
              </li>
              <li>
                <Link href="/podcast-production#packages" className="text-gray-400 hover:text-white transition-colors">
                  Podcast Growth
                </Link>
              </li>
              <li>
                <Link href="/podcast-production#packages" className="text-gray-400 hover:text-white transition-colors">
                  Podcast Unlimited
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal & Contact</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/Policy for PodBubble AI Use In Education Settings.pdf" className="text-gray-400 hover:text-white transition-colors">
                  Product Policy
                </Link>
              </li>
              <li>
                <a href="mailto:hello@podbubble.com" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a 
                href="https://www.linkedin.com/in/rich-jones-podbubble/" 
                className="text-gray-400 hover:text-white transition-colors inline-block"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              PodBubble is a limited company registered in England and Wales.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Company Number: 15382639
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} PodBubble. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
