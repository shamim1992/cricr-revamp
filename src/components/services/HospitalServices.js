"use client"
import React, { useState, useEffect } from 'react';
import { BsUiChecksGrid } from "react-icons/bs";
import { FaThList, FaHeartbeat, FaAllergies, FaBone, FaPrescription, FaBaby, FaYinYang, FaRunning, FaLungs } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { name: 'Rheumatology & Immunology', icon: FaHeartbeat, color: 'bg-red-100', description: 'The Rheumatology and immunology department is one of its kind specialty clinic spearheaded by experienced immunologist and rheumatologists' },
  { name: 'Immuno Deficiency', icon: FaLungs, color: 'bg-blue-100', description: 'The department is conceptualized to provide high quality and compassionate care for patients with Immunodeficiency syndromes.' },
  { name: 'Joint Preservation and Restoration', icon: FaBone, color: 'bg-green-100', description: 'This is an integrated consultation system,providing orthopedic expertise for preservation and restoration of joints.' },
  { name: 'Integrated Pain Management (IPM)', icon: FaPrescription, color: 'bg-yellow-100', description: 'Pain is the most common and challenging symptom for all musculoskeletal disorders.' },
  { name: 'Reproductive Immunology & High Risk Pregnancy', icon: FaBaby, color: 'bg-pink-100', description: 'Specialized care for complex pregnancies and fertility issues.' },
  { name: 'Allergy', icon: FaAllergies, color: 'bg-purple-100', description: 'Allergic respiratory disorders in particular asthma and respiratory tract infections are increasing in the developed and in developing countries.' },
  { name: 'Physiotherapy', icon: FaRunning, color: 'bg-indigo-100', description: 'Our Physiotherapy & Rehabilitation center provides a full range of services to help patients prevent injury and disease, recover function and strength, and reduce pain.' },
  { name: 'Yoga Therapy', icon: FaYinYang, color: 'bg-teal-100', description: 'Yoga therapy is the traditional way to heal your body through meditation.' },
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`card shadow-lg ${service.color}  cursor-pointer overflow-hidden`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-body ">
        <h2 className="card-title flex items-center text-xl font-semibold">
          <service.icon className="mr-3 text-2xl text-blue-600" />
          {service.name}
        </h2>
        <motion.p
          className="mt-3 text-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          {service.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const HospitalServices = () => {
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsGridView(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-activeColor font-bold text-center mb-12">Our Services</h1>
        {/* <div className="flex justify-end mb-6">
          <button
            className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => setIsGridView(!isGridView)}
          >
            {isGridView ? <FaThList className="mr-2" /> : <BsUiChecksGrid className="mr-2" />}
            {isGridView ? 'List View' : 'Grid View'}
          </button>
        </div> */}
        
        <motion.div
          className={`grid gap-6 ${
            isGridView ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              service={service}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HospitalServices;