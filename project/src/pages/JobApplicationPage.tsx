import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { Send, ArrowLeft } from 'lucide-react';

// In a real app, you would fetch this from an API
const getJobById = (id: string) => {
  // Mock data - replace with actual data fetching
  const jobs = [
    {
      id: '1',
      title: 'Scrap Metal Collection Driver',
      department: 'Operations',
      location: 'Detroit, MI',
    },
    {
      id: '2',
      title: 'Metal Recycling Specialist',
      department: 'Processing',
      location: 'Chicago, IL',
    }
  ];
  
  return jobs.find(job => job.id === id);
};

const JobApplicationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: '',
    experience: '',
    startDate: '',
    hearAbout: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    if (id) {
      const jobData = getJobById(id);
      setJob(jobData);
      setLoading(false);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // In a real app, you would submit to an API here
      console.log('Application submitted:', formData);
    }, 1500);
  };

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

  if (submitted) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <PageHeader 
          title="Application Submitted"
          subtitle="Thank You"
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Careers', path: '/careers' },
            { label: job.title, path: `/careers/${id}` },
            { label: 'Apply', path: `/careers/${id}/apply` }
          ]}
        />

        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send size={32} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Received!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for applying to the {job.title} position. We've received your application and will review it shortly. If your qualifications match our requirements, our HR department will contact you for the next steps.
            </p>
            <div className="flex justify-center">
              <Link
                to="/careers"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <PageHeader 
        title={`Apply for ${job.title}`}
        subtitle="Job Application"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Careers', path: '/careers' },
          { label: job.title, path: `/careers/${id}` },
          { label: 'Apply', path: `/careers/${id}/apply` }
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Application Form</h2>
              <p className="text-gray-600">Please fill out all required fields to apply for the {job.title} position in {job.location}.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">Resume URL *</label>
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  value={formData.resume}
                  onChange={handleChange}
                  placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <p className="text-sm text-gray-500 mt-1">Please provide a link to your resume hosted online</p>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Why are you interested in this position?"
                ></textarea>
              </div>

              <div>
                <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Relevant Experience *</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Describe your relevant experience for this position"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">Earliest Start Date *</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="hearAbout" className="block text-gray-700 font-medium mb-2">How did you hear about us? *</label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select an option</option>
                    <option value="website">Company Website</option>
                    <option value="job-board">Job Board</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Employee Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <Link 
                  to={`/careers/${id}`} 
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Job Details
                </Link>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPage;