import React from 'react'

function MostPopularCard({movie}) {
  return (
    <div className='relative flex justify-center items-center flex-col rounded-2xl'>
      
      <img className=' h-[450px]  object-contain rounded-2xl' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="path" />
      <img className='h-[450px]  object-cover rounded-2xl  opacity-0 absolute top-0 bottom-0 right-0 left-0 hover:opacity-100 transition-all delay-75 ease-in-out' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="poster" />
      <p className='px-2 mt-2 text-[14px] w-[300px] text-center font-bold'>{movie.name}</p>
    
    </div>
  )
}

export default MostPopularCard
