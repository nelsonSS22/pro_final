import React, { useState } from 'react';
import Ubi from './Ubi'; // La ruta es relativa al directorio actual


function Nav(props) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [city, setCity] = useState('');

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const searchWeather = () => {
    props.onSearch(city);
  };

  return (
    <div className="nav">
      <button onClick={toggleInput}>Search for place</button>
      {isInputVisible && (
        <div>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleCityChange}
          />
          <button onClick={searchWeather}>Get Weather</button>
          <Ubi></Ubi>
        </div>
      )}
    </div>
  );
}

export default Nav;

