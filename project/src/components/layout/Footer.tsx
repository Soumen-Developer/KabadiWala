import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trash2, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
              <Link to="/" className="flex items-center mb-4">
                <img src="/icon.svg" alt="KabadiWala logo" className="mr-2" style={{ width: 24, height: 24 }} />
                <span className="font-bold text-xl">KabadiWala</span>
              </Link>
              <p className="text-neutral-300 mb-4">
                Professional waste management and scrap collection services. 
                We're committed to creating a cleaner, greener planet through responsible recycling.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-neutral-700 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/scrap-rates" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    Scrap Rates
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-neutral-700 pb-2">
                Our Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/scrap-collection" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    Scrap Collection
                  </Link>
                </li>
                <li>
                  <Link to="/services/waste-management" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    Waste Management
                  </Link>
                </li>
                <li>
                  <Link to="/services/e-waste-recycling" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    E-Waste Recycling
                  </Link>
                </li>
                <li>
                  <Link to="/services/car-scrap-service" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    Car Scrap Service
                  </Link>
                </li>
                <li>
                  <Link to="/services/biomedical-waste-management" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    Biomedical Waste Management
                  </Link>
                </li>
                <li>
                  <Link to="/services/after-event-cleanup" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    After Event Cleanup
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-neutral-700 pb-2">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="text-primary-400 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-neutral-300">
                    123 Recycling Street,<br />
                    Green City, Mumbai 400001,<br />
                    Maharashtra, India
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="text-primary-400 mr-2 flex-shrink-0" size={18} />
                  <a href="tel:+911234567890" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    +91 123 456 7890
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="text-primary-400 mr-2 flex-shrink-0" size={18} />
                  <a href="mailto:info@kabadiwala.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    info@kabadiwala.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-neutral-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} KabadiWala. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy-policy" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
