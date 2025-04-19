import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  Calendar, 
  LogOut, 
  Bell,
} from 'lucide-react';
import { useAuth } from '../../lib/contexts/AuthContext';
import { notifications } from '../../data/mockData';

const UserLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const unreadNotifications = notifications.filter(notification => !notification.read && notification.userId === user?.id);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-blue-900 text-white transition-all duration-300 z-20 w-64 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-800">
          <Link to="/user" className="flex items-center space-x-2">
            <img src="/icon.svg" alt="KabadiWala Logo" className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl">KabadiWala</span>
          </Link>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white p-1 rounded-md hover:bg-secondary-700"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/user/dashboard"
                className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${
                  location.pathname === '/user/dashboard'
                    ? 'bg-secondary-700 text-white'
                    : 'text-secondary-100 hover:bg-secondary-700'
                }`}
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/schedule-pickup"
                className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${
                  location.pathname === '/schedule-pickup'
                    ? 'bg-secondary-700 text-white'
                    : 'text-secondary-100 hover:bg-secondary-700'
                }`}
              >
                <Calendar size={20} />
                <span>Schedule a Pickup</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${
                  location.pathname === '/'
                    ? 'bg-secondary-700 text-white'
                    : 'text-secondary-100 hover:bg-secondary-700'
                }`}
              >
                <span>Homepage</span>
              </Link>
            </li>
            <li className="pt-4 mt-4 border-t border-secondary-700">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 p-2 rounded-md text-secondary-100 hover:bg-secondary-700 transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none"
                >
                  <Bell size={20} />
                  {unreadNotifications.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {unreadNotifications.length}
                    </span>
                  )}
                </button>
                
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20">
                    <div className="p-3 bg-secondary-50 border-b border-gray-200">
                      <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications
                        .filter(n => n.userId === user?.id)
                        .slice(0, 5)
                        .map(notification => (
                          <div
                            key={notification.id}
                            className={`p-3 border-b border-gray-200 ${!notification.read ? 'bg-blue-50' : ''}`}
                          >
                            <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                            <p className="text-xs text-gray-500">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {new Date(notification.createdAt).toLocaleString()}
                            </p>
                          </div>
                        ))}
                    </div>
                    <div className="p-2 bg-gray-50 text-center">
                      <a href="#" className="text-xs text-secondary-600 hover:text-secondary-800">
                        View all notifications
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center">
                <div className="mr-2 text-right">
                  <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                  <p className="text-xs text-gray-500">Customer</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-secondary-600 flex items-center justify-center text-white">
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;