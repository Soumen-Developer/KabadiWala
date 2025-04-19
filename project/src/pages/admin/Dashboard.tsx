import React from 'react';
import { 
  ShoppingCart, 
  Users, 
  CreditCard, 
  TrendingUp, 
  Package, 
  CheckCircle, 
  Clock,
  MessageSquare,
  ClipboardList
} from 'lucide-react';
import { Line, Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement 
} from 'chart.js';
import { dashboardStats } from '../../data/mockData';

// Mock data for queries and requests
const mockQueries = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    message: 'I have a question about your services.',
    date: '2024-04-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
    message: 'Can you provide more info on recycling?',
    date: '2024-04-16',
  },
];

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

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard: React.FC = () => {
  // Data for revenue chart
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [30000, 35000, 25000, 45000, 40000, 50000],
        fill: false,
        borderColor: '#1565C0',
        tension: 0.4,
        backgroundColor: '#1565C0',
      },
    ],
  };

  // Data for service distribution chart
  const serviceData = {
    labels: dashboardStats.serviceStats.map(stat => stat.name),
    datasets: [
      {
        data: dashboardStats.serviceStats.map(stat => stat.count),
        backgroundColor: [
          '#2E7D32', 
          '#1565C0', 
          '#FF8F00', 
          '#D32F2F', 
          '#7B1FA2'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-card flex items-center">
          <div className="rounded-full bg-primary-100 p-3 mr-4">
            <ShoppingCart className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Orders</p>
            <p className="text-2xl font-semibold text-gray-900">{dashboardStats.totalOrders}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-card flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Users</p>
            <p className="text-2xl font-semibold text-gray-900">{dashboardStats.userCount}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-card flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <CreditCard className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
            <p className="text-2xl font-semibold text-gray-900">₹{dashboardStats.totalRevenue.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-card flex items-center">
          <div className="rounded-full bg-orange-100 p-3 mr-4">
            <TrendingUp className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Completion Rate</p>
            <p className="text-2xl font-semibold text-gray-900">
              {Math.round((dashboardStats.completedOrders / dashboardStats.totalOrders) * 100)}%
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-card flex items-center">
          <div className="rounded-full bg-purple-100 p-3 mr-4">
            <MessageSquare className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Queries</p>
            <p className="text-2xl font-semibold text-gray-900">{mockQueries.length}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-card flex items-center">
          <div className="rounded-full bg-teal-100 p-3 mr-4">
            <ClipboardList className="h-6 w-6 text-teal-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Requests</p>
            <p className="text-2xl font-semibold text-gray-900">{mockRequests.length}</p>
          </div>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h2>
          <Line data={revenueData} options={lineOptions} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Distribution</h2>
          <div className="h-80">
            <Doughnut data={serviceData} options={doughnutOptions} />
          </div>
        </div>
      </div>
      
      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dashboardStats.recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.userName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.serviceName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status === 'completed' && <CheckCircle className="h-4 w-4 mr-1" />}
                      {order.status === 'confirmed' && <Package className="h-4 w-4 mr-1" />}
                      {order.status === 'pending' && <Clock className="h-4 w-4 mr-1" />}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <a href="/admin/orders" className="text-sm font-medium text-primary-600 hover:text-primary-800">
            View all orders
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
