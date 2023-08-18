import React from 'react'
import Head from 'next/head'
import Footer from '../../components/landing/footer/Footer'
import Contact from '../../components/landing/contact/Contact'
import Hero from '../../components/landing/hero/Hero'
import Cards from '../../components/landing/cards/Cards'
import Infographic from '../../components/landing/infographic/Infographic'
import Free from '../../components/landing/free/Free'

const Home = () => {
  return (
    <div className=' hidden md:flex flex-col'>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>Easipay - Run your payroll easily in seconds</title>
            <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        </Head>

        {/* top section */}
        <Hero />

        {/* middle section */}
        <Cards />
        {/* end of middle section */}


        {/* how it works */}
        <Infographic />
        {/* end of how it works */}


        {/* free forever */}
        <Free />
        {/* end of free forever */}

        
        {/* contact section */}
        <Contact />
        {/* end of contact section */}


        {/* footer section */}
        <Footer />
    </div>
  )
}

export default Home