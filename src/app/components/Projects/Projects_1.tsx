"use client"
import React from 'react'
import { motion } from 'framer-motion'
import ProjectUTimes from './Cards/ProjectsUTimes'
import ProjectsPersonalWebsite from './Cards/ProjectsPersonalWebsite'
import ProjectsWeatherApp from './Cards/ProjectsWeatherApp'
import ProjectsCorporatise from './Cards/ProjectsCorporatise'

type Props = {}

function Projects_1({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative overflow-hidden flex-col text-left md:flex-row h-screen max-w-full px-10 justify-evenly mx-auto items-center z-10'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10'>
        Projects
      </h3>
      <br></br>
      <div className='h-[90%] w-screen flex justify-start space-x-5 overflow-x-scroll pt-24 pb-8 snap-x snap-mandatory z-10 scrollbar'>
        {/*  scrollbar-track-gray-400/20 scrollbar-thumb-[#1e95aa]/50 */}
        <div className='h-full w-screen flex justify-start space-x-5 z-10'>
          <ProjectUTimes />
        </div>
        <div className='h-full w-screen flex justify-start space-x-5 z-10'>
          <ProjectsCorporatise />
        </div>
        <div className='h-full w-screen flex justify-start space-x-5 z-10'>
          <ProjectsWeatherApp />
        </div>
        <div className='h-full w-screen flex justify-start space-x-5 z-10'>
          <ProjectsPersonalWebsite />
        </div>
      </div>



      <div className='w-full absolute top-[30%] bg-[#1e95aa]/10 left-0 h-[500px] skew-y-12 z-0' />
    </motion.div>
  )
}

export default Projects_1