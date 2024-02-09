import { useDispatch } from "react-redux";
import { addnowplayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";

const useNowPlayingMovies=()=>{
    const dispatch= useDispatch();
    const getnowplayingMovies = async() => {
       const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
       const json=await data.json();
       dispatch(addnowplayingMovies(json.results));
    }
    useEffect(()=>{
       getnowplayingMovies();
    },[])
}
export default useNowPlayingMovies;