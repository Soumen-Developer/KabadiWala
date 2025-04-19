import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="About Us" 
        description="Learn more about our scrap metal recycling services and company history"
      />
      
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2005, our scrap metal recycling company has grown from a small family business to one of the leading recycling operations in the region. We've built our reputation on honesty, reliability, and a commitment to sustainable practices.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to provide efficient, environmentally responsible recycling services while offering fair prices to our customers and contributing to a more sustainable future.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">We're committed to reducing waste and promoting the reuse of valuable resources.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">We operate with honesty and transparency in all our business dealings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">We're dedicated to supporting our local community and creating jobs.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600 mb-4">
            Our team consists of experienced professionals who are passionate about recycling and environmental conservation. From our collection specialists to our processing experts, everyone plays a crucial role in our mission.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Environmental Impact</h2>
          <p className="text-gray-600 mb-4">
            By recycling scrap metal, we help conserve natural resources, reduce energy consumption, and minimize landfill waste. Every ton of metal recycled helps reduce mining activity and the associated environmental impacts.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
            <p className="text-green-700">
              Last year, our recycling efforts helped save approximately 5,000 tons of CO2 emissions and conserved valuable natural resources.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;