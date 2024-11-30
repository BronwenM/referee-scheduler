import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LocationPage.scss'; // Import your custom styles

const LocationPage = () => {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  // Fetch games data from the backend
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games');
        const games = response.data;
        const gameLocations = games.map(game => game.location);
        console.log('Game Locations:', gameLocations);
        setLocations(gameLocations);
      } catch (error) {
        setError('Failed to fetch games');
      }
    };

    fetchGames();
  }, []);

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="location-page">
      <h1>Game Locations</h1>
      {locations.length === 0 ? (
        <p>No locations available</p>
      ) : (
        <ul className="location-list">
          {locations.map((location, index) => (
            <li key={index} className="location-item">
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationPage;