'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FooterSection from '../footer/FooterSection';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorForAppointment, setDoctorForAppointment] = useState(null);

  useEffect(() => {
    setDoctors([
      { id: 1, name: 'Dr. Chandrashekara .S', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MD, DNB, DM', photo: 'https://chanrericr.com/images/doctor/Chandrashekara.jpg' },
      { id: 2, name: 'Dr. Gaurang Deshpande', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, DM, MD', photo: 'https://chanrericr.com/images/doctor/gaurang.jpg' },
      { id: 3, name: 'Dr. Dhanashree Gavali', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, DNB (General Medicine)', photo: 'https://chanrericr.com/images/doctor/dhanashree.jpg' },
      { id: 4, name: 'Dr. Yogitha Chennupati', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, MD (General Medicine)', photo: 'https://chanrericr.com/images/doctor/yogitha.jpg' },
      { id: 5, name: 'Dr. Venkateswarlu D', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, MD (General Medicine)', photo: 'https://chanrericr.com/images/doctor/venkatesvarlu.JPG' },
      { id: 6, name: 'Dr. Nischitha', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, MD (General Medicine)', photo: 'https://chanrericr.com/images/doctor/nischita.jpg' },
      { id: 7, name: 'Dr. Moturi Gana Sai Krishna', department: 'Rheumatology & Autoimmune Diseases', qualification: 'MBBS, MD (General Medicine)', photo: 'https://chanrericr.com/images/doctor/moturi.jpg' },
      { id: 8, name: 'Dr. Smitha J N Singh', department: 'Allergy & Clinical Immunology', qualification: 'MD (Physiology)', photo: 'https://chanrericr.com/images/doctor/smitha.jpg' },
      { id: 9, name: 'Dr. Chaitra S Nirantara', department: 'Reproductive immunology & High risk pregnancy', qualification: 'MBBS, MS OBG, DNB, PGDMLE', photo: 'https://chanrericr.com/images/doctor/dr-chaitra.jpg' },
      { id: 10, name: 'Ms Yogarani', department: 'Physiotherapy & Chronic pain Management', qualification: 'BPT, Dip(Acu) ,DNT', photo: 'https://chanrericr.com/images/doctor/yogarani.jpg' },
      { id: 11, name: 'Dr. Wiquar Ahmed', department: 'Physiotherapy & Chronic pain Management', qualification: 'MBBS, DA, FIPM, CIPS(USA) Consultant Anaesthesiologist & Interventional Pain Specialist', photo: 'https://chanrericr.com/images/doctor/wiquar.jpg' },
      { id: 12, name: 'Dr. Usharani', department: 'Ophthalmology', qualification: 'MBBS, DOMS (Fellowship in Glaycoma) (Consultant Ophthalmologist)', photo: 'https://chanrericr.com/images/doctor/nopics.jpg' },
      { id: 13, name: 'Dr. Shivanand N D', department: 'Radiology', qualification: 'MBBS, DMRD (Consultant Radiologist)', photo: 'https://chanrericr.com/images/doctor/nopics.jpg' },
      { id: 14, name: 'Dr. Shivakumar S M', department: 'Radiology', qualification: 'MBBS,DMRD (Consultant Radiologist)', photo: 'https://chanrericr.com/images/doctor/nopics.jpg' },
      { id: 15, name: 'Dr. Nagesh M B', department: 'Cardiology', qualification: 'MBBS, DIP CARD', photo: 'https://chanrericr.com/images/doctor/nagesh.jpg' },
      { id: 16, name: "Dr. Vinod Nagesh", department: "Nephrology", qualification: "MD, DM (Nephrology)", photo: "https://chanrericr.com/images/doctor/vinod.jpeg" },
      { id: 17, name: "Dr. Ramesh R", department: "Pulmonology", qualification: "MBBS, DTCD", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 18, name: "Dr. Arjun A S", department: "Pulmonology", qualification: "MBBS, MD (Respiratory Medicine)", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 19, name: "Dr. Chandrashekar A R", department: "Vascular Surgeon", qualification: "MS, FIVS, FVES, FIES", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 20, name: "Dr. Tejamurthy B V", department: "ENT", qualification: "MBBS, MS", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 21, name: "Dr. Chandrashekar M", department: "Psychiatry", qualification: "MBBS, MD, MS, DNB", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 22, name: "Dr. Adarsh B", department: "Psychiatry", qualification: "MBBS, MD", photo: "https://chanrericr.com/images/doctor/dr-adarsh.jpg" },
      { id: 23, name: "Dr. Abhijith B R", department: "Gastroenterology", qualification: "MBBS, MD DM", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 24, name: "Dr. Nagendra K", department: "General Surgery", qualification: "MBBS, MS", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 25, name: "Dr. Manojith S S", department: "General Surgery", qualification: "MBBS, MS, FSGE", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 26, name: "Dr. Dilip Bharadwaj", department: "Dental", qualification: "BDS", photo: "https://chanrericr.com/images/doctor/dilip.jpg" },
      { id: 27, name: "Dr. Nagarajaiah Narayanaswamy", department: "Urology", qualification: "MBBS, MS, MCH (Urology)", photo: "https://chanrericr.com/images/doctor/nagarajaiah.jpg" },
      { id: 28, name: "Dr. Balasubramanyam", department: "Orthopaedics", qualification: "MBBS, MS", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 29, name: "Dr. Venu Madhav", department: "Orthopaedics", qualification: "MS Ortho, Fellow-Joint Replacement Surgery", photo: "https://chanrericr.com/images/doctor/venu.jpg" },
      { id: 30, name: "Dr. C. B. Prabhu (Knee & Large Joints)", department: "Orthopaedics", qualification: "D'Ortho, DNB, FAO, AOAA", photo: "https://chanrericr.com/images/doctor/prabhu.jpg" },
      { id: 31, name: "Dr. Darshan Kumar A Jain", department: "Orthopaedics", qualification: "MBBS, MS Ortho, SNB", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 32, name: "Dr. Kodlady Surendar Shetty", department: "Orthopaedics", qualification: "MBBS, D' ORTHO", photo: "https://chanrericr.com/images/doctor/nopics.jpg" },
      { id: 33, name: "Ms. Dhanalakshmi N", department: "Counsellor", qualification: "M.Sc. Clinical Psychology", photo: "https://chanrericr.com/images/doctor/dhanalakshmi.jpg" },
      { id: 34, name: "Dr. Sandesh S Biradar", department: "Yoga", qualification: "BNYS, PgC.Acu.", photo: "https://chanrericr.com/images/doctor/sandesh.jpg" }
    ]);

    setDepartments(['Rheumatology & Autoimmune Diseases', 'Allergy & Clinical Immunology', 'Reproductive immunology & High risk pregnancy', 'Physiotherapy & Chronic pain Management', 'Ophthalmology', 'Radiology', 'Cardiology', 'Nephrology', 'Pulmonology', 'Vascular Surgeon', 'ENT', 'Psychiatry', 'Gastroenterology', 'General Surgery', 'Dental', 'Urology', 'Orthopaedics', 'Yoga']);
  }, []);

  const filteredDoctors = selectedDepartment
    ? doctors.filter(doctor => doctor.department === selectedDepartment)
    : doctors;

  const displayedDoctors = selectedDoctor
    ? doctors.filter(doctor => doctor.id === parseInt(selectedDoctor))
    : filteredDoctors;

  const openModal = (doctor) => {
    setDoctorForAppointment(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setDoctorForAppointment(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8">Our Doctors</h1>

        <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <select 
            className="select select-bordered w-full sm:w-auto"
            value={selectedDepartment}
            onChange={(e) => {
              setSelectedDepartment(e.target.value);
              setSelectedDoctor('');
            }}
          >
            <option value="">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <select 
            className="select select-bordered w-full sm:w-auto"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {filteredDoctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
            ))}
          </select>
          <button 
            className="btn w-full sm:w-auto"
            onClick={() => {
              setSelectedDepartment('');
              setSelectedDoctor('');
            }}
          >
            Reset
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDoctors.map(doctor => (
            <motion.div
              key={doctor.id}
              className="card bg-base-100 shadow-md hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <figure className="px-4 sm:px-6 pt-6">
                <img src={doctor.photo} alt={doctor.name} className="rounded-xl w-32 h-32 sm:w-40 sm:h-40 object-cover" />
              </figure>
              <div className="card-body items-center text-center p-4 sm:p-6">
                <h2 className="card-title text-lg sm:text-xl">{doctor.name}</h2>
                <p className="text-sm">{doctor.qualification}</p>
                <p className="text-xs sm:text-sm text-gray-500">{doctor.department}</p>
                <div className="card-actions justify-center mt-4 text-white w-full">
                  <Link className="btn btn-sm bg-activeColor text-white w-full sm:w-auto" href={`/doctor/${doctor.id}`}>Visit Profile</Link>
                  <button 
                    className="btn btn-sm bg-activeColor text-white w-full sm:w-auto mt-2 sm:mt-0"
                    onClick={() => openModal(doctor)}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <FooterSection />

      {isModalOpen && doctorForAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-md font-semibold mb-4">Book Appointment with {doctorForAppointment.name}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="patientName">Name</label>
                <input className="input input-bordered w-full" type="text" id="patientName" name="patientName" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="patientEmail">Email</label>
                <input className="input input-bordered w-full" type="email" id="patientEmail" name="patientEmail" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="patientContact">Contact</label>
                <input className="input input-bordered w-full" type="text" id="contact" name="contact" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="appointmentDate">Appointment Date</label>
                <input className="input input-bordered w-full" type="date" id="appointmentDate" name="appointmentDate" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="appointmentDate">Symptoms</label>
                <input className="input input-bordered w-full" type="text" id="symptoms" name="symptoms" />
              </div>
              <div className="flex justify-end">
                <button type="button" className="btn mr-2" onClick={closeModal}>Cancel</button>
                <button type="submit" className="btn bg-activeColor hover:outline hover:outline-activeColor hover:bg-hoverColor text-white">Book</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
