import React from 'react';
import { scrapRates } from '../data/mockData';
import PageHeader from '../components/ui/PageHeader';
import ScrapRateTable from '../components/ui/ScrapRateTable';

const ScrapRatesPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Current Scrap Rates" 
        description="We offer competitive prices for your scrap materials. Check our latest rates updated regularly." 
        backgroundImage="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg"
      />
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="p-6 bg-primary-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Scrap Material Rates</h2>
            <p className="text-gray-600 mt-2">
              Our rates are updated regularly based on market conditions. Last updated: {new Date(scrapRates[0].updatedAt).toLocaleDateString()}
            </p>
          </div>
          
          <ScrapRateTable rates={scrapRates} />
          
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Notes:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Rates are subject to change based on market conditions</li>
              <li>Rate may vary based on quality and condition of materials</li>
              <li>Minimum quantity requirements may apply for some materials</li>
              <li>Please contact us for rates on materials not listed here</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-primary-600 text-white rounded-lg shadow-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Sell Your Scrap?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contact us today to schedule a pickup and turn your scrap into cash. We offer free pickup services for qualifying orders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+911234567890"
              className="px-6 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
            >
              Call Us: +91 123 456 7890
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Request a Pickup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapRatesPage;