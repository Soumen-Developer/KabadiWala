import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';

// Mock job listings data
const jobListings = [
  {
    id: 1,
    title: 'Truck Driver',
    location: 'Denver, CO',
    type: 'Full-time',
    description: 'Experienced truck driver needed for scrap metal collection and delivery.',
    postedDate: '2025-09-15'
  },
  {
    id: 2,
    title: 'Recycling Plant Operator',
    location: 'Aurora, CO',
    type: 'Full-time',
    description: 'Operate and maintain recycling equipment at our main processing facility.',
    postedDate: '2025-09-20'
  },
  {
    id: 3,
    title: 'Customer Service Representative',
    location: 'Denver, CO',
    type: 'Part-time',
    description: 'Handle customer inquiries and coordinate pickup schedules.',
    postedDate: '2025-09-22'
  }
];

const CareersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Careers" 
        description="Join our team and make a difference in metal recycling"
      />
      
      <div className="my-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Openings</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <span>{job.location}</span>
                  <span className="mx-2">•</span>
                  <span>{job.type}</span>
                </div>
                <p className="mt-3 text-gray-600">{job.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Posted: {job.postedDate}</span>
                  <Link 
                    to={`/careers/${job.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Work With Us?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Competitive Benefits</h3>
            <p className="text-gray-600">We offer competitive salaries, healthcare benefits, paid time off, and retirement plans.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Growth Opportunities</h3>
            <p className="text-gray-600">We believe in promoting from within and providing training for career advancement.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Make an Impact</h3>
            <p className="text-gray-600">Join our mission to promote sustainability through responsible metal recycling.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;