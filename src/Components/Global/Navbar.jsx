import React, { useRef, useState } from 'react'
import logo from '../../Assets/logo.png'
import menu from '../../Assets/menu.svg'
import close from '../../Assets/close.svg'
import search from '../../Assets/search.png'
import { useDispatch } from 'react-redux'
import { getText } from '../../store/sliceText'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'


import home from '../../Assets/home.png'
import trending from '../../Assets/trending.png'
import movies from '../../Assets/tv.png'
import series from '../../Assets/theatre.png'
import popular from '../../Assets/romance.png'
function Navbar() {

  const [toggle, setToggle] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inpRef = useRef()


  const handleSearch = (e) => {
    e.preventDefault()
    if(inpRef.current.value === '') return
    dispatch(getText(inpRef.current.value))
    navigate(`/search/${inpRef.current.value}`)
    inpRef.current.value = ""
    
  }

  return (
    <div className=' flex justify-between px-24 items-center text-[18px] py-4 bg-[#190401] uppercase '>
      <div className={`${toggle ? 'opacity-0' : 'opacity-100'}`}>
        <img className='w-6' src={menu} alt="togle" onClick={() => setToggle(!toggle)} />
      </div>


      <div className='flex gap-4 -mr-56 justify-center items-center flex-1'>
        <div className='bg-gradient-to-r from-[#130303] to-[#FF0016] p-[3px] rounded-2xl'>
            <div className='bg-[#190401] rounded-2xl px-4'>
              <Link to='/about'>
                <p>About</p>
              </Link>
               
            </div>
        </div>
      
        <div className='bg-gradient-to-r from-[#130303] to-[#FF0016] p-[3px] rounded-2xl'>
            <div className='bg-[#190401] rounded-2xl px-4'>
              <Link to='/discover/movies'>
                <p>Movies</p>
              </Link>
            
            </div>
        </div>

          <Link to='/'>
            <img  src={logo} alt="logo" />
          </Link>
        
          <div className='bg-gradient-to-r from-[#130303] to-[#FF0016] p-[3px] rounded-2xl'>
            <div className='bg-[#190401] rounded-2xl px-4'>
            <Link to='/discover/series'>
                <p>Series</p>
              </Link>
            </div>
        </div>
        <div className='bg-gradient-to-r from-[#130303] to-[#FF0016] p-[3px] rounded-2xl'>
            <div className='bg-[#190401] rounded-2xl px-4'>
            <Link to='/discover/upcoming'>
                <p>Upcoming</p>
              </Link>
            </div>
        </div>
      </div>

      <div className='flex justify-center items-center gap-2'>
        <input className='w-[200px] rounded-2xl py-1 px-2' type="text" ref={inpRef}/>
        <img onClick={(e) => handleSearch(e)} className='invert w-6' src={search} alt="search" />

      </div>
      
      <motion.div
      animate={{
        x: [-100, 0]
      }}
      transition={{ease: 'easeInOut', duration: 1}} 
      className={`${toggle ? 'block' : 'hidden'} z-10 fixed top-0 h-screen left-0 right-[1350px] rounded-r-3xl bottom-0 bg-[#190401d5] border-2 text-[#000] transition-all ease-in-out delay-75`}>
        <div className='flex justify-end items-start p-12'>
            <div>
              <img className='w-6 ' src={close} alt="togle" onClick={() => setToggle(!toggle)} />
           </div>
        </div>

        <div className='flex justify-center items-start mx-12 gap-8 flex-col text-[#fff]'>
          <Link to='/' className='flex justify-center items-center gap-4' onClick={() => setToggle(false)}>
            <img className='w-6 invert' src={home} alt="home" />
            <p>Home</p>
          </Link>

          <Link to='/discover/top-rated' className='flex justify-center items-center gap-4' onClick={() => setToggle(false)}>
            <img className='w-6 invert' src={popular} alt="home" />
            <p>Top Rated</p>
          </Link>
         
          <Link to='/discover/trending' className='flex justify-center items-center gap-4' onClick={() => setToggle(false)}>
            <img className='w-6 invert' src={trending} alt="home" />
            <p>Trending</p>
          </Link>
          
          <Link to='/discover/series' className='flex justify-center items-center gap-4' onClick={() => setToggle(false)}>
            <img className='w-6 invert' src={series} alt="home" />
            <p>TV Shows</p>
          </Link>


          <Link to='/discover/movies' className='flex justify-center items-center gap-4' onClick={() => setToggle(false)}>
            <img className='w-6 invert' src={movies} alt="home" />
            <p>Movies</p>
          </Link>
        </div>

        <div className='flex justify-end items-start mx-12 mt-44 gap-8 flex-col text-[#fff]' >
          <Link to='/' onClick={() => setToggle(false)}>Get Help</Link>
          <Link to='/about' onClick={() => setToggle(false)}>About Us</Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
