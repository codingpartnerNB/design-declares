import React from 'react'
import ExpandBar from './ExpandBar'
import NavigationMenu from './NavigationMenu'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
        <div className='bg-black rounded-bl-4xl rounded-br-4xl'>
            <ExpandBar />
            <NavigationMenu />
            <Outlet />
        </div>
        <div className='footer-part'>
            <Footer />
        </div>
    </>
  )
}

export default Layout
