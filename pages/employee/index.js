import React from 'react'
import { employeeData } from '../../components/data'
import MobileNav from '../../components/mobile/nav/MobileNav'
import { useRouter } from 'next/router'

const Employee = () => {

    const router = useRouter()
  return (
    <div className=' md:hidden'>

        {/* bottom nav */}
        <div className=' fixed bottom-0 w-full z-30'>
            <MobileNav />
        </div>

        {/* title bar */}
        <div className=' py-5 flex border-b items-center justify-center'>
            <p className=' font-semibold'>
                Eazipay's Team
            </p>
        </div>

        {/* main */}
        <div className=' p-5'>
            

            {/* wallet summary */}
            <div className=' bg-wallet-bg mt-6 rounded-3xl bg-cover flex flex-col w-full px-5 py-7 bg-[#11453b]'>
                <p className=' text-white text-sm font-light capitalize'>
                    Total Employee
                </p>
                <div className=' flex justify-between mt-3'>
                    <p className='text-white font-bold text-xl'>
                        11264
                    </p>
                </div>
                
            </div>

            {/* tabs */}
            <div className=' mt-10 flex border  rounded-2xl p-2 gap-3'>
                <div className=' flex-1 bg-[#11453b] rounded-lg py-2 flex justify-center text-white capitalize text-lg'>
                    <p>
                        all employee
                    </p>
                </div>

                <div className=' flex-1 bg-[#e7e8e7] rounded-lg py-2 flex justify-center text-[#11453b] capitalize text-lg'>
                    <p>
                        departments
                    </p>
                </div>
            </div>

            {/* search / filter */}
            <div className=' mt-7 flex w-full justify-between'>
                <div className=' w-[85%] flex items-center justify-between border border-black/40 px-5 py-2 rounded-2xl'>
                    <input type="text" placeholder='Search' className=' text-gray-500 outline-none' />
                    <img src="/assets/dashboard/magnifier.svg" alt="" />
                </div>
                <div className=' bg-[#e7e8e7] px-2 flex items-center justify-center rounded-xl'>
                    <img src="/assets/mobile/filter.svg" alt="" className=' w-6' />
                </div>
            </div>


            {/* sort icons */}
            <div className=' flex justify-between mt-8 text-gray-400'>
                <div className=' flex gap-2 items-center'>
                    <img src="/assets/mobile/list.svg" alt="" className=' border-r pr-3' />
                    <img src="/assets/mobile/grid.svg" alt="" className=' border-r pr-3' />
                    <p >Archived</p>
                </div>
                <div className=' flex gap-3'>
                    <img src="/assets/mobile/select.svg" alt="" />
                    <p>Select All</p>
                </div>
            </div>


            {/* employee list */}
            <div className=' mt-8 mb-16'>
                {
                    employeeData.map((item, index) => (
                        <div key={index} 
                            style={{backgroundColor: item.isSelected? "#f0f7eb": ''}}
                            className=' p-3 border-b mb-3 flex justify-between rounded-xl'>
                            <div className=' flex gap-4'>
                                <div className=' relative'>
                                    {item.isSelected && <img src='/assets/mobile/toyin.svg' className=' absolute' />}
                                    <img src={item.icon} alt="" />
                                </div>
                                <div>
                                    <p className=' text-lg capitalize'>{item.name}</p>
                                    <p className=' text-xs capitalize font-light'>{item.position}</p>
                                    <p className=' text-xs font-light mt-2 capitalize'>
                                        <span>{item.gender}</span> | <span>{item.term}</span>
                                    </p>
                                </div>
                            </div>
                            <div className=' flex items-end'>
                                <p className=' text-[#11453b] font-semibold'>
                                    {item.amount}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Employee