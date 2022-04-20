import React from 'react'
import { HomeNavbar } from '../navbar/HomeNavbar'
import { Footer } from '../Footer'
export const HomeLayout = ({ children }) => {
  return (
    <div className='center-content'>
      <HomeNavbar />
      {children}
      <Footer />
    </div>
  )
}
