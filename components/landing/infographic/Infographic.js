import React from 'react'

const Infographic = () => {
  return (
    <div className=' h-screen px-20 py-10 '>
            <div style={{ fontFamily: 'DM Serif Text'}} className="text-center text-emerald-900 text-3xl">
                How Eazipay Works
            </div>
            <div className="text-center text-neutral-600  leading-9">
                Get started in 3 simple steps.
            </div>

            {/* infographics */}
            <div className=' h-full gap-5 flex items-center mt-10'>
                <div className=' relative flex-1 h-full flex items-center justify-center'>
                    <img src="/assets/landing/BG.svg" alt="" className='absolute w-[400px] ' style={{left: '50%', top: '50%', transform: "translate(-50%, -50%)"}} />
                    <img src="/assets/landing/onboarding.svg" alt="" className=' z-10 w-64' />
                </div>
                <div className='flex-1 flex flex-col items-center justify-center'>

                    <div className=' relative'>
                        <img src="/assets/landing/leftbracket.svg" alt="" className='absolute -ml-12 w-[40px] mt-6' />
                        <p className=' bg-[#11453b] inline-block font-semibold text-3xl px-5 py-2  text-white rounded-xl'>
                          1  
                        </p>
                        <p className=' font-semibold text-neutral-600 mt-3'>
                            Create your free account
                        </p>
                        <p className=' text-xs mt-3 font-light'>
                            Click here to setup your Eazipay account
                        </p>
                    </div>

                    <div className=' relative mt-12'>
                        <img src="/assets/landing/rightbracket.svg" alt="" className='absolute ml-16 mt-5' />
                        <p className=' text-[#11453b] inline-block font-semibold text-3xl px-5 py-2 bg-[#f2f1f1]  rounded-xl'>
                          2  
                        </p>
                        <p className=' font-semibold text-neutral-600 mt-3'>
                            Add Employee Data
                        </p>
                        <p className=' text-xs mt-3 font-light'>
                            Your employee information is 100% safe
                        </p>
                    </div>

                    <div className=' mt-[54px]'>
                        <p className=' text-[#11453b] inline-block font-semibold text-3xl px-5 py-2 bg-[#f2f1f1] rounded-xl'>
                          3  
                        </p>
                        <p className=' font-semibold text-neutral-600 mt-3'>
                            Prepare your Transaction
                        </p>
                        <p className=' text-xs mt-3 font-light'>
                            Run payroll, Bulk Salaries and compliance<br /> are done at once
                        </p>
                    </div>
                    {/* <img src="/assets/landing/1.svg" alt="" className=' w-80' /> */}
                </div>
            </div>
        </div>
  )
}

export default Infographic