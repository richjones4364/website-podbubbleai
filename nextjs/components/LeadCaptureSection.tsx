import React, { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

const LeadCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fetchError, setFetchError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setFetchError('');

    try {
      const response = await fetch(
        'https://n8n-production-d809.up.railway.app/webhook/7c0cf912-39eb-4ad5-8160-a9a13602a622',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        setFetchError('Failed to submit email. Please try again.');
        console.error('Webhook error:', response.status, response.statusText);
      }
    } catch (err) {
      setFetchError('An unexpected error occurred. Please try again.');
      console.error('Fetch error:', err);
    }
  };

  return (
    <div className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              &apos;Work Smarter, Not Harder&apos;
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Discover how PodBubble&apos;s AI can transform your school&apos;s administrative workflow.
            </p>
            <div className="mt-6 grid space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-3" />
                <span>Reduce staff workload by up to 70%</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-3" />
                <span>Automate routine administrative tasks</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-3" />
                <span>Focus more on student support</span>
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
                    Your report is on its way to your inbox. Please check your email.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-medium text-center text-gray-900">Get your free guide</h3>
                  <p className="mt-2 text-center text-gray-600">
                    Enter your email below to receive &apos;Work Smarter, Not Harder&apos;.
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
                      {fetchError && <p className="mt-2 text-sm text-red-600">{fetchError}</p>}
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
                      We respect your privacy. We use your email to send you occasional updates on our progress. Unsubscribe at any time.
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