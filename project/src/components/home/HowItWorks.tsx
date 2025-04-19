import React from 'react';
import { Calendar, Truck, DollarSign, ThumbsUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Calendar className="h-10 w-10 text-primary-500" />,
      title: 'Schedule a Pickup',
      description: 'Book a collection through our website or by calling our customer service. Choose a date and time that works for you.'
    },
    {
      icon: <Truck className="h-10 w-10 text-primary-500" />,
      title: 'We Collect Your Scrap',
      description: 'Our team arrives at your location on the scheduled date to collect and weigh your scrap materials.'
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary-500" />,
      title: 'Get Paid Instantly',
      description: 'Receive immediate payment based on the current market rates for your scrap materials.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary-500" />,
      title: 'Eco-Friendly Disposal',
      description: 'Rest assured that your waste will be recycled or disposed of in an environmentally responsible manner.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple process makes waste management and recycling easy and rewarding for you.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (visible on medium screens and above) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-card text-center relative">
                <div className="inline-flex items-center justify-center h-20 w-20 bg-primary-50 rounded-full mb-4 border-4 border-white shadow-md mx-auto">
                  {step.icon}
                  <span className="absolute top-0 right-0 bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;