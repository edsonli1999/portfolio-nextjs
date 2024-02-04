"use client"
import { MotionConfig , motion} from 'framer-motion'
import React from 'react'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration:1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> About </h3>
    
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1,  x: 0}}
        viewport={{ once: true}}
        src='/Formal wear house party zoomed.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-94 xl:w-[400px] xl:h-[400px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          Here is a {" "} 
          <span className='underline decoration-[#1e95aa]/50'>little</span>{" "} 
          background
        </h4>
        
        <div className='flex'> 
          {/* <MdChevronLeft size={300}/> */}
          <div id='page1' className='space-y-10 px-0 md:px-10'> 
            <p className='text-base'>
              My name&apos;s Edson, and I am a Computer Science graduate based in Melbourne. I graduated from the University of Melbourne in November 2022, and have since then worked as a graduate developer in a small company in Melbourne, as well as an internship in a government company based in Singapore. I have also been working on personal projects, helping out with university-funded projects as an alumni, and working casually as a bartender.  Oh, and I was also a sergeant in the Singapore Army for 2 years, as part of their conscripted national service.
            </p>

            <p className='text-base'> 
              I have been doing bouldering as a personal hobby for 6 years now, and enjoy grabbing a cheeky pint with my mates at the pub. I have also been exploring Scotch Whiskey a lot recently, given my exposure to it whilst bartending at a cocktail bar, The Blacksmith, based in Richmond.
            </p>

            {/* <p className='text-base'> 
              My favourite languages currently are Python and Java, although honestly every language has its pros and cons.
            </p> */}
          </div>
          {/* <MdChevronRight size={300}/> */}
        </div>
      </div>
        

    </motion.div>
  )
}

export default About