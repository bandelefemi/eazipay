import React from 'react'

const Free = () => {
  return (
        <div className=' flex gap-10 mt-20 bg-free-forever h-[80vh] px-32 py-16'>
            <div className=' flex-1 flex flex-col justify-center '>


                <div className=' text-5xl' style={{ fontFamily: "DM Serif Text"}}>
                    <span className=' text-[#292a29]'>Free forever <br /> for your</span>
                    <span className=' text-[#ed4b4d]'> salary <br /> payment</span>
                </div>

                <div className=' flex flex-col mt-10'>
                    <p className=' text-sm'>
                        Subscribe to the Eazilife today
                    </p>
                    <div className=' flex -mt-3'>
                        <img src="/assets/landing/appstore.svg" alt="" className='w-48 -ml-8 cursor-pointer' />
                        <img src="/assets/landing/playstore.svg" alt="" className='w-48 -ml-12 cursor-pointer' />
                    </div>
                </div>


            </div>
            <div className=' flex-1 flex items-center'>
                <img src="/assets/landing/happyman.svg" alt="" />
            </div>
        </div>
  )
}

export default Free