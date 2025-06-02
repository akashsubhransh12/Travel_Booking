import React from 'react';
import { Cloud, Umbrella, Sun, Wind } from 'lucide-react';

const TravelTips: React.FC = () => {
  const weatherTips = [
    {
      id: 1,
      destination: 'Bali, Indonesia',
      title: 'Best time to visit Bali',
      description: 'Avoid the rainy season from November to March for the best experience.',
      weatherHistory: [
        { day: 'Mon', temp: 30, icon: <Sun className="w-6 h-6 text-yellow-500" /> },
        { day: 'Tue', temp: 29, icon: <Cloud className="w-6 h-6 text-gray-500" /> },
        { day: 'Wed', temp: 31, icon: <Sun className="w-6 h-6 text-yellow-500" /> },
        { day: 'Thu', temp: 30, icon: <Sun className="w-6 h-6 text-yellow-500" /> },
        { day: 'Fri', temp: 28, icon: <Umbrella className="w-6 h-6 text-blue-500" /> },
        { day: 'Sat', temp: 29, icon: <Cloud className="w-6 h-6 text-gray-500" /> },
        { day: 'Sun', temp: 31, icon: <Sun className="w-6 h-6 text-yellow-500" /> },
      ],
      image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg',
    },
    {
      id: 2,
      destination: 'Paris, France',
      title: 'Paris weather trends',
      description: 'Spring (April to June) offers pleasant weather for exploring the city.',
      weatherHistory: [
        { day: 'Mon', temp: 18, icon: <Sun className="w-6 h-6 text-yellow-500" /> },
        { day: 'Tue', temp: 17, icon: <Cloud className="w-6 h-6 text-gray-500" /> },
        { day: 'Wed', temp: 15, icon: <Umbrella className="w-6 h-6 text-blue-500" /> },
        { day: 'Thu', temp: 16, icon: <Cloud className="w-6 h-6 text-gray-500" /> },
        { day: 'Fri', temp: 19, icon: <Sun className="w-6 h-6 text-yellow-500" /> },
        { day: 'Sat', temp: 20, icon: <Sun className="w-6 h-6 text-yellow-500" /> },
        { day: 'Sun', temp: 18, icon: <Cloud className="w-6 h-6 text-gray-500" /> },
      ],
      image: 'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg',
    },
  ];

  const generalTips = [
    {
      id: 1,
      title: 'Pack Smart for Any Weather',
      description: 'Always check the 7-day weather forecast before packing for your trip.',
      icon: <Umbrella className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Best Booking Times',
      description: 'Book flights 2-3 months in advance for the best rates.',
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Seasonal Travel Tips',
      description: 'Traveling in shoulder seasons often means better deals and fewer crowds.',
      icon: <Sun className="w-6 h-6" />,
    },
    {
      id: 4,
      title: 'Local Weather Alerts',
      description: 'Set up weather alerts for your destination before and during your trip.',
      icon: <Wind className="w-6 h-6" />,
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Travel Tips & Weather Insights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Make informed travel decisions with our destination weather history and expert travel tips.
        </p>
      </div>

      {/* Weather History Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {weatherTips.map((tip) => (
          <div key={tip.id} className="card overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-6">
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.description}</p>
                
                {/* 7-day weather display */}
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Last 7 Days Weather</h4>
                  <div className="flex space-x-3 overflow-x-auto py-2">
                    {tip.weatherHistory.map((day, index) => (
                      <div key={index} className="flex flex-col items-center min-w-[40px]">
                        <span className="text-xs text-gray-500">{day.day}</span>
                        {day.icon}
                        <span className="text-sm font-medium">{day.temp}°C</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img
                  src={tip.image}
                  alt={tip.destination}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* General Travel Tips */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Expert Travel Tips</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {generalTips.map((tip) => (
            <div key={tip.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary-500 mb-4">{tip.icon}</div>
              <h4 className="text-lg font-medium mb-2">{tip.title}</h4>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTips;