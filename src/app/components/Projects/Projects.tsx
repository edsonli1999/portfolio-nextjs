import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Remove this if not used
import ProjectCard from './Cards/ProjectCard';
import { projectsData } from '@/data/projectsData';
import { useRouter } from 'next/navigation';

// Defining the props interface for the WorkExperience component
type Props = { isSmallScreen: boolean };

// Function component for Projects Experience
function Projects({ isSmallScreen }: Props) {
  const [expandedCard, setExpandedCard] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  const toggleCardExpansion = (name: string) => {
    setExpandedCard((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='lg:flex lg:relative lg:overflow-hidden lg:text-left lg:flex-row lg:h-screen lg:max-w-full lg:px-10 lg:justify-evenly lg:mx-auto lg:items-center lg:z-10'
    >
      {/* Conditional rendering of the 'Projects' header based on screen size */}
      {isSmallScreen ? (
        <div className='flex flex-col items-center w-full'>
          <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl z-10 text-center w-full'>
            Projects
          </h3>
        </div>
      ) : (
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10'>
          Projects
        </h3>
      )}

      {/* Conditionally rendering the back button based on screen size*/}
      {isSmallScreen && (
        <div className="flex justify-center mt-4">
          <button className="heroButton" onClick={() => router.push('/')}>
            Back to Home
          </button>
        </div>
      )}

      <br></br>

      {/* Conditional rendering of Project Cards */}
      {isSmallScreen ? (
        <div className="w-full">
          {projectsData.map((project, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleCardExpansion(project.name)}
                className="heroButton w-full text-center border-b-2 border-gray-500"
              >
                {expandedCard[project.name] ? 'Hide' : 'Show'} {project.name}
              </button>
              {expandedCard[project.name] && (
                <ProjectCard {...project} isSmallScreen={isSmallScreen} />
              )}
            </div>
          ))}
          <button className="heroButton mt-4" onClick={scrollToTop}>
            Back to Top
          </button>
        </div>
      ) : (
        <>
          <div className="h-[90%] w-screen flex justify-start space-x-5 overflow-x-scroll pt-24 pb-8 snap-x snap-mandatory z-10 scrollbar">
            {projectsData.map((project, index) => (
              <div key={index} className="h-full w-screen flex justify-start space-x-5 z-10">
                <ProjectCard
                  {...project}
                  isSmallScreen={false}
                // Uncomment this line once you have modified your `ProjectCard` component to take in the `toggleCardExpansion` prop
                // toggleCardExpansion={toggleCardExpansion}
                />
              </div>
            ))}
          </div>
          {/* Background to be rendered on larger screens */}
          <div className='w-full absolute top-[30%] bg-[#1e95aa]/10 left-0 h-[500px] skew-y-12 z-0' />
        </>
      )}

    </motion.div>

  );
}

export default Projects