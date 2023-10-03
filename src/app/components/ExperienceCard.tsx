import React from 'react'
import { motion} from 'framer-motion'
import Image from 'next/image'


type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
    md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y:-100, opacity:0 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://media.licdn.com/dms/image/C4D0BAQESt_exT_o-wQ/company-logo_200_200/0/1655362761377?e=1704326400&v=beta&t=4DZUmY5SrJVRIjc-KTsr2WxfjBV7syshZduM4DV2H9o'
        alt=''
      />
      
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'> Software Developer Intern </h4>
        <p className='font-bold text-2xl mt-1'> Toppan Ecquaria Singapore </p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png'
          />

          <img
            className='h-10 w-10 rounded-full'
            src='https://w7.pngwing.com/pngs/175/494/png-transparent-selenium-computer-icons-test-automation-software-testing-selenium-angle-text-logo-thumbnail.png'
          />
          
          
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className='uppercase py-5 text-gray-300'> Started Work... -Ended... </p>
      
        {/* Make this scrollable container */}
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li> Summary Points Summary Points Summary Points Summary Points </li>
          <li> Summary Points Summary Points Summary Points Summary Points </li>
          <li> Summary Points Summary Points Summary Points Summary Points </li>
          <li> Summary Points Summary Points Summary Points Summary Points </li>
          <li> Summary Points Summary Points Summary Points Summary Points </li>
        </ul>
      </div>

      

    </article>
  )
}

export default ExperienceCard