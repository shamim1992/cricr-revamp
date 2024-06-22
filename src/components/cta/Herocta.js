"use client"
import React from 'react';
import Image from 'next/image';
import { FaHospital, FaUserMd, FaAmbulance } from 'react-icons/fa';
import sitelogo from '../../../public/assets/images/doctor/nopics.jpg'

const Herocta = () => {
  const services = [
    {
      icon: <FaHospital className="text-4xl text-blue-600" />,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services for immediate medical attention."
    },
    {
      icon: <FaUserMd className="text-4xl text-blue-600" />,
      title: "Expert Physicians",
      description: "Highly qualified doctors specializing in various medical fields."
    },
    {
      icon: <FaAmbulance className="text-4xl text-blue-600" />,
      title: "Ambulance Service",
      description: "Quick and efficient ambulance service for emergencies."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-t-activeColor border-t-2 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg">
              <div className="flex items-center text-activeColor justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-activeColor ">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:flex-shrink-0">
              <Image 
              className="object-cover"
                src={sitelogo} // Replace with your image path
                alt="Hospital Building"
                width={400}
                height={300}
                objectFit="cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">About Us</h3>
              <p className="text-gray-600 mb-4">
              CRICR was established on 12th Dec 2002 by Dr. Chandrashekara. S Rheumatologist. A unique one of its kind hospital in India, dedicated for management of patients suffering from Rheumatic Diseases (Musculoskeletal) and other Immunological diseases. It provides under one roof, a complete care to the patients suffering from Arthritis and other Immunological Diseases such as Immune-Deficiency Disorders, Allergic Disorders and Immuno-hematological disorders. This center is a tertiary reference facility.
              </p>
              <p className="text-gray-600 mb-4">CRICR has created a newly established infrastructure with modern and improved additional facilities with the amenities to accommodate more associated specialties and sub-specialties for the benefit of patients with a vision to deliver the best in the field of immunology & rheumatology. The new facility is fully equipped with modern technologies and it is aimed at providing a comprehensive specialty approach with in-patient, emergency and cutting-edge research facilities.</p>
              <a href="/facilities" className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herocta;