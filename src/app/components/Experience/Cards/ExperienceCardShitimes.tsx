import React from 'react'
import { motion} from 'framer-motion'

type Props = {}

function ExperienceCardShitimes({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
    md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
    transition-opacity duration-200 overflow-y-scroll'>
      <motion.img
        initial={{ y:-100, opacity:0 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
        src='https://seeklogo.com/images/T/the-university-of-melbourne-logo-5D34633C2B-seeklogo.com.png'
        alt=''
      />
      
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-3xl font-light'> Software Developer Intern </h4>
        <p className='text-xl md:text-2xl lg:text-2xl font-bold mt-1'> <a href="https://toppanecquaria.com/" target='_blank'>Toppan Ecquaria Singapore</a></p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png'
          />

          <img
            className='h-10 w-10 rounded-full'
            src='https://w7.pngwing.com/pngs/175/494/png-transparent-selenium-computer-icons-test-automation-software-testing-selenium-angle-text-logo-thumbnail.png'
          />
          

        </div>
        <p className='uppercase py-5 text-gray-300'> Dec 2022 - Feb 2023 </p>
      
        {/* Make this scrollable container */}
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li> Support the development of a polling web app used by the Singapore Government in the recent Presidential Election. </li>
          <li> Duties include manual testing, updating test datasets, writing scripts for user acceptance testing, updating database models, and other various administrative tasks.</li>
          <li> Technology used: Data cleaning (excel, python pandas), scripting (python selenium), database modelling (draw.io, AWS), admin (microsoft office) </li>
          <li> Reference: Wei Yang +65 9029 1959</li>
        </ul>
      </div>

      

    </article>
  )
}

export default ExperienceCardShitimes