import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout'

const index = () => {
  return (
    <div>
        <Head>
            <title>
                Eazipay - Compliance
            </title>
        </Head>

        <Layout>
            <div className='hidden md:flex bg-[#f2f1f1] h-full p-10 lg:px-20 xl:px-32'>
                Compliance
            </div>
        </Layout>
    </div>
  )
}

export default index