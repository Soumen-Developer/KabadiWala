import React from 'react';
import { services } from '../data/mockData';
import PageHeader from '../components/ui/PageHeader';
import ServiceCard from '../components/ui/ServiceCard';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Our Services" 
        description="Discover our comprehensive range of waste management and recycling services designed to meet all your needs." 
        backgroundImage="https://images.pexels.com/photos/159751/book-read-literature-pages-159751.jpeg"
      />
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;