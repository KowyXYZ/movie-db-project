import React, { useRef, useState } from 'react'
import logo from '../../Assets/logo.png'
import menu from '../../Assets/menu.svg'
import close from '../../Assets/close.svg'
import search from '../../Assets/search.png'
import { useDispatch } from 'react-redux'
import { getText } from '../../store/sliceText'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
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
    <div className='flex justify-between px-24 items-center text-[18px] py-4 bg-[#190401] uppercase'>
      <div>
        <img className='w-6' src={toggle ? close : menu} alt="" />
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
      

    </div>
  )
}

export default Navbar
