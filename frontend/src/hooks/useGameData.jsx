import { useState, useEffect } from 'react';
import axios from 'axios';

const useGameData = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games');
        setGames(response.data);
      } catch (error) {
        setError('Failed to fetch games');
      }
    };

    fetchGames();
  }, []);

  return { games, error };
};

export default useGameData;