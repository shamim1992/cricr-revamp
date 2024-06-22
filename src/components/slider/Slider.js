"use client"
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from "next/image";
import slider1 from '../../../public/assets/images/gallery/slide1.jpg'
import slider2 from '../../../public/assets/images/gallery/slide2.jpg'
import slider3 from '../../../public/assets/images/gallery/slide3.jpg'

export default function HeroSlider() {
  const slides = [
    {
      image: slider1,
      // title: "Experience Our Extraordinary Website",
      // description: "Uncover breathtaking features and unparalleled services",
      // buttonText: "Explore Now",
      // buttonLink: "/features"
    },
    {
      image: slider2,
      // title: "Discover Our Exceptional Products",
      // description: "Find the ultimate solution tailored to your unique needs",
      // buttonText: "Browse Collection",
      // buttonLink: "/products"
    },
    {
      image: slider3,
      // title: "Become Part of Our Thriving Community",
      // description: "Connect with visionaries and innovators",
      // buttonText: "Join Today",
      // buttonLink: "/signup"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-[560px] w-full m-auto  relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative '>
        <Image
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className=" bg-center bg-cover object-cover"
         
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center  items-center  p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">{slides[currentIndex].title}</h2>
          <p className="text-xl mb-8 text-white">{slides[currentIndex].description}</p>
          <a 
            href={slides[currentIndex].buttonLink} 
            className={`bg-white text-black py-3 px-8 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300 ${slides[currentIndex].buttonLink? '':'hidden'}`}
          >
            {slides[currentIndex].buttonText}
          </a>
        </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );
}