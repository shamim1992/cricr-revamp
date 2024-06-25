"use client"
import FooterSection from '@/components/footer/FooterSection'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import pic1 from '../../../public/assets/img/Picture1.png'
import pic2 from '../../../public/assets/img/Picture2.png'
import pic3 from '../../../public/assets/img/Picture3.png'
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
            <Image src={pic1} alt='collaborator' className='h-auto w-full lg:w-[50%] mx-auto shadow-lg p-4 rounded-xl' />
          </div>
        </div>

        <div>
          <h2 className='text-center text-xl font-bold py-6'>Clinical research</h2>
          <p>We have a full-fledged clinical research facility that works on conducting clinical trials. We have successfully completed several projects in the past, all of which are enlisted in the Clinical Trials Registry of India (CTRI) and have some in the pipeline as well. Few of the organizations with whom we have associated in the past</p>

        </div>

        <div>

          <div className='card'>
            <Image src={pic2} alt='collaborator' className='h-auto w-full lg:w-[70%] mx-auto shadow-lg p-4 rounded-xl' />
          </div>
          <h2 className='text-center text-xl font-bold py-6'>Ongoing Project</h2>
          <p>
            1.  Inflammatory bio-markers in Diabetes Mellitus - can they predict microvascular complications <br />
            2.  Extraction and analysis of clinically significant features of lower back pain (LBP) from radiography images and IR Thermography images using image processing techniques<br />
            3.  Quantification of sialylations and glycosylation of Immunoglobulin G: Can it predict disease activity and stable remission in Rheumatoid Arthritis and SLE?<br />
            4.  Epidemiological studies and registry development of rheumatic diseases across India.<br />
            5.  Determinants of Predictors for successful withdrawal of DMARDS among patients of Rheumatoid Arthritis in sustained Remission.<br />
            6.  Analysis of association of autoantibodies with different Connective Tissue Disorders, their clinical co-relation and their long-term outcome<br />
            7.  Risk score system in differentiating infection vs Disease flare in Auto-immune diseases<br />
            8.  Clustering of SLE in predicting the outcome and personalizing the treatment.<br />
          </p>
        </div>

        <div>
          <h2 className='text-center text-xl font-bold py-6'>Future projects</h2>
          <div className='card'>
            <Image src={pic3} alt='collaborator' className='h-auto w-full lg:w-[50%] mx-auto shadow-lg p-4 rounded-xl' />
          </div>

          <h2 className='text-center text-xl font-bold py-6'>Future projects</h2>
          <p>
            1.  A Pareek, S Chandrashekara, RT Mehta. Hydroxychloroquine retinopathy—less than meets the eye. Eye. 2021. 35(10). 2897-2897. <br />
            2.  A Patil, K Chanakya, P Shenoy, S Chandrashekara, at. al.    A Prospective Longitudinal Study Evaluating The Influence of Immunosuppressives and Other Factors On COVID-19 in Autoimmune Rheumatic Diseases. 2021. DOI: https://doi.org/10.21203/rs.3.rs-805748/v1<br />
            3.  KP Suresh, SS Patil, BPC Thyagaraju, et. al. Prediction of daily and cumulative cases for COVID-19 infection based on reproductive number (R 0) in Karnataka: a data-driven analytics. Scientific Reports. 2021. 11(1). 1-6. <br />
            4.  Chopra A, Shobha V, Chandrashekara S, et. al. Tofacitinib in the treatment of Indian patients with rheumatoid arthritis: A post hoc analysis of efficacy and safety in Phase 3 and long-term extension studies over 7 years. Int J Rheum Dis. 2020. 23(7). 882-897. <br />
            5.  S Chandrashekara, P Renuka, KR Anupama. Neutrophil-to-lymphocyte ratio in systemic lupus erythematosus is influenced by steroids and may not completely reflect the disease activity. Internet Journal of Rheumatology and Clinical Immunology. 2020. 8(1):OA1 DOI: 10.15305/ijrci/v8i1/319 <br />
            6.  S Chandrashekara, V Shobha, V Rao, et. al. Incidence of infection other than tuberculosis in patients with autoimmune rheumatic diseases treated with bDMARDs: a real-time clinical experience from India. Rheumatology International. 2019. 39(3). 497-507. <br />
            7.  G Arungovind, AS Kamalanathan, V Padmanabhan, et. al. Modifications of human plasma apolipoprotein A1 in systemic autoimmune diseases and myocardial infarction: a comparative study. Journal of Proteins and Proteomics. 2019. 10(9). 235-243. <br />
            8.  S Chandrashekara, SV Dhote, KR Anupama. The Differential Influence of Immunological Process of Autoimmune Disease on Lipid Metabolism: A Study on RA and SLE. Indian Journal of Clinical Biochemistry. 2019. 34(1). 52-59. <br />
            9.  B Sosale, AR Sosale, S Chandrashekara, at. al. Effect of vitamin D supplementation on reduction of cardiometabolic risk in patients with type 2 diabetes mellitus and dyslipidemia. International Journal of Diabetes in Developing Countries. 2018. 38(2). 221-227. <br />
            10. CL Deepak, Panchagnula R, J Swetha, Kori D. Internet Journals of Case Reports. 2016.1(1):CS2.
          </p>
        </div>

      </div>

      <FooterSection />
    </div>
  )
}

export default Rnd