import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './lib/contexts/AuthContext';

// Layout Components
import Layout from './components/layout/Layout';
import UserLayout from './components/layout/UserLayout';
import AdminLayout from './components/layout/AdminLayout';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ScrapRatesPage from './pages/ScrapRatesPage';
import CareersPage from './pages/CareersPage';
import LoginPage from './pages/LoginPage';
import JobDetailsPage from './pages/JobDetailsPage';
import JobApplicationPage from './pages/JobApplicationPage';
import NotFoundPage from './pages/NotFoundPage';
import SchedulePickupPage from './pages/SchedulePickupPage';
import UserDashboard from './pages/UserDashboard';

// User Pages
import PickupThankYouPage from './pages/user/PickupThankYouPage';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminServices from './pages/admin/Services';
import AdminOrders from './pages/admin/Orders';
import AdminPayments from './pages/admin/Payments';
import AdminScrapRates from './pages/admin/ScrapRates';
import Queries from './pages/admin/Queries';
import Requests from './pages/admin/Requests';

// Route Guards
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  let isAdmin = false;
  try {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      isAdmin = JSON.parse(currentUser).role === 'admin';
    }
  } catch {
    isAdmin = false;
  }
  
  return isAdmin ? <>{children}</> : <Navigate to="/login" />;
};

const UserRoute = ({ children }: { children: React.ReactNode }) => {
  let isLoggedIn = false;
  try {
    isLoggedIn = !!localStorage.getItem('currentUser');
  } catch {
    isLoggedIn = false;
  }
  
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServicePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="scrap-rates" element={<ScrapRatesPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="careers/:id" element={<JobDetailsPage />} />
            <Route path="careers/:id/apply" element={<JobApplicationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="schedule-pickup" element={<SchedulePickupPage />} />
          </Route>

          {/* User Routes */}
          <Route path="/user" element={
            <UserRoute>
              <UserLayout />
            </UserRoute>
          }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="pickup-thank-you" element={<PickupThankYouPage />} />
            {/* Add other user routes here if needed */}
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="scrap-rates" element={<AdminScrapRates />} />
            <Route path="queries" element={<Queries />} />
            <Route path="requests" element={<Requests />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
