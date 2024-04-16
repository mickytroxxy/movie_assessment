import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from './endpoints';
import { Movie, MovieDB } from '../constants/Types';
import { mockedMovies } from './dummy';


export const fetchRandomMovies = async (): Promise<Movie[]> => {
  try {
    await axios.get(`https://search.imdbot.workers.dev/?q=Rambo`);
    return mockedMovies; // mocked this because there is no endpoint for getting random movies
  } catch (error) {
    console.error('Error fetching random movies:', error);
    return [];
  }
};
export const searchForMovies = async (key_word:string): Promise<MovieDB[]> => {
    try {
      const response = await axios.get(`https://search.imdbot.workers.dev/?q=${key_word}`);
      return response.data?.description || [];
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
};

export const fetchMovieDetails = async (movieId:string): Promise<MovieDB[]> => {
    try {
      const response = await axios.get(`https://search.imdbot.workers.dev/?tt=${movieId}`);
      return response.data || [];
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
};