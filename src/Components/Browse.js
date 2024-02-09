import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";

const Browse=()=>{
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
   return(
    <div>
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>
    </div>
   )
}
export default Browse;