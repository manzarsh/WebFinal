import React, { useState } from 'react';

export default function WeatherForecast() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '6f6c44d1811556ab52b9feb820bb17e3'; // Replace with your OpenWeather API key

  const fetchWeather = async () => {
    setError('');
    setWeatherData(null);

    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        const errorData = await response.json(); // Get error details from the response
        throw new Error(errorData.message || 'City not found');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
    },
    searchBar: {
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      width: '200px',
      marginRight: '10px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#08C2FF',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    weatherDetails: {
      marginTop: '20px',
    },
    error: {
      color: 'red',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: '#08C2FF' }}>Weather Forecast</h1>
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={fetchWeather}
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Get Weather
        </button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      {weatherData && (
        <div style={styles.weatherDetails}>
          <h2>{weatherData.name}</h2>
          <p>
            <strong>Temperature:</strong> {weatherData.main.temp}°C
          </p>
          <p>
            <strong>Condition:</strong> {weatherData.weather[0].description}
          </p>
          <p>
            <strong>Humidity:</strong> {weatherData.main.humidity}%
          </p>
          <p>
            <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
}