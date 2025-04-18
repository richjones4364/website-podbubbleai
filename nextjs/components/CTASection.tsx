// import React from 'react';

const CTASection = () => {
  return (
    <div id="contact" className="bg-orange-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to reduce workload?</span>
          <span className="block text-orange-100">Get In Touch Today!</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="mailto: hello@podbubble.com"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;