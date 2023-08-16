import React from 'react'
import { chatData, dashboardCards } from '../data'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {


  return (
    <div className=' h-full flex-col w-full'>


        {/* welcome message */}
        <div>
            <p className=' text-2xl font-bold'>
                Welcome Abasiama
            </p>
            <p className=' text-xs mt-2'>
                Pay and manage your employees in minutes
            </p>
        </div>


        {/* dashboard summary section */}
        <div className=' flex w-full mt-10 justify-between'>
            
            {/* left */}
            <div className=' flex gap-8 flex-col w-[75%]'>
                <div className=' bg-wallet-bg bg-[#11453b] p-6 rounded-2xl'>
                    <p className=' text-[#d9ebcd] text-xs capitalize'>
                        wallet balance
                    </p>
                    <div className=' mt-4 flex items-center justify-between'>
                        <p className=' text-white font-semibold'>
                            &#8358;12,000,000.00
                        </p>
                        <p className=' bg-[#d9ebcd] text-[0.6rem] capitalize px-4 py-2 rounded-2xl' >
                            fund wallet
                        </p>
                    </div>
                </div>
                <div className=' flex justify-between'>
                    {
                        dashboardCards.map(item => (
                            <div className=' bg-white w-[22%] shadow-lg rounded-2xl flex items-center justify-center flex-col py-4 px-4'>
                                <div className={` h-8 w-8 flex rounded-lg items-center justify-center`} style={{backgroundColor: item.color}}>
                                    <img src={item.icon} alt="" className=' w-[50%]' />
                                </div>
                                <p className=' text-gray-700 text-[0.6rem] text-center mt-2'>
                                    {item.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* right */}
            <div className=' bg-white shadow-lg w-[20%] flex flex-col  rounded-2xl overflow-hidden'>
                
                {/* head */}
                <div className=' h-1/2 border-b'>
                    <div className=' py-2 text-xs text-gray-700 font-semibold bg-[#d9ebcd] flex items-center justify-center'>
                        <p className=' capitalize'>
                            next payroll
                        </p>
                    </div>
                    <div>
                        <div className=' flex justify-center mt-3 items-center'>
                            <img src="/assets/dashboard/calendar.svg" alt="" />
                            <p className=' text-[0.6rem]'>
                                {new Date().toLocaleString('en-us', {weekday: 'long'})}
                            </p>
                        </div>
                        <p className=' font-semibold text-gray-700 text-center mt-2'>
                            {new Intl.DateTimeFormat(['ban', 'id']).format(new Date)}
                        </p>
                    </div>
                </div>

                {/* bottom */}
                <div className=' px-3 py-2 h-1/2 justify-end flex flex-col text-gray-700'>
                    <p className=' text-sm capitalize'>
                        total employee
                    </p>
                    <p className=' font-bold text-lg'>
                        64
                    </p>
                    <div className=' flex text-[0.6rem]'>
                        <div className=' w-1/2'>
                            <div className=' bg-[#11453b] h-1 ' />
                            <p>male</p>
                            <p>32</p>
                        </div>
                        <div className=' w-1/2'>
                        <div className=' bg-[#ea4e4b] h-1' />
                            <p>female</p>
                            <p>32</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* chart section */}
        <div className='flex flex-col mt-10 h-80 bg-white p-10 w-full rounded-2xl'>

            <div className=' flex justify-between mb-4'>
                <div>
                    <p className=' text-[0.7rem] text-gray-600'>inflow</p>
                    <p className=' font-semibold text-lg text-[#219653]'>&#8358;1,567,552</p>
                </div>
                <div>
                <p className=' text-[0.7rem] text-gray-600'>inflow</p>
                    <p className=' font-semibold text-lg text-[#ef4444]'>&#8358;1,567,552</p>
                </div>
                <div className=' flex items-start text-xs gap-2'>
                    <p className=' text-[#11453b]'>
                        Inflow/Outflow 
                    </p>
                    <img src="/assets/navicons/arrowdown.svg" alt="" className=' h-4' />
                </div>
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={200}
                data={chatData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5, 
                }}
                >
                <CartesianGrid  horizontal={true} vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="inflow" strokeWidth={2} stroke="#219653" dot={false} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="outflow" strokeWidth={2} stroke="#ef4444" dot={false} />
                </LineChart>
            </ResponsiveContainer>
            <div className=' w-full flex justify-end'>
                <p className=' bg-[#11453b] text-white py-1 px-2 text-[0.5rem] font-semibold'>
                    2022
                </p>
            </div>
        </div>

        {/* activity grid */}
        <div className=' mt-10'>
            <p className=' text-xl'>
                Recent Activities
            </p>

            {/* search area */}
            <div className=' flex justify-between mt-6'>
                <div className=' w-[85%] flex border rounded-xl overflow-hidden '>
                    <input type="text" placeholder='search employees' className=' text-xs py-2 flex grow px-6 outline-none' />
                    <p className=' flex cursor-pointer items-center w-16 justify-center bg-[#d9ebcd]'> 
                        <img src="/assets/dashboard/magnifier.svg" alt="" className=' h-4' />
                    </p>
                </div>
                <div className='flex gap-1 cursor-pointer items-center bg-white border px-3 rounded-xl '>
                    <img src="/assets/dashboard/equalizer.svg" alt="" className=' h-3' />
                    <p className=' text-[0.6rem]'>
                        Filter
                    </p>
                </div>
            </div>

            {/* employee table */}
            <div className=' mt-6 rounded-xl bg-[#f2f1f1] h-[500px] py-6 px-4 overflow-y-scroll '>
                
                {/* card column */}
                <div className=' text-gray-600'>
                    <p>
                        Wednesday, November 09, 2022
                    </p>
                    <div className=' bg-white px-7 py-3 rounded-lg mt-3'>
                        <p className=' uppercase text-[0.6rem]'>
                            payroll
                        </p>
                        <div className=' flex justify-between mt-3 h-12 '>
                            <div className='  flex items-end'>
                                <div className=' flex items-center gap-2'>
                                    <img src="/assets/dashboard/bm.svg" alt="" className=' h-7' />
                                    <p className=' text-sm'>
                                        Badmus Kemis
                                    </p>
                                </div>
                            </div>
                            <div className=' flex flex-col justify-between'>
                                <p className=' text-xs font-extralight uppercase'>
                                    activity
                                </p>
                                <p className=' text-sm'>
                                    Paid November 2022 salary
                                </p>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p className='text-xs font-extralight uppercase'>
                                    employee
                                </p>
                                <p className='text-sm'>
                                    52
                                </p>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p className='text-xs font-extralight uppercase'>
                                    time
                                </p>
                                <p className='text-sm'>
                                    16:15
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    <div className=' bg-white px-7 py-3 rounded-lg mt-3'>
                        <p className=' uppercase text-[0.6rem]'>
                            payroll
                        </p>
                        <div className=' flex justify-between mt-3 h-12 '>
                            <div className='  flex items-end gap-2'>
                                <div className='flex items-center gap-2'>
                                    <img src="/assets/dashboard/kalu.svg" alt="" className=' h-7' />
                                    <p className=' text-sm'>
                                        Kalu Abasiama
                                    </p>
                                </div>
                            </div>
                            <div className=' flex flex-col justify-between'>
                                <p className=' text-xs font-extralight uppercase'>
                                    activity
                                </p>
                                <p className=' text-sm'>
                                    Added new employee
                                </p>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p className='text-xs font-extralight uppercase'>
                                    employee
                                </p>
                                <p className='text-sm'>
                                    04
                                </p>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p className='text-xs uppercase'>
                                    
                                </p>
                                <p className='text-sm'>
                                    
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* end of card column */}

                
                {/* card column */}
                <div className=' mt-10 text-gray-600'>
                    <p>
                        Wednesday, November 09, 2022
                    </p>
                    <div className=' bg-white px-7 py-3 rounded-lg mt-3'>
                        <p className=' uppercase text-[0.6rem]'>
                            Bonus
                        </p>
                        <div className=' flex justify-between mt-3 h-12 '>
                            <div className='  flex items-end gap-2'>
                                <div className='flex items-center gap-2'>
                                    <img src="/assets/dashboard/bm.svg" alt="" className=' h-7' />
                                    <p className=' text-sm'>
                                        Badmus Kemis
                                    </p>
                                </div>
                            </div>
                            <div className=' flex flex-col justify-between'>
                                <p className=' text-[0.7rem] font-extralight uppercase'>
                                    activity
                                </p>
                                <p className=' text-sm'>
                                    Added new bonus
                                </p>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p className='text-[0.7rem] font-extralight uppercase'>
                                    bonus name
                                </p>
                                <p className='text-sm'>
                                    XMAS Bonus
                                </p>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p className='text-xs uppercase'>
                                    
                                </p>
                                <p className='text-sm'>
                                    
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    <div className=' bg-white px-7 py-3 rounded-lg mt-3'>
                        <p className=' uppercase text-[0.5rem]'>
                            wallet
                        </p>
                        <div className=' flex justify-between mt-3 h-12 '>
                            <div className='  flex items-end gap-2'>
                                <div className='flex items-center gap-2'>
                                    <img src="/assets/dashboard/bm.svg" alt="" className=' h-7' />
                                    <p className=' text-sm'>
                                        Badmus Kemis
                                    </p>
                                </div>
                            </div>
                            <div className=' flex flex-col justify-between'>
                                <p className=' text-[0.7rem] font-extralight uppercase'>
                                    activity
                                </p>
                                <p className=' text-sm'>
                                    Paid November 2022, salary
                                </p>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p className='text-[0.7rem] font-extralight uppercase'>
                                    amount
                                </p>
                                <p className='text-sm text-[#ea4e4b]'>
                                    &#8358;11,687,900.00
                                </p>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p className='text-[0.7rem] font-extralight uppercase'>
                                    time
                                </p>
                                <p className='text-sm'>
                                    16:15
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* end of card column */}

                
            </div>


            
        </div>

    </div>
  )
}

export default Dashboard