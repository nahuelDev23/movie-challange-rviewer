import React from 'react'
import { Footer } from '../Footer'
import { MainNavbar } from '../navbar/MainNavbar'

export const MainLayout = ({children}) => {
  return (
    <div className='container'>
        <MainNavbar/>
        {children}
        <Footer />
    </div>
  )
}
