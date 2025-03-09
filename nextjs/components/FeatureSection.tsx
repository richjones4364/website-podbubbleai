import { Clock, MessageSquare, Users, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'Save Time',
    description: 'Reduce administrative workload by up to 50% with our AI agents handling routine tasks like student incident reporting, answering parent FAQs, and generating reports.',
    icon: Clock,
  },
  {
    name: 'Improve Communication',
    description: 'Automate responses to common queries from parents and staff, ensuring timely and consistent communication across your school.',
    icon: MessageSquare,
  },
  {
    name: 'Support Staff',
    description: 'Free up your staff to focus on what matters most - teaching and supporting students, rather than administrative paperwork.',
    icon: Users,
  },
  {
    name: 'Smart Automation',
    description: "Our AI are tuned to your school's specific needs and adapted over time, becoming more efficient and personalised to your requirements.",
    icon: Sparkles,
  },
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We&apos;re here to reduce staff workload.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            PodBubble&apos;s AI agents work tirelessly to reduce administrative burden, giving your staff more energy to focus on the children.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
