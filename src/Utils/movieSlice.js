import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        playingmovies:null,
        trailerVideo:null, 
        
    },
    reducers:{
        addnowplayingMovies:(state,action)=>{
            state.playingmovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularmovies = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo=action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.upcomingmovies=action.payload;
        },
        addTopMovies:(state,action)=>{
            state.topmovies = action.payload;
        },
    }
})

export const {addnowplayingMovies ,addTrailerVideo,addPopularMovies, addTopMovies,addUpcomingMovies} =movieSlice.actions;
export default movieSlice.reducer;
