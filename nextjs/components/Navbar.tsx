import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
              <span className="text-orange-500 font-bold text-2xl">PodBubble</span><span className="text-blue-500 font-bold text-2xl">AI</span>
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* <a href="#features" className="border-transparent text-gray-700 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </a> */}
              {/* <a href="#testimonials" className="border-transparent text-gray-700 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Testimonials
              </a> */}
              <a href="/demo" className="border-transparent text-gray-700 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Demo
              </a>
              {/* <a href="#contact" className="border-transparent text-gray-700 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contact
              </a> */}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Book a Demo
            </button> */}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="text-gray-700 hover:bg-gray-50 hover:text-orange-500 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:bg-gray-50 hover:text-orange-500 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="/DemoPage"
              className="text-gray-700 hover:bg-gray-50 hover:text-orange-500 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:bg-gray-50 hover:text-orange-500 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pl-3 pr-4 py-2">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;