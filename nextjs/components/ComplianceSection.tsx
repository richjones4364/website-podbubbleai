import { Clock, MessageSquare, Users, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'Safety and Compliance',
    description: 'By establishing clear guidelines for staff and student use,we ensure your school is compliant with AI safety standards.',
    icon: Clock,
  },
  {
    name: 'Data Privacy',
    description: 'We comply with legal requirements and maintain the trust of pupils and parents',
    icon: MessageSquare,
  },
  {
    name: 'Clarity and Transparency',
    description: "We carefully consider and assess the benefits and risks of AI use in education settings and ensure appropriate safeguards are in place for pupil use",
    icon: Sparkles,
  },
  {
    name: 'Humans In The Loop',
    description: "We know that AI tools cannot replace the judgement and deep subject knowledge of a human expert.",
    icon: Sparkles,
  },
];

const ComplianceSection = () => {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">Compliance</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ensuring safe and responsible use of AI.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          We understand and adhere to AI Safety and Compliance Standards.
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
        <p className="mt-4 max-w-2xl text-xl text-center text-gray-500 mt-4 lg:mx-auto">
        Our AI will always support educators and enhance teaching, not replace their expertise and the vital teacher-pupil relationships.
          </p>
      </div>
    </div>
  );
};

export default ComplianceSection;
