import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Filter, Grid3X3, ArrowUpDown } from 'lucide-react';

const ExplorePage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
      description: 'Tropical paradise with beautiful beaches and rich culture',
      rating: 4.8,
      category: 'beach',
      weatherHighlight: 'Warm and sunny most of the year',
      activities: ['Surfing', 'Temple visits', 'Rice terrace trekking'],
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      description: 'Stunning white buildings with blue domes overlooking the sea',
      rating: 4.9,
      category: 'island',
      weatherHighlight: 'Hot summers, mild winters',
      activities: ['Sunset watching', 'Wine tasting', 'Boat tours'],
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
      description: 'Ancient temples, traditional gardens and rich history',
      rating: 4.7,
      category: 'cultural',
      weatherHighlight: 'Four distinct seasons, beautiful cherry blossoms in spring',
      activities: ['Temple visits', 'Tea ceremonies', 'Geisha district tours'],
    },
    {
      id: 4,
      name: 'Machu Picchu, Peru',
      image: 'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg',
      description: 'Iconic Incan citadel set amidst breathtaking mountains',
      rating: 4.9,
      category: 'adventure',
      weatherHighlight: 'Dry and wet seasons, best visited during dry season (May-October)',
      activities: ['Hiking', 'Archaeological tours', 'Mountain photography'],
    },
    {
      id: 5,
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg',
      description: 'City of love with iconic landmarks and exquisite cuisine',
      rating: 4.6,
      category: 'city',
      weatherHighlight: 'Mild climate with occasional rain, beautiful in spring and fall',
      activities: ['Museum visits', 'Culinary tours', 'River cruises'],
    },
    {
      id: 6,
      name: 'New York City, USA',
      image: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.png',
      description: 'The city that never sleeps with impressive skyscrapers',
      rating: 4.7,
      category: 'city',
      weatherHighlight: 'Four distinct seasons with hot summers and cold winters',
      activities: ['Broadway shows', 'Shopping', 'Skyline views'],
    },
    {
      id: 7,
      name: 'Swiss Alps, Switzerland',
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
      description: 'Majestic mountain range with world-class skiing and hiking',
      rating: 4.9,
      category: 'mountain',
      weatherHighlight: 'Snowy winters perfect for skiing, mild summers ideal for hiking',
      activities: ['Skiing', 'Hiking', 'Mountain biking'],
    },
    {
      id: 8,
      name: 'Great Barrier Reef, Australia',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg',
      description: 'World\'s largest coral reef system teeming with marine life',
      rating: 4.8,
      category: 'beach',
      weatherHighlight: 'Tropical climate, best visited during dry season (May-October)',
      activities: ['Snorkeling', 'Scuba diving', 'Boat tours'],
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'beach', label: 'Beaches' },
    { id: 'mountain', label: 'Mountains' },
    { id: 'city', label: 'Cities' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'island', label: 'Islands' },
  ];

  const filteredDestinations = destinations.filter(
    (destination) =>
      (activeFilter === 'all' || destination.category === activeFilter) &&
      (searchQuery === '' ||
        destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
    <div className="py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing places around the world, check weather history,
            and find your perfect travel destination.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            {/* Search bar */}
            <div className="relative mb-4 md:mb-0 md:w-1/3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* View toggle and sort */}
            <div className="flex space-x-2">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                    viewMode === 'grid'
                      ? 'bg-primary-500 text-white border-primary-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                    viewMode === 'map'
                      ? 'bg-primary-500 text-white border-primary-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Map className="w-4 h-4" />
                </button>
              </div>
              
              <button className="flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                <span>Sort</span>
              </button>
              
              <button className="flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700">
                <Filter className="w-4 h-4 mr-2" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        {viewMode === 'grid' ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination) => (
                <motion.div key={destination.id} variants={item}>
                  <div className="card overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        {destination.rating}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">{destination.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{destination.description}</p>
                      
                      {/* Weather highlight */}
                      <div className="bg-blue-50 rounded-lg p-3 mb-3">
                        <h4 className="text-xs font-semibold uppercase text-blue-700 mb-1">Weather Highlight</h4>
                        <p className="text-sm text-gray-700">{destination.weatherHighlight}</p>
                      </div>
                      
                      {/* Activities */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {destination.activities.slice(0, 3).map((activity, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action button */}
                      <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium py-2 rounded-lg transition-colors">
                        Explore Destination
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          // Map View - For simplicity, just showing a placeholder
          <div className="bg-gray-100 rounded-xl overflow-hidden h-[600px] flex items-center justify-center">
            <div className="text-center p-8">
              <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Map View Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We're working on an interactive map to help you explore destinations visually.
                Switch back to grid view to see destinations.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;