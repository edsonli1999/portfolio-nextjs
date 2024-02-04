import React from 'react'
import { motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

function ProjectUTimes({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1e95aa]/80'>
      {/*  */}
      <Link href='https://shitimes.vercel.app/login' target='_blank'>
        <motion.img
          initial={{ y:-100, opacity:0 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className='w-32 h-32 rounded-full xl:w-[160px] xl:h-[160px] object-cover object-center'
          src='utimes-transparent.png'
        />
      </Link>
      
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-3xl font-semibold text-center'> 
          <span className='underline decoration-[#1e95aa]/50'> Project 1:</span> Utility-times 
        </h4>
        <p className='text-lg md:text-2xl lg:text-2xl font-light mt-1 text-center'> <a href="https://shitimes.vercel.app/login" target='_blank'>Link to website</a></p>
        <p className='text-lg md:text-2xl lg:text-2xl font-light mt-1 text-center'> <a href="https://github.com/IkePureza/utime" target='_blank'>Link to github</a></p>
        {/* Technology */}
        {/* <div className='flex space-x-2 my-2 justify-center'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png'
          />

          <img
            className='h-10 w-10 rounded-full'
            src='https://w7.pngwing.com/pngs/175/494/png-transparent-selenium-computer-icons-test-automation-software-testing-selenium-angle-text-logo-thumbnail.png'
          />
        </div> */}
        
        <p className='space-y-4 ml-5 text-md p-5'>
          A utility app for sharehouses, done during my final semester at university with 4 other students. It features authentication with Firebase, NextJS as the front end using TypeScript, and Firebase as the backend. It is deployed on vercel. Other technologies include Tailwind CSS and DaisyUI.
        </p>
      </div>
    </article>
  )
}

export default ProjectUTimes