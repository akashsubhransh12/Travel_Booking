import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown, Search } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Flights', href: '/flights' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'Trains', href: '/trains' },
    { name: 'Buses', href: '/buses' },
    { name: 'Holiday Packages', href: '/holidays' },
    { name: 'Explore', href: '/explore' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-500">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-500">
              <User className="h-5 w-5 mr-1" />
              <span>Login</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white pt-2 pb-4 px-4 space-y-1 divide-y divide-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-2">
              <button className="flex items-center w-full py-2 text-base font-medium text-gray-700">
                <User className="h-5 w-5 mr-2" />
                <span>Login / Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;