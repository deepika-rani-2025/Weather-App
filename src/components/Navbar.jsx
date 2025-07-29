import React, { useState } from 'react';
import '../Styles/Navbar.css';

function Navbar({ onSearch }) {
  const [searchCity, setSearchCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchCity);
    setSearchCity('');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">🌤️ WeatherApp</div>

      <form className="navbar-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city..."
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;