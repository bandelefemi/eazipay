import Head from 'next/head'
import React from 'react'

const Profile = () => {
  return (
    <div className=' md:hidden'>

        <Head>
            <link rel='icon' type='image/x-icon' href='/favicon.ico' />
            <title>
                Eazipay - profile
            </title>
        </Head>

        {/* title bar */}
        <div className=' py-5 px-4 flex border-b items-center justify-between'>
            <div className=' bg-[#f2f1f1] p-2 rounded-xl'>
                <img src="/assets/mobilenav/burger.svg" alt="" />
            </div>
            <p className=' font-semibold'>
                Eazipay's Team
            </p>
            <img src="/assets/navicons/notify.svg" alt="" />
        </div>


        {/* profile main */}
        <div className=' bg-[#f3f1f1] p-5'>
            
            {/* business profile */}
            <div className=' flex bg-white p-3 justify-between rounded-2xl'>
                <p className=' uppercase text-sm tracking-wider text-gray-700'>
                    business profile
                </p>
                <img src="/assets/mobile/arrowdown.svg" alt="" />
            </div>

            {/* table */}
            <div className=' bg-white p-2 rounded-xl mt-4'>
                <div className=' border rounded-xl overflow-hidden bg-gray-50'>
                    <table className=' w-full'>
                        <tbody className=' text-center text-xs capitalize text-gray-600'>
                            <tr>
                                <td className=' border p-3 bg-[#f0f7eb] font-semibold'>company</td>
                                <td className=' border p-3'>CEO/Founder</td>
                            </tr>
                            <tr>
                                <td className=' border p-3'>company director</td>
                                <td className=' border p-3'>account information</td>
                            </tr>
                            <tr>
                                <td className=' border p-3'>branch/department</td>
                                <td className=' border p-3'>kyc information</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            {/* edit company info */}
            <div className=' bg-white mt-6 rounded-xl py-4 px-2'>
                <div className=' flex gap-1 items-center border-b pb-3'>
                    <img src="/assets/mobile/arrowleft.svg" alt="" />
                    <p className=' capitalize text-gray-600'>
                        edit company information
                    </p>
                </div>

                {/* information */}
                <div className=' mt-3 border rounded-xl p-3'>
                    
                    {/* logo edit */}
                    <div className=' flex items-end gap-3'>
                        <img src="/assets/logo/teamlogo.svg" alt="" />
                        <div>
                            <p className=' px-2 py-1 rounded-lg text-xs capitalize border border-[#11453b] text-[#11453b] bg-[#f0f7eb]'>
                                change logo
                            </p>
                        </div>
                    </div>

                    {/* fields */}

                    <fieldset className=' border border-[#11453b] px-3 pb-2 rounded-2xl mt-4'>
                        <legend className='ml-1 px-3 text-gray-400 capitalize'>
                            company name
                        </legend>
                        <input type="text" placeholder='Juyonna travels' name="" id="" className=' placeholder:text-gray-600' />
                    </fieldset>

                    <p className=' text-sm mt-3 text-gray-500'>
                        Is your company registered?
                    </p>
                    <div className=' flex gap-4 mt-2'>
                        <p className=' px-10 py-1 rounded-lg bg-[#11453b] text-white'>
                            Yes
                        </p>
                        <p className=' px-10 py-1 rounded-lg border text-gray-500'>
                            No
                        </p>
                    </div>

                    <div className=' flex mt-3 items-center gap-1'>
                        <p className=' p-1 bg-[#f0f7eb] border border-[#11453b] rounded-lg text-xs'>
                            Upload CAC Doc.
                        </p>
                        <p className=' text-[0.6rem] text-gray-500'>
                            jpeg and png only &#40;2mb max &#41;
                        </p>
                    </div>


                    <fieldset className=' border border-gray-400 px-3 pb-2 rounded-2xl mt-4'>
                        <legend className='ml-1 px-3 text-gray-400 capitalize'>
                            office address
                        </legend>
                        <input type="text" placeholder='17, Simbiat Abiola Way, Ikeja' name="" id="" className=' placeholder:text-gray-600' />
                    </fieldset>

                    <div className=' flex mt-3 items-center gap-1'>
                        <p className=' p-1 bg-[#f0f7eb] border border-[#11453b] rounded-lg text-xs'>
                            Upload Proof of Address.
                        </p>
                        <p className=' text-[0.6rem] text-gray-500'>
                            e.g Nepa bill, etc.
                        </p>
                    </div>


                    <fieldset className=' border border-gray-400 px-3 pb-2 rounded-2xl mt-4 flex justify-between'>
                        <legend className='ml-1 px-3 text-gray-400 capitalize'>
                            company size
                        </legend>
                        <input type="text" placeholder='100 and above' name="" id="" className=' placeholder:text-gray-600' />
                        <img src="/assets/mobile/arrowdown.svg" alt="" />
                    </fieldset>


                    <fieldset className=' border border-gray-400 px-3 pb-2 rounded-2xl mt-4'>
                        <legend className='ml-1 px-3 text-gray-400 capitalize'>
                            pension code
                        </legend>
                        <input type="text" placeholder='ADDFER456GDGG76' name="" id="" className=' placeholder:text-gray-600' />
                    </fieldset>


                    <fieldset className=' border border-gray-400 px-3 pb-2 rounded-2xl flex justify-between mt-4'>
                        <legend className='ml-1 px-3 text-gray-400 capitalize'>
                            PAYE state
                        </legend>
                        <input type="text" placeholder='Lagos' name="" id="" className=' placeholder:text-gray-600' />
                        <img src="/assets/mobile/arrowdown.svg" alt="" />
                    </fieldset>


                    <fieldset className=' border border-gray-400 px-3 pb-2 rounded-2xl mt-4'>
                        <legend className='ml-1 px-3 text-gray-400 capitalize'>
                            PAYE ID
                        </legend>
                        <input type="text" placeholder='N-12565432' name="" id="" className=' placeholder:text-gray-600' />
                    </fieldset>


                    <fieldset className=' border border-gray-400 px-3 pb-2 rounded-2xl mt-4'>
                        <legend className='ml-1 px-3 text-gray-400 capitalize'>
                            NHF code
                        </legend>
                        <input type="text" placeholder='100667ZUHEG4' name="" id="" className=' placeholder:text-gray-600' />
                    </fieldset>


                    <fieldset className=' border border-gray-400 px-3 pb-2 rounded-2xl mt-4'>
                        <legend className='ml-1 px-3 text-gray-400 capitalize'>
                            website
                        </legend>
                        <input type="text" placeholder='www.website.com' name="" id="" className=' placeholder:text-gray-600' />
                    </fieldset>


                    <fieldset className=' border border-gray-400 px-3 pb-2 rounded-2xl mt-4'>
                        <legend className='ml-1 px-3 text-gray-400 capitalize'>
                            industry
                        </legend>
                        <input type="text" placeholder='Travel & Tourism' name="" id="" className=' placeholder:text-gray-600' />
                    </fieldset>
                </div>

                {/* action buttons */}
                <div className=' flex gap-3 mt-4'>
                    <p className=' flex-1 py-3 flex items-center justify-center border text-[#11453b] border-[#11453b] rounded-3xl'>
                        Cancel
                    </p>
                    <p className=' flex-1 py-3 bg-[#11453b] text-white flex items-center justify-center border rounded-3xl'>
                        Save
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile