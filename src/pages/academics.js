"use client"
import FooterSection from '@/components/footer/FooterSection'
import Navbar from '@/components/navbar/Navbar'
import React, { useState } from 'react'
import Image from 'next/image'

const Academics = () => {
    const [activeCard, setActiveCard] = useState(null);

    const cards = [
        { 
            title: 'Post MD (Gen. Medicine) Fellowship in Rheumatology & immunology', 
            icon: '🎥', 
            color: 'bg-primary'
        },
        { 
            title: 'Ph.D Programme', 
            icon: '🩺', 
            color: 'bg-secondary'
        },
        { 
            title: 'Other Courses', 
            icon: '📅', 
            color: 'bg-accent'
        },
    ];

    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <main className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold text-center mb-12 text-base-content">Academics</h1>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`card shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer flex-grow basis-1/4 ${
                                    activeCard === index ? 'ring-4 ring-offset-2 ring-activeColor' : ''
                                }`}
                                onClick={() => setActiveCard(index)}
                            >
                                <div className="card-body items-center text-center">
                                    {/* <div className="text-6xl mb-4">{card.icon}</div> */}
                                    <h2 className="card-title">{card.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>

                    {activeCard !== null && (
                        <div className="mt-12 bg-base-100 p-6 rounded-box shadow-md">
                            {activeCard === 0 && (
                                <div>
                                    <h3 className="text-sm lg:text-md font-semibold mb-4">Post MD (Gen. Medicine) Fellowship in Rheumatology & immunology</h3>
                                    <div className=''>
                                      <Image src={`https://chanrericr.com/img/academycourse.jpg`} className="md:h-[80%] md:w-[50%] w-[100%] mx-auto" height={300} width={500}/>
                                    </div>
                                </div>
                            )}
                            {activeCard === 1 && (
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Ph.D Programme</h3>
                                    <p>Coming Soon...</p>
                                </div>
                            )}
                            {activeCard === 2 && (
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Other Courses</h3>
                                    <p>Coming Soon...</p>
                                </div>
                            )}
                        </div>
                    )}
                </main>
            </div>
            <FooterSection />
        </div>
    )
}

export default Academics
