import React from 'react';
import { motion } from 'framer-motion';
import SearchForm from '../components/search/SearchForm';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import TravelDeals from '../components/home/TravelDeals';
import TravelTips from '../components/home/TravelTips';
import AppDownload from '../components/home/AppDownload';
import { ChevronDown } from 'lucide-react';

const HomePage: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg")',
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-0"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Explore the World Your Way
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover destinations, check weather trends, and book your perfect trip all in one place.
            </p>
            
            <SearchForm />
          </motion.div>
        </div>
        
        <button 
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce"
        >
          <span className="mb-2 text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <FeaturedDestinations />
        </div>
      </section>

      {/* Travel Deals */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <TravelDeals />
        </div>
      </section>

      {/* Travel Tips & Weather Insights */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <TravelTips />
        </div>
      </section>

      {/* App Download */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom">
          <AppDownload />
        </div>
      </section>
    </div>
  );
};

export default HomePage;