import React from 'react';
import 'isomorphic-fetch';
const RAWG_API_KEY = '3d841b012aa74a5b98dae1d014fff4bc';

// Function to fetch popular games from RAWG API
export const fetchPopularGames = async () => {
  const url = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&ordering=-rating&page_size=10`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}



