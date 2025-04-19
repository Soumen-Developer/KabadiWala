import React from 'react';
import { Recycle, Users, Truck, Award } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Making an Impact Together</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to responsible waste management has helped us achieve significant milestones in creating a cleaner environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <Recycle size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">12,500+</h3>
            <p className="text-gray-600">Tons of Waste Recycled</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-secondary-100 text-secondary-600 rounded-full mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5,000+</h3>
            <p className="text-gray-600">Satisfied Customers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-accent-100 text-accent-600 rounded-full mb-4">
              <Truck size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">25+</h3>
            <p className="text-gray-600">Cities Covered</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-success-100 text-success-500 rounded-full mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">8+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;