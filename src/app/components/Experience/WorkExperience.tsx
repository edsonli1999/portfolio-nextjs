"use client"
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './Cards/ExperienceCardTE'
import ExperienceCardTE from './Cards/ExperienceCardTE'
import ExperienceCardShitimes from './Cards/ExperienceCardShitimes'
import ExperienceCardUSWS from './Cards/ExperienceCardUSWS'


type Props = {}

function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative overflow-hidden flex-col text-left md:flex-row h-screen max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <br></br>
      <div className='h-3/4 w-screen flex justify-start space-x-5 overflow-x-scroll py-12 p-10 snap-x snap-mandatory z-10 scrollbar'>
        <div className='h-full w-screen flex justify-start space-x-5 z-10'>
          <ExperienceCardUSWS />
        </div>
        <div className='h-full w-screen flex justify-start space-x-5 z-10'>
          <ExperienceCardTE />
        </div>
      </div>

      <div className='w-full absolute top-[30%] bg-[#1e95aa]/10 left-0 h-[500px] -skew-y-12 z-0' />
    </motion.div>
  )
}

export default WorkExperience