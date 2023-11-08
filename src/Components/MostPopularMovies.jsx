import React, { useEffect, useState } from 'react'
import { fetchData, options } from '../Utils/fetchData'
import MostPopularCard from './MostPopularCard'
import { Link } from 'react-router-dom'
function MostPopularMovies() {


    const [mostPopularMovies, setMostPopularMovies] = useState([])

    const slicedMovies = mostPopularMovies.slice(0, 8)

    useEffect(() => {
      const mostPopular = async() => {
        let data = await fetchData('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)

        setMostPopularMovies(data.results)
      }
      mostPopular()

    }, [])
    


  return (
    <div className='container mx-auto  flex-col  py-12 '>
      <div className='flex justify-between items-center mx-24 mb-4'>
          <p className='font-black text-[32px]'>TOP RATED MOVIES</p>
          <Link to='/dis cover/top-rated' className='underline'>Check all</Link>
      </div>
      <div className='flex flex-col items-center justify-center gap-8'>
        
        <div className='flex flex-wrap gap-12 justify-center items-center'>
            {slicedMovies?.map((movie, index) => {
                return(
                    <MostPopularCard movie={movie} key={index}/>
                )
            })}
        </div>
        
      </div>
    </div>
  )
}

export default MostPopularMovies
