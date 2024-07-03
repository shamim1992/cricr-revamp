// pages/our-services.js
"use client"
// pages/our-services.js

import Head from 'next/head'
import Image from 'next/image'

const services = [
  {
    title: "Rheumatology & Immunology",
    icon: "/icons/rheumatology.svg",
    description: "Specialized care for autoimmune and inflammatory disorders affecting joints, muscles, and connective tissues."
  },
  {
    title: "Allergy & Clinical Immunology",
    icon: "/icons/allergy.svg",
    description: "Comprehensive diagnosis and treatment of allergies, asthma, and other immunological disorders."
  },
  {
    title: "Reproductive Immunology, High-Risk Pregnancy & Infertility",
    icon: "/icons/reproductive.svg",
    description: "Expert care for complex reproductive issues, including recurrent pregnancy loss and infertility related to immune factors."
  },
  {
    title: "Physiotherapy & Rehabilitation",
    icon: "/icons/physiotherapy.svg",
    description: "Personalized physical therapy programs to restore function, reduce pain, and improve overall quality of life."
  },
  {
    title: "Joint Preservation and Restoration",
    icon: "/icons/joint.svg",
    description: "Advanced techniques to maintain joint health, prevent deterioration, and restore function in damaged joints."
  },
  {
    title: "Integrated Pain Management (IPM) Center",
    icon: "/icons/pain-management.svg",
    description: "Multidisciplinary approach to managing chronic pain, combining medical, psychological, and physical therapies."
  },
  {
    title: "Inpatient Services",
    icon: "/icons/inpatient.svg",
    description: "Comprehensive care for patients requiring hospitalization, with a focus on comfort and rapid recovery."
  },
  {
    title: "Food & Nutrition",
    icon: "/icons/nutrition.svg",
    description: "Tailored nutritional guidance and meal planning to support overall health and specific medical conditions."
  },
  {
    title: "Supporting Services",
    icon: "/icons/support.svg",
    description: "Additional healthcare services to complement your treatment, including lab work, imaging, and patient education."
  },
  {
    title: "24 hours in service",
    icon: "/icons/24-hours.svg",
    description: "Round-the-clock availability for emergencies and urgent care needs, ensuring continuous support for our patients."
  }
]

export default function OurServices() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Our Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-10">
        <h1 className="text-2xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* <figure className="px-10 pt-10">
                <Image src={service.icon} alt={service.title} width={64} height={64} />
              </figure> */}
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>


    </div>
  )
}