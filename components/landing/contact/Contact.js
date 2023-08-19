import React from 'react'

const Contact = () => {
  return (
    <div className=' flex px-20 lg:px-40 xl:px-52 gap-10 h-[100vh] bg-contact-bg bg-cover'>


            {/* left text */}
            <div className=' flex-1 flex flex-col justify-center'>
                <div className=' text-5xl' style={{ fontFamily: "DM Serif Text"}}>
                    <span className=' text-[#11453b]'>Get an Exclusive Demo of Eazipay</span>
                </div>
                <p className=' text-gray-500 mt-7'>
                Our greatest priority is to put you and your business first. Let’s show you how we can help.                </p>
            </div>

            {/* form */}
            <div className=' flex-1 flex items-center justify-center'>
                <div className=' bg-white border p-5 shadow-lg w-full xl:w-3/4 flex justify-center flex-col items-center text-center rounded-2xl'>
                    <p className=' text-xl font-semibold text-neutral-600'>
                        First things first
                    </p>
                    <p className=' text-sm px-8 mt-3 text-neutral-600'>
                        We want to serve you better. Tell us a bit about yourself or company
                    </p>

                    <div className=' flex gap-2 border p-1 mt-3 rounded-xl w-full'>
                        <p className=' cursor-pointer flex-1 bg-[#11453b] rounded-lg p-1 text-white text-sm'>
                            Individual
                        </p>
                        <p className=' cursor-pointer flex-1 bg-[#f2f1f1] rounded-lg p-1 text-neutral-600 text-sm'>
                            Company
                        </p>
                    </div>

                    <div className=' contact-form'>
                        <input type="text" placeholder='first name' />
                        <input type="text" placeholder='Last Name' />
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Job Title'/>
                        <input type="text" placeholder='Company Size'/>
                    </div>

                    {/* button */}
                    <p className=' cursor-pointer bg-[#11453b] w-full rounded-2xl p-2 text-xs text-white'>
                        Request Demo
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Contact