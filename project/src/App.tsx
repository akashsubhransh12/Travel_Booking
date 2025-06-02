import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import DestinationPage from './pages/DestinationPage';
import FlightsPage from './pages/FlightsPage';
import HotelsPage from './pages/HotelsPage';
import TrainsPage from './pages/TrainsPage';
import BusesPage from './pages/BusesPage';
import HolidaysPage from './pages/HolidaysPage';
import ProfilePage from './pages/ProfilePage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="destination/:id" element={<DestinationPage />} />
        <Route path="flights" element={<FlightsPage />} />
        <Route path="hotels" element={<HotelsPage />} />
        <Route path="trains" element={<TrainsPage />} />
        <Route path="buses" element={<BusesPage />} />
        <Route path="holidays" element={<HolidaysPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="search" element={<SearchResultsPage />} />
      </Route>
    </Routes>
  );
}

export default App;