import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WeatherApp from './components/WeatherApp';
import Footer from './components/Footer';

function App() {
  const [city, setCity] = useState('Kolkata');

  const handleCitySearch = (searchedCity) => {
    if (searchedCity.trim() !== '') {
      setCity(searchedCity.trim());
    }
  };

  return (
    <div className="weather-app">
      <Navbar onSearch={handleCitySearch} />
      <main style={{ paddingTop:"80px" ,flexGrow: 1 }}>
        <WeatherApp city={city} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
