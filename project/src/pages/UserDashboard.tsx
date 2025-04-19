import React from 'react';
import { useAuth } from '../lib/contexts/AuthContext';

const UserDashboard: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Loading Dashboard...</h1>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
        <p>Please log in to view your dashboard.</p>
      </div>
    );
  }

  // For demo, simulate dynamic data based on user email or id
  const totalPickups = 5;
  const pendingPickups = 2;
  const completedPickups = 3;
  const recentPickups = [
    { id: '#101', date: '2024-04-15', status: 'Pending', remarks: 'Pickup scheduled' },
    { id: '#102', date: '2024-04-10', status: 'Completed', remarks: 'Pickup completed successfully' },
    { id: '#103', date: '2024-04-05', status: 'Completed', remarks: 'Pickup completed successfully' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome, {user.name}</h1>
      <p className="mb-8 text-center text-lg">Hi!!, Here are your pickup stats:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-secondary-100 rounded-lg shadow p-8 text-center">
          <p className="text-sm font-medium text-secondary-700">Total Pickups</p>
          <p className="mt-3 text-3xl font-semibold text-secondary-900">{totalPickups}</p>
        </div>
        <div className="bg-accent-100 rounded-lg shadow p-8 text-center">
          <p className="text-sm font-medium text-accent-700">Pending Pickups</p>
          <p className="mt-3 text-3xl font-semibold text-accent-900">{pendingPickups}</p>
        </div>
        <div className="bg-primary-100 rounded-lg shadow p-8 text-center">
          <p className="text-sm font-medium text-primary-700">Completed Pickups</p>
          <p className="mt-3 text-3xl font-semibold text-primary-900">{completedPickups}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Pickups</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pickup ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentPickups.map((pickup) => (
              <tr key={pickup.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pickup.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pickup.date}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${pickup.status === 'Pending' ? 'text-yellow-600' : 'text-green-600'}`}>
                  {pickup.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pickup.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
