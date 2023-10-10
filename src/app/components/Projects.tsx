"use client"
import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  const projects = [1];
  return (
    <motion.div
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration:1.5 }} 
      className='h-screen relative flex overflow-hidden text-center md:flex-row  max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Click
      </h3> */}

      <div className='h-5/6 relative w-full flex overflow-x-scroll snap-x snap mandatory z-20 overflow-y-scroll'>
        {/*  */}
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className='flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-28 md:p-32 w-screen'>
            {/* flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-28 md:p-32 w-screen */}
            <motion.img
              className='w-[250px] h-[250px] rounded-full object-cover object-center'
              // xl:w-[150px] xl:h-[150px]
              initial={{
                y:-300,
                opacity:0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true }}
              src="utimes-transparent.png"
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-3xl font-semibold text-center'>
                <span className='underline decoration-[#1e95aa]/50'>Project {i + 1}:</span> Utility-times
              </h4>

              <p className='text-base text-md text-center'>
                A utility app for sharehouses, done during my final semester at university with 4 other students. It features authentication with Firebase, NextJS as the front end using TypeScript, and Firebase as the backend. It is deployed on vercel. Other technologies include Tailwind CSS and DaisyUI.
              </p>

              <p className='text-md text-center'>
                Link to website:
              </p>

              <p className='text-md text-center'>
                Link to github:
              </p>
            </div>

          </div>
        ))}
      </div>
    
    <div className='w-full absolute top-[30%] bg-[#1e95aa]/10 left-0 h-[500px] -skew-y-12' />
  </motion.div>
  )
}

export default Projects