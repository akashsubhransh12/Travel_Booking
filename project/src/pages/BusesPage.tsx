import React from 'react';
import { motion } from 'framer-motion';

const BusesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center"
      >
        <img 
          src="https://images.pexels.com/photos/1426516/pexels-photo-1426516.jpeg" 
          alt="Bus" 
          className="w-32 h-32 object-cover rounded-full mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold mb-2">Buses Coming Soon</h2>
        <p className="text-gray-600 mb-6">
          We're currently working on bringing you amazing bus booking options.
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

export default BusesPage;