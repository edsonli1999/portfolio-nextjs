import React from 'react'
import { motion} from 'framer-motion'
import Link from 'next/link'

type Props = {}

function ProjectsPersonalWebsite({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-y-scroll scrollbar '>
      {/* scrollbar-track-gray-400/20 scrollbar-thumb-[#1e95aa]/50 */}
      <Link href='#hero'>
        <motion.img
          initial={{ y:-100, opacity:0 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
          src='Professional_headshot.jpg'
        />
      </Link>
      
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-3xl font-semibold text-center'> 
          <span className='underline decoration-[#1e95aa]/50'> Personal portfolio website </span>  
        </h4>
        <p className='text-lg md:text-2xl lg:text-2xl font-light mt-1 text-center'> <a href="#hero">Link to website</a></p>
        <p className='text-lg md:text-2xl lg:text-2xl font-light mt-1 text-center'> <a href="https://github.com/edsonli1999/portfolio-nextjs" target='_blank'>Link to github</a></p>
        
        <p className='space-y-4 ml-5 text-md p-5'>
          A personal portfolio website, which showcases my experience and skills related to technology. It also serves to show more about myself, including hobbies, interests, and lifestyle. Current technologies include NextJS, TypeScript, and Framer Motion. It is deployed on Vercel, with more technologies to be used in the future. For more details check out my github &#128578;.
        </p>
      </div>
    </article>
  )
}

export default ProjectsPersonalWebsite