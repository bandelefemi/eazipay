import React from 'react'
import { landingCards } from '../../data'
import Link from 'next/link'

const Cards = () => {
  return (
    <div className=' bg-wave-middle h-screen bg-cover flex flex-col justify-center -mt-12 items-center'>
            <div >
                <p className=' text-3xl text-[#11453b]' style={{fontFamily: 'DM Serif Text'}}>
                    For Individuals and Businesses
                </p>
                <p className=' text-xs text-center mt-2 text-gray-600'>
                    Join 200+ businesses using Eazipay's easy solution. 
                </p>
            </div>

            {/* cards */}
            <div className='w-full px-20 mt-10 flex'>
                {
                    landingCards.map((item, index) => (
                        <div className='card flex-1  ' 
                            style={{
                            background: 'radial-gradient(50% 50% at 50% 50%,rgba(217,235,205,.14) 0,rgba(217,235,205,.0266) 100%),#11453b',
                            boxShadow: '0 13px 20px hsla(0,0%,9%,.2), -11px 0 19px hsla(0,0%,9%,.3)',
                            color: '#fff',
                            padding: '30px',
                            transition: '.45s cubic-bezier(.175,.585,.32,1.2075)',
                            height: ''}
                        }>
                            <div className=' flex flex-col gap-3 text-xs'>
                                <p className=' font-semibold text-lg mb-2'>
                                    {item.title}
                                </p>
                                <p>
                                    {item.points.a}
                                </p>
                                <p>{item.points.b}</p>
                                <p>{item.points.c}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            {/* end of cards */}

            <div className=' mt-8 text-sm text-center text-gray-600'>
                <p>
                    We are happy to answer your queries. Please, reach us at <br /> 
                    <span className=' cursor-pointer text-red-400'>
                        <Link href={'mailto:hello@myeazipay.com'}>
                            hello@myeazipay.com
                        </Link> 
                    </span> 
                     &nbsp;and expect our response shortly after.
                </p>
                
            </div>
        </div>
  )
}

export default Cards