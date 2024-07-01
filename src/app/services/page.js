import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import FooterSection from '@/components/footer/FooterSection'
import OurServices from '@/components/ourservices/OurServices'

const Services = () => {
    return (
        <div>
            <Navbar />

            <div className="min-h-screen ">
                <Head>
                    <title>Our Services </title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <OurServices/>
            </div>
         
            <FooterSection/>
        </div>
    )
}

export default Services