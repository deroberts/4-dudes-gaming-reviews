import React from 'react';
import 'isomorphic-fetch';
const RAWG_API_KEY = '3d841b012aa74a5b98dae1d014fff4bc';

// Function to fetch popular games from RAWG API for the current year
export const fetchPopularGames = async () => {
  const currentYear = new Date().getFullYear();
  const url = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-rating&page_size=4`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

// Function to search games by name 
export const searchGameByName = async (name) => {
    const url = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
  

