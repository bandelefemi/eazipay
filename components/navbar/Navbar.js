import React from 'react'

const Navbar = () => {
  return (
    <div className=' hidden md:block bg-white sticky top-0 p-2 w-full z-30'>
        <div className=' flex px-4 items-center justify-between'>
          <img src="/assets/logo/logo-c.svg" alt="" className=' h-10' />
          <div className=' flex items-center gap-10'>

            <div className='cursor-pointer'>
              <img src="/assets/navicons/notify.png" alt="notifications" className='' />
            </div>

            <div className='flex items-center cursor-pointer'>
              <div>
                <img src="/assets/navicons/kalu.png" alt=" profile picture" className='w-[80%]' />
              </div>
              <div>
                <p className='font-semibold'>Kalu Abasiama</p>
                <p className='text-sm text-gray-500'>Admin</p>
              </div>
            </div>

            <div className='flex items-end h-full -ml-5 cursor-pointer'>
              <img src="/assets/navicons/arrowright.png" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar