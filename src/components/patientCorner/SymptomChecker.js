// import React from 'react'

// const SymptomChecker = () => {
//   return (
//     <div>SymptomChecker</div>
//   )
// }

// export default SymptomChecker


'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SymptomChecker = () => {
  const router = useRouter();
  const [answers, setAnswers] = useState({
    q1: '',
    q1a: '',
    q1b: '',
    q1c: '',
    q2: '',
    q2a: '',
    q3: '',
    q3a: '',
    q3b: '',
    q4a: [],
    q4b: [],
    q4c: [],
    q4d: '',
    q4e: [],
    q5: '',
    q5a: '',
    q5b: [],
    q6: '',
    q6a: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setAnswers(prev => ({
        ...prev,
        [name]: prev[name].includes(value) 
          ? prev[name].filter(item => item !== value)
          : [...prev[name], value]
      }));
    } else {
      setAnswers(prev => ({ ...prev, [name]: value }));
    }
  };

  const calculateScore = () => {
    let score = 0;
    // Add your scoring logic here based on the answers
    // This is a simplified example
    if (answers.q1 === 'yes') score += 1;
    if (answers.q2 === 'yes') score += 1;
    if (answers.q3 === 'yes') score += 1;
    score += answers.q4a.length;
    score += answers.q4b.length;
    score += answers.q4c.length;
    if (answers.q4d === 'yes') score += 1;
    score += answers.q4e.length;
    if (answers.q5 === 'yes') score += 1;
    if (answers.q5a === 'yes') score += 1;
    score += answers.q5b.length;
    if (answers.q6 === 'yes') score += 1;
    if (answers.q6a === '>8') score += 1;
    return score;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = calculateScore();
    if (score >= 6) {
      alert("You require consultation with a rheumatologist.");
    } else if (score >= 3) {
      alert("You may require consultation with a rheumatologist or assessment.");
    } else {
      alert("Consult your family physician for further assessment.");
    }
    // You can also use router.push to navigate to a results page
    // router.push(`/results?score=${score}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Rheumatology Questionnaire</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">1) Do you feel persistent pain in one or more of your joints?</span>
          </label>
          <div className="flex space-x-4">
            <label className="label cursor-pointer">
              <input type="radio" name="q1" value="no" onChange={handleChange} className="radio" />
              <span className="label-text ml-2">No</span>
            </label>
            <label className="label cursor-pointer">
              <input type="radio" name="q1" value="yes" onChange={handleChange} className="radio" />
              <span className="label-text ml-2">Yes</span>
            </label>
          </div>
        </div>

        {/* Add more questions here following the same pattern */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">6) Do you have one or frequent episodes of sudden onset of severe pain in big toe?</span>
          </label>
          <div className="flex space-x-4">
            <label className="label cursor-pointer">
              <input type="radio" name="q6" value="no" onChange={handleChange} className="radio" />
              <span className="label-text ml-2">No</span>
            </label>
            <label className="label cursor-pointer">
              <input type="radio" name="q6" value="yes" onChange={handleChange} className="radio" />
              <span className="label-text ml-2">Yes</span>
            </label>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">a) Whether the uric acid value is</span>
          </label>
          <div className="flex space-x-4">
            <label className="label cursor-pointer">
              <input type="radio" name="q6a" value=">8" onChange={handleChange} className="radio" />
              <span className="label-text ml-2">&gt;8</span>
            </label>
            <label className="label cursor-pointer">
              <input type="radio" name="q6a" value="<8" onChange={handleChange} className="radio" />
              <span className="label-text ml-2">&lt;8</span>
            </label>
          </div>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>

      <div className="mt-8">
        <h5 className="font-bold">Disclaimer:</h5>
        <ul className="list-disc pl-5">
          <li>This questionnaire is intended for informational purposes only and does not substitute medical advice or consultation.</li>
          <li>Always consult your physician or other qualified health provider with any questions you may have regarding a medical condition.</li>
        </ul>
      </div>
    </div>
  );
};

export default SymptomChecker;