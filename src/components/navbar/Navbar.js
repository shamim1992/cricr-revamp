"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/assets/img/chanrelogo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        "Home", "Academics", "R&D", "Doctor", "About Us",
        "Services", "News & Events", "Patient Corner", "Contact"
    ];

    return (
        <nav className=" shadow-xl">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    <div className="flex-shrink-0 flex items-center">
                        <Image src={logo} className='h-12 w-52' alt='logo' />
                    </div>
                    <div className="hidden lg:flex items-center justify-between flex-1 ml-12">
                        <div className="flex justify-center ">
                            {navItems.map((item, index) => (
                                <a key={index} href="#" className="px-3 py-2 text-md font-medium text-gray-700 hover:text-white hover:bg-hoverColor rounded-md transition duration-300">
                                    {item}
                                </a>
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
                            <a key={index} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700  hover:bg-blue-600">
                                {item}
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