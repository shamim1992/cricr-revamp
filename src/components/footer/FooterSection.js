"use client"
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  const socialIcons = [
    { Icon: FaFacebookF, href: '#', color: 'bg-blue-600' },
    { Icon: FaTwitter, href: '#', color: 'bg-sky-400' },
    { Icon: FaInstagram, href: '#', color: 'bg-pink-500' },
    { Icon: FaLinkedinIn, href: '#', color: 'bg-blue-700' },
  ];

  return (
    <footer className="relative bg-gray-900  pt-20 pb-10 px-4">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-activeColor"></path>
        </svg>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Company Name</h3>
            <p className="mb-4">Providing innovative solutions since 2023</p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`${color} p-2 rounded-full hover:opacity-80 transition-opacity`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Innovation Street</li>
              <li>Tech City, TC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@company.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full bg-gray-800 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn  w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>Copyright &copy; 2024 ChanreRicr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;