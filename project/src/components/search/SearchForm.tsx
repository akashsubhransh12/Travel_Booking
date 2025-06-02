import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Hotel, Train, Bus, Package, Map, Calendar, Users } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flights');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departDate, setDepartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [travellers, setTravellers] = useState(1);
  const [travelClass, setTravelClass] = useState('Economy');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${activeTab}?from=${fromLocation}&to=${toLocation}`);
  };

  const tabs = [
    { id: 'flights', label: 'Flights', icon: <Plane className="w-5 h-5" /> },
    { id: 'hotels', label: 'Hotels', icon: <Hotel className="w-5 h-5" /> },
    { id: 'trains', label: 'Trains', icon: <Train className="w-5 h-5" /> },
    { id: 'buses', label: 'Buses', icon: <Bus className="w-5 h-5" /> },
    { id: 'holidays', label: 'Holidays', icon: <Package className="w-5 h-5" /> },
    { id: 'explore', label: 'Explore', icon: <Map className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Tabs */}
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 min-w-max flex items-center justify-center py-4 px-4 font-medium text-sm focus:outline-none ${
              activeTab === tab.id
                ? 'text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <input
              type="text"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              placeholder="City or Airport"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              placeholder="City or Airport"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 inline mr-1" />
              Departure
            </label>
            <DatePicker
              selected={departDate}
              onChange={(date) => setDepartDate(date)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholderText="Select date"
              minDate={new Date()}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 inline mr-1" />
              Return
            </label>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholderText="Select date"
              minDate={departDate || new Date()}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Users className="w-4 h-4 inline mr-1" />
              Travellers
            </label>
            <select
              value={travellers}
              onChange={(e) => setTravellers(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? 'Traveller' : 'Travellers'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
            <select
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First">First Class</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;