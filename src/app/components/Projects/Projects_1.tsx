import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './Cards/ProjectCard';
import { projectsData } from '@/data/projectsData';

type Props = { isSmallScreen: boolean };

function Projects_1({ isSmallScreen }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`flex relative overflow-hidden flex-col text-left md:flex-row h-screen max-w-full px-10 justify-evenly mx-auto items-center z-10`}
    >
      {isSmallScreen ? (
        <h3 className="text-2xl uppercase tracking-[20px] text-gray-500 text-center w-full">Projects</h3>
      ) : (
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10">Projects</h3>
      )}
      <br></br>
      {isSmallScreen ? (
        <div className="w-full">
          {projectsData.map((project, index) => (
            <div key={index} className="mb-4">
              <ProjectCard {...project} isSmallScreen={isSmallScreen} />
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[90%] w-screen flex justify-start space-x-5 overflow-x-scroll pt-24 pb-8 snap-x snap-mandatory z-10 scrollbar">
          {projectsData.map((project, index) => (
            <div key={index} className="h-full w-screen flex justify-start space-x-5 z-10">
              <ProjectCard {...project} isSmallScreen={false} />
            </div>
          ))}
        </div>
      )}

      {isSmallScreen && <div className="w-full absolute top-[30%] bg-[#1e95aa]/10 left-0 h-[500px] skew-y-12 z-0" />}
    </motion.div>

    // Old
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1.5 }}
    //   className='flex relative overflow-hidden flex-col text-left md:flex-row h-screen max-w-full px-10 justify-evenly mx-auto items-center z-10'>
    //   <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10'>
    //     Projects
    //   </h3>
    //   <br></br>
    //   <div className='h-[90%] w-screen flex justify-start space-x-5 overflow-x-scroll pt-24 pb-8 snap-x snap-mandatory z-10 scrollbar'>
    //     {projects.map((project, index) => (
    //       // Render the ProjectCard component for each project
    //       <div key={index} className='h-full w-screen flex justify-start space-x-5 z-10'>
    //         <ProjectCard {...project} />
    //       </div>
    //     ))}
    //   </div>

    //   <div className='w-full absolute top-[30%] bg-[#1e95aa]/10 left-0 h-[500px] skew-y-12 z-0' />
    // </motion.div>
  )
}

export default Projects_1