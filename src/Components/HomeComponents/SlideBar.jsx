import React, { useEffect, useState } from 'react'
import { fetchData, options } from '../../Utils/fetchData'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
function SlideBar() {

    const [mostPopularMovies, setMostPopularMovies] = useState([])

    const slicedMovies = mostPopularMovies.slice(11, 20)

    useEffect(() => {
        const mostPopular = async() => {
          let data = await fetchData('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)

          setMostPopularMovies(data.results)
        }
        mostPopular()
  
      }, [])
      


  return (
    <div className='w-full bg-[#1B0301] border-2'>
        <div className='flex flex-wrap justify-center items-center gap-4 py-10'>
            {slicedMovies.map((movie, i) => {
   
                return(
                    <Link
                    to={`/discover/${movie.id}`}
                    key={i} 
                
                   >
                        <motion.div     whileHover={{ y: -25 }}  className='flex flex-col justify-center items-center font-light text-[14px]'>
                            <img className='w-44 rounded-2xl' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name + i} />
                            <p>{movie.title}</p>
                        </motion.div>
                        
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default SlideBar
