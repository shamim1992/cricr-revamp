import FooterSection from '@/components/footer/FooterSection'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import pic1 from '../../../public/assets/img/Picture1.png'
import Image from 'next/image'

const Rnd = () => {

  const affiliations = [
    {
      id: 1,
      name: "Dr. Srinivas V. Kaveri",
      affiliation: "Director, CNRS Office in India, Embassy of France, New Delhi"
    },
    {
      id: 2,
      name: "Dr. K.M. Mahendranath",
      affiliation: "Senior Consultant Rheumatologist, Samarpan Health Centre, Arthritis & Rheumatology Clinic, Bengaluru"
    },
    {
      id: 3,
      name: "Dr. Ramnath Misra",
      affiliation: "Professor & Head, Clinical Immunology, Kalinga Institute of Medical Sciences (KIMS), Bhubaneswar"
    },
    {
      id: 4,
      name: "Prof. Dr. Jyotirmay Biswas",
      affiliation: "Director, Uveitis & Ocular Pathology Department, Sankara Nethralaya, Chennai"
    },
    {
      id: 5,
      name: "Dr. C. Renuka",
      affiliation: "Additional Director – R&D, ChanRe Rheumatology & Immunology Center & Research, Bengaluru"
    },
    {
      id: 6,
      name: "Prof. Dr. S. Chandrashekara",
      affiliation: "Director – R&D, ChanRe Rheumatology & Immunology Center & Research, Bengaluru"
    }
  ];
  return (
    <div>
      <Navbar />
      <div className='px-6 lg:px-28 mb-6'>
        <div className=''>
          <div className='flex flex-col lg:flex-row justify-around items-center py-10 gap-6 text-center'>
            <div>
              <h2 className='text-xl font-bold'>R&D Director</h2>
              <h3>Dr. S. Chandrashekara (MBBS, MD, DNB, DM)</h3>
            </div>
            <div>
              <h2 className='text-xl font-bold'>Additional R&D Director</h2>
              <h3>Dr. P. Renuka (MBBS, DCP, DNB)</h3>
            </div>
          </div>
          <p className='pb-4'>Established on 12 December 2002, ChanRe Rheumatology & Immunology Center & Research is a unique kind of hospital in India dedicated for management of patients suffering from rheumatic and other immunological diseases. It is a renowned centre for excellence in autoimmune disease research and has the honor of being a partner of India AMR Innovation Hub and a key member in the National Consortium for Research on Autoimmune Diseases that of NATRAD alliance (National Alliance for Translational Research in Autoimmune Diseases) under DBT, Govt. of India.</p>
          <p className='pb-4'>We have established a research facility in our medical center with special focus in auto-immune diseases in broader area like basic, diagnostic, biomodelling, clinical, translational, and therapeutic, with an emphasis on innovation, advancing technologies, early diagnosis and better therapeutics for autoimmune diseases. We focus on data collection from patient charts, sample collection and processing, retrospective and prospective studies. We have been working on these lines for over 20 years now and recently we have started venturing into research on Healthcare in Artificial Intelligence (AI). To add, we are a non-commercial purely research-based R&D to support scientific advancements and student, faculty training centre for development of research personnel.</p>
          <p className='pb-4'>Our R&D is presently a team of 21 members and in the future, we envisage to expand our R&D program and enter the mainstream of national research programs strengthening the research outcomes in research on autoimmune diseases, artificial intelligence aiding patient healthcare and better decision making on patient diseases.</p>
        </div>
        <div>
          <h1 className='text-xl font-bold'>Research Advisory Board</h1>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="text-center font-bold">Sl. No.</th>
                  <th className="text-center font-bold">Name</th>
                  <th className="text-center font-bold">Affiliation</th>
                </tr>
              </thead>
              <tbody>
                {affiliations.map((affiliation) => (
                  <tr key={affiliation.id}>
                    <td className="text-center">{affiliation.id}</td>
                    <td>{affiliation.name}</td>
                    <td>{affiliation.affiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className='text-center text-xl font-bold py-6'>Our R & D Collaborator</h2>
          <div className='card'>
                <Image src={pic1} alt='collaborator' className='h-96 w-96 mx-auto shadow-lg p-4 rounded-xl'/>
          </div>
          
        </div>
      </div>

      <FooterSection />
    </div>
  )
}

export default Rnd