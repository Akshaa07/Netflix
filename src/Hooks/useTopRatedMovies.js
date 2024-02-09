import { useDispatch } from "react-redux";
import { addTopMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";

const useTopRatedMovies=()=>{
    const dispatch= useDispatch();
    const getTopRatedMovies = async() => {
       const data= await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
       const json=await data.json();
       dispatch(addTopMovies(json.results));
    }
    useEffect(()=>{
      getTopRatedMovies();
    },[])
}
export default useTopRatedMovies;