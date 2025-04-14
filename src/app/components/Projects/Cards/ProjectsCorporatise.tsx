import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

function ProjectsCorporatise({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-y-scroll scrollbar'>
      {/* Icon */}
      <Link href='https://example-project2.vercel.app/' target='_blank'>
        <motion.img
          initial={{ y:-100, opacity:0 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className='w-32 h-32 rounded-full xl:w-[160px] xl:h-[160px] object-cover object-center'
          src='corporatise.png'
        />
      </Link>
      
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-3xl font-semibold text-center'> 
          <span className='underline decoration-[#1e95aa]/50'> Corporate Translator </span>  
        </h4>
        <p className='text-lg md:text-2xl lg:text-2xl font-light mt-1 text-center'> <a href="https://example-project2.vercel.app/" target='_blank'>Link to website</a></p>
        <p className='text-lg md:text-2xl lg:text-2xl font-light mt-1 text-center'> <a href="https://github.com/johndoe/corporate-translator" target='_blank'>Link to github</a></p>
        
        <p className='space-y-4 ml-5 text-md p-5'>
          Translates everyday-informal phrases into phrases appropriate for a corporate/office setting, using an Artificial Intelligence API (Google Gemini). The front-end is developed using Python Flask and the app is hosted on Vercel. Other features include compatability with smaller screens and dark mode.
        </p>
      </div>
    </article>
  )
}

export default ProjectsCorporatise