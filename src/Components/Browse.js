import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";

const Browse=()=>{
  useNowPlayingMovies();
   return(
    <div>
     <Header/>
     <MainContainer/>
     
    </div>
   )
}
export default Browse;