import React, { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

const LeadCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real implementation, you would send this to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setError('');
  };

  return (
    <div className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Free Guide: AI Tools for Teachers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover how teachers can leverage AI tools to save time and enhance learning - without spending a penny.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-800">20+ free AI tools</span> specifically selected for educators
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-800">Step-by-step tutorials</span> for implementing AI in the classroom
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-600">
                  <span className="font-medium text-gray-800">Time-saving templates</span> to get started immediately
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
              <div className="mb-6 flex justify-center">
                <BookOpen className="h-16 w-16 text-orange-500" />
              </div>
              
              {submitted ? (
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                  <h3 className="mt-2 text-xl font-medium text-gray-900">Thank you!</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Your guide is on its way to your inbox. Please check your email.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-medium text-center text-gray-900">Get your free guide</h3>
                  <p className="mt-2 text-center text-gray-600">
                    Enter your email below to receive our step-by-step guide.
                  </p>
                  <form className="mt-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className={`block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 border ${
                          error ? 'border-red-300' : 'border-gray-300'
                        } rounded-md`}
                      />
                      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        Send me the guide
                      </button>
                    </div>
                    <p className="mt-3 text-xs text-gray-500 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureSection;