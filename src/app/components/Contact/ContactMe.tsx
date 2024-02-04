"use client"
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon, FaceSmileIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'


type Props = {}

function ContactMe({}: Props) {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration:1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> 
        Contact
      </h3>

      <div className='flex flex-col space-y-10'> 
        <h4 className='text-3xl font-semibold text-center decoration-[#1e95aa]/50 underline'> 
          Here are my details :)
          {/* <span className='decoration-[#1e95aa]/50 underline'> let&apos;s talk! </span> */}
        </h4>
        <h4 className='text-xl font-semibold text-center '> Please try to contact me via email, thanks!</h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#1e95aa] h-7 w-7 animate-pulse'/>
            <p> EdsonLi1999@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#1e95aa] h-7 w-7 animate-pulse'/>
            <p> 0403448823 </p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#1e95aa] h-7 w-7 animate-pulse'/>
            <p>Melbourne VIC</p>
          </div>
        </div>
      
      {/* Using react forms */}
      {/* <form className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='flex space-x-2'>
          <input placeholder='Name' className='contactInput' type="text" /> 
          <input placeholder='Email' className='contactInput' type="text" />
        </div>
        
        <input placeholder='Subject' className='contactInput' type="text" />
        
        <textarea placeholder='Message' className='contactInput'/>
        <button type='submit' 
        className='bg-[#1e95aa] py-5 px-10 rounded-md text-black font-bold text-lg'> Submit </button>
      </form> */}

      </div>
    </motion.div>
  )
}

export default ContactMe