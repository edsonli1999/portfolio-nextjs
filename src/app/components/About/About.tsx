"use client"
import { motion } from 'framer-motion'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Props = {}

function About({ }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 900;
      setIsMobile(isSmall);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const renderContent = () => {
    if (isMobile) {
      return (
        <div className='flex flex-col relative h-screen text-center max-w-7xl justify-evenly mx-auto items-center md:text-left md:flex-row lg:px-10'>
          <h3 className='lg:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> About </h3>

          <div className='flex flex-row w-full justify-center'>
            <a href="/" className="backButton lg:hidden absolute left-0 pt-0.5 text-gray-500 bg-transparent border-none cursor-pointer focus:outline-none">
              <span className="relative inline-block w-6 h-6">
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </span>
            </a>
          </div>

          <img
            src='/Formal wear house party zoomed.jpg'
            className='-mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:mb-0 md:h-94 xl:w-[400px] xl:h-[400px]'
          />

          <div className='space-y-10 pt-20 px-3 lg:px-10 md:px-10'>
            <h4 className='text-3xl font-semibold'>
              Here is a {" "}
              <span className='underline decoration-[#1e95aa]/50'>little</span>{" "}
              background
            </h4>

            <div className='flex'>
              <div id='page1' className='space-y-10 px-0 pb-10 md:px-10 lg:px-0'>
                <p className='text-base'>
                  My name&apos;s John Doe, and I am a Computer Science graduate based in New York. I graduated from the University of New York in November 2022, and have since then worked as a graduate developer in a small company in New York, as well as an internship in a government company. I have also been working on personal projects, helping out with university-funded projects as an alumni, and working casually as a bartender. I also completed military service for 2 years.
                </p>

                <p className='text-base'>
                  In my personal time, I enjoy rock climbing, it being an on-going hobby of mine for 7 years now. I like to frequently go on runs and keep healthy. I also occasionally enjoy going to the pub, and even worked as a bartender during my university days. Feel free to check out my climbing <Link href="https://www.instagram.com/johndoe.climbs/" className="underline" target="_blank">instagram</Link>!
                </p>

                <p className='text-base'>
                  I believe that in any situation, being presentable and likeable is one of the most important things in life. I would love to showcase my ability to make an impression through an interview, if you&apos;ll have me.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='flex flex-col relative h-screen text-center max-w-7xl justify-evenly mx-auto items-center md:text-left md:flex-row lg:px-10'>
          <h3 className='lg:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> About </h3>

          <div className='flex flex-row w-full justify-center'>
            <a href="/" className="backButton lg:hidden absolute left-0 pt-0.5 text-gray-500 bg-transparent border-none cursor-pointer focus:outline-none">
              <span className="relative inline-block w-6 h-6">
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </span>
            </a>
          </div>

          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src='/Formal wear house party zoomed.jpg'
            className='-mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:mb-0 md:h-94 xl:w-[400px] xl:h-[400px]'
          />

          <div className='space-y-10 pt-20 px-3 lg:px-10 md:px-10'>
            <h4 className='text-3xl font-semibold'>
              Here is a {" "}
              <span className='underline decoration-[#1e95aa]/50'>little</span>{" "}
              background
            </h4>

            <div className='flex'>
              <div id='page1' className='space-y-10 px-0 pb-10 md:px-10 lg:px-0'>
                <p className='text-base'>
                  My name&apos;s John Doe, and I am a Computer Science graduate based in New York. I graduated from the University of New York in November 2022, and have since then worked as a graduate developer in a small company in New York, as well as an internship in a government company. I have also been working on personal projects, helping out with university-funded projects as an alumni, and working casually as a bartender. I also completed military service for 2 years.
                </p>

                <p className='text-base'>
                  In my personal time, I enjoy rock climbing, it being an on-going hobby of mine for 7 years now. I like to frequently go on runs and keep healthy. I also occasionally enjoy going to the pub, and even worked as a bartender during my university days. Feel free to check out my climbing <Link href="https://www.instagram.com/johndoe.climbs/" className="underline" target="_blank">instagram</Link>!
                </p>

                <p className='text-base'>
                  I believe that in any situation, being presentable and likeable is one of the most important things in life. I would love to showcase my ability to make an impression through an interview, if you&apos;ll have me.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
  };

  return renderContent();
}

export default About;