import React, { useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movie}) => {
  return (
    <div className='px-6'>
        <h1 className='text-2xl py-2'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {movie && movie.map((movie)=>(
                  // console.log("->>",movie)
                  <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            ))}   
            </div>
        </div>
    </div>
  )
}

export default MovieList;
