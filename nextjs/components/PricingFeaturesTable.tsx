import React from 'react';
import { CheckCircle, X, Star } from 'lucide-react';

const PricingFeaturesTable = () => {
  
  const tiers = [
    {
      name: "Starter",
      price: "£595",
      description: "Perfect for small businesses getting started",
      popular: false,
      features: [
        { name: "1 Web Page", included: true },
        { name: "WordPress Training", included: true },
        { name: "SEO Optimization", included: true },
        { name: "First Year Hosting", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Mailerlite Integration", included: true },
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
        { name: "Advanced SEO", included: true },
        { name: "First Year Hosting", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Mailerlite Integration", included: true },
        { name: "Contact Forms", included: true },
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
        { name: "Unlimited Pages", included: true },
        { name: "WordPress Training", included: true },
        { name: "Advanced SEO", included: true },
        { name: "First Year Hosting", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Mailerlite Integration", included: true },
        { name: "Contact Forms", included: true },
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
    "Unlimited Pages",
    "WordPress Training",
    "SEO Optimization",
    "Advanced SEO",
    "First Year Hosting",
    "Mobile Responsive",
    "Mailerlite Integration",
    "Contact Form",
    "Contact Forms",
    "Analytics Setup",
    "E-commerce Features",
    "Custom Integrations",
    "Advanced Analytics"
  ];

  // Get unique features for the table
  const uniqueFeatures = Array.from(new Set(allFeatures));

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Wordpress Builds
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect package for your business needs
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                      Features
                    </th>
                    {tiers.map((tier) => (
                      <th key={tier.name} className="px-6 py-4 text-center">
                        <div className="relative">
                          {tier.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Most Popular
                              </span>
                            </div>
                          )}
                          <div className="pt-4">
                            <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                            <p className="text-3xl font-bold text-orange-500 mt-2">{tier.price}</p>
                            <p className="text-sm text-gray-600 mt-1">{tier.description}</p>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {uniqueFeatures.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {feature}
                      </td>
                      {tiers.map((tier) => {
                        const tierFeature = tier.features.find(f => f.name === feature);
                        return (
                          <td key={`${tier.name}-${feature}`} className="px-6 py-4 text-center">
                            {tierFeature ? (
                              tierFeature.included ? (
                                <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-gray-300 mx-auto" />
                              )
                            ) : (
                              <X className="h-6 w-6 text-gray-300 mx-auto" />
                            )}
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

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
              tier.popular ? 'ring-2 ring-orange-500' : ''
            }`}>
              {tier.popular && (
                <div className="bg-orange-500 text-white text-center py-2">
                  <span className="text-sm font-medium">Most Popular</span>
                </div>
              )}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <p className="text-4xl font-bold text-orange-500 mt-2">{tier.price}</p>
                  <p className="text-gray-600 mt-2">{tier.description}</p>
                </div>
                
                <div className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{feature.name}</span>
                      {feature.included ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
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
              window.location.href = `mailto:hello@podbubble.com?subject=${subject}&body=${body}`;
            }}
            className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingFeaturesTable;
