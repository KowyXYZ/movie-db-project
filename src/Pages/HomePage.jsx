import React from 'react'
import MostPopularMovies from '../Components/MostPopularMovies'
import Hero from '../Components/HomeComponents/Hero'
import SlideBar from '../Components/HomeComponents/SlideBar'
import Navbar from '../Components/Global/Navbar'
import Trending from '../Components/HomeComponents/Trending'

function HomePage() {
  return (
    <div className='bg-[#190401]'>
        <Hero/>
        <SlideBar/>
        <Navbar/>
        <MostPopularMovies/>
        <Trending/>
    </div>
  )
}

export default HomePage
