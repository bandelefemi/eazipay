import Link from 'next/link'
import React from 'react'
import { links, navFooterLinks } from '../data'
import { useRouter } from 'next/router'

const Sidebar = () => {

    const router = useRouter()

    const normalLink = `hover:bg-[#f0f7eb]/50 flex gap-2 border-b p-3 items-center text-[.8rem]`
    const activeLink = `hover:bg-[#f0f7eb]/50 flex gap-2 border-b bg-[#f0f7eb]/50 border-l-[3px] border-l-[#175b4e] p-3 items-center text-[.8rem]`
  return (
    <div className=' hidden md:flex h-screen bg-white w-[290px] overflow-y-scroll'>
        <div className=' h-full w-full'>


            {/* logo section */}
            <div className=' h-[130px] w-full bg-logo-pattern bg-cover bg-no-repeat'>
                <div className=' h-full  flex items-center justify-center'>
                    <img src='/assets/logo/logo.svg' alt='' className=' h-7' />
                </div>
            </div>


            {/* menu items */}
            <div className='flex flex-col mt-10 pb-4 justify-between w-full h-[calc(100%-170px)]'>
                <ul className=''>
                    {
                        links.map((item, index) => (

                        <Link key={index} href={item.to}>
                            <li className={router.pathname == `${item.to}`? activeLink: normalLink}>
                                <span>
                                    <img src={item.icon} alt="" />
                                </span>
                                <p className=' flex w-full capitalize items-center justify-between'>
                                    {item.title}
                                <span className=' flex self-end'>
                                    {item.sub && <img src="/assets/navicons/arrowdown.svg" alt="" />}
                                </span>
                                </p>
                            </li>
                        </Link>
                        ))
                    }
                </ul>

                <ul className=' mb-0'>
                {
                        navFooterLinks.map(item => (

                        <Link href={'/'}>
                            <li className=' flex gap-4 border-b p-3 items-center text-[.8rem]'>
                                <span>
                                    <img src={item.icon} alt="" />
                                </span>
                                <p className=' flex w-full capitalize items-center justify-between'>
                                    {item.title}
                                    <span className=' flex self-end'>
                                        {item.sub && <img src="/assets/navicons/arrowdown.svg" alt="" />}
                                    </span>
                                </p>
                            </li>
                        </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar