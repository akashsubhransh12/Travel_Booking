import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter, ArrowUpDown, Clock, Luggage, Plane } from 'lucide-react';

const FlightsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromLocation = queryParams.get('from') || '';
  const toLocation = queryParams.get('to') || '';

  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [stops, setStops] = useState<string[]>(['direct']);
  const [departureTime, setDepartureTime] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recommended');

  // Mock flight data
  const flights = [
    {
      id: 1,
      airline: 'Singapore Airlines',
      airlineCode: 'SQ',
      departureTime: '09:15',
      arrivalTime: '12:45',
      duration: '3h 30m',
      price: 345,
      stops: 'direct',
      departureAirport: 'SIN',
      arrivalAirport: 'DPS',
      aircraft: 'Boeing 787-9',
      logo: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg',
    },
    {
      id: 2,
      airline: 'Emirates',
      airlineCode: 'EK',
      departureTime: '11:20',
      arrivalTime: '17:05',
      duration: '5h 45m',
      price: 289,
      stops: '1 stop (KUL)',
      departureAirport: 'SIN',
      arrivalAirport: 'DPS',
      aircraft: 'Airbus A380',
      logo: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg',
    },
    {
      id: 3,
      airline: 'AirAsia',
      airlineCode: 'AK',
      departureTime: '14:45',
      arrivalTime: '17:30',
      duration: '2h 45m',
      price: 175,
      stops: 'direct',
      departureAirport: 'SIN',
      arrivalAirport: 'DPS',
      aircraft: 'Airbus A320',
      logo: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg',
    },
    {
      id: 4,
      airline: 'Garuda Indonesia',
      airlineCode: 'GA',
      departureTime: '18:30',
      arrivalTime: '21:15',
      duration: '2h 45m',
      price: 312,
      stops: 'direct',
      departureAirport: 'SIN',
      arrivalAirport: 'DPS',
      aircraft: 'Boeing 737-800',
      logo: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg',
    },
    {
      id: 5,
      airline: 'Cathay Pacific',
      airlineCode: 'CX',
      departureTime: '23:55',
      arrivalTime: '07:30',
      duration: '7h 35m',
      price: 267,
      stops: '1 stop (HKG)',
      departureAirport: 'SIN',
      arrivalAirport: 'DPS',
      aircraft: 'Airbus A350',
      logo: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg',
    },
  ];

  // Filter flights based on selected filters
  const filteredFlights = flights.filter((flight) => {
    if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) return false;
    if (flight.price < priceRange[0] || flight.price > priceRange[1]) return false;
    if (stops.length > 0 && !stops.includes(flight.stops.includes('direct') ? 'direct' : 'connections')) return false;
    if (departureTime.length > 0) {
      const hour = parseInt(flight.departureTime.split(':')[0]);
      if (
        (departureTime.includes('morning') && (hour < 6 || hour >= 12)) &&
        (departureTime.includes('afternoon') && (hour < 12 || hour >= 18)) &&
        (departureTime.includes('evening') && (hour < 18 || hour >= 24))
      ) return false;
    }
    return true;
  });

  // Sort flights
  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
    if (sortBy === 'departure') return a.departureTime.localeCompare(b.departureTime);
    if (sortBy === 'arrival') return a.arrivalTime.localeCompare(b.arrivalTime);
    // Default recommended sorting (combination of price and duration)
    return a.price * 0.7 + parseInt(a.duration.split('h')[0]) * 100 * 0.3 - 
           (b.price * 0.7 + parseInt(b.duration.split('h')[0]) * 100 * 0.3);
  });

  const toggleAirline = (airline: string) => {
    if (selectedAirlines.includes(airline)) {
      setSelectedAirlines(selectedAirlines.filter(a => a !== airline));
    } else {
      setSelectedAirlines([...selectedAirlines, airline]);
    }
  };

  const toggleStop = (stop: string) => {
    if (stops.includes(stop)) {
      setStops(stops.filter(s => s !== stop));
    } else {
      setStops([...stops, stop]);
    }
  };

  const toggleDepartureTime = (time: string) => {
    if (departureTime.includes(time)) {
      setDepartureTime(departureTime.filter(t => t !== time));
    } else {
      setDepartureTime([...departureTime, time]);
    }
  };

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
    <div className="py-8 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">Flights from {fromLocation || 'Any location'} to {toLocation || 'Any location'}</h1>
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
              Apr 20, 2025
            </div>
            <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              1 Traveler
            </div>
            <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              Economy
            </div>
            <button className="text-primary-500 text-sm font-medium hover:text-primary-600 ml-auto">
              Modify Search
            </button>
          </div>
        </div>

        <div className="lg:flex gap-6">
          {/* Filters (Desktop) */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg">Filters</h2>
                <button className="text-sm text-primary-500 hover:text-primary-600">
                  Reset All
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>

              {/* Stops */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Stops</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={stops.includes('direct')}
                      onChange={() => toggleStop('direct')}
                      className="rounded text-primary-500 focus:ring-primary-500 h-4 w-4"
                    />
                    <span className="ml-2 text-sm">Direct</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={stops.includes('connections')}
                      onChange={() => toggleStop('connections')}
                      className="rounded text-primary-500 focus:ring-primary-500 h-4 w-4"
                    />
                    <span className="ml-2 text-sm">1+ Stops</span>
                  </label>
                </div>
              </div>

              {/* Airlines */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Airlines</h3>
                <div className="space-y-2">
                  {Array.from(new Set(flights.map(f => f.airline))).map((airline) => (
                    <label key={airline} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAirlines.includes(airline)}
                        onChange={() => toggleAirline(airline)}
                        className="rounded text-primary-500 focus:ring-primary-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm">{airline}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Departure Time */}
              <div>
                <h3 className="font-medium mb-3">Departure Time</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={departureTime.includes('morning')}
                      onChange={() => toggleDepartureTime('morning')}
                      className="rounded text-primary-500 focus:ring-primary-500 h-4 w-4"
                    />
                    <span className="ml-2 text-sm">Morning (6AM - 12PM)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={departureTime.includes('afternoon')}
                      onChange={() => toggleDepartureTime('afternoon')}
                      className="rounded text-primary-500 focus:ring-primary-500 h-4 w-4"
                    />
                    <span className="ml-2 text-sm">Afternoon (12PM - 6PM)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={departureTime.includes('evening')}
                      onChange={() => toggleDepartureTime('evening')}
                      className="rounded text-primary-500 focus:ring-primary-500 h-4 w-4"
                    />
                    <span className="ml-2 text-sm">Evening (After 6PM)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="w-full bg-white py-3 px-4 rounded-lg shadow-sm flex items-center justify-center"
            >
              <Filter className="w-5 h-5 mr-2" />
              <span>Filters</span>
            </button>
            
            {filterOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end">
                <div className="bg-white rounded-t-xl p-6 w-full max-h-[80vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold text-lg">Filters</h2>
                    <button onClick={() => setFilterOpen(false)} className="text-gray-500">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Mobile filters content - simplified version of desktop filters */}
                  {/* ... mobile filter content would go here ... */}
                  
                  <div className="mt-6 flex gap-3">
                    <button 
                      onClick={() => setFilterOpen(false)}
                      className="flex-1 py-3 border border-gray-300 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => setFilterOpen(false)}
                      className="flex-1 py-3 bg-primary-500 text-white rounded-lg"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Flight Results */}
          <div className="flex-1">
            {/* Sort Controls */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">{sortedFlights.length}</span> flights found
              </div>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-none bg-transparent font-medium text-gray-900 focus:ring-0"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price (Lowest first)</option>
                  <option value="price-high">Price (Highest first)</option>
                  <option value="duration">Duration (Shortest first)</option>
                  <option value="departure">Departure (Earliest first)</option>
                  <option value="arrival">Arrival (Earliest first)</option>
                </select>
              </div>
            </div>

            {/* Flight List */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              {sortedFlights.map((flight) => (
                <motion.div 
                  key={flight.id} 
                  variants={item}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center">
                      {/* Airline */}
                      <div className="flex items-center mb-4 md:mb-0 md:w-1/5">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <Plane className="w-6 h-6 text-primary-500" />
                        </div>
                        <div>
                          <div className="font-medium">{flight.airline}</div>
                          <div className="text-xs text-gray-500">{flight.airlineCode} {flight.id * 100 + 456}</div>
                        </div>
                      </div>
                      
                      {/* Flight details */}
                      <div className="flex items-center justify-between mb-4 md:mb-0 md:w-2/5">
                        <div className="text-center">
                          <div className="text-lg font-semibold">{flight.departureTime}</div>
                          <div className="text-xs text-gray-500">{flight.departureAirport}</div>
                        </div>
                        
                        <div className="flex flex-col items-center px-4">
                          <div className="text-xs text-gray-500 mb-1">{flight.duration}</div>
                          <div className="relative w-20 md:w-32">
                            <div className="border-t border-gray-300 w-full absolute top-1/2"></div>
                            <ArrowRight className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 transform -translate-y-1/2" />
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{flight.stops}</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-lg font-semibold">{flight.arrivalTime}</div>
                          <div className="text-xs text-gray-500">{flight.arrivalAirport}</div>
                        </div>
                      </div>
                      
                      {/* Amenities */}
                      <div className="flex items-center gap-3 mb-4 md:mb-0 md:w-1/5 md:justify-center">
                        <div className="flex items-center text-xs text-gray-500">
                          <Luggage className="w-4 h-4 mr-1" />
                          <span>Baggage</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>In-flight</span>
                        </div>
                      </div>
                      
                      {/* Price & CTA */}
                      <div className="md:w-1/5 md:text-right">
                        <div className="text-2xl font-bold text-accent-500 mb-2">${flight.price}</div>
                        <button className="w-full md:w-auto bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-lg transition-colors">
                          Select
                        </button>
                      </div>
                    </div>
                    
                    {/* Expandable details section could go here */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {sortedFlights.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <Plane className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No flights found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search criteria to see more results.
                </p>
                <button 
                  onClick={() => {
                    setSelectedAirlines([]);
                    setPriceRange([0, 2000]);
                    setStops(['direct']);
                    setDepartureTime([]);
                    setSortBy('recommended');
                  }}
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;