"use client"
import React from 'react'
import { motion} from 'framer-motion'
import ExperienceCard from './ExperienceCardTE'
import ExperienceCardTE from './ExperienceCardTE'
import ExperienceCardShitimes from './ExperienceCardShitimes'


type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration:1.5 }}
      className='flex relative overflow-hidden flex-col text-left md:flex-row h-screen max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> 
        Experience 
      </h3>
      <br></br>
      <div className='h-3/4 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <ExperienceCardTE/>
        <ExperienceCardShitimes/>
      </div>
    
    </motion.div>
  )
}

export default WorkExperience