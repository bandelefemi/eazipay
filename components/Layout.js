import React from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div className=' h-full w-full flex'>
        
      
          <Sidebar />
        
        <div className=' w-full h-screen overflow-y-scroll'>
            <Navbar />
            <div className=' w-full h-full'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout