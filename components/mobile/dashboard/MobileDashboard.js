import React from 'react'
import { actionsDashboard } from '../../data'
import MobileNav from '../nav/MobileNav'

const MobileDashboard = () => {
  return (
    <div className=' px-5 py-10 bg-white h-full'>

        {/* navigation */}
        <div className=' fixed bottom-0 w-full left-0 shadow-xl'>
            <MobileNav />
        </div>

        {/* top bar */}
        <div className=' flex justify-between items-center'>
            {/* left */}
            <div className=' flex items-center gap-3'>
                <img src="/assets/dashboard/wasiu.svg" alt="" />
                <p className=' text-xl font-semibold'>
                    Hello Wasiu
                </p>
            </div>

            {/* right */}
            <div className=' bg-[#f2f1f1] p-2 rounded-lg' >
                <img src="assets/mobile/bell.svg" alt="" />
            </div>
        </div>

        {/* wallet summary */}
        <div className=' bg-wallet-bg mt-6 rounded-3xl bg-cover flex flex-col w-full px-5 py-7 bg-[#11453b]'>
            <p className=' text-[#d9ebcd] text-sm font-light capitalize'>
                wallet balance
            </p>
            <div className=' flex justify-between mt-3'>
                <p className='text-white font-bold text-xl'>
                    &#8358; 15,067,789.00
                </p>
                <img src="/assets/mobile/visible.svg" alt="" />
            </div>
            <p className=' bg-[#d9ebcd] mt-6 rounded-3xl flex items-center justify-center text-sm py-3 text-[#11453b]'>
                Fund wallet
            </p>
        </div>

        {/* quick stats */}
        <div className=' mt-6'>
            <p className=' text-sm uppercase tracking-wider'>
                quick stats
            </p>
            <div className=' mt-4 flex gap-3 text-gray-600'>
                <div className=' flex-1 bg-[#f2f1f1] p-3 rounded-xl'>
                    <p className=' capitalize'>
                        total payroll
                    </p>
                    <p className=' mt-2 text-sm font-semibold'>
                        &#8358; 2,293,044,345.05
                    </p>
                </div>
                <div className=' flex-1 bg-[#f2f1f1] p-3 rounded-xl'>
                    <p className=' capitalize'>
                        total employee
                    </p>
                    <p className=' mt-2 text-sm font-semibold' >
                        10,000
                    </p>
                </div>
            </div>
        </div>

        {/* quick actions */}
        <div className=' mt-6'>
            <p className=' text-sm uppercase tracking-wider'>
                quick actions 
            </p>

            {/* actions panel */}
            <div className=''>

                <div className=' w-full grid grid-cols-3 gap-4 items-center px-3 py-5 border rounded-2xl mt-4'>
                    {
                        actionsDashboard.map((item,index) => (
                            <div key={index} className=' flex justify-center flex-col items-center'>
                                <div  className='h-[60px] w-[60px] rounded-xl flex items-center justify-center' style={{backgroundColor: item.color}}>
                                    <img src={item.icon} alt="" />
                                </div>
                                <p className=' text-xs capitalize text-gray-600'>
                                    {item.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileDashboard