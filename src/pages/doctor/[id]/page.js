
'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const DoctorProfile = () => {
  const router = useRouter();
  const  id  = router.query;

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch doctor data based on id
      // This is a placeholder, replace with actual API call
      fetchDoctorData(id);
    }
  }, [id]);

  const fetchDoctorData = (doctorId) => {
    console.log(doctorId)
   
    setTimeout(() => {
      setDoctor({
        id: doctorId,
        name: 'Dr. John Doe',
        photo: '/images/doctor1.jpg',
        qualification: 'MD, FACC',
        department: 'Cardiology',
        experience: '15 years',
        specializations: ['Interventional Cardiology', 'Echocardiography'],
        education: [
          { degree: 'MD', institution: 'Harvard Medical School', year: '2005' },
          { degree: 'Residency', institution: 'Mayo Clinic', year: '2008' },
          { degree: 'Fellowship', institution: 'Cleveland Clinic', year: '2010' },
        ],
        publications: [
          'Recent Advances in Cardiovascular Medicine, 2020',
          'Novel Approaches to Heart Failure Treatment, 2018',
        ],
        availability: [
          { day: 'Monday', time: '9:00 AM - 5:00 PM' },
          { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
          { day: 'Friday', time: '9:00 AM - 3:00 PM' },
        ],
      });
    }, 1000);
  };

  if (!doctor) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/doctors" className="btn btn-ghost mb-4">
        ← Back to Doctors List
      </Link>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/3">
          <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title text-3xl">{doctor.name}</h2>
          <p className="text-xl">{doctor.qualification}</p>
          <p className="text-lg text-gray-600">{doctor.department}</p>
          <p>Experience: {doctor.experience}</p>
          <div className="divider"></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Specializations</h3>
            <ul className="list-disc list-inside">
              {doctor.specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="space-y-2">
              {doctor.education.map((edu, index) => (
                <li key={index}>
                  <span className="font-medium">{edu.degree}</span> - {edu.institution}, {edu.year}
                </li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Publications</h3>
            <ul className="list-disc list-inside">
              {doctor.publications.map((pub, index) => (
                <li key={index}>{pub}</li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Availability</h3>
            <ul className="space-y-2">
              {doctor.availability.map((avail, index) => (
                <li key={index}>
                  <span className="font-medium">{avail.day}:</span> {avail.time}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;