"use client";

import React from 'react';
import Image from 'next/image';
import { FaHospital, FaUserMd, FaApple, FaGooglePlay, FaAmbulance } from 'react-icons/fa';
import sitelogo from '../../../public/assets/images/doctor/nopics.jpg';

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
    <section className="py-16 mt-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-t-activeColor border-t-2 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg">
              <div className="flex items-center text-activeColor justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-activeColor">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-100 rounded-lg p-8 bg-hoverColor">
          <h2 className="text-3xl text-white font-bold text-center mb-6">Download Intouch App</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Image src={sitelogo} alt="Intouch App" width={200} height={200} className="rounded-lg shadow-md" />
            <div className="text-center text-white md:text-left">
              <p className="text-lg mb-4">Get instant access to our medical services with our Intouch app. Book appointments, consult doctors, and manage your health records all in one place.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
                  <FaApple className="text-2xl" />
                  Download for iOS
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
                  <FaGooglePlay className="text-2xl" />
                  Download for Android
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herocta;