import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Clock, PercentCircle } from 'lucide-react';

const TravelDeals: React.FC = () => {
  const deals = [
    {
      id: 1,
      title: 'Early Bird Flight Deals',
      description: 'Book your flights 60 days in advance and save up to 25%',
      discount: '25% Off',
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-700',
      link: '/flights',
    },
    {
      id: 2,
      title: 'Weekend Getaway Packages',
      description: 'Special hotel + flight combos for quick weekend breaks',
      discount: 'From $299',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-700',
      link: '/holidays',
    },
    {
      id: 3,
      title: 'Luxury Hotel Discounts',
      description: 'Exclusive 30% off on 5-star hotels worldwide',
      discount: '30% Off',
      icon: <PercentCircle className="w-6 h-6" />,
      color: 'bg-amber-100 text-amber-700',
      link: '/hotels',
    },
    {
      id: 4,
      title: 'Trending Destinations Sale',
      description: 'Special rates for the most popular destinations this season',
      discount: 'Up to 40% Off',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-emerald-100 text-emerald-700',
      link: '/explore',
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Exclusive Travel Deals</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take advantage of our limited-time offers and save big on your next adventure.
          Hurry, these deals won't last long!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <div 
            key={deal.id}
            className="card hover:translate-y-[-5px] transition-transform"
          >
            <div className={`inline-flex p-3 rounded-full ${deal.color} mb-4`}>
              {deal.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
            <p className="text-gray-600 mb-4">{deal.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-accent-500">{deal.discount}</span>
              <Link 
                to={deal.link} 
                className="text-primary-500 font-medium hover:text-primary-600"
              >
                View Deal →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-xl overflow-hidden shadow-lg">
        <div className="md:flex items-center">
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Become a Member & Get Extra 10% Off
            </h3>
            <p className="text-white/80 mb-6">
              Join our loyalty program to unlock exclusive discounts, earn reward points,
              and enjoy premium benefits on every booking.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
              Sign Up Now - It's Free
            </button>
          </div>
          <div className="md:w-1/2 p-6 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/7267588/pexels-photo-7267588.jpeg" 
              alt="Loyalty Program" 
              className="h-60 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDeals;