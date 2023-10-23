import React from 'react';

function Weathercard({ city, weather, temperature, wind, humidity, pressure, visibility }) {
  return (
    <div className="card">
      <p>Temperature: {temperature} °C</p>
      <p>Weather: {weather}</p>
      <h2>{city}</h2>
      <h3>Wind Status</h3>
      <p>{wind} m/s</p>
      <h3>Humidity</h3>
      <p>{humidity}%</p>
      <h3>Pressure</h3>
      <p>{pressure} mb</p>
      <h3>Visibility</h3>
      <p>{visibility} meters</p>
    </div>
  );
}

export default Weathercard;
