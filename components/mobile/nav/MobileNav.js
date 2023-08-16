import React from 'react'

const MobileNav = () => {
  return (
    <div className=' bg-white w-full py-5 flex shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <div className=' flex justify-evenly items-center w-full text-[0.7rem] text-gray-500'>
            <div className=' flex flex-col items-center'>
                <img src="/assets/mobilenav/home.svg" alt="" />
                <p className=''>
                    Home
                </p>
            </div>
            <div className=' flex flex-col items-center'>
                <img src="/assets/mobilenav/employee.svg" alt="" />
                <p className=''>
                    Employee
                </p>
            </div>
            <div className=' flex flex-col items-center'>
                <img src="/assets/mobilenav/payroll.svg" alt="" />
                <p className=''>
                    Payroll
                </p>
            </div>
            <div className=' flex flex-col items-center'>
                <img src="/assets/mobilenav/loans.svg" alt="" />
                <p className=''>
                    Loans
                </p>
            </div>
            <div className=' flex flex-col items-center'>
                <img src="/assets/mobilenav/more.svg" alt="" />
                <p className=''>
                    More
                </p>
            </div>
        </div>
    </div>
  )
}

export default MobileNav