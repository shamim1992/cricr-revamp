"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/assets/img/chanrelogo.png'
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaOpencart } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Academics",
            url: "/academics"
        },
        {
            title: "R&D",
            url: "/rnd"
        },
        {
            title: "Doctor",
            url: "/doctor"
        },
        {
            title: "About Us",
            url: "/about"
        },
        {
            title: "Services",
            url: "/services"
        },
        {
            title: "News & Events",
            url: "/newsandevents"
        },
        {
            title: "Patient Corner",
            url: "/patientcorner"
        },
        {
            title: "Contact",
            url: "/contact"
        }
    ];

    return (
        <nav className=" shadow-md">
            <div className='header-top flex justify-between px-4 lg:px-24 py-2 items-center bg-activeColor text-white'>
                <div className='flex-1 text-center lg:text-left'>
                    <h2 className='text-xs md:text-sm'>Emergency: +91 8042516699</h2>
                </div>
                <div className='w-full flex-1 hidden lg:block'>
                    {/* <input type="text" placeholder='Search here...' className='p-2 text-sm rounded-2xl w-full' /> */}
                </div>
                <div className='flex-1 '>
                    <div className='float-end flex gap-2 justify-center'>
                        <div><FaFacebook className='lg:h-5 lg:w-5 h-4 w-4' /></div>
                        <div><BsInstagram className='lg:h-5 lg:w-5 h-4 w-4' /></div>
                        <div><FaLinkedin className='lg:h-5 lg:w-5 h-4 w-4' /></div>
                        <div><BsTwitter className='lg:h-5 lg:w-5 h-4 w-4' /></div>
                    </div>
                </div>
            </div>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    <div className="flex-shrink-0 flex items-center">
                     <Link href={`/`}><Image
                            src={logo}
                            className='h-auto w-auto'
                            alt='logo'
                            priority // Add this line
                        /></Link>   
                    </div>
                    <div className="hidden lg:flex items-center justify-between flex-1 ml-12">
                        <div className="flex justify-center ">
                            {navItems.map((item, index) => (
                                <Link key={index} href={item.url} className="px-3 py-2 text-md font-medium text-gray-700 hover:text-white hover:bg-hoverColor rounded-md transition duration-300">
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md bg-activeColor hover:bg-hoverColor transition duration-300 text-md font-medium">
                                Appointment
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item, index) => (
                            <a key={index} href={item.url} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700  hover:bg-blue-600">
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-5">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium  bg-blue-600 bg-blue-700">
                                Appointment
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar