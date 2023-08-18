import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' hidden md:block bg-white sticky top-0 p-2 w-full z-30'>
        <div className=' flex px-4 items-center justify-between'>
          <img src="/assets/logo/logo-c.svg" alt="" className=' h-10' />
          <Image src="/assets/navicons/notify.svg" width={30} height={30} alt="notifications" className='' />

          <div className=' flex items-center gap-10'>

            <div className='cursor-pointer'>
              <Image src="/assets/navicons/notify.svg" width={30} height={30} alt="notifications" className='' />
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
              <div>
                <Image src="/assets/navicons/kalu.svg" width={40} height={40} alt=" profile picture" className='' />
              </div>
              <div>
                <p className='font-semibold'>Kalu Abasiama</p>
                <p className='text-sm text-gray-500'>Admin</p>
              </div>
            </div>

            <div className='flex items-end h-full -ml-5 cursor-pointer'>
              <Image src="/assets/navicons/arrowright.svg" width={10} height={10} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar