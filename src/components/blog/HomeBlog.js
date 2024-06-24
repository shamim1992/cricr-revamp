"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare",
      excerpt: "Exploring how artificial intelligence is revolutionizing medical diagnoses and treatment plans.",
      imageUrl: "https://picsum.photos/seed/health1/800/600",
      author: "Dr. Jane Smith",
      date: "May 15, 2024",
    },
    {
      id: 2,
      title: "5 Tips for a Healthy Heart",
      excerpt: "Simple lifestyle changes that can significantly improve your cardiovascular health.",
      imageUrl: "https://picsum.photos/seed/health2/800/600",
      author: "John Doe",
      date: "May 10, 2024",
    },
    {
      id: 3,
      title: "Understanding Telemedicine",
      excerpt: "How virtual consultations are changing the landscape of patient care.",
      imageUrl: "https://picsum.photos/seed/health3/800/600",
      author: "Sarah Johnson",
      date: "May 5, 2024",
    },
    {
      id: 4,
      title: "Nutrition Myths Debunked",
      excerpt: "Separating fact from fiction in the world of diet and nutrition.",
      imageUrl: "https://picsum.photos/seed/health4/800/600",
      author: "Mike Brown",
      date: "April 30, 2024",
    },
    {
      id: 5,
      title: "The Importance of Mental Health",
      excerpt: "Why taking care of your mental wellbeing is crucial for overall health.",
      imageUrl: "https://picsum.photos/seed/health5/800/600",
      author: "Dr. Emily Chen",
      date: "April 25, 2024",
    },
  ];

const BlogCard = ({ post }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative h-48 w-full">
      <Image
        src={post.imageUrl}
        alt={post.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
    </div>
  </motion.div>
);

const HomeBlog= () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className=" bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-activeColor">Our Blog</h2>
        
        <div className="relative">
          {/* Desktop and Tablet Scroll Buttons */}
          <div className="hidden md:block">
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 ${
                canScrollLeft ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
              disabled={!canScrollLeft}
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 ${
                canScrollRight ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
              disabled={!canScrollRight}
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>

          {/* Blog Posts Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
            onScroll={checkScroll}
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        {/* "View All" Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;