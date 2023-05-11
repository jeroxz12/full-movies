import { createSlice } from '@reduxjs/toolkit';
export const movieSlice = createSlice({
   name: 'movies',
   initialState: {
       data: [],
       dataFiltered: [],
       movieToDetail: {title: 'Titulo', overview: 'Prueba'},
       aboutInfo: [{},{}],
       homeTitle: "Welcome to the best Movie Database Application in the World!"
   },
    reducers: {
        setMovies: (state,action) => {
            state.data = action.payload
        },
        filterMovieById: (state, action) => {

            state.movieToDetail = state.data.find(movie => { return movie.id == action.payload})
        }
        
    }
});
export const { setMovies, filterMovieById} = movieSlice.actions;