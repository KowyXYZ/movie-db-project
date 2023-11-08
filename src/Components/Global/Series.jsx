import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchData, options } from '../../Utils/fetchData'
import SearchCard from '../Search/SearchCard'
import { Link } from 'react-router-dom'

function Series() {

    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
      const getMovies = async() => {
        const movies = await fetchData('https://api.themoviedb.org/3/discover/tv?language=en-US&page=1', options)
        setAllMovies(movies.results)
      }
      getMovies()
    }, [])
    

  return (
    <div className='w-full bg-[#190401] py-24'>
         <div className='mx-24 mb-4'>
            <p className='font-black text-[32px] flex flex-col'>DISCOVER SERIES</p>
        </div>

        <div className=' flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-wrap gap-12  justify-center items-center'>
                {allMovies?.map((movie, index) => {
                  console.log(movie)
                    return(
                      <Link  to={`/discover/series/${movie.id}`} className='relative  flex justify-center items-center flex-col rounded-2xl'>
      
                      <img className=' h-[450px]  object-contain rounded-2xl' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="path" />
                      <img className='h-[450px]   object-cover rounded-2xl  opacity-0 absolute top-0 bottom-0 right-0 left-0 hover:opacity-100 transition-all delay-75 ease-in-out' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="poster" />
                      <p className='px-2 mt-2 text-[14px] w-[300px] text-center font-bold'>{movie.title}</p>
                
                    </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Series
