import React from 'react';
import { CheckCircle, X, Star } from 'lucide-react';

const PricingFeaturesTable = () => {
  // Fix: Changed "Contact Forms" to "Contact Form" in tier data for consistency with allFeatures
  const tiers = [
    {
      name: "Starter",
      price: "£595",
      description: "Perfect for small businesses getting started",
      popular: false,
      features: [
        { name: "1 Web Page", included: true },
        { name: "WordPress Training", included: true },
        { name: "SEO Optimisation", included: true }, // Included
        { name: "First Year Hosting", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Mailerlite Integration", included: true },
        { name: "Contact Form", included: true },
        { name: "Analytics Setup", included: false },
        { name: "E-commerce Features", included: false },
        { name: "Custom Integrations", included: false },
        { name: "Advanced Analytics", included: false }
      ]
    },
    {
      name: "Professional",
      price: "£995",
      description: "Most popular for established businesses",
      popular: true,
      features: [
        { name: "Up to 5 Pages", included: true },
        { name: "WordPress Training", included: true },
        { name: "SEO Optimisation", included: true }, // ADDED: Now included
        { name: "Advanced SEO", included: true },
        { name: "First Year Hosting", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Mailerlite Integration", included: true },
        { name: "Contact Form", included: true },
        { name: "Analytics Setup", included: true },
        { name: "E-commerce Features", included: false },
        { name: "Custom Integrations", included: false },
        { name: "Advanced Analytics", included: false }
      ]
    },
    {
      name: "Premium",
      price: "£2,995",
      description: "For businesses with complex needs",
      popular: false,
      features: [
        { name: "Up to 20 Pages", included: true },
        { name: "WordPress Training", included: true },
        { name: "SEO Optimisation", included: true }, // ADDED: Now included
        { name: "Advanced SEO", included: true },
        { name: "First Year Hosting", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Mailerlite Integration", included: true },
        { name: "Contact Form", included: true },
        { name: "Analytics Setup", included: true },
        { name: "E-commerce Features", included: true },
        { name: "Custom Integrations", included: true },
        { name: "Advanced Analytics", included: true }
      ]
    }
  ];

  const allFeatures = [
    "1 Web Page",
    "Up to 5 Pages",
    "Up to 20 Pages",
    "WordPress Training",
    "SEO Optimisation",
    "Advanced SEO",
    "First Year Hosting",
    "Mobile Responsive",
    "Mailerlite Integration",
    "Contact Form", // Singular definition used across the board
    "Analytics Setup",
    "E-commerce Features",
    "Custom Integrations",
    "Advanced Analytics"
  ];

  // Get unique features for the table (already good, but ensures order based on allFeatures)
  const uniqueFeatures = Array.from(new Set(allFeatures));

  // Component for rendering the checkmark or X icon
  const FeatureStatus = ({ included }) => {
    return included ? (
      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
    ) : (
      <X className="h-6 w-6 text-gray-300 mx-auto" />
    );
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-['Inter']">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our WordPress Builds
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect package for your business needs
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header/Pricing Details */}
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="sticky left-0 bg-white z-10 w-1/4 px-6 py-4 text-left text-base font-semibold text-gray-900">
                      Features
                    </th>
                    {tiers.map((tier) => (
                      <th key={tier.name} className="w-1/4 px-6 py-4 text-center border-l border-gray-100">
                        <div className="relative">
                          {tier.popular && (
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                              <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
                                Most Popular
                              </span>
                            </div>
                          )}
                          <div className="pt-4">
                            <h3 className="text-2xl font-extrabold text-gray-900">{tier.name}</h3>
                            <p className="text-5xl font-extrabold text-orange-600 mt-2">{tier.price}</p>
                            <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
                            <button className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors shadow-md">
                              Start with {tier.name}
                            </button>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Body/Features */}
                <tbody className="divide-y divide-gray-200">
                  {uniqueFeatures.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="sticky left-0 w-1/4 px-6 py-4 text-sm font-medium text-gray-700">
                        {feature}
                      </td>
                      {tiers.map((tier) => {
                        // Find the feature in the current tier's explicit feature list
                        const tierFeature = tier.features.find(f => f.name === feature);
                        const isIncluded = tierFeature ? tierFeature.included : false;
                        
                        return (
                          <td key={`${tier.name}-${feature}`} className="w-1/4 px-6 py-4 text-center border-l border-gray-100">
                            <FeatureStatus included={isIncluded} />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile Card View (Vertical Stacking) */}
        <div className="lg:hidden space-y-10">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden p-6 border ${
                tier.popular 
                  ? 'ring-4 ring-offset-2 ring-orange-500 border-orange-500' 
                  : 'border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="bg-orange-500 text-white text-center py-2 -mx-6 -mt-6 mb-6 rounded-t-2xl">
                  <span className="text-sm font-semibold uppercase tracking-wider">Most Popular</span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-3xl font-extrabold text-gray-900">{tier.name}</h3>
                <p className="text-5xl font-extrabold text-orange-600 mt-2">{tier.price}</p>
                <p className="text-gray-500 mt-3">{tier.description}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="text-base font-semibold text-gray-900 text-center mb-4">What's Included</h4>
                {/* Iterate over all unique features for a true comparison view */}
                {uniqueFeatures.map((featureName) => {
                  const tierFeature = tier.features.find(f => f.name === featureName);
                  const isIncluded = tierFeature ? tierFeature.included : false;

                  // Conditional rendering to avoid showing features irrelevant to the plan unless they are included
                  // For mobile, we generally want to list all features and show the status.
                  return (
                    <div 
                      key={featureName} 
                      className="flex items-center justify-between p-2 rounded-lg transition-all"
                    >
                      <span className={`text-base ${isIncluded ? 'text-gray-700 font-medium' : 'text-gray-400 italic'}`}>
                        {featureName}
                      </span>
                      <FeatureStatus included={isIncluded} />
                    </div>
                  );
                })}
              </div>
              <button className="mt-8 w-full bg-orange-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white p-8 rounded-2xl shadow-inner border border-gray-100">
          <p className="text-lg text-gray-600 mb-6">
            All packages include training to manage your site independently or you can let us manage it for you.
          </p>
          <button
            onClick={() => {
              const subject = encodeURIComponent('Hosting Package Inquiry');
              const body = encodeURIComponent(`Hi there!

I'm interested in your hosting packages. Please could you provide me with more information about:

Package I'm interested in: [Please specify: Starter (£595), Professional (£995), or Premium (£2,995)]

My details:
- Name: 
- Email: 
- Current website (if any): 
- Project description: 

Please let me know the next steps.

Best regards,
[Your name]`);
              // Note: using window.location.href for mailto is the best practice here.
              window.location.href = `mailto:hello@podbubble.com?subject=${subject}&body=${body}`;
            }}
            className="bg-orange-500 text-white px-10 py-4 rounded-xl text-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg transform hover:scale-[1.02] active:scale-[0.98] duration-200"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingFeaturesTable;
