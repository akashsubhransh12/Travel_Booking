import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedDestinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
      description: 'Tropical paradise with beautiful beaches and rich culture',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      description: 'Stunning white buildings with blue domes overlooking the sea',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
      description: 'Ancient temples, traditional gardens and rich history',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Machu Picchu, Peru',
      image: 'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg',
      description: 'Iconic Incan citadel set amidst breathtaking mountains',
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg',
      description: 'City of love with iconic landmarks and exquisite cuisine',
      rating: 4.6,
    },
    {
      id: 6,
      name: 'New York City, USA',
      image: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.png',
      description: 'The city that never sleeps with impressive skyscrapers',
      rating: 4.7,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Trending Destinations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the most popular destinations loved by travelers worldwide. 
          Explore these amazing places and plan your dream vacation.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {destinations.map((destination) => (
          <motion.div 
            key={destination.id} 
            variants={item}
            className="group"
          >
            <Link to={`/destination/${destination.id}`} className="block">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                  <p className="text-sm text-gray-200 mb-2">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{destination.rating}</span>
                    </div>
                    <span className="text-sm bg-primary-500 px-2 py-1 rounded">Explore Now</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-10">
        <Link to="/explore" className="btn btn-primary">
          View All Destinations
        </Link>
      </div>
    </div>
  );
};

export default FeaturedDestinations;