import React from 'react'
import Navbar from '../Components/Global/Navbar'
import Footer from '../Components/Global/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
