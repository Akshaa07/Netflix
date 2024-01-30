import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

  const movie= useSelector((store) => store.movie?.playingmovies)
  if (!movie) return; 

  const mainMovie = movie[0];
  console.log(mainMovie);
  const {original_title,overview,id} = mainMovie;

  

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
