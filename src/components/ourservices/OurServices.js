// pages/our-services.js
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { 
    id: 1, 
    name: 'Rheumatology & Immunology', 
    icon: '🦴', 
    description: 'Comprehensive care for arthritis, autoimmune diseases, and over 200 related conditions.',
    details: `
      Rheumatologists treat arthritis, autoimmune diseases, pain disorders affecting joints, and osteoporosis. 
      There are more than 200 types of these diseases, including rheumatoid arthritis, osteoarthritis, gout, 
      lupus, back pain, osteoporosis, and tendinitis.

      Our expertise covers:
      - Degenerative arthropathies (e.g., Osteoarthritis)
      - Inflammatory arthropathies (e.g., Rheumatoid arthritis, Spondyloarthropathies)
      - Systemic conditions and connective tissue diseases (e.g., Lupus, Sjögren's syndrome)
      - Soft tissue rheumatism
      - Immunodeficiency disorders

      We provide state-of-the-art treatments for complex conditions such as vasculitis, hereditary periodic 
      fever syndromes, and rare autoimmune disorders.
    `
  },
  { id: 2, name: 'Cardiology', icon: '❤️', description: 'Advanced cardiac care with the latest interventional techniques.' },
  { id: 3, name: 'Neurology', icon: '🧠', description: 'Expert care for disorders of the nervous system.' },
  { id: 4, name: 'Oncology', icon: '🎗️', description: 'Comprehensive cancer care and innovative treatments.' },
  { id: 5, name: 'Pediatrics', icon: '👶', description: 'Specialized care for infants, children, and adolescents.' },
  { id: 6, name: 'Orthopedics', icon: '🦿', description: 'Cutting-edge treatments for musculoskeletal conditions.' },
];

const ExpandedServiceView = ({ service, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-base-100 p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <span className="text-5xl mr-3">{service.icon}</span>
          {service.name}
        </h2>
        <div className="prose max-w-none">
          {service.details ? (
            service.details.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))
          ) : (
            <p>{service.description}</p>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function OurServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Premium Services - Elite Care Hospital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-3xl font-bold text-center mb-12 text-activeColor "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="card-body">
                <h2 className="card-title text-xl font-bold flex items-center">
                  <span className="text-2xl mr-2">{service.icon}</span>
                  {service.name}
                </h2>
                <p className="text-md">{service.description}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn  btn-outline outline-activeColor hover:bg-hoverColor">Learn More</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedService && (
            <ExpandedServiceView 
              service={selectedService} 
              onClose={() => setSelectedService(null)} 
            />
          )}
        </AnimatePresence>

 

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-6">Ready to Experience Elite Care?</h2>
          <p className="text-md mb-8">
            Our concierge team is available 24/7 to assist you with any inquiries 
            and to schedule your premium healthcare experience.
          </p>
          <button className="btn btn-sm">Contact Our Concierge</button>
        </motion.div>
      </main>
    </div>
  );
}