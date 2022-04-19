import React from 'react'
import { HomeNavbar } from '../navbar/HomeNavbar'
import { Footer } from '../Footer'
export const HomeLayout = ({ children }) => {
  return (
    <div className='container'>
      <HomeNavbar />
      {children}
      <Footer />
    </div>
  )
}
