import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        nowPopularMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer:(state, action) => {
            state.movieTrailer = action.payload;
        },
        addPopularMovies:(state, action) => {
            state.nowPopularMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;