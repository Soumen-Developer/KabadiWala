import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, UserCircle } from 'lucide-react';
import { useAuth } from '../../lib/contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current && 
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
      if (
        userDropdownRef.current && 
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
    setIsServicesDropdownOpen(false);
    setIsUserDropdownOpen(false);
  }, [location]);

  // Keyboard accessibility for dropdown toggles
  const handleServicesKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    }
  };

  const handleUserKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsUserDropdownOpen(!isUserDropdownOpen);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <img 
              src="/icon.svg" 
              alt="KabadiWala logo" 
              className="mr-2 w-7 h-7" 
            />
            <span 
              className="font-bold text-xl md:text-2xl text-green-800 transition-colors"
            >
              KabadiWala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-green-900 bg-green-100' 
                  : 'text-green-600 hover:bg-green-100'
              }`}
            >
              Home
            </Link>
            
            <div className="relative" ref={servicesDropdownRef}>
              <button
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                  location.pathname.includes('/services')
                    ? 'text-green-900 bg-green-100'
                    : 'text-green-600 hover:bg-green-100'
                }`}
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onKeyDown={handleServicesKeyDown}
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      All Services
                    </Link>
                    <Link
                      to="/services/scrap-collection"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Scrap Collection
                    </Link>
                    <Link
                      to="/services/waste-management"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Waste Management
                    </Link>
                    <Link
                      to="/services/e-waste-recycling"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      E-Waste Recycling
                    </Link>
                    <Link
                      to="/services/car-scrap-service"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Car Scrap Service
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/scrap-rates" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/scrap-rates' 
                  ? 'text-green-900 bg-green-100' 
                  : 'text-green-600 hover:bg-green-100'
              }`}
            >
              Scrap Rates
            </Link>
            
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-green-900 bg-green-100' 
                  : 'text-green-600 hover:bg-green-100'
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/careers" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/careers' 
                  ? 'text-green-900 bg-green-100' 
                  : 'text-green-600 hover:bg-green-100'
              }`}
            >
              Careers
            </Link>
            
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-green-900 bg-green-100' 
                  : 'text-green-600 hover:bg-green-100'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* User Menu / Login Button */}
          <div className="hidden md:block">
            {user ? (
              <div className="relative" ref={userDropdownRef}>
                <button
                  aria-haspopup="true"
                  aria-expanded={isUserDropdownOpen}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled ? 'text-green-700 hover:text-green-900' : 'text-green-800 hover:bg-green-100'
                  }`}
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  onKeyDown={handleUserKeyDown}
                >
                  <UserCircle className="mr-2" size={20} />
                  {user.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        to={user.role === 'admin' ? '/admin' : '/user'}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'bg-green-700 text-white hover:bg-green-800' 
                    : 'bg-white text-green-600 hover:bg-gray-100'
                }`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X 
                className={isScrolled ? 'text-gray-800' : 'text-white'} 
                size={24} 
              />
            ) : (
              <Menu 
                className={isScrolled ? 'text-gray-800' : 'text-white'} 
                size={24} 
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              to="/scrap-rates"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Scrap Rates
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              to="/careers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Contact
            </Link>
            {user ? (
              <>
                <Link
                  to={user.role === 'admin' ? '/admin' : '/user'}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-600 hover:bg-gray-100"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
