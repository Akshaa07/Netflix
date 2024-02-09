import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";

const usePopularMovies=()=>{
    const dispatch= useDispatch();
    const getPopularMovies = async() => {
       const data= await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
       const json=await data.json();
       dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
       getPopularMovies();
    },[])
}
export default usePopularMovies;