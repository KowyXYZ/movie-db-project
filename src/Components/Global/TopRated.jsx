import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchData, options } from '../../Utils/fetchData'
import SearchCard from '../Search/SearchCard'
import MostPopularCard from '../MostPopularCard'

function TopRated() {

    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
      const getMovies = async() => {
        const movies = await fetchData('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
        console.log(movies.results)
        setAllMovies(movies.results)
      }
      getMovies()
    }, [])
    

  return (
    <div className='w-full bg-[#190401] py-24'>
         <div className='mx-24 mb-4'>
            <p className='font-black text-[32px] flex flex-col'>TOP RATED MOVIES</p>
        </div>

        <div className=' flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-wrap gap-12  justify-center items-center'>
                {allMovies?.map((movie, index) => {
                    return(
                    <MostPopularCard movie={movie} key={index}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default TopRated
