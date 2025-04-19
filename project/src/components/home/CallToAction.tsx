import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Calendar } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-secondary-700 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-20 -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -mb-16 -ml-16"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Clean Up and Get Paid?</h2>
          <p className="text-lg md:text-xl mb-8 text-secondary-100">
            Book our services today and experience hassle-free waste management and recycling. We pay competitive rates for your scrap materials.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/schedule-pickup"
              className="px-6 py-3 bg-white text-secondary-700 font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              <Calendar size={18} className="mr-2" />
              Schedule Pickup
            </Link>
            
            <a
              href="tel:+911234567890"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              <PhoneCall size={18} className="mr-2" />
              Call Us Now
            </a>
          </div>
          
          <p className="mt-6 text-sm text-secondary-200">
            We service residential and commercial properties across all major cities in India
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;