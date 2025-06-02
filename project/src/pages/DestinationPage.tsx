import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Star, Thermometer, CloudRain, Wind, CloudSun, Heart, Share2 } from 'lucide-react';

interface Weather {
  day: string;
  date: string;
  temp: number;
  condition: string;
  icon: React.ReactNode;
}

interface Destination {
  id: number;
  name: string;
  images: string[];
  description: string;
  longDescription: string;
  rating: number;
  location: string;
  weatherHistory: Weather[];
  attractions: Array<{
    name: string;
    description: string;
    image: string;
  }>;
  hotels: Array<{
    name: string;
    rating: number;
    price: string;
    image: string;
  }>;
}

const DestinationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mock data - in a real app this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockDestination: Destination = {
        id: Number(id),
        name: 'Bali, Indonesia',
        images: [
          'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
          'https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg',
          'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg',
          'https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg',
        ],
        description: 'Tropical paradise with beautiful beaches and rich culture',
        longDescription: `Bali is a living postcard, an Indonesian paradise that feels like a fantasy. 
        Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII war ship. 
        On shore, the lush jungle shelters stone temples and mischievous monkeys. The "artistic capital" of Ubud is the perfect place to see a cultural dance performance, 
        take a batik or silver-smithing workshop, or invigorate your mind and body in a yoga class.`,
        rating: 4.8,
        location: 'Indonesia',
        weatherHistory: [
          {
            day: 'Monday',
            date: '12 Apr',
            temp: 30,
            condition: 'Sunny',
            icon: <CloudSun className="w-6 h-6 text-yellow-500" />,
          },
          {
            day: 'Tuesday',
            date: '13 Apr',
            temp: 29,
            condition: 'Cloudy',
            icon: <CloudRain className="w-6 h-6 text-gray-500" />,
          },
          {
            day: 'Wednesday',
            date: '14 Apr',
            temp: 31,
            condition: 'Sunny',
            icon: <CloudSun className="w-6 h-6 text-yellow-500" />,
          },
          {
            day: 'Thursday',
            date: '15 Apr',
            temp: 30,
            condition: 'Sunny',
            icon: <CloudSun className="w-6 h-6 text-yellow-500" />,
          },
          {
            day: 'Friday',
            date: '16 Apr',
            temp: 28,
            condition: 'Rainy',
            icon: <CloudRain className="w-6 h-6 text-blue-500" />,
          },
          {
            day: 'Saturday',
            date: '17 Apr',
            temp: 29,
            condition: 'Cloudy',
            icon: <Wind className="w-6 h-6 text-gray-500" />,
          },
          {
            day: 'Sunday',
            date: '18 Apr',
            temp: 31,
            condition: 'Sunny',
            icon: <CloudSun className="w-6 h-6 text-yellow-500" />,
          },
        ],
        attractions: [
          {
            name: 'Ubud Monkey Forest',
            description: 'Natural sanctuary with over 700 monkeys',
            image: 'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg',
          },
          {
            name: 'Tegallalang Rice Terraces',
            description: 'Stunning stepped rice paddies using traditional irrigation',
            image: 'https://images.pexels.com/photos/6752060/pexels-photo-6752060.jpeg',
          },
          {
            name: 'Tanah Lot Temple',
            description: 'Ancient Hindu temple perched on a rock formation in the sea',
            image: 'https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg',
          },
        ],
        hotels: [
          {
            name: 'Hanging Gardens of Bali',
            rating: 4.9,
            price: '$450/night',
            image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
          },
          {
            name: 'Four Seasons Resort Bali',
            rating: 4.8,
            price: '$380/night',
            image: 'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg',
          },
          {
            name: 'W Bali - Seminyak',
            rating: 4.7,
            price: '$320/night',
            image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
          },
        ],
      };
      setDestination(mockDestination);
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
        <p className="text-gray-600">The destination you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Image Gallery */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          {destination.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`${destination.name} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white z-10">
          <div className="container-custom">
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{destination.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.name}</h1>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-md">
                <Star className="w-4 h-4 mr-1" fill="currentColor" />
                <span className="font-medium">{destination.rating}</span>
              </div>
              <p className="text-white/80">{destination.description}</p>
            </div>

            <div className="flex space-x-2">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors">
                Plan Your Trip
              </button>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-lg transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-lg transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Image thumbnails and navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {destination.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeImageIndex === index ? 'bg-white' : 'bg-white/40'
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'weather', 'attractions', 'hotels'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">About {destination.name}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {destination.longDescription}
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The best time to visit Bali is during the dry season from April to October,
                  with May, June, and September being the best months for a combination of good weather 
                  and fewer crowds. The rainy season runs from November to March.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Travel Tips</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Always carry sunscreen and insect repellent</li>
                  <li>Respect local customs and dress modestly when visiting temples</li>
                  <li>The local currency is Indonesian Rupiah (IDR)</li>
                  <li>Try local dishes like Nasi Goreng and Babi Guling</li>
                  <li>Renting a scooter is a popular way to get around</li>
                </ul>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                    When to Visit
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Dry Season</span>
                        <span className="text-gray-600">Apr - Oct</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Wet Season</span>
                        <span className="text-gray-600">Nov - Mar</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Peak Season</span>
                        <span className="text-gray-600">Jul - Aug</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Thermometer className="w-5 h-5 mr-2 text-primary-500" />
                    Weather Overview
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block text-sm text-gray-600">Average Temperature</span>
                        <span className="text-2xl font-semibold">27-32°C</span>
                      </div>
                      <CloudSun className="w-10 h-10 text-yellow-500" />
                    </div>
                    <div className="pt-2">
                      <div className="text-sm font-medium mb-1">Last 7 Days</div>
                      <div className="flex justify-between">
                        {destination.weatherHistory.map((day, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <span className="text-xs text-gray-500">{day.date}</span>
                            {day.icon}
                            <span className="text-sm font-medium">{day.temp}°C</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'weather' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">7-Day Weather History</h2>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="grid grid-cols-1 md:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  {destination.weatherHistory.map((day, index) => (
                    <div key={index} className="p-6 text-center">
                      <div className="font-medium">{day.day}</div>
                      <div className="text-sm text-gray-500 mb-3">{day.date}</div>
                      <div className="flex justify-center mb-2">{day.icon}</div>
                      <div className="text-2xl font-semibold mb-1">{day.temp}°C</div>
                      <div className="text-sm text-gray-600">{day.condition}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Weather Insights</h3>
                <p className="text-gray-700 mb-4">
                  Based on the weather history for the last 7 days in Bali, you can expect mostly sunny 
                  conditions with occasional cloud cover and rain. The average temperature has been consistently 
                  warm, ranging from 28°C to 31°C.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Thermometer className="w-5 h-5 mr-2 text-orange-500" />
                      Temperature
                    </h4>
                    <p className="text-sm text-gray-600">
                      Average daily high of 30°C, with minimal temperature fluctuations throughout the week.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2 flex items-center">
                      <CloudRain className="w-5 h-5 mr-2 text-blue-500" />
                      Rainfall
                    </h4>
                    <p className="text-sm text-gray-600">
                      Light rainfall occurred on one day, with the rest of the week being mostly dry.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Wind className="w-5 h-5 mr-2 text-gray-500" />
                      Wind
                    </h4>
                    <p className="text-sm text-gray-600">
                      Light to moderate winds throughout the week, perfect for outdoor activities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Weather-Based Recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-medium text-lg mb-3">Suggested Activities</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Beach visits and water sports (most days)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Outdoor sightseeing and temple visits</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Morning hikes and rice terrace tours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">!</span>
                        <span>Plan indoor activities for Friday (rainy day)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-medium text-lg mb-3">What to Pack</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span>Light, breathable clothing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span>Sunscreen and sun hat</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span>Light rain jacket or umbrella</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span>Swimwear and beach essentials</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attractions' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Top Attractions in {destination.name}</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {destination.attractions.map((attraction, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-2/5">
                      <img 
                        src={attraction.image} 
                        alt={attraction.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                      <p className="text-gray-600 mb-4">{attraction.description}</p>
                      <div className="mt-auto pt-4">
                        <button className="text-primary-500 font-medium hover:text-primary-600">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Explore More</h3>
                <p className="text-gray-700 mb-4">
                  Discover more attractions and activities in Bali. From pristine beaches to ancient temples, 
                  there's something for everyone.
                </p>
                <button className="btn btn-primary">
                  View All Attractions
                </button>
              </div>
            </div>
          )}

          {activeTab === 'hotels' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Recommended Hotels</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {destination.hotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name} 
                        className="h-full w-full object-cover transition-transform hover:scale-110 duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{hotel.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm">{hotel.rating}</span>
                        </div>
                      </div>
                      <p className="text-accent-500 font-medium mb-3">{hotel.price}</p>
                      <button className="w-full py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary-500 text-white rounded-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-4">Find Your Perfect Stay</h3>
                    <p className="mb-6 text-white/90">
                      Compare prices from 200+ booking sites to find the best deal on your Bali accommodation.
                      From luxury villas to budget-friendly hostels, we've got you covered.
                    </p>
                    <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-colors">
                      Search All Hotels
                    </button>
                  </div>
                  <div className="md:w-1/3 bg-primary-600">
                    <div className="h-full flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">25%</div>
                        <div className="text-white/90 text-sm">Average savings when you compare prices</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;