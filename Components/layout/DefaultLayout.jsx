import React from 'react'
import Navbar from '../navbar/Navbar'
import Navbarlogin from '../navbar/Navbarlogin'
import footer from '../footer/Footer'

const DefaultLayout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
      
    </>
  )
}

export default DefaultLayout
