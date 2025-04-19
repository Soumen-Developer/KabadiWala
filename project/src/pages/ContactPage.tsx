import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Name is required';
    }
    if (!formData.email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Email is invalid';
    }
    if (!formData.message.trim()) {
      return 'Message is required';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setFormStatus({ submitted: false, error });
      return;
    }
    console.log('Form submitted:', formData);
    setFormStatus({ submitted: true, error: '' });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader 
        title="Contact Us" 
        description="We're here to help. Reach out to us with any questions or concerns."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your phone number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            {formStatus.error && (
              <p className="text-red-600 mb-4">{formStatus.error}</p>
            )}
            {formStatus.submitted && (
              <p className="text-green-600 mb-4">Thank you for contacting us! We will get back to you soon.</p>
            )}
            <button 
              type="submit" 
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-start">
                <span className="font-semibold w-24">Address:</span>
                <span>123 Recycling Street,
Green City, Mumbai 400001,
Maharashtra, India
</span>
              </p>
              <p className="flex items-start">
                <span className="font-semibold w-24">Phone:</span>
                <span>(555) 123-4567</span>
              </p>
              <p className="flex items-start">
                <span className="font-semibold w-24">Email:</span>
                <span>info@kabadiwala.com</span>
              </p>
              <p className="flex items-start">
                <span className="font-semibold w-24">Hours:</span>
                <span>Monday-Friday: 8am-6pm<br />Saturday: 9am-4pm<br />Sunday: Closed</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="h-64 rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8953494597754!2d73.02082471080892!3d19.02433255351806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3b95117e193%3A0x223ef7aa6f1bb89c!2sNCRD&#39;s%20Sterling%20Institutes%2C%20Nerul%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1745011323833!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
