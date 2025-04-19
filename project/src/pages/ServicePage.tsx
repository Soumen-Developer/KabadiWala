import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Check, ArrowRight } from 'lucide-react';
import { getService } from '../data/mockData';
import PageHeader from '../components/ui/PageHeader';
import NotFoundPage from './NotFoundPage';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getService(slug || '');

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <PageHeader 
        title={service.name} 
        description={service.shortDescription} 
        backgroundImage={service.imageUrl}
      />
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-card p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">About this Service</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Benefits</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">How It Works</h3>
                <ol className="space-y-4">
                  {service.howItWorks.map((step, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold mr-3">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-card p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    How do I schedule a pickup?
                  </h3>
                  <p className="text-gray-700">
                    You can schedule a pickup by filling out our online form, calling our customer service, or using our mobile app. We'll confirm your appointment within 24 hours.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    What areas do you service?
                  </h3>
                  <p className="text-gray-700">
                    We currently service all major cities in India including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, and surrounding areas.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    How are the rates determined?
                  </h3>
                  <p className="text-gray-700">
                    Our rates are based on current market prices for recyclable materials. We update our rates regularly to ensure you get the best value for your scrap.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Is there a minimum quantity requirement?
                  </h3>
                  <p className="text-gray-700">
                    For most services, we don't have a minimum quantity requirement. However, for some specialized services like car scrapping, certain conditions apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quote Box */}
            <div className="bg-primary-50 rounded-lg shadow-card p-6 mb-8 border border-primary-100">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Get a Quote</h3>
              <p className="text-gray-700 mb-6">
                Interested in our {service.name.toLowerCase()}? Get a personalized quote based on your specific needs.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-primary-600 text-white text-center py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
            
            {/* Book Service */}
            <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Book Now</h3>
              <p className="text-gray-700 mb-6">
                Ready to schedule your {service.name.toLowerCase()}? Book an appointment at your convenient time.
              </p>
              <Link
                to="/schedule-pickup"
                className="block w-full bg-accent-500 text-white text-center py-3 rounded-md font-medium hover:bg-accent-600 transition-colors flex items-center justify-center"
              >
                <Calendar className="mr-2" size={18} />
                Schedule Pickup
              </Link>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Need more information?</h4>
                <p className="text-gray-700 mb-4 text-sm">
                  Our customer service team is available to answer any questions you might have.
                </p>
                <a
                  href="tel:+911234567890"
                  className="text-primary-600 font-medium hover:text-primary-800 flex items-center"
                >
                  Call us at +91 123 456 7890 <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;