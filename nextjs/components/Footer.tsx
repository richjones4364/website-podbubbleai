import Link from 'next/link'; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        {/* Removed unused code */}
        <div className="mt-8 flex justify-center space-x-6">
          {/* Keep the LinkedIn link as an <a> tag (it's an external link) */}
          <a href="https://www.linkedin.com/in/rich-jones-podbubble/" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <div className="mt-8 text-center">
          <Link href="/Privacy" className="text-base text-gray-400">
            Privacy
          </Link>
          </div>
          <div className="mt-8 text-center">
          <Link href="/policies/Policy for PodBubble AI Use In Education Settings.pdf" className="text-base text-gray-400">
            Product Policy
          </Link>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2025 PodBubble. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
