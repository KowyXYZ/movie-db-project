import React, { useEffect, useState } from 'react'
import { fetchData, options } from '../../Utils/fetchData'
import MostPopularCard from '../MostPopularCard'
import { Link } from 'react-router-dom'

function Trending() {

    const [mostTrending, setMostTrending] = useState([])
 
    const slicedTrending = mostTrending.slice(0, 8)
    
    useEffect(() => {
        const mostPopular = async() => {
          let data = await fetchData('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
          setMostTrending(data.results)
        }
        mostPopular()
  
      }, [])

  return (
    <div className='container mx-auto  flex-col  py-12 '>
      <div className='flex justify-between items-center mx-24 mb-4'>
          <p className='font-black text-[32px]'>TRENDING</p>
          <Link to='/discover/trending' className='underline'>Check all</Link>
      </div>
      <div className='flex flex-col items-center justify-center gap-8'>
        
        <div className='flex flex-wrap gap-12 justify-center items-center'>
            {slicedTrending?.map((movie, index) => {
              
                return(
                    <Link to={`/discover/${movie.id}`} key={index} className=' relative flex justify-center items-center flex-col rounded-2xl'>
                              <img className=' h-[450px]  object-contain rounded-2xl' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="path" />
                              <img className='h-[450px]  object-cover rounded-2xl  opacity-0 absolute top-0 bottom-0 right-0 left-0 hover:opacity-100 transition-all delay-75 ease-in-out' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="poster"/>
                              <p className='mt-2 px-2 text-[14px] w-[300px] text-center font-bold '>{movie.name} {movie.original_title}</p>
                    </Link>
                )
            })}
        </div>
        
      </div>
    </div>
  )
}

export default Trending
