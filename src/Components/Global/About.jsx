import React from 'react'
import logo from '../../Assets/logo.png'
function About() {
  return (
    <div className='w-full h-screen bg-[#190401c5] py-24 flex justify-center items-center flex-col'>
          <img className='w-24 h-24 object-cover' src={logo} alt="logo" />
        <div className='flex justify-center items-center'>
          <p className='w-[600px] text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos tenetur non esse suscipit veniam commodi? Quod possimus eius, reiciendis a, velit nihil repellat veniam distinctio odit explicabo ut necessitatibus!</p>
        </div>
      
    </div>
  )
}

export default About
