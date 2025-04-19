import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { Briefcase, Calendar, Clock, MapPin, DollarSign as Dollar, FileText } from 'lucide-react';

// In a real app, you would fetch this from an API
const getJobById = (id: string) => {
  // Mock data - replace with actual data fetching
  const jobs = [
    {
      id: '1',
      title: 'Scrap Metal Collection Driver',
      department: 'Operations',
      location: 'Detroit, MI',
      type: 'Full-time',
      salary: '₹45,000 - ₹55,000',
      posted: '2025-08-15',
      description: 'We are looking for experienced drivers to join our scrap metal collection team. The ideal candidate will have a clean driving record and experience in the scrap metal industry.',
      responsibilities: [
        'Drive collection vehicles to customer locations',
        'Safely load and transport scrap metal',
        'Maintain accurate records of collections',
        'Provide excellent customer service',
        'Adhere to all safety protocols and regulations'
      ],
      requirements: [
        'Valid commercial driver\'s license',
        'Clean driving record',
        'Ability to lift up to 50 pounds',
        'Previous experience in scrap metal collection preferred',
        'Excellent communication skills'
      ]
    },
    {
      id: '2',
      title: 'Metal Recycling Specialist',
      department: 'Processing',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '₹40,000 - ₹50,000',
      posted: '2025-09-01',
      description: 'Join our team as a Metal Recycling Specialist. You will be responsible for processing and sorting various types of scrap metal for recycling.',
      responsibilities: [
        'Sort and grade different types of metals',
        'Operate recycling equipment safely',
        'Maintain cleanliness of the work area',
        'Follow all safety guidelines',
        'Assist in loading/unloading materials as needed'
      ],
      requirements: [
        'High school diploma or equivalent',
        'Previous experience in recycling or manufacturing preferred',
        'Ability to work in various weather conditions',
        'Knowledge of different metal types a plus',
        'Strong attention to detail'
      ]
    }
  ];
  
  return jobs.find(job => job.id === id);
};

const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real app, this would be an API call
    if (id) {
      const jobData = getJobById(id);
      setJob(jobData);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
        <p>The job you're looking for doesn't exist or has been removed.</p>
        <Link to="/careers" className="text-green-600 hover:underline mt-4 inline-block">
          Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <PageHeader 
        title={job.title}
        subtitle="Job Details"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Careers', path: '/careers' },
          { label: job.title, path: `/careers/${id}` }
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Job Header */}
          <div className="bg-green-600 p-6 text-white">
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center">
                <Dollar className="mr-2 h-5 w-5" />
                <span>{job.salary.replace('$', '₹')}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Posted: {new Date(job.posted).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Job Content */}
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-700">{job.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
              <ul className="list-disc pl-5 text-gray-700">
                {job.responsibilities.map((item: string, index: number) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
              <ul className="list-disc pl-5 text-gray-700">
                {job.requirements.map((item: string, index: number) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                to={`/careers/${id}/apply`}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Apply for this Position
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;