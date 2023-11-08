import React from 'react'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-[#190401] w-full border-opacity-10 flex justify-center items-center py-12 flex-col border-2'>
      <p className='text-[44px] font-black'>METFLIX</p>
      <img className='w-16' src={logo} alt="logo" />
      <p className='text-[gray]'>Made by: Kowy 2023</p>

      <div className='flex gap-4 mt-24 text-[gray]'>
        <Link>
          Home
        </Link>

        <Link>
          About
        </Link>

        <Link>
          Contact Us
        </Link>

        <Link>
          Support
        </Link>
      </div>
    </div>
  )
}

export default Footer
