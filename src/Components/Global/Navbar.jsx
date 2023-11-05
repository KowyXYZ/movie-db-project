import React, { useState } from 'react'
import logo from '../../Assets/logo.png'
import menu from '../../Assets/menu.svg'
import close from '../../Assets/close.svg'
import search from '../../Assets/search.png'
function Navbar() {

  const [toggle, setToggle] = useState(false)


  return (
    <div className='flex justify-between px-24 items-center text-[18px] py-4 bg-[#190401] uppercase'>
      <div>
        <img className='w-6' src={toggle ? close : menu} alt="" />
      </div>


      <div className='flex gap-4 -mr-56 justify-center items-center flex-1'>
        <div className='bg-gradient-to-r from-[#130303] to-[#FF0016] p-[3px] rounded-2xl'>
            <div className='bg-[#190401] rounded-2xl px-4'>
                <p>About</p>
            </div>
        </div>
      
        <div className='bg-gradient-to-r from-[#130303] to-[#FF0016] p-[3px] rounded-2xl'>
            <div className='bg-[#190401] rounded-2xl px-4'>
                <p>Movies</p>
            </div>
        </div>


          <img  src={logo} alt="" />
          <div className='bg-gradient-to-r from-[#130303] to-[#FF0016] p-[3px] rounded-2xl'>
            <div className='bg-[#190401] rounded-2xl px-4'>
                <p>Series</p>
            </div>
        </div>
        <div className='bg-gradient-to-r from-[#130303] to-[#FF0016] p-[3px] rounded-2xl'>
            <div className='bg-[#190401] rounded-2xl px-4'>
                <p>Upcoming</p>
            </div>
        </div>
      </div>

      <div className='flex justify-center items-center gap-2'>
        <input className='w-[200px] rounded-2xl py-1 px-2' type="text"/>
        <img className='invert w-6' src={search} alt="search" />

      </div>
      

    </div>
  )
}

export default Navbar
