import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Search from '../Search'

const HomePage = () => {
  return (
    <div>

      <Navbar />
      <Search />

      <Outlet />

    </div>
  )
}

export default HomePage
