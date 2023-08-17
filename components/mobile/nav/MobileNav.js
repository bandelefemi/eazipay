import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MobileNav = () => {

    const router = useRouter()

  return (
    <div className=' bg-white w-full py-5 flex shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <div className=' flex justify-evenly items-center w-full text-[0.7rem] text-gray-500'>
            <div className=' '>
                <Link href={'/'} className='flex flex-col items-center'>
                    <img src={`/assets/mobilenav/${router.pathname == '/'? "home.svg":"home2.svg" }`} alt="" />
                    <p className=''>
                        Home
                    </p>
                </Link>
            </div>
            <div className=' '>
                <Link href={'/employee'} className='flex flex-col items-center'>
                    <img src={`/assets/mobilenav/${router.pathname == '/employee'? "employee2.svg":"employee.svg" }`} alt="" />
                    <p className=''>
                        Employee
                    </p>
                </Link>
            </div>
            <div className=' '>
                <Link href={'/payroll'} className='flex flex-col items-center'>
                    <img src="/assets/mobilenav/payroll.svg" alt="" />
                    <p className=''>
                        Payroll
                    </p>
                </Link>
            </div>
            <div className=' '>
                <Link href={'/loans'} className='flex flex-col items-center'>
                    <img src="/assets/mobilenav/loans.svg" alt="" />
                    <p className=''>
                        Loans
                    </p>
                </Link>
            </div>
            <div className=' '>
                <Link href={'/more'} className='flex flex-col items-center'>
                    <img src="/assets/mobilenav/more.svg" alt="" />
                    <p className=''>
                        More
                    </p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MobileNav