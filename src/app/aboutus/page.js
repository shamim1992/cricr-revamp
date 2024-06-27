import FooterSection from '@/components/footer/FooterSection'
import Navbar from '@/components/navbar/Navbar'
import RAVisualization from '@/components/rheumatoid/RAVisualization'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className='lg:px-32 px-6'>
        <p className='py-6'>ChanRe Rheumatology and Immunology Center and Research (CRICR) was established on 12th December 2002 by the renowned rheumatologist Dr. Chandrashekara S. It is a one-of-its-kind hospital in India, dedicated for the management of patients suffering from rheumatic diseases (musculoskeletal) and other immunological diseases. This is a tertiary reference facility providing complete care under one roof for the patients suffering from arthritis and other immunological diseases such as immunodeficiency disorders, allergic disorders, reproductive immunological disorders, immunohematological disorders etc.</p>
        <p>Over the years, CRICR has developed as a multispecialty center with modern and improved infrastructure including the amenities to accommodate more associated specialties and sub-specialties for the benefit of patients with a vision to deliver the best. Our facility is fully equipped with modern technologies, and it is aimed at providing a comprehensive specialty approach in the field of Immunology & Rheumatology with in-patient, emergency services, out-patient services, emergency ventilator support, minor procedure rooms, and cutting-edge research wing.</p>
        <h2 className='text-xl font-bold py-6'>Specialists & Consultants</h2>
        <p>The center offers patient-centric services through the following departments:</p>
        <ol className="list-decimal pl-4 py-6">
          <li>Clinical immunology </li>
          <li>Allergy</li>
          <li>Immunodeficiency</li>
          <li>Reproductive immunology</li>
          <li> Integrated soft tissue and chronic pain management</li>
          <li>Joint preservation and restoration</li>
          <li>Physiotherapy</li>
        </ol>
        <p className='pb-6'>The existing departments also provides counselling on orthotics, diet, nutrition, obesity and lifestyle. Diverse investigational facilities available include X-ray, soft tissue ultrasound, pulmonary function test (PFT), nerve conduction studies (NCS), Doppler and home blood sample collection. At CRICR, the service of a qualified resident inhouse doctor is available for 24/7 hours. The patient care and emergency services are supported by experienced receptionists, nursing, paramedics, housekeeping and security personnel.</p>
        <p className="pb-6">Over the years, CRICR has also developed into a reputed academic institute with the introduction of basic research, clinical trials, and fellowship and training programs in Rheumatology & Immunology, with the publication of a few Journals and Department of Research Assist and other supportive educational initiatives.</p>
        <p className="pb-6">The institute has recently expanded its Post MD Fellowship in Immunology & Rheumatology programme to a full time 2 years course. Faculties and students have published several papers. Some of the scientific projects conducted by the fellowship students of the institute in the past 12 years have been translated into several publications in national and international journals.</p>
        <p className="pb-6">Institute has published 7 volumes of physician reference books on Managing Rheumatoid Arthritis: Question & Answer. These books have undergone reprints and widely distributed receiving critical review from physicians referring to them. The institute has also published other reference books related to Rheumatology and different branches of medicine authored by our consultants.</p>
        <p className="pb-6">CRICR is continuously involved in the Society of Inflammation Research, a national level platform for inflammation scientists and practicing clinicians for the development of Inflammation Research.</p>
        <p className="pb-6">Recently, CRICR has initiated an interactive patient and care-givers awareness sessions involving more than 25 people at each session. Such monthly awareness discussions are conducted by our team of experts including consultants, physiotherapists, psychologist and dietician.</p>
        <p className="pb-6">We are also conducting the patients awareness programmes as internet-based weekly virtual sessions through YouTube / Facebook for wider dissemination of knowledge relating to immunological diseases among public and patient groups.</p>
        <p className="pb-6">As a stepping stone towards better standardization, the institute has started the process of accreditation to NABH by standardizing all the protocols .</p>
      </div>
      <RAVisualization/>
      <FooterSection />
    </div>
  )
}

export default AboutUs