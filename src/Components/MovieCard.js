import React from 'react'
import { IMG_CDN } from '../Utils/Constant'

const MovieCard =({posterPath}) => {
  return (
    <div className='w-48 px-1 '>
      <img alt="moviecard" src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard;