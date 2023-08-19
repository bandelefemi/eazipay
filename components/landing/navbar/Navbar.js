import React from 'react'

const Navbar = () => {
  return (
    <div className=' items-center justify-between flex md:px-10 lg:px-20 xl:px-52 py-5'>
        <div className=' flex items-center gap-10'>
            <img src="/assets/logo/logogreen.svg" alt="" className=' cursor-pointer w-24' />
            <ul className=' nav-ul flex capitalize gap-7 text-sm'>
                <li>Individual</li>
                <li>Business</li>
                <li>pricing</li>
                <li>set your payroll</li>
            </ul>
        </div>
        <div className=' text-xs flex gap-3'>
            <p className=' cursor-pointer px-8 py-2 border border-[#11453b] text-[#11453b] rounded-3xl'>
                Log in
            </p>
            <p className=' cursor-pointer px-8 py-2 border rounded-3xl bg-[#11453b] text-white'>
                Register
            </p>
        </div>
    </div>
  )
}

export default Navbar