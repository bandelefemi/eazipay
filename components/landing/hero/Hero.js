import React from 'react'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    <div className=' relative bg-landing-top h-screen bg-cover'>
            <Navbar />

            <div className='flex  flex-col justify-center -mt-16 h-full px-10 lg:px-20 xl:px-52'>
                <div className=' absolute right-0'>
                    <img src="/assets/landing/heroimg.svg" alt="" className=' h-[450px] ' />
                </div>

                {/* hero text */}
                <div className=' text-5xl' style={{ fontFamily: "DM Serif Text"}}>
                    <span className=' text-[#292a29]'>Run your</span>
                    <span className=' text-[#11453b]'> payroll</span>
                    <br />
                    <span className=' text-[#b4a572]'>easily</span>
                    <span className=' text-[#292a29]'> in</span>
                    <span className=' text-[#ed4b4d]'> seconds</span>
                </div>
                <p className=' w-1/2 text-gray-500 mt-7'>
                    We’ve built an all-inclusive simple solution for <br /> individual  and businesses to manage staff, <br />pay salaries, bills, and relevant taxes all at once.
                </p>

                {/* button */}
                <p className='w-[30%] cursor-pointer text-sm flex text-white justify-center rounded-3xl mt-6 py-3 bg-[#11453b]'>
                    Start Using Free, Forever
                </p>

                {/* download buttons */}
                <div className=' flex flex-col mt-12'>
                    <p className=' text-sm'>
                        Download the Eazipay App
                    </p>
                    <div className=' flex -mt-4'>
                        <img src="/assets/landing/appstore.svg" alt="" className='w-48 -ml-8 cursor-pointer' />
                        <img src="/assets/landing/playstore.svg" alt="" className='w-48 -ml-12 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Hero