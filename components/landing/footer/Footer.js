import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className=' flex justify-between md:px-10 lg:px-20 py-10 border'>
            <div className=' flex flex-col md:gap-4 lg:gap-7'>
                <div>
                    <img src="/assets/footer/logo-black.svg" alt="" className='h-7' />
                </div>
                <div className=' text-xs text-neutral-500'>
                    <p>
                        Copyright © 2023 Eazipay. 
                    </p>
                    <p className=' mt-2'>
                        All rights reserved
                    </p>
                </div>
                <div className=' flex footer-social items-center'>
                    <div>
                        <AiOutlineInstagram size={20} />
                    </div>
                    <div>
                        <AiOutlineTwitter size={20} />
                    </div>
                    <div>
                        <FaLinkedinIn size={20} />
                    </div>
                    <div>
                        <FaFacebookF size={16} />
                    </div>
                </div>
            </div>
            <div className=' flex gap-12'>
                <div className='site-map'>
                    <p>
                        Product
                    </p>
                    <ul>
                        <li>Individual</li>
                        <li>Businesses</li>
                        <li>Request Demo</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className=' site-map'>
                    <p>
                        Legal
                    </p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className='site-map'>
                    <p>
                        Resources
                    </p>
                    <ul>
                        <li>FAQs</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Customer Stories</li>
                    </ul>
                </div>
                <div className=' site-map'>
                    <p>
                        Contact us
                    </p>
                    <ul>
                        <li>eazipau@gmail.com</li>
                        <li>+234 816 878 9518</li>
                    </ul>

                    <div className=' bg-[#f2f1f1] flex border rounded-xl px-3 py-[7px] mt-4'>
                        <input type="text" placeholder='Your email address' className=' text-xs text-neutral-700 placeholder:text-neutral-600 bg-transparent' />
                        <img src="/assets/footer/send.svg" alt="" className=' w-4' />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer