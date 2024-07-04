// pages/contact.js
'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-100">
      <Head>
        <title>Contact Us - HealthCare Hospital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Department</span>
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a department</option>
                  <option value="general">General Inquiries</option>
                  <option value="appointments">Appointments</option>
                  <option value="billing">Billing</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-24"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col justify-around">
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Information</h2>
              <div className="space-y-2">
                <p><strong>Address:</strong> No. 414/65, 1st Block, 20th Main, West of Chord Road, Rajajinagar, Bangalore-560010</p>
                <p><strong>Phone:</strong> 08042516699/ 9632533122/ 7618775276</p>
                <p><strong>Email:</strong> info@chanrericr.com</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Operating Hours</h3>
              <ul className="list-disc list-inside">
                <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
                <li>Saturday: 9:00 AM - 5:00 PM</li>
                <li>Sunday: Closed (Emergency services available)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5718505928735!2d77.54771567472129!3d12.999213787318666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dbc8be6ee1f%3A0x99d77f3579e9ed2e!2sChanRe%20Rheumatology%20And%20Immunology%20Center%20And%20Research!5e0!3m2!1sen!2sin!4v1720084548401!5m2!1sen!2sin" width="100%"
              height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </main>

     
    </div>
  );
}