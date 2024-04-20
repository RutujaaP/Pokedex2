import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';


export const getPokemonList = async (limit = 10000) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    return [];
  }
};
