import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const SearchResultsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center"
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 mx-auto mb-6">
          <Search className="w-8 h-8 text-primary-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Search Results Coming Soon</h2>
        <p className="text-gray-600 mb-6">
          Advanced search functionality is currently under development.
          Check back soon for updates!
        </p>
        <a 
          href="/"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Return to Home
        </a>
      </motion.div>
    </div>
  );
};

export default SearchResultsPage;