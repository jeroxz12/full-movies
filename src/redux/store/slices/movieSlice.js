import { createSlice } from '@reduxjs/toolkit';
export const movieSlice = createSlice({
   name: 'movies',
   initialState: {
       data: [],
       dataFiltered: [],
       movieToDetail: {},
       aboutInfo: [{},{}],
       homeTitle: "Welcome to the best Movie Database Application in the World!"
   },
    reducers: {
        setMovies: (state,action) => {
            state.data = action.payload
        },
        filterMovieById: (state, action) => {
            state.movieToDetail = state.data.find(movie => movie.id === action.payload.id)
        }
        
    }
});
export const { setMovies, filterMovieById} = movieSlice.actions;