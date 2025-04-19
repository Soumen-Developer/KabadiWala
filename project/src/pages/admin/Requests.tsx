import React from 'react';

const mockRequests = [
  {
    id: 1,
    date: '2024-04-20',
    time: '10:00 AM',
    address: '123 Green St, Cityville',
    estimatedWeight: '10-20 kg',
    remarks: 'Please be on time.',
  },
  {
    id: 2,
    date: '2024-04-22',
    time: '2:00 PM',
    address: '456 Blue Rd, Townsville',
    estimatedWeight: '5-10 kg',
    remarks: '',
  },
];

const Requests: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Pickup Requests</h1>
      <div className="bg-white rounded-lg shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockRequests.map(request => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.estimatedWeight}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.remarks || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Requests;
