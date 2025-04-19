import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/contexts/AuthContext';

const SchedulePickupPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [estimatedWeight, setEstimatedWeight] = useState('');
  const [remarks, setRemarks] = useState('');
  const [error, setError] = useState('');
  const [pickupScheduled, setPickupScheduled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Weight options in kg
  const weightOptions = [
    '0-5 kg',
    '5-10 kg',
    '10-20 kg',
    '20-50 kg',
    '50+ kg',
  ];

  useEffect(() => {
    // If user is not logged in and not admin, redirect to login
    if (!user || (user.role !== 'admin' && !user)) {
      navigate('/login');
    }
  }, [user, navigate]);

  const clearForm = () => {
    setDate('');
    setTime('');
    setAddress('');
    setEstimatedWeight('');
    setRemarks('');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (!date || !time || !address || !estimatedWeight) {
      setError('Please fill all the required details to schedule pickup.');
      return;
    }
    setError('');
    setLoading(true);
    setSuccessMessage('');

    try {
      // Simulate sending data to admin dashboard with delay
      const pickupData = {
        date,
        time,
        address,
        estimatedWeight,
        remarks,
      };
      console.log('Scheduled Pickup:', pickupData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setPickupScheduled(true);
      setSuccessMessage('Pickup scheduled successfully!');
      clearForm();

      // Redirect to thank you page after scheduling
      navigate('/user/pickup-thank-you');

    } catch {
      setError('Failed to schedule pickup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!pickupScheduled) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Schedule a Pickup</h1>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Date */}
            <div>
              <label htmlFor="date" className="block font-medium mb-1">
                Enter Date <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="DD/MM/YYYY"
                required
                aria-required="true"
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block font-medium mb-1">
                Enter Time <span className="text-red-600">*</span>
              </label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
                aria-required="true"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block font-medium mb-1">
                Enter Address <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
                aria-required="true"
              />
              {/* Future enhancement: Add location picker or map integration */}
            </div>

            {/* Estimated Weight */}
            <div>
              <label htmlFor="estimatedWeight" className="block font-medium mb-1">
                Estimated Weight <span className="text-red-600">*</span>
              </label>
              <select
                id="estimatedWeight"
                value={estimatedWeight}
                onChange={(e) => setEstimatedWeight(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
                aria-required="true"
              >
                <option value="" disabled>
                  Select weight range
                </option>
                {weightOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Remarks */}
            <div>
              <label htmlFor="remarks" className="block font-medium mb-1">
                Remarks (Optional)
              </label>
              <textarea
                id="remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Additional details"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                rows={3}
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-600 font-semibold text-center" role="alert" aria-live="assertive">
                {error}
              </p>
            )}

            {/* Success Message */}
            {successMessage && (
              <p className="text-green-600 font-semibold text-center" role="status" aria-live="polite">
                {successMessage}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full bg-primary-600 text-white font-semibold py-2 rounded-md transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-700'
              }`}
              disabled={loading}
            >
              {loading ? 'Scheduling...' : 'Schedule a Pickup'}
            </button>
          </form>

          {/* Check My Pickups Link */}
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate('/user/bookings')}
              className="text-primary-600 font-medium hover:underline"
            >
              To view the scheduled pickups click Check My Pickups
            </button>
          </div>

          {/* Support Text */}
          <p className="mt-6 text-center text-gray-700">
            Facing Problems? Call us at{' '}
            <a href="tel:+918595358613" className="text-primary-600 font-semibold">
              +918595358613
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">No Pickup Scheduled</h2>
        <p className="text-center text-gray-700 max-w-md">
          You have not scheduled any pickups yet. Please schedule a pickup to see it here.
        </p>
        <button
          onClick={() => setPickupScheduled(false)}
          className="mt-6 bg-primary-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-primary-700 transition-colors"
        >
          Schedule a Pickup
        </button>
      </div>
    );
  }
};

export default SchedulePickupPage;
