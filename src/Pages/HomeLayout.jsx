import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet/>
    </>
    
  )
}

export default HomeLayout