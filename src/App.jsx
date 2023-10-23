import React, { useState } from "react";
import Nav from "./components/Nav";
import Weathercard from "./components/Weathercard";
import Ubi from "./components/Ubi";

function App() {
  const apiKey = "9cb196b167af58224d44363196cdd805";
  const [weatherData, setWeatherData] = useState(null);
  const [searchMethod, setSearchMethod] = useState(null);
  

  const clearWeatherData = () => {
    setWeatherData(null);
    setSearchMethod(null);
  };

  const fetchWeatherData = (city) => {
    clearWeatherData();

    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setSearchMethod("city");
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Nav
        onSearch={fetchWeatherData}
        onLocationSearch={() => {
          clearWeatherData();
          setSearchMethod("ubi");
        }}
      />

      {weatherData && (
        <div>
          <h2>
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h2>
          {searchMethod === "city" ? (
            <Weathercard
              temperature={weatherData.main.temp}
              city={weatherData.name}
              weather={weatherData.weather[0].description}
              wind={weatherData.wind.speed}
              humidity={weatherData.main.humidity}
              pressure={weatherData.main.pressure}
              visibility={weatherData.visibility}
            />
          ) : searchMethod === "ubi" ? (
            <Ubi setSearchMethod={setSearchMethod} />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;