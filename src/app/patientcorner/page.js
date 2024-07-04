"use client"
import FooterSection from '@/components/footer/FooterSection'
import Navbar from '@/components/navbar/Navbar'
import React, { useState } from 'react'

// Import or create your components
import PatientAwarenessVideo from '@/components/patientCorner/PatientAwarenessVideo'
import SymptomChecker from '@/components/patientCorner/SymptomChecker'
import Appointment from '@/components/patientCorner/Appointment'
import Blogs from '@/components/blog/BlogPage'

const PatientCorner = () => {
    const [activeCard, setActiveCard] = useState(null);

    const cards = [
        { 
            title: 'Patient Awareness Video', 
            icon: '🎥', 
            color: 'bg-primary',
            component: PatientAwarenessVideo
        },
        { 
            title: 'Symptom Checker', 
            icon: '🩺', 
            color: 'bg-secondary',
            component: SymptomChecker
        },
        { 
            title: 'Appointment', 
            icon: '📅', 
            color: 'bg-accent',
            component: Appointment
        },
        { 
            title: 'Blogs', 
            icon: '📝', 
            color: 'bg-info',
            component: Blogs
        },
    ];

    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <main className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold text-center mb-12 text-base-content">Patient Corner</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`card shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                                    activeCard === index ? 'ring-4 ring-offset-2 ring-activeColor' : ''
                                }`}
                                onClick={() => setActiveCard(index)}
                            >
                                <div className="card-body items-center text-center">
                                    <div className="text-6xl mb-4">{card.icon}</div>
                                    <h2 className="card-title">{card.title}</h2>
                                    <p className="mt-2 opacity-80">Click to explore</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {activeCard !== null && (
                        <div className="mt-12 bg-base-100 p-6 rounded-box shadow-lg">
                            {/* <h3 className="text-2xl font-semibold mb-4">{cards[activeCard].title}</h3> */}
                            {React.createElement(cards[activeCard].component)}
                        </div>
                    )}
                </main>
            </div>
            <FooterSection />
        </div>
    )
}

export default PatientCorner