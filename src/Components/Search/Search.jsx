import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchData, options } from '../../Utils/fetchData'
import SearchCard from './SearchCard'

function Search() {

    const { Text } = useSelector(state => state.text)
    const [Movies, setMovies] = useState([])
    useEffect(() => {
 
        const getSearch = async() => {
            const search = await fetchData(`https://api.themoviedb.org/3/search/movie?query=${Text}&include_adult=false&language=en-US&page=1`, options)
            setMovies(search.results)
        }
        getSearch()

      
     
    }, [Text])
    


    
  return (
    <div className='w-full py-24'>
        <div className='mx-24 mb-4'>
            <p className='font-black text-[32px] flex flex-col'>YOUR SEARCH FOR: {Text ? Text : 'Loading'} <span className='text-[18px] text-[gray] font-medium'>Data base is slowly rendering so please be patient</span></p>
        </div>
      <div>
     
        {Text ? <div className=' flex flex-col items-center justify-center gap-8'>
        
        <div className='flex flex-wrap gap-12  justify-center items-center'>
            {Movies?.map((movie, index) => {
                return(
                   <SearchCard movie={movie} key={index}/>
                )
            })}
        </div>
        
      </div> : <div className='flex justify-center items-center h-screen text-[44px] flex-col'><p>Loading...</p> <p className='text-[20px] text-[gray]'>Enter your movie title again if screen is loading too long.</p></div>}
      
      </div>
    </div>
  )
}

export default Search
