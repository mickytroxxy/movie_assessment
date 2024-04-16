import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../constants/Types";

const initialState: { movies: Movie[]; recentlyViewed:any,selectedMovie:Movie | null} = {
  movies: [],
  recentlyViewed: [],
  selectedMovie:null
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<any>) => {
      state.movies = action.payload;
    },
    setRecentlyViewed: (state, action: PayloadAction<any>) => {
      state.recentlyViewed = action.payload;
    },
    setSelectedMovie: (state, action: PayloadAction<Movie>) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setMovies, setRecentlyViewed, setSelectedMovie  } = moviesSlice.actions;
export default moviesSlice.reducer;
