import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Weather.css';

const WeatherApp = ({ city }) => {
  const apiKey = 'e2d644c59d6a8577ce03f717bd9ab1bd';

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setWeatherData(null);
        setError('City not found or API error.');
      }
    };

    fetchWeather();
  }, [city]);

  const convertTemp = (tempCelsius) => {
    return isFahrenheit ? (tempCelsius * 9) / 5 + 32 : tempCelsius;
  };

  const toggleUnit = () => {
    setIsFahrenheit((prev) => !prev);
  };

  return (
    <div className="weather-container">
      <h2>🌤 Weather Info</h2>

      {error && <p className="error">{error}</p>}

      {weatherData ? (
        <div className="weather-card">
          <h3>{weatherData.name}</h3>
          <p>
            🌡️ Temperature: {Math.round(convertTemp(weatherData.main.temp))}°{isFahrenheit ? 'F' : 'C'}
          </p>
          <p>🌥️ Weather: {weatherData.weather[0].description}</p>
          <p>💧 Humidity: {weatherData.main.humidity}%</p>
          <p>💨 Wind Speed: {weatherData.wind.speed} m/s</p>

          <button onClick={toggleUnit} className="toggle-btn">
            Switch to {isFahrenheit ? 'Celsius' : 'Fahrenheit'}
          </button>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
