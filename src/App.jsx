import React, { useState } from 'react';
import Cards from './components/Cards';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '9cb196b167af58224d44363196cdd805';

  const fetchWeatherData = () => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </div>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <Cards
            temperature={weatherData.main.temp}
            city={weatherData.name}
            weather={weatherData.weather[0].description}
            wind={weatherData.wind.speed}
            humidity={weatherData.main.humidity}
            pressure={weatherData.main.pressure}
            visibility={weatherData.visibility}
          />
        </div>
      )}
    </div>
  );
}

export default App;
