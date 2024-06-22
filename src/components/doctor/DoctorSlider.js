"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

const doctors = [
  { name: "Dr. Jane Smith", specialty: "Cardiologist", image: "https://chanrericr.com/images/doctor/mdoc.jpg" },
  { name: "Dr. John Doe", specialty: "Neurologist", image: "https://chanrericr.com/images/doctor/mdoc.jpg" },
  { name: "Dr. Emily Brown", specialty: "Pediatrician", image: "https://chanrericr.com/images/doctor/mdoc.jpg" },
  { name: "Dr. Michael Lee", specialty: "Oncologist", image: "https://chanrericr.com/images/doctor/mdoc.jpg" },
  { name: "Dr. Sarah Johnson", specialty: "Dermatologist", image: "https://chanrericr.com/images/doctor/mdoc.jpg" },
  { name: "Dr. Robert Chen", specialty: "Orthopedic Surgeon", image: "https://chanrericr.com/images/doctor/mdoc.jpg" },
  { name: "Dr. Lisa Wong", specialty: "Ophthalmologist", image: "https://chanrericr.com/images/doctor/mdoc.jpg" },
  { name: "Dr. David Martinez", specialty: "Psychiatrist", image: "https://chanrericr.com/images/doctor/mdoc.jpg" },
  { name: "Dr. Emma Taylor", specialty: "Gynecologist", image: "https://chanrericr.com/images/doctor/mdoc.jpg" },
];

const DoctorCard = ({ doctor }) => (
  <div className="card w-full bg-base-100 shadow-xl glass">
    <figure className="px-10 pt-10">
      <img src={doctor.image} alt={doctor.name} width={200} height={200} className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{doctor.name}</h2>
      <p>{doctor.specialty}</p>
      <div className="card-actions">
        <button className="btn  btn-sm">View Profile</button>
        <button className="btn  btn-sm">Book Appointment</button>
      </div>
    </div>
  </div>
);

const DoctorSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(doctors.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className=" mx-auto px-4 py-8 bg-activeColor">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Doctors</h2>
      
      <div className="carousel w-full">
        <div className="carousel-item relative w-full">
          <div className="flex flex-col md:flex-row justify-center w-full gap-4 px-4 md:px-8">
            {doctors.slice(currentSlide * cardsPerSlide, (currentSlide + 1) * cardsPerSlide).map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={prevSlide} className="btn btn-circle">❮</button> 
            <button onClick={nextSlide} className="btn btn-circle">❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSlider;