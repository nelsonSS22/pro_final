import React, { useState } from 'react';

function Nav({ onSearchByLocation, onSearchByCity }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [city, setCity] = useState('');

  const handleSearchByLocation = () => {
    // Implementar la lógica para buscar por ubicación aquí
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Obtener latitud y longitud desde position.coords.latitude y position.coords.longitude
        // Luego, puedes utilizar esta información para buscar datos meteorológicos
      });
    }
  };

  const handleSearchByCity = () => {
    // Implementar la lógica para buscar por nombre de ciudad aquí
    onSearchByCity(city);
  };

  return (
    <div className="nav">
      <button onClick={() => setSearchOpen(!searchOpen)}>Search for place</button>
      {searchOpen && (
        <div>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearchByCity}>Get Weather</button>
          <button onClick={handleSearchByLocation}>Use My Location</button>
        </div>
      )}
    </div>
  );
}

export default Nav;
