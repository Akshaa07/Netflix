import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movie =useSelector((store) => store.movie);

  console.log("bc",movie)
  return (
    <div className='bg-black text-white '>
      <div className='-mt-44 relative z-20 '>
      <MovieList title={"Now Playing"} movie={movie.playingmovies}/>
      <MovieList title={"Popular"} movie={movie.popularmovies}/>
      <MovieList title={"Top Rated"} movie={movie.topmovies}/>
      <MovieList title={"Upcoming Movies"} movie={movie.upcomingmovies}/>
      </div>
     
    </div>
  )
}

export default SecondaryContainer;