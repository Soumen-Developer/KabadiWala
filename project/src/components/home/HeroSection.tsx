import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      {/* Hero Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg)' }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center py-16 md:py-24">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-slide-up">
              Responsible Waste Management & Recycling Services
            </h1>
            <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Turn your waste into wealth. We offer professional scrap collection and waste management services for homes and businesses across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/services"
                className="px-6 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors duration-300 text-center w-full sm:w-auto"
              >
                Our Services
              </Link>
              <Link
                to="/schedule-pickup"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-300 flex items-center justify-center w-full sm:w-auto"
              >
                Request Pickup <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-accent-500 rounded-full opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/6963622/pexels-photo-6963622.jpeg"
                alt="Scrap Collection Service"
                className="rounded-lg shadow-xl max-w-full md:max-w-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-secondary-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;