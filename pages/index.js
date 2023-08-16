import Head from 'next/head'
import Layout from '../components/Layout'
import Dashboard from '../components/dashboard/Dashboard'
import MobileDashboard from '../components/mobile/dashboard/MobileDashboard'

// import React from 'react'

export default function Home({children}) {
  return (
    <div className=' bg-gray-100 h-full'>
      <Head>
        <title>
          Eazipay
        </title>
      </Head>

      <Layout>
        <div className='hidden md:flex p-10 lg:px-20 xl:px-32'>
          <Dashboard />
        </div>
        <div className=' md:hidden'>
          <MobileDashboard />
        </div>
      </Layout>
      
    </div>
  )
}
