import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
        <Link 
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
        >
          Learn More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;