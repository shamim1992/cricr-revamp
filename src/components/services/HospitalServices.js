"use client"
import React, { useState, useEffect } from 'react';
import { BsUiChecksGrid } from "react-icons/bs";
import { FaThList, FaHeartbeat, FaAllergies, FaBone, FaPrescription, FaBaby, FaYinYang, FaRunning, FaLungs } from 'react-icons/fa';

const services = [
  { name: 'Rheumatology & Immunology', icon: FaHeartbeat, color: 'bg-transparent', description: 'Specialized care for autoimmune and inflammatory disorders.' },
  { name: 'Immuno Deficiency', icon: FaLungs, color: 'bg-transparent', description: 'Treatment for disorders affecting the immune system.' },
  { name: 'Joint Preservation and Restoration', icon: FaBone, color: 'bg-transparent', description: 'Advanced techniques to preserve and restore joint function.' },
  { name: 'Integrated Pain Management (IPM)', icon: FaPrescription, color: 'bg-transparent', description: 'Comprehensive approach to managing chronic pain.' },
  { name: 'Reproductive Immunology & High Risk Pregnancy', icon: FaBaby, color: 'bg-transparent', description: 'Specialized care for complex pregnancies and fertility issues.' },
  { name: 'Allergy', icon: FaAllergies, color: 'bg-transparent', description: 'Diagnosis and treatment of various allergic conditions.' },
  { name: 'Physiotherapy', icon: FaRunning, color: 'bg-transparent', description: 'Rehabilitation services to improve mobility and function.' },
  { name: 'Yoga Therapy', icon: FaYinYang, color: 'bg-transparent', description: 'Therapeutic application of yoga for health and wellness.' },
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card shadow-md ${service.color} border-2 border-activeColor cursor-pointer transform transition-all duration-300 hover:scale-105`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-body text-black ">
        <h2 className="card-title flex items-center">
          <service.icon className="mr-2" size={24} />
          {service.name}
        </h2>
        {isHovered && (
          <p className="mt-2 text-sm">
            {service.description}
          </p>
        )}
      </div>
    </div>
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
    <section className="py-16 bg-white px-24">
      <div className=" mx-auto px-4">
        <h1 className="text-3xl text-activeColor font-bold text-center mb-8">Our Services</h1>
        <div className="flex justify-end mb-4">
          <button
            className="btn btn-sm"
            onClick={() => setIsGridView(!isGridView)}
          >
            {isGridView ? <FaThList /> : <BsUiChecksGrid />}
          </button>
        </div>
        <div
          className={`grid gap-6 ${
            isGridView ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
          }`}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalServices;