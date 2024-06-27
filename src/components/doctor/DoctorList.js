'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FooterSection from '../footer/FooterSection';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  useEffect(() => {
    setDoctors([
      { id: 1, name: 'Dr. Chandrashekara .S', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MD, DNB, DM', photo: 'https://chanrericr.com/images/doctor/Chandrashekara.jpg' },
      { id: 2, name: 'Dr. Gaurang Deshpande', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, DM, MD', photo: 'https://chanrericr.com/images/doctor/gaurang.jpg' },
      { id: 3, name: 'Dr. Dhanashree Gavali', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, DNB (General Medicine)', photo: 'https://chanrericr.com/images/doctor/dhanashree.jpg' },
      { id: 4, name: 'Dr. Dr. Yogitha Chennupati', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, MD (General Medicine)', photo: 'https://chanrericr.com/images/doctor/yogitha.jpg' },
      { id: 5, name: 'Dr. Venkateswarlu D', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, MD (General Medicine)', photo: 'https://chanrericr.com/images/doctor/venkatesvarlu.JPG' },
      { id: 6, name: 'Dr. Dr.Nischitha', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, MD (General Medicine)', photo: 'https://chanrericr.com/images/doctor/nischita.jpg' },
      { id: 7, name: 'Dr. Robert Taylor', department: 'Gastroenterology', qualification: 'MD, FACG', photo: '/images/doctor7.jpg' },
      { id: 8, name: 'Dr. Jennifer Martinez', department: 'Endocrinology', qualification: 'MD, FACE', photo: '/images/doctor8.jpg' },
      { id: 9, name: 'Dr. William Anderson', department: 'Pulmonology', qualification: 'MD, FCCP', photo: '/images/doctor9.jpg' },
      { id: 10, name: 'Dr. Lisa Thompson', department: 'Gynecology', qualification: 'MD, FACOG', photo: '/images/doctor10.jpg' },
      { id: 11, name: 'Dr. James Wilson', department: 'Urology', qualification: 'MD, FACS', photo: '/images/doctor11.jpg' },
      { id: 12, name: 'Dr. Mary Roberts', department: 'Psychiatry', qualification: 'MD, FAPA', photo: '/images/doctor12.jpg' },
      { id: 13, name: 'Dr. Thomas Clark', department: 'Ophthalmology', qualification: 'MD, FACS', photo: '/images/doctor13.jpg' },
      { id: 14, name: 'Dr. Patricia White', department: 'Rheumatology', qualification: 'MD, FACR', photo: '/images/doctor14.jpg' },
      { id: 15, name: 'Dr. Christopher Lewis', department: 'Nephrology', qualification: 'MD, FASN', photo: '/images/doctor15.jpg' }
    ])

    setDepartments(['Rheumatology & Autoimmune Diseases','Oncology','Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics','Rheumatology','Ophthalmology','Nephrology']);
  }, []);

  const filteredDoctors = selectedDepartment
    ? doctors.filter(doctor => doctor.department === selectedDepartment)
    : doctors;

  return (
    <div>
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Doctors</h1>

      <div className="flex justify-center mb-8">
        <div className="join">
          <select 
            className="select select-bordered join-item"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <select 
            className="select select-bordered join-item"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {filteredDoctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
            ))}
          </select>
          <button className="btn join-item">Search</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map(doctor => (
          <motion.div
            key={doctor.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <figure className="px-10 pt-10">
              <img src={doctor.photo} alt={doctor.name} className="rounded-xl w-48 h-48 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{doctor.name}</h2>
              <p>{doctor.qualification}</p>
              <p className="text-sm text-gray-500">{doctor.department}</p>
              <div className="card-actions justify-end mt-4 text-white">
                <Link className="btn btn-sm bg-activeColor text-white" href={`/doctor/${doctor.id}`}>Visit Profile</Link>
                <button className="btn btn-sm bg-activeColor text-white">Book Appointment</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
    <FooterSection/>
    </div>
  );
};

export default DoctorsList;