import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return ( 
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl font-bold'>{original_title}</h1>
      <p className='py-6 text-lg w-2/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black px-6 w-24 font-bold rounded-lg py-2 hover:bg-opacity-80'>Play</button> 
        <button className='mx-2 bg-white py-2 font-bold text-black px-6 w-28 bg-opacity-50 rounded-lg hover:bg-opacity-80'>MoreInfo </button>
      </div>
      
    </div>
  )
}

export default VideoTitle
