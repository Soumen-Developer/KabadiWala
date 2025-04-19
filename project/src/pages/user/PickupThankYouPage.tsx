import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PickupThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/user/dashboard');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
        <p className="text-lg text-gray-700">We will contact you soon.</p>
      </div>
    </div>
  );
};

export default PickupThankYouPage;
